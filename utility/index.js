import { ScrollSmoother, ScrollTrigger } from "@/lib/plugins";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export const plaxUtility = {
  smoothScroll() {
    // ScrollSmoother.create({
    //   smooth: 1,
    //   effects: true,
    //   smoothTouch: 0.1,
    // });
    //ScrollTrigger.normalizeScroll(true);
  },
  scrollAnimations() {
    const els = gsap.utils.toArray(".mil-up");
    if (els.length) {
      // Initial hidden state is applied via JS only — so if JS/GSAP fails to run,
      // content stays visible (see also the CSS fallback in globals.css).
      gsap.set(els, { opacity: 0, y: 50, scale: 0.98, willChange: "transform, opacity" });

      // One batched observer for ALL reveal elements instead of one ScrollTrigger each.
      ScrollTrigger.batch(".mil-up", {
        start: "top 92%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "sine.out",
            duration: 0.6,
            stagger: 0.08,
            overwrite: true,
            // Drop the GPU hint once revealed to free compositor memory.
            onComplete: () => gsap.set(batch, { willChange: "auto" }),
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            opacity: 0,
            y: 50,
            scale: 0.98,
            ease: "sine.in",
            duration: 0.4,
            overwrite: true,
          }),
      });

      // Safety net: recompute positions after load so anything already in view reveals.
      gsap.delayedCall(1.5, () => ScrollTrigger.refresh());
    }

    const scaleImage = gsap.utils.toArray(".mil-scale-img");
    scaleImage.forEach((section) => {
      const value1 = parseFloat(section.getAttribute("data-value-1"));
      const value2 = parseFloat(section.getAttribute("data-value-2"));
      gsap.fromTo(
        section,
        { scale: value1, willChange: "transform" },
        {
          scale: value2,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            // Smoothed scrub (was `true`) removes per-frame jerkiness.
            scrub: 0.5,
          },
        }
      );
    });
  },
  preloader() {
    const preloaderTimeline = gsap.timeline();

    preloaderTimeline
      .to(".mil-preloader", {
        height: 0,
        ease: "sine",
        duration: 0.4,
        delay: "2.3",
      })
      .to(".mil-preloader .mil-load", {
        width: "calc(100% - 30px)",
        ease: "linear",
        duration: "1.3",
        delay: "-2.3",
      })
      .to(".mil-preloader .mil-load", {
        opacity: 0,
        ease: "sine",
        duration: "0.4",
        delay: "-0.6",
      })
      .to(".mil-preloader p", {
        scale: 0.5,
        opacity: 0,
        ease: "sine",
        duration: 0.4,
        delay: "-0.7",
        onComplete: function () {
          ScrollTrigger.refresh();
        },
      });
  },
  counters() {
    const numbers = document.querySelectorAll(".mil-counter");
    numbers.forEach((element) => {
      let zero = { val: 0 };
      let num = parseFloat(element.dataset.number);
      let split = num.toString().split(".");
      let decimals = split.length > 1 ? split[1].length : 0;

      gsap.to(zero, {
        val: num,
        duration: 1.8,
        scrollTrigger: {
          trigger: element,
          toggleActions: "play none none reverse",
        },
        onUpdate: function () {
          element.textContent = zero.val.toFixed(decimals);
        },
      });
    });
  },
  stickMenu() {
    ScrollTrigger.create({
      start: "top -70",
      end: 99999,
      toggleClass: {
        className: "mil-active",
        targets: ".mil-top-panel",
      },
    });
  },
  backToTop() {
    gsap.fromTo(
      ".progress-wrap",
      {
        yPercent: 100,
        autoAlpha: 0,
      },
      {
        yPercent: 0,
        autoAlpha: 1,
        scrollTrigger: {
          start: 500,
          toggleActions: "play none none reverse",
        },
      }
    );
  },
};
