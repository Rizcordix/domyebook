# DoMyEbook — Website Audit & Optimization Report

_Audited: 2026-07-14 · Next.js 15.3 (App Router) · React 19_

This report documents why the site feels **slow to load, laggy while scrolling, and visually gappy**, and grades each issue by impact. The companion file [OPTIMIZATION-PLAN.md](./OPTIMIZATION-PLAN.md) turns these into an ordered work plan with time estimates.

---

## TL;DR — the 5 things hurting you most

| # | Problem | Impact | Effort |
|---|---------|--------|--------|
| 1 | **119 MB of images** served as raw `<img>` (no optimization, no lazy-load). One file is **13 MB**; 29 are over 500 KB. | 🔴 Critical | High |
| 2 | **Two full-height hero sections stacked** at the top of the home page (`Banner` + `HeroSection`), plus a `min-height: 900px` banner. This is the "extra gaps / white space." | 🔴 Critical | Low |
| 3 | **33 MB unused hero video** (`herosection.mp4`) shipped in `/public`; the active one (`herosection2.mp4`, 2.9 MB) uses `preload="auto"`. | 🔴 Critical | Low |
| 4 | **3,834 lines of CSS live inside `<style>` tags** in 19 components — injected into the DOM at runtime, uncached, render-blocking, duplicated. | 🟠 High | Medium |
| 5 | **Scroll jank**: `backdrop-filter: blur()` during scroll, a `scrub: true` scroll-linked animation, and one GSAP ScrollTrigger created per `.mil-up` element. | 🟠 High | Medium |

**Rough expected result after the plan:** page weight on the home route drops from ~**tens of MB** to **< 2–3 MB**, Largest Contentful Paint and Cumulative Layout Shift improve dramatically, and scrolling becomes smooth on mid-range devices.

---

## 1. Images — the single biggest problem 🔴

- **`public/img` is 119 MB across 285 files**; total `public/` is **133 MB**.
- Largest offenders:
  - `public/img/bookcovers/Proudly.jpg` — **13 MB**
  - `public/img/bookcovers/1.png` — 5.1 MB
  - `public/img/buildings.png` — 3.6 MB
  - `public/img/home-2/bg2.jpg` — 2.8 MB, `Franctic.png` — 2.8 MB, several more at 2–2.5 MB
  - **29 images exceed 500 KB.**
- **93 raw `<img>` tags** are used across the app (44 files). Only 25 files use `next/image`.
  - Raw `<img>` means **no automatic resizing, no WebP/AVIF conversion, no responsive `srcset`, and no lazy-loading** — the browser downloads full-resolution multi-MB files even for a 50×50 avatar.
- Most raw `<img>` tags also have **no `width`/`height`**, which causes **layout shift (CLS)** — content jumps as images load, which reads as "janky."
- `next.config.mjs` uses the **deprecated `images.domains`** key and configures no `formats`/`deviceSizes`, so even the `next/image` usages aren't tuned.

**Why it matters:** This is the primary cause of slow loading. Decoding many large bitmaps also competes with the main thread and contributes to scroll stutter.

---

## 2. Layout & spacing — the "extra gaps and white space" 🔴 / 🟠

