import Link from "next/link";
import PlaxLayout from "@/layouts/PlaxLayout";
import Image from "next/image";
import EbookServicesComponent from "@/components/genericservices";

export const metadata = {
  title: "End-to-End Project Management | DoMyEbook",
  description: "Let us handle your entire ebook journey—from idea to publication—with dedicated project support and coordination.",
  keywords: "ebook project management, publishing coordination, author support services, DoMyEbook end-to-end",
  openGraph: {
    title: "End-to-End Project Management | DoMyEbook",
    description: "Focus on writing while we manage your entire ebook production process—from planning and editing to design and launch.",
    type: "website",
    url: "https://domyebook.com/end-to-end-project-management",
    images: ["https://domyebook.com/img/logo.png"],
  },
};

const EndToEndProjectManagementPage = () => {
  return (
    <PlaxLayout>
      <div className="features-page">
        {/* Banner Section */}
        <div className="mil-banner mil-banner-inner mil-dissolve">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8">
                <div className="mil-banner-text mil-text-center">
                  <h1 className="mil-mb-60">End-to-End Project Management</h1>
                  <p className="mil-text-m mil-soft mil-mb-40">
                    Let us orchestrate your publishing success from start to finish.
                  </p>
                  <ul className="mil-breadcrumbs mil-center">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/end-to-end-project-management">Project Management</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mil-features mil-p-80-80" style={{ backgroundColor: '#f2fafa' }}>
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-6 mil-mb-80">
                <div className="feature-content">
                  <h2 className="mil-mb-30 mil-up">Complete Publishing Oversight</h2>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    From initial concept to final launch, our dedicated project managers guide your book every step of the way. We coordinate writing, editing, design, formatting, and distribution so you can stay focused on storytelling while we handle the logistics of production and publication.
                  </p>
                </div>
              </div>
              <div className="col-xl-5 mil-mb-80">
                <div className="mil-image-frame mil-up">
                  <div className="feature-image-placeholder">
                    <img
                      src="/img/services/end.png"
                      alt="service image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <EbookServicesComponent />
      </div>
    </PlaxLayout>
  );
};

export default EndToEndProjectManagementPage;
