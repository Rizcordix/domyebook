import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import RefundRevisionPolicySection from "@/components/Refund";

export const metadata = {
  title: "Refund and Revision Policy | DoMyEbook",
  description: "Read the Refund and Revision Policy of DoMyEbook to understand your rights, responsibilities, and our policies when using our ebook services.",
  keywords: "DoMyEbook refund policy, DoMyEbook revision policy, ebook service policies, DoMyEbook legal, terms of service, usage agreement, service agreement",
  openGraph: {
    title: "DoMyEbook Refund and Revision Policy",
    description: "Review the full Refund and Revision Policy for using DoMyEbook's ebook writing, editing, publishing, and marketing services.",
    type: "website",
    url: "https://domyebook.com/refund-and-revision",
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
                            
                            <h1 className="mil-mb-60">
                                Refund and Revision Policy
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
        <RefundRevisionPolicySection />
    </PlaxLayout>
);

export default page;
