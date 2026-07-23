# DoMyEbook — Optimization Plan

_Companion to [OPTIMIZATION-REPORT.md](./OPTIMIZATION-REPORT.md). Ordered by impact-per-effort. Do the phases top-to-bottom; each phase is shippable on its own._

**Total estimated effort: ~8–11 working days** (1 developer). Phases 0–2 (~3.5–4.5 days) fix ~80% of the perceived slowness and the visual gaps. **Phase 3 (in-file CSS → CSS Modules) is the single biggest structural change at ~3–4 days** — see its dedicated worklist below.

---

## Phase 0 — Quick wins (½ day) 🔴 highest ROI

Ship these first; they need almost no risk and deliver the biggest felt improvement.

| Task | File(s) | Est. |
|------|---------|------|
| **Remove the duplicate hero.** Decide between `Banner` and `HeroSection` and delete the other from the home page. This kills the biggest "gap/white space." | [app/page.js](../app/page.js#L23-L27) | 30 min |
| **Fix the banner height.** Change `.mil-banner` from `min-height: 900px; height: 100vh` to something content-driven (e.g. `min-height: min(80vh, 720px)`). | [style.css:1326](../public/css/style.css#L1326-L1335) | 30 min |
| **Delete the 33 MB unused video** `herosection.mp4`, and set the active hero video `preload="none"` (remove the contradictory `preload="auto"` + `loading="lazy"`). | `public/img/home-2/`, [HeroSection.js:77-97](../components/HeroSection.js#L77-L97) | 20 min |
| **Remove the render-blocking font `@import`** from globals.css (font already loads via `next/font`). | [globals.css:1](../app/globals.css#L1) | 5 min |
| **Reduce oversized section paddings** on the home route (`mil-p-160-160` → 80/80, etc.) to tighten vertical gaps. | [style.css:744-806](../public/css/style.css#L744-L806) | 30 min |

**Outcome:** Home page stops feeling empty at the top, ~36 MB of video/font weight removed, immediate visual improvement.

---

## Phase 1 — Image optimization (2–3 days) 🔴 biggest load win

This is the heaviest lift but the biggest payoff. Do it in two passes.

### 1a. Compress the source assets (½–1 day)
- Run every image in `public/img` through compression / resizing. Targets:
  - No hero/background image over ~300 KB; no thumbnail over ~80 KB.
  - Convert large PNG photos to WebP/AVIF; keep PNG only where transparency is needed.
  - The 13 MB `Proudly.jpg` and the 29 images >500 KB are the priority.
- Tools: `sharp` CLI, Squoosh, or an `npm` script using `sharp` to batch-resize. Keep originals in a separate `/design-assets` folder outside `public`.
- **Expected:** `public/img` from **119 MB → ~10–15 MB**.

### 1b. Migrate raw `<img>` → `next/image` (1–2 days)
- Replace the **93 raw `<img>` tags** with `next/image`, adding explicit `width`/`height` (or `fill` + a sized container) to **eliminate layout shift**.
- Prioritize by traffic: home-page components first (`HeroSection`, `Banner`, `services2`, `Portfolio`/`BookCoverCarousel`, `Testimonials`, `IconBoxes`), then service pages.
- Mark only the LCP/above-the-fold image with `priority`; everything else lazy-loads by default.
- Update `next.config.mjs`:
  ```js
  const nextConfig = {
    images: {
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [{ protocol: 'https', hostname: 'www.domyebook.com' }],
    },
    compress: true,
  };
  ```
  (replaces the deprecated `images.domains`).

**Outcome:** Home route payload drops from tens of MB to low single-digit MB; LCP and CLS improve dramatically. This is the single most impactful phase.

---

## Phase 2 — Scroll smoothness (1 day) 🟠

| Task | File(s) | Est. |
|------|---------|------|
| **Remove/soften `backdrop-filter: blur()`** on elements visible during scroll (hero buttons, carousels). Replace with a semi-opaque background where possible. | HeroSection, BookCoverCarousel, InteriorCarousel, Illustartioncarousel, PromoBanner, services2, VideoPromoSection | 2–3 h |
| **Batch the `.mil-up` reveal animations** with `ScrollTrigger.batch()` instead of one trigger per element, and add `will-change: transform, opacity` / GPU hints. | [utility/index.js:13-35](../utility/index.js#L13-L35) | 2 h |
| **Reconsider the `scrub: true` scale animation** (`.mil-scale-img`) — either drop it or throttle it; scrubbed animations run every scroll frame. | [utility/index.js:44-59](../utility/index.js#L44-L59) | 1 h |
| **Add a CSS fallback** so `.mil-up` elements are visible if JS/GSAP fails (e.g. `.no-js .mil-up { opacity: 1 }` or a mount guard) — prevents blank "gaps." | globals.css + utility | 1 h |

**Outcome:** Smooth scrolling on mid-range laptops and phones; no blank sections if a script errors.

---

## Phase 3 — Migrate in-file CSS → CSS Modules (3–4 days) 🟠 **big structural change**

**The problem (why this is worth doing):** ~**3,834 lines of CSS live inside JSX** across **20 files** — 16 as `<style jsx>` (styled-jsx) and 2 as plain global `<style>`. This CSS:
- ships **inside the JS bundle** instead of as a separately-cacheable stylesheet;
- is **parsed and injected into the DOM at runtime** on every mount (main-thread cost + styled-jsx runtime);
- **forces components to be `"use client"`** — styled-jsx only works in client components in the App Router, so this styling is the reason several otherwise-static components ship and hydrate JS.

**The target: CSS Modules** (`Component.module.css`). They are statically extracted at build time, browser-cached, automatically scoped (so **no visual regression**), have **zero runtime**, and work in **server *and* client** components — which lets us drop several `"use client"` directives.

### Migration method (repeat per file)
1. Create `ComponentName.module.css` next to the component.
2. Cut the CSS out of the `<style jsx>{`…`}</style>` block into that file. Keep the same selectors.
3. Import it: `import styles from './ComponentName.module.css'`.
4. Change JSX class references: `className="card"` → `className={styles.card}` (or keep global class names by wrapping in `:global(...)` where the CSS targets shared/plugin classes like `.mil-*` or `.swiper-*`).
5. Delete the `<style jsx>` block.
6. If the component no longer uses hooks/state/handlers, **remove `"use client"`** so it renders on the server.
7. Visually diff the component in the browser before/after.

### ⚠️ Reusability & collision safety — READ BEFORE MIGRATING

The in-file CSS **redefines framework class names** that also exist globally — audited counts: `.container` ×5, `.row` ×3, `.btn` ×6, plus `.mil-*` and `.swiper` overrides. Example in `services2.js`:

```css
.container { max-width: 1200px; padding: 0 20px; }   /* collides with Bootstrap .container */
.row       { display: flex; gap: 60px; }             /* collides with Bootstrap .row */
.col-lg-6  { flex: 1; }                               /* collides with Bootstrap .col-lg-6 */
```

Today `styled-jsx` scopes these so they only affect that component. **Moving them to a *global* `.css` file would override Bootstrap site-wide — the "ruins the whole website" failure mode. Do NOT do that.** CSS Modules preserve the same scoping (each class becomes a unique hashed name), so isolation is kept — *if* these rules are followed:

| Pattern in the block | Migration rule |
|---|---|
| Redefined framework class (`.container`, `.row`, `.col-*`, `.btn`) | **Keep the real global class in the JSX and ADD the module class** — `className={\`container ${styles.gridOverride}\`}`. Never let `styles.x` *replace* the framework class, or the element loses Bootstrap's grid/button styles. |
| Selector targeting a shared global class (`.mil-up`, `.mil-features`, `.swiper*`, `.slick*`) | Wrap the selector in **`:global(...)`** inside the module so it still matches globally-rendered elements. |
| Descendant into child elements (`.nav-button svg`, `.quote-icon path`) | Safe as-is — element part is global, nested under the scoped class. |
| Bare top-level element selector (`h2 {}`, `p {}`) | Audited: none currently exist at top level. If one appears, `:global`-guard or nest it under a class — a bare element selector in a Module would leak globally. |

**Safety net (non-negotiable process):** one file per commit · visual before/after diff in the browser before committing · migrate `services2.js` **first** as the reference (it has the worst-case Bootstrap collision) · because each file is self-scoped, any miss is contained to that one component and is reverted with a single `git revert`.

> Other watch-outs: keyframes and media queries move verbatim. Global `<style>` blocks (PopupCard, HeroSection) become a Module unless a rule is genuinely global, in which case it goes to `globals.css` intentionally.

### File-by-file worklist (ordered largest-first)

| # | File | ~CSS lines | Notes | Est. |
|---|------|-----------:|-------|------|
| 1 | `components/services2.js` | 606 | Largest; home page. Template for the rest. | 4 h |
| 2 | `components/genericservices.js` | 538 | Shared by ~15 service pages — high reuse payoff. | 3 h |
| 3 | `components/Testimonials.js` | 365 | Home page. | 2.5 h |
| 4 | `components/HowitWorks.js` | 315 | | 2 h |
| 5 | `components/PopupCard.js` | 280 | Plain global `<style>`; already client. | 1.5 h |
| 6 | `components/VideoPromoSection.js` | 277 | | 2 h |
| 7 | `app/testimonials/page.js` | 233 | Page-level. | 1.5 h |
| 8 | `components/AboutUS.js` | 159 | | 1.5 h |
| 9 | `components/Featurespage.js` | 154 | | 1.5 h |
| 10 | `components/UsesofAI.js` | 141 | | 1 h |
| 11 | `components/Refund.js` | 141 | Legal pages 11–14 share near-identical CSS → **make one shared `legal.module.css`**. | 1 h |
| 12 | `components/TermsofService.js` | 140 | reuse legal module | 0.5 h |
| 13 | `components/PrivacyPolicy.js` | 140 | reuse legal module | 0.5 h |
| 14 | `components/Plagiarism.js` | 140 | reuse legal module | 0.5 h |
| 15 | `components/AudioPortfolioSection.js` | 114 | | 1 h |
| 16 | `layouts/Header.js` | 63 | | 1 h |
| 17 | `components/PromoBanner.js` | 13 | small | 0.25 h |
| 18 | `components/ContactPage.js` | 13 | small (+48 inline `style={{}}` objects — fold these in too) | 1 h |
| 19 | `components/HeroSection.js` | 1 + 44 inline objects | mostly `style={{}}`; move to module, collapse 5 duplicated avatar blocks into a mapped list. | 2 h |
| 20 | `app/page.js` | 1 | trivial leftover. | 0.1 h |

**Also fold in the worst `style={{}}` offenders** while touching these files: `service_main.js` (62), `ContactPage.js` (48), `HeroSection.js` (44), `AboutUS.js` (19), `Pricing.js` (16).

### Rollout strategy
- Do it **one file per commit** so each is independently reviewable and reversible — this is the safest way to run a 20-file change.
- Start with #1 (`services2.js`) as the **reference implementation**; once the pattern is proven, the rest go faster.
- Group the 4 legal components (#11–14) into a **single shared `legal.module.css`** to remove duplication.
- After migrating, if `styled-components` remains unused anywhere, **remove it from `package.json`** (drops a runtime dependency).

**Outcome:** ~3,800 lines of CSS become cacheable static assets; several components drop `"use client"` and ship zero JS; smaller bundles, faster hydration, and far more maintainable styling. Budget **3–4 days** given the file count and per-file visual verification.

---

## Phase 4 — Bundle & dependencies (1 day) 🟡

| Task | Est. |
|------|------|
| **Consolidate carousel libraries** — you ship both `swiper` **and** `react-slick` + `slick-carousel`. Standardize on one (Swiper) and remove the other. | 3–4 h |
| **Audit heavy deps**: confirm `isotope-layout`, `react-player`, `styled-components`, `better-sqlite3`, `mssql` are all actually needed on the client; move DB libs (`mssql`, `better-sqlite3`) to server-only code paths so they never enter the client bundle. | 2 h |
| **Only load plugin CSS where used** (magnific-popup, slick) instead of globally in `layout.js`. | 1 h |
| **Defer third-party scripts** — load Tawk.to on first interaction / idle instead of `afterInteractive`; keep Trustpilot deferred too. | 1 h |
| Run `next build` + `@next/bundle-analyzer` to confirm bundle reductions. | 1 h |

---

## Phase 5 — Verify & measure (½ day) 🟢 — ✅ DONE (2026-07-23)

**Measured results (Lighthouse mobile, simulated throttle, local prod build, `/`):**

| Metric | Before Phase-5 fixes | After | Notes |
|---|---|---|---|
| Performance score | 35 | **75** | |
| TBT | 1,550 ms | **0 ms** | Tawk.to now loads on first interaction (`DeferredChat`) |
| CLS | 0.209 | **0** | The entire shift was the Tawk iframe injection |
| Speed Index | 5.2 s | **2.9 s** | |
| Total transfer | 1,643 KB | **973 KB** | Unsplash images localized (106 KB→1 KB avatar, 159 KB→79 KB popup) |
| LCP | 5.9 s | 5.8 s | Remaining bottleneck — see below |

**Phase-5 fixes applied:**
- `components/DeferredChat.js` — Tawk.to loads on first scroll/tap/keypress (12 s idle fallback) instead of at page load.
- Localized both Unsplash images (promo avatar → `/img/promo-reader.webp` 1 KB; popup → `/img/popup-offer.webp` 79 KB).
- `npm run check:images` budget guard (`scripts/check-image-budget.mjs`) fails if any raster in `public/img` exceeds 500 KB — wire into CI. Two straggler book covers recompressed to pass.

**Remaining known lever (future work):** LCP ~5.8 s on simulated mobile is now dominated by the render-critical path — the large global stylesheets (`style.css`, `bootstrap-grid.css`, `font-awesome.min.css` all load on every page) and the hero image decode. Options: purge unused rules from the global CSS bundle, subset font-awesome to the icons actually used, and/or preload the hero image.

---

## Suggested schedule

| Days | Work |
|------|------|
| **Day 1 (AM)** | Phase 0 — quick wins (visible improvement same day) |
| **Day 1 (PM) – Day 3** | Phase 1 — image compression + `next/image` migration |
| **Day 4** | Phase 2 — scroll smoothness |
| **Day 5–8** | Phase 3 — in-file CSS → CSS Modules (20 files, one commit each) |
| **Day 9** | Phase 4 — bundle/deps + Phase 5 — measure |

**Fast track (if time-boxed):** Phases 0 + 1 alone (~2.5–3.5 days) resolve the load slowness, the visual gaps, and most of the jank. Phases 2–4 are polish and long-term maintainability.

---

## Risk / sequencing notes

- **Phase 1b (image migration) is the most tedious** — 93 tags across 44 files. It's mechanical and low-risk but time-consuming; can be split across multiple sessions or parallelized per-page.
- **Do Phase 0 before anything else** — it's the cheapest way to make the site look and feel better immediately, and it de-risks stakeholder review.
- **Phase 3 (CSS extraction) is safe to defer** — it improves maintainability and shaves bundle size but is not the main cause of the felt slowness.
- Keep changes on the `murtaza` branch and verify each phase with `next build` before merging to `master`.
