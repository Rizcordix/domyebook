"use client";
import React, { useEffect } from "react";

export default function TrustpilotWidget() {
  useEffect(() => {
    // Load Trustpilot script
    const script = document.createElement("script");
    script.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return React.createElement(
    "div",
    {
      className: "trustpilot-widget",
      "data-locale": "en-US",
      "data-template-id": "5419b6adfbfb950b10de65e5",
      "data-businessunit-id": "4f9f9b6b00006400051209b4",
      "data-style-height": "150px",
      "data-style-width": "100%",
      "data-theme": "light"
    },
    React.createElement(
      "a",
      { href: "https://www.trustpilot.com/review/domyebook", target: "_blank", rel: "noopener noreferrer" },
      "Trustpilot"
    )
  );
}
