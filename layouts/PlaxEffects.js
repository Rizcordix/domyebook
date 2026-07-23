"use client";
import { plaxUtility } from "@/utility";
import { useEffect } from "react";

/**
 * Client island that runs the GSAP scroll effects after mount.
 * Extracted from PlaxLayout so the layout itself (and every static section
 * under it) can render as a server component — the effects still apply to
 * the whole page via document-level selectors, but the sections no longer
 * pay the hydration cost.
 */
export default function PlaxEffects() {
  useEffect(() => {
    // Defer ALL GSAP setup to browser idle: ScrollTrigger creation forces
    // style/layout work (~1.7s on a throttled main thread) which otherwise
    // blocks the first paint of the hero (LCP). Painting first, animating
    // after, is strictly better — above-fold content is visible either way.
    let idleId;
    const start = () => {
      plaxUtility.scrollAnimations();
      plaxUtility.smoothScroll();
      plaxUtility.counters();
      plaxUtility.stickMenu();
      plaxUtility.backToTop();
    };
    if ("requestIdleCallback" in window) {
      idleId = requestIdleCallback(start, { timeout: 2000 });
    } else {
      idleId = setTimeout(start, 200);
    }
    return () => {
      if ("cancelIdleCallback" in window) cancelIdleCallback(idleId);
      else clearTimeout(idleId);
    };
  }, []);

  return null;
}
