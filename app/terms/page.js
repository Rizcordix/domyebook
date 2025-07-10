import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import TermsSection from "@/components/TermsofService";

export const metadata = {
  title: "Terms | DoMyEbook",
  description: "Read the Terms and Conditions of DoMyEbook to understand your rights, responsibilities, and our policies when using our ebook services.",
  keywords: "DoMyEbook terms, terms and conditions, ebook service policies, DoMyEbook legal, terms of service, usage agreement, service agreement",
  openGraph: {
    title: "DoMyEbook Terms & Conditions",
    description: "Review the full Terms and Conditions for using DoMyEbook's ebook writing, editing, publishing, and marketing services.",
    type: "website",
    url: "https://domyebook.com/terms",
    images: ["https://domyebook.com/img/legal/terms-banner.png"], // Replace with the actual image path
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
        <TermsSection />
    </PlaxLayout>
);

export default page;
