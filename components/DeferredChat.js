"use client";
import { useEffect } from "react";

/**
 * Loads the Tawk.to chat widget on the FIRST user interaction (scroll, tap,
 * keypress) instead of at page load. The widget's ~280KB of JS/fonts and its
 * layout-shifting iframe stay completely out of the critical rendering window,
 * which measurably improves TBT and CLS. A 12s fallback still loads chat for
 * visitors who never interact.
 */
export default function DeferredChat() {
  useEffect(() => {
    let loaded = false;
    const events = ["pointerdown", "scroll", "keydown", "touchstart"];

    const cleanup = () =>
      events.forEach((e) => window.removeEventListener(e, load));

    function load() {
      if (loaded) return;
      loaded = true;
      cleanup();
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();
      const s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/687a342a86520d191450094f/1j0elnk9p";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      document.head.appendChild(s1);
    }

    events.forEach((e) =>
      window.addEventListener(e, load, { once: true, passive: true })
    );
    const t = setTimeout(load, 12000);

    return () => {
      cleanup();
      clearTimeout(t);
    };
  }, []);

  return null;
}
