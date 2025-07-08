"use client";

import { useEffect } from "react";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";

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
      <div className="mil-banner mil-banner-inner mil-dissolve">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-8">
                        <div className="mil-banner-text mil-text-center">
                            
                            <h1 className="mil-mb-60">
                                Book a Demo
                            </h1>
                            <ul className="mil-breadcrumbs mil-center">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/calendly">BookDemo</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      {/* Background bubbles */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: `
          radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(102, 126, 234, 0.1) 0%, transparent 50%)
        `,
        animation: 'float 20s ease-in-out infinite',
        zIndex: 0,
      }} />
      <div
        className="calendly-inline-widget mil-p-160-0"
        data-url="https://calendly.com/domyebook?primary_color=7eb947"
        style={{ minWidth: "320px", height: "900px", position: 'relative',
      background: 'linear-gradient(135deg, #f2fafa 0%, #7eb947 100%)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box' }}
      ></div>
    </PlaxLayout>
  );
};

export default Page;