- **The home page renders two hero sections back-to-back** ([app/page.js](../app/page.js#L23-L27)):
  - `<Banner />` uses class `.mil-banner`, which in [style.css](../public/css/style.css#L1326-L1335) is `height: 100vh; min-height: 900px;`.
  - `<HeroSection />` **also uses `.mil-banner`**, overridden inline to `minHeight: 70vh`.
  - Result: **~900px + ~70vh of stacked hero** before real content — a giant empty-feeling top region.
- **Very large section paddings**: `.mil-p-160-160` = 160px top **and** 160px bottom; `.mil-p-160-0`, `.mil-p-0-160`, etc. are used 30+ times. On tall sections this stacks into big vertical gaps.
- **`.mil-up` scroll-reveal elements start at `opacity: 0`** (set by GSAP in [utility/index.js](../utility/index.js#L13-L35)). If the animation hasn't triggered (below the fold, slow JS, or a JS error), the element is **invisible but still occupies space** → looks like a blank gap. Any runtime error in the GSAP setup leaves whole sections blank.

---

## 3. Video 🔴

- `public/img/home-2/herosection.mp4` is **33 MB** and does not appear to be used by the current hero (which references `herosection2.mp4`, 2.9 MB). Dead weight in the bundle output / deploy.
- The active hero `<video>` in [HeroSection.js](../components/HeroSection.js#L77-L97) sets both `preload="auto"` **and** `loading="lazy"` (contradictory), and is not actually autoplaying — so it eagerly fetches ~3 MB the user may never watch.

---

## 4. Inline CSS in `<style>` tags 🟠

- **19 components inject a `<style>` block into the DOM**, totaling **~3,834 lines of CSS**. Worst cases:
  - `components/services2.js` — **~606 lines** of inline CSS
  - `components/Testimonials.js` — ~365 lines
  - `components/HowitWorks.js` — ~315 lines
  - `components/AboutUS.js` — ~159, `Featurespage.js` — ~154
- Problems this causes:
  - The CSS **cannot be cached** by the browser separately (it re-ships inside the HTML/JS payload on every page).
  - It is **parsed and injected at runtime**, and for client components it re-runs on the component lifecycle rather than being a static stylesheet.
  - Large duplicated blocks bloat the JS bundles and the server-rendered HTML.
- This is exactly the "CSS is heavily in-file and makes the site slow" the report was asked about — it's real, though images/heroes dominate the raw numbers.
- **16 of these are `<style jsx>` (styled-jsx), which only works in `"use client"` components in the App Router** — so the styling is the reason several otherwise-static components (`services2`, `genericservices`, `Testimonials`, …) ship and hydrate JS. The full file-by-file migration to CSS Modules is planned as **Phase 3** in the plan.

---

## 5. Inline `style={{ }}` objects 🟠

- Component render functions build **new inline style objects on every render**:
  - `components/service_main.js` — 62 inline style objects
  - `components/ContactPage.js` — 48
  - `components/HeroSection.js` — 44 (see [HeroSection.js](../components/HeroSection.js#L52-L63)), plus 5 near-identical avatar `<img>` blocks duplicated for mobile and desktop
  - `components/Pricing.js` — 16, `AboutUS.js` — 19, `PromoBanner.js` — 12
- Each render allocates fresh objects (defeats memoization) and produces very large, hard-to-maintain DOM. Not catastrophic for perf alone, but it compounds bundle size and re-render cost.

---

## 6. Scroll performance / jank 🟠

- **`backdrop-filter: blur()`** is used in the hero play buttons and multiple carousels (`HeroSection`, `BookCoverCarousel`, `InteriorCarousel`, `Illustartioncarousel`, `PromoBanner`, `services2`, `VideoPromoSection`, `genericservices`). Blur filters are **expensive to recomposite on every scroll frame** and are a classic cause of laggy scrolling.
- **`.mil-scale-img` uses `scrub: true`** ([utility/index.js](../utility/index.js#L52-L57)) — a scroll-linked animation that recalculates on **every scroll event**, forcing layout/paint work during scroll.
- **One GSAP `ScrollTrigger` is created per `.mil-up` element**. With many reveal elements per page this is a lot of trigger instances and `scroll` bookkeeping. They also lack `will-change`/GPU hints, and animate `y`, `scale`, and `opacity` together.
- `ScrollSmoother` is currently **commented out** (good — it's the worst offender), but the leftover `smooth-wrapper`/`smooth-content` structure remains.

---

## 7. Fonts & global CSS 🟡

- `app/globals.css` starts with `@import url("https://fonts.googleapis.com/css2?family=Questrial")` — a **render-blocking network request** — even though the same font is already loaded properly through `next/font` (`Questrial`) in [layout.js](../app/layout.js#L14-L21). This is a redundant, blocking font fetch.
- Multiple plugin stylesheets are imported globally (`bootstrap-grid.css` 5,120 lines, `font-awesome.min.css` 5,678 lines, `magnific-popup.css`, `swiper.min.css`) regardless of whether a page uses them.

---

## 8. Third-party scripts 🟡

- Tawk.to chat and Trustpilot are injected in [layout.js](../app/layout.js#L43-L63) with `strategy="afterInteractive"`. That's the right strategy, but both add main-thread and network cost on every page. Tawk.to in particular is heavy; consider `worker`/lazy or deferring until idle/interaction.

---

## 9. Other notes 🟡

- `next.config.mjs` is minimal — no `compress`, no image `formats`, no `productionBrowserSourceMaps: false` guard, deprecated `images.domains`.
- Heavy dependencies present: `gsap`, `swiper`, `react-slick` **and** `slick-carousel`, `react-player`, `isotope-layout`, `styled-components`, `better-sqlite3`, `mssql`. Multiple carousel libraries (Swiper + Slick) likely overlap — consolidating removes bundle weight.
- `styled-components` is a dependency but most styling is done via inline `<style>`/`style={{}}` — inconsistent styling strategy across the codebase.

---

## Severity legend

- 🔴 **Critical** — directly causes the reported slowness/gaps; fix first.
- 🟠 **High** — significant, compounding cost.
- 🟡 **Medium** — worth doing, lower urgency.

See [OPTIMIZATION-PLAN.md](./OPTIMIZATION-PLAN.md) for the phased fix plan and time estimates.
