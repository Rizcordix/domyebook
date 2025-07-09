import Link from "next/link";
import PlaxLayout from "@/layouts/PlaxLayout";
import Image from "next/image";
import EbookServicesComponent from "@/components/genericservices";

export const metadata = {
  title: "Book Launch Bundles & Bulk Order Solutions | DoMyEbook",
  description: "Comprehensive packages and scalable solutions for solo authors and publishers with high-volume publishing goals.",
  keywords: "book launch bundle, bulk ebook orders, author packages, publish-ready services, DoMyEbook bundles",
  openGraph: {
    title: "Book Launch Bundles & Bulk Order Solutions | DoMyEbook",
    description: "From bundled publishing packages to bulk manuscript handling, we deliver efficiency, value, and readiness for every author.",
    type: "website",
    url: "https://domyebook.com/book-launch-bundles",
    images: ["https://domyebook.com/img/logo.png"],
  },
};

const BookLaunchBundlesPage = () => {
  return (
    <PlaxLayout>
      <div className="features-page">
        {/* Banner Section */}
        <div className="mil-banner mil-banner-inner mil-dissolve">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8">
                <div className="mil-banner-text mil-text-center">
                  <h1 className="mil-mb-60">Book Launch Bundles</h1>
                  <p className="mil-text-m mil-soft mil-mb-40">
                    Get everything you need to publish successfully—at scale or in one go.
                  </p>
                  <ul className="mil-breadcrumbs mil-center">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/book-launch-bundles">Launch Services</Link>
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
                  <h2 className="mil-mb-30 mil-up">Integrated & Scalable Publishing</h2>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    Opt for our integrated Book Bundles for a complete, cost-effective solution, combining writing, editing, design, and formatting to deliver a publish-ready book.
                  </p>
                </div>
              </div>
              <div className="col-xl-5 mil-mb-80">
                <div className="mil-image-frame mil-up">
                  <div className="feature-image-placeholder">
                    <img
                      src="/img/services/book.png"
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

export default BookLaunchBundlesPage;
