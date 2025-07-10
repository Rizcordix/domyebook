import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import PlagiarismDisclaimerSection from "@/components/Plagiarism";

export const metadata = {
  title: "Plagiarism Disclaimer | DoMyEbook",
  description: "Read the Plagiarism Disclaimer of DoMyEbook to understand our policies on content originality.",
  keywords: "DoMyEbook plagiarism disclaimer, content originality, user responsibilities, copyright, intellectual property",
  openGraph: {
    title: "DoMyEbook Plagiarism Disclaimer",
    description: "Review the full Plagiarism Disclaimer for using DoMyEbook's ebook writing, editing, publishing, and marketing services.",
    type: "website",
    url: "https://domyebook.com/plagiarism-disclaimer",
    images: ["https://domyebook.com/img/legal/plagiarism-disclaimer-banner.png"], // Replace with the actual image path
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
                                Plagiarism Disclaimer
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
        <PlagiarismDisclaimerSection />
    </PlaxLayout>
);

export default page;