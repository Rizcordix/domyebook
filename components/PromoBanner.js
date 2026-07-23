"use client";

import { useState, useEffect } from "react";
import styles from "./PromoBanner.module.css";

const BANNER_HEIGHT = 60;

const PromoBanner = ({ onVisibilityChange }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    onVisibilityChange?.(visible);
  }, [visible, onVisibilityChange]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "linear-gradient(135deg, #7eb947 0%, #6ba838 100%)",
        color: "white",
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "15px",
        fontWeight: "600",
        height: `${BANNER_HEIGHT}px`,
        boxShadow: "0 2px 12px rgba(126, 185, 71, 0.3)",
        overflow: "hidden",
      }}
    >
      <div
        className={styles.promoBannerContent}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <img
          src="/img/promo-reader.webp"
          alt="Person reading book"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              fontSize: "15px",
              fontWeight: "600",
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            Your Non-Fiction Book Written at
          </span>
          <span
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: "2px 8px",
              borderRadius: "12px",
              fontSize: "13px",
              fontWeight: "700",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            4× Speed
          </span>
          <span
            style={{
              fontSize: "15px",
              fontWeight: "600",
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            &
          </span>
          <span
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: "2px 8px",
              borderRadius: "12px",
              fontSize: "13px",
              fontWeight: "700",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            HALF Cost
          </span>
        </div>
      </div>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <a
          href="getquote"
          className={styles.promoCtaButton}
          style={{
            background: "linear-gradient(135deg, #f2fafa 0%, #ffffff 100%)",
            color: "#333333",
            padding: "8px 16px",
            borderRadius: "25px",
            fontWeight: "700",
            textDecoration: "none",
            fontSize: "13px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-1px)";
            e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
          }}
        >
          Get Quote
          <span style={{ fontSize: "12px" }}>→</span>
        </a>
        <button
          onClick={() => setVisible(false)}
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            fontSize: "16px",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
            e.target.style.transform = "scale(1)";
          }}
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
export { PromoBanner, BANNER_HEIGHT };
