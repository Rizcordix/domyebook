import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import PrivacyPolicySection from "@/components/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy | DoMyEbook",
  description: "Read the Privacy Policy of DoMyEbook to understand how we collect, use, and protect your personal information.",
  keywords: "DoMyEbook privacy policy, data protection, personal information, user privacy, privacy rights",
  openGraph: {
    title: "DoMyEbook Privacy Policy",
    description: "Review the full Privacy Policy for using DoMyEbook's ebook writing, editing, publishing, and marketing services.",
    type: "website",
    url: "https://domyebook.com/privacy-policy",
    images: ["https://domyebook.com/img/legal/privacy-policy-banner.png"], // Replace with the actual image path
  },
};


const page = () => (
    <PlaxLayout bg={false}>
        <div className="mil-banner mil-banner-inner mil-dissolve">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-8">
                        <div className="mil-banner-text mil-text-center">
                            
                            <h1 className="mil-mb-60">
                                Privacy Policy
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
        <PrivacyPolicySection />
    </PlaxLayout>
);

export default page;