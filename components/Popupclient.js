"use client";
import PopupCard from "./PopupCard";
export default function PopupClientWrapper() {
  return <PopupCard showOnEveryVisit={true} delayMs={600} />;
}
