import Link from "next/link";
import PlaxLayout from "@/layouts/PlaxLayout";
import Image from "next/image";
import EbookServicesComponent from "@/components/genericservices";

export const metadata = {
  title: "Impactful Cover Artistry | DoMyEbook",
  description: "Eye-catching cover designs for ebooks, paperbacks, hardcovers, and audiobooks that captivate readers instantly.",
  keywords: "ebook cover design, book cover services, professional cover art, custom cover design, DoMyEbook cover artistry",
  openGraph: {
    title: "Impactful Cover Artistry | DoMyEbook",
    description: "Make a powerful first impression with professionally designed book covers tailored to your genre and audience.",
    type: "website",
    url: "https://domyebook.com/impactful-cover-artistry",
    images: ["https://domyebook.com/img/logo.png"],
  },
};

const ImpactfulCoverArtistryPage = () => {
  return (
    <PlaxLayout>
      <div className="features-page">
        {/* Banner Section */}
        <div className="mil-banner mil-banner-inner mil-dissolve">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8">
                <div className="mil-banner-text mil-text-center">
                  <h1 className="mil-mb-60">Impactful Cover Artistry</h1>
                  <p className="mil-text-m mil-soft mil-mb-40">
                    Create a visual identity that draws readers in at first glance.
                  </p>
                  <ul className="mil-breadcrumbs mil-center">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/impactful-cover-artistry">Cover Artistry</Link>
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
                  <h2 className="mil-mb-30 mil-up">Covers That Sell</h2>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    Your book’s cover is its handshake with the reader. Our cover designers specialize in crafting visually stunning covers for all formats—eBooks, print, audiobooks—tailored to your genre and audience. We blend creativity with market-savvy to deliver covers that make an impact.
                  </p>
                </div>
              </div>
              <div className="col-xl-5 mil-mb-80">
                <div className="mil-image-frame mil-up">
                  <div className="feature-image-placeholder">
                    <Image
                      src="/img/inner-pages/6.png"
                      alt="service image"
                      width="500"
                      height="500"
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

export default ImpactfulCoverArtistryPage;
