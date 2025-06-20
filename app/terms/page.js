import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";

export const metadata = {
  title: "Terms | DoMyEbook",
  description: "Read the Terms and Conditions of DoMyEbook to understand your rights, responsibilities, and our policies when using our ebook services.",
  keywords: "DoMyEbook terms, terms and conditions, ebook service policies, DoMyEbook legal, terms of service, usage agreement, service agreement",
  openGraph: {
    title: "DoMyEbook Terms & Conditions",
    description: "Review the full Terms and Conditions for using DoMyEbook's ebook writing, editing, publishing, and marketing services.",
    type: "website",
    url: "https://domyebook.com/terms",
    images: ["https://domyebook.com/images/legal/terms-banner.png"], // Replace with the actual image path
  },
};


const page = () => (
    <PlaxLayout bg={false}>
        <div className="mil-banner mil-banner-inner mil-dissolve">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-8">
                        <div className="mil-banner-text mil-text-center">
                            <div className="mil-text-m mil-mb-20">Terms &amp; Conditions</div>
                            <h1 className="mil-mb-60">
                                Terms of Service
                            </h1>
                            <ul className="mil-breadcrumbs mil-center">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="terms">Terms</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="terms-content" style={{ fontFamily: 'Arial, sans-serif', color: '#34495e', lineHeight: '1.6' }}>
            <div className="container">
                <h2 style={{ fontSize: '28px', color: '#2c3e50' }}>Overview:</h2>
                <p>
                    This website is operated by DoMyEbook. Throughout the site, the terms “we,” “us,” and “our” refer to DoMyEbook. DoMyEbook offers this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
                </p>
                <p>
                    By visiting our site and/or purchasing a service from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service,” “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, or contributors of content.
                </p>
                <p>
                    Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.
                </p>
                <br />
                <h2 style={{ fontSize: '28px', color: '#2c3e50' }}>Section 1 - Service Terms:</h2>
                <p>
                    By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
                </p>
                <p>
                    You may not use our services for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
                </p>
                <p>
                    You must not transmit any worms or viruses or any code of a destructive nature.
                </p>
                <p>
                    A breach or violation of any of the Terms will result in an immediate termination of your Services.
                </p>
                 <br />
                <h2 style={{ fontSize: '28px', color: '#2c3e50' }}>Section 2 - General Conditions:</h2>
                <p>
                    We reserve the right to refuse service to anyone for any reason at any time.
                </p>
                <p>
                    You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.
                </p>
                <br />
                <h2 style={{ fontSize: '28px', color: '#2c3e50' }}>Section 5 - Services Offered:</h2>
                <p>
                    DoMyEbook offers the following services:
                </p>
                <ul>
                    <li>Ghostwriting</li>
                    <li>Editing and Proofreading</li>
                    <li>Formatting</li>
                    <li>Publishing</li>
                    <li>Design and Illustration</li>
                    <li>Book Cover</li>
                    <li>Marketing</li>
                    <li>Promo Video</li>
                    <li>Audio eBook</li>
                </ul>
                <p>
                    Our expert team ensures high-quality services in all of the above areas. Please note that we do not offer physical products or an online store, and we specialize solely in eBook writing and related services.
                </p>
                <br />
                <h2 style={{ fontSize: '28px', color: '#2c3e50' }}>Section 6 - Out of Scope Work:</h2>
                <p>
                    Out of scope work refers to tasks that are not covered by the services provided by DoMyEbook. Our services are exclusively available through project orders or add-on requests. Out of scope work is limited to tasks that fall outside the range of services we offer.
                </p>
                <p>
                    By engaging in out of scope work, the customer and freelancer enter into a contract independent of DoMyEbook. DoMyEbook is not liable for any issues that arise from out of scope work. Customers and freelancers are encouraged to clarify expectations before starting any out-of-scope work.
                </p>
                <br />
                <h2 style={{ fontSize: '28px', color: '#2c3e50' }}>Section 7 - Limitation of Liability:</h2>
                <p>
                    DoMyEbook shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the services provided. This includes, but is not limited to, lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages.
                </p>
                <br />
                <h2 style={{ fontSize: '28px', color: '#2c3e50' }}>Section 8 - Governing Law:</h2>
                <p>
                    These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of [Your Country].
                </p>
                <br />
                <h2 style={{ fontSize: '28px', color: '#2c3e50' }}>Section 9 - Changes to Terms of Service:</h2>
                <p>
                    You can review the most current version of the Terms of Service at any time on this page.
                </p>
                <p>
                    We reserve the right, at our sole discretion, to update, change, or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
                </p>
                <br />
                <h2 style={{ fontSize: '28px', color: '#2c3e50' }}>Section 10 - Contact Information:</h2>
                <p>
                    Questions about the Terms of Service should be sent to us at info@domyebook.com.
                </p>
                <br />
                <br />
            </div>
        </div>
    </PlaxLayout>
);

export default page;
