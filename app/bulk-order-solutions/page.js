import Link from "next/link";
import PlaxLayout from "@/layouts/PlaxLayout";
import Image from "next/image";
import EbookServicesComponent from "@/components/genericservices";

export const metadata = {
  title: "Bulk Order Solutions | DoMyEbook",
  description: "Efficient, cost-effective publishing services for authors and publishers handling multiple manuscripts or large-scale projects.",
  keywords: "bulk ebook orders, publishing at scale, high-volume ebook service, multiple book projects, DoMyEbook bulk publishing",
  openGraph: {
    title: "Bulk Order Solutions | DoMyEbook",
    description: "Streamline the production of multiple ebooks with our bulk order publishing services—ideal for high-output authors and publishers.",
    type: "website",
    url: "https://domyebook.com/bulk-order-solutions",
    images: ["https://domyebook.com/img/logo.png"],
  },
};

const BulkOrderSolutionsPage = () => {
  return (
    <PlaxLayout>
      <div className="features-page">
        {/* Banner Section */}
        <div className="mil-banner mil-banner-inner mil-dissolve">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8">
                <div className="mil-banner-text mil-text-center">
                  <h1 className="mil-mb-60">Bulk Order Solutions</h1>
                  <p className="mil-text-m mil-soft mil-mb-40">
                    Scale your publishing projects with ease and efficiency.
                  </p>
                  <ul className="mil-breadcrumbs mil-center">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/bulk-order-solutions">Bulk Orders</Link>
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
                  <h2 className="mil-mb-30 mil-up">High-Volume Publishing Made Simple</h2>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    For authors and organizations managing multiple manuscripts, our Bulk Order Solutions provide an efficient, economical path to publication. Whether you&apos;re producing a series, managing client books, or publishing in volume, we streamline editing, design, formatting, and coordination to deliver consistent quality across all titles.
                  </p>
                </div>
              </div>
              <div className="col-xl-5 mil-mb-80">
                <div className="mil-image-frame mil-up">
                  <div className="feature-image-placeholder">
                    <img
                      src="/img/services/bulk.png"
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

export default BulkOrderSolutionsPage;
