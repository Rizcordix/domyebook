import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

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
          className={`popup-toast ${
            toast.type === "success" ? "toast-success" : "toast-error"
          }`}
        >
          {toast.message}
        </div>
      )}

      {/* ✅ Styles */}
      <style>{`
        .popup-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 16px;
            animation: fadeIn 0.3s ease-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .popup-card {
            background: white;
            border-radius: 16px;
            max-width: 800px;
            width: 100%;
            max-height: 90vh;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            position: relative;
            display: grid;
            grid-template-columns: 1fr 1fr;
            animation: slideUp 0.4s ease-out;
          }

          .popup-close {
            position: absolute;
            top: 16px;
            right: 16px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: none;
            background: rgba(255, 255, 255, 0.9);
            color: #666;
            font-size: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
            transition: all 0.2s;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .popup-close:hover {
            background: white;
            color: #000;
            transform: rotate(90deg);
          }

          .popup-image {
            position: relative;
            overflow: hidden;
          }

          .popup-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .popup-content {
            padding: 48px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .popup-heading {
            font-size: 32px;
            font-weight: 700;
            color: #000;
            margin-bottom: 16px;
            line-height: 1.2;
          }

          .popup-offer {
            font-size: 17px;
            color: #333;
            margin-bottom: 10px;
            font-weight: 500;
            line-height: 1.5;
          }

          .popup-bonus {
            font-size: 15px;
            color: #555;
            margin-bottom: 28px;
            line-height: 1.5;
          }

          .popup-options {
            display: flex;
            gap: 16px;
            margin-bottom: 24px;
          }

          .popup-input-wrapper {
            flex: 1;
          }

          .popup-form-section {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .popup-input {
            width: 100%;
            padding: 14px 16px;
            border: 1px solid #d0d0d0;
            border-radius: 8px;
            font-size: 15px;
            transition: all 0.2s;
            font-family: inherit;
            box-sizing: border-box;
          }

          .popup-input:focus {
            outline: none;
            border-color: #7eb947;
            box-shadow: 0 0 0 3px rgba(126, 185, 71, 0.1);
          }

          .popup-terms {
            font-size: 13px;
            color: #666;
            margin-top: -8px;
            margin-bottom: 20px;
          }

          .popup-terms a {
            color: #7eb947;
            text-decoration: none;
            font-weight: 500;
          }

          .popup-terms a:hover {
            text-decoration: underline;
          }

          .popup-submit {
            width: 100%;
            padding: 16px;
            background: #000;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .popup-submit:hover {
            background: #7eb947;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(126, 185, 71, 0.4);
          }

          .popup-submit:active {
            transform: translateY(0);
          }

          @media (max-width: 768px) {
            .popup-card {
              grid-template-columns: 1fr;
              max-width: 500px;
            }

            .popup-image {
              max-height: 220px;
            }

            .popup-content {
              padding: 32px 24px;
            }

            .popup-heading {
              font-size: 26px;
            }

            .popup-subheading {
              font-size: 22px;
            }

            .popup-close {
              top: 12px;
              right: 12px;
              background: rgba(255, 255, 255, 0.95);
            }
          }

          @media (max-width: 480px) {
            .popup-backdrop {
              padding: 8px;
            }

            .popup-content {
              padding: 24px 20px;
            }

            .popup-heading {
              font-size: 22px;
            }

            .popup-subheading {
              font-size: 20px;
            }

            .popup-offer {
              font-size: 14px;
            }
          }


        .popup-toast {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 14px 22px;
          border-radius: 8px;
          color: #000;
          font-weight: 600;
          background: #d4edda;
          border: 1px solid #c3e6cb;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 10000;
          animation: slideDown 0.4s ease, fadeOut 0.4s ease 3s forwards;
          font-family: system-ui, sans-serif;
        }

        .toast-success {
          background: #d9fdd3;
          border: 1px solid #b7e6b2;
          color: #0f5132;
        }

        .toast-error {
          background: #f8d7da;
          border: 1px solid #f5c2c7;
          color: #842029;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translate(-50%, -20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        @keyframes fadeOut {
          to { opacity: 0; transform: translate(-50%, -10px); }
        }
      `}</style>

      {isOpen && (
        <div
          className="popup-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-heading"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="popup-card" role="document">
            <button
              aria-label="Close"
              className="popup-close"
              onClick={() => setIsOpen(false)}
              ref={closeBtnRef}
            >
              ✕
            </button>

            <div className="popup-image">
              <img
                src="https://images.unsplash.com/photo-1505063366573-38928ae5567e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                alt="Beautiful woman with natural makeup"
              />
            </div>

            <div className="popup-content">
              <h2 id="popup-heading" className="popup-heading">
                Limited-Time Offer
              </h2>

              <p className="popup-offer">30% Discount on any package</p>
              <p className="popup-bonus">
                and first 1,000 FREE Words of ghostwriting or editing
              </p>

              <div className="popup-form-section">
                <div className="popup-options">
                  <div className="popup-input-wrapper">
                    <input
                      type="email"
                      className="popup-input"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="popup-input-wrapper">
                    <input
                      type="tel"
                      className="popup-input"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <button className="popup-submit" onClick={handleSubmit}>
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
