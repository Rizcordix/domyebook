"use client";

import { useEffect } from "react";
import PlaxLayout from "@/layouts/PlaxLayout";

const Page = () => {
  useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";

    // Prevent re-adding the script if it's already present
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <PlaxLayout bg={false}>
      <div
        className="calendly-inline-widget mil-p-160-0"
        data-url="https://calendly.com/domyebook?primary_color=7eb947"
        style={{ minWidth: "320px", height: "900px" }}
      ></div>
    </PlaxLayout>
  );
};

export default Page;
