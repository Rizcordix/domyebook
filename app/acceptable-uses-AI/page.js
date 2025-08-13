import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import AcceptableUsesOfAISection from "@/components/UsesofAI";

export const metadata = {
  title: "Acceptable Uses of AI | DoMyEbook",
  description: "Read the Acceptable Uses of AI policy of DoMyEbook to understand your rights, responsibilities, and our policies when using our ebook services.",
  keywords: "DoMyEbook acceptable uses of AI, DoMyEbook AI policy, ebook service policies, DoMyEbook legal, terms of service, usage agreement, service agreement",
  openGraph: {
    title: "DoMyEbook Acceptable Uses of AI",
    description: "Review the full Acceptable Uses of AI policy for using DoMyEbook's ebook writing, editing, publishing, and marketing services.",
    type: "website",
    url: "https://domyebook.com/acceptable-uses-ai",
    images: ["https://domyebook.com/img/legal/terms-banner.png"], // Replace with the actual image path
  },
};


const page = () => (
    <PlaxLayout bg={false}>
        <div className="mil-banner2 mil-banner-inner mil-dissolve">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-8">
                        <div className="mil-banner-text mil-text-center">
                            
                            <h2 className="mil-mb-10">
                                Acceptable Uses of AI
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AcceptableUsesOfAISection />
    </PlaxLayout>
);

export default page;
