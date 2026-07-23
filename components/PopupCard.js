import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./PopupCard.module.css";

const STORAGE_KEY = "popup_seen_v1";

export default function PopupCard({
  showOnEveryVisit = true,
  delayMs = 600,
}) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [toast, setToast] = useState(null); // 👈 for notification
  const mountedRef = useRef(false);
  const closeBtnRef = useRef(null);

  // Only render the portal after mount so the first client render
  // matches the server (both render nothing) — avoids hydration mismatch.
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    mountedRef.current = true;
    const alreadySeen = !!localStorage.getItem(STORAGE_KEY);

    if (showOnEveryVisit || !alreadySeen) {
      const t = setTimeout(() => {
        setIsOpen(true);
        if (!showOnEveryVisit) localStorage.setItem(STORAGE_KEY, "1");
      }, delayMs);
      return () => clearTimeout(t);
    }
  }, [showOnEveryVisit, delayMs]);

  useEffect(() => {
    if (!mountedRef.current) return;
    const originalOverflow = document?.documentElement?.style?.overflow;
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = originalOverflow || "";
    }
    return () => {
      document.documentElement.style.overflow = originalOverflow || "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!mountedRef.current) return;
    function onKey(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [isOpen]);

  // Toast helper
  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const handleSubmit = async () => {
    if (!email || !email.includes("@") || !phone) {
      showToast("⚠️ Please fill in valid email and phone.", "error");
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone }),
      });

      const data = await response.json();

      if (response.ok) {
        showToast("✅ Thank you! Your details have been sent.", "success");
        setIsOpen(false);
        setEmail("");
        setPhone("");
      } else {
        console.error("Email sending failed:", data.message);
        showToast("❌ Unsuccessful — please try again later.", "error");
      }
    } catch (err) {
      console.error("Submit error:", err);
      showToast("❌ Unsuccessful — please try again later.", "error");
    }
  };

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(
    <>
      {/* ✅ Toast Notification */}
      {toast && (
        <div
          className={`${styles.popupToast} ${
            toast.type === "success" ? styles.toastSuccess : styles.toastError
          }`}
        >
          {toast.message}
        </div>
      )}

      {isOpen && (
        <div
          className={styles.popupBackdrop}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-heading"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className={styles.popupCard} role="document">
            <button
              aria-label="Close"
              className={styles.popupClose}
              onClick={() => setIsOpen(false)}
              ref={closeBtnRef}
            >
              ✕
            </button>

            <div className={styles.popupImage}>
              <img
                src="/img/popup-offer.webp"
                alt="Beautiful woman with natural makeup"
              />
            </div>

            <div className={styles.popupContent}>
              <h2 id="popup-heading" className={styles.popupHeading}>
                Limited-Time Offer
              </h2>

              <p className={styles.popupOffer}>30% Discount on any package</p>
              <p className={styles.popupBonus}>
                and first 1,000 FREE Words of ghostwriting or editing
              </p>

              <div className={styles.popupFormSection}>
                <div className={styles.popupOptions}>
                  <div className={styles.popupInputWrapper}>
                    <input
                      type="email"
                      className={styles.popupInput}
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className={styles.popupInputWrapper}>
                    <input
                      type="tel"
                      className={styles.popupInput}
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <button className={styles.popupSubmit} onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}
