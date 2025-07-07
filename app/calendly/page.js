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
      <div
        className="calendly-inline-widget mil-p-160-0"
        data-url="https://calendly.com/domyebook?primary_color=7eb947"
        style={{ minWidth: "320px", height: "900px", backgroundImage: 'url("/img/home-2/bg1.jpg")' }}
      ></div>
    </PlaxLayout>
  );
};

export default Page;
