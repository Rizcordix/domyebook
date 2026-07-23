"use client";
import PopupCard from "./PopupCard";
export default function PopupClientWrapper() {
  // 6s delay keeps the popup's mount/paint work out of the LCP window
  // (and immediate popups hurt conversion anyway)
  return <PopupCard showOnEveryVisit={true} delayMs={6000} />;
}
