import Link from "next/link";
import PlaxLayout from "@/layouts/PlaxLayout";
import Image from "next/image";
import EbookServicesComponent from "@/components/genericservices";

export const metadata = {
  title: "Professional Book Formatting | DoMyEbook",
  description: "Seamless formatting services for digital and print publishing, ensuring readability and platform compatibility.",
  keywords: "book formatting, ebook formatting, print-ready formatting, publish-ready manuscript, DoMyEbook formatting",
  openGraph: {
    title: "Professional Book Formatting | DoMyEbook",
    description: "Perfectly formatted ebooks and print books for all platforms. We make sure your content is clean, professional, and ready for publication.",
    type: "website",
    url: "https://domyebook.com/professional-book-formatting",
    images: ["https://domyebook.com/img/logo.png"],
  },
};

const ProfessionalBookFormattingPage = () => {
  return (
    <PlaxLayout>
      <div className="features-page">
        {/* Banner Section */}
        <div className="mil-banner mil-banner-inner mil-dissolve">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8">
                <div className="mil-banner-text mil-text-center">
                  <h1 className="mil-mb-60">Professional Book Formatting</h1>
                  <p className="mil-text-m mil-soft mil-mb-40">
                    Ready your manuscript for flawless publication across platforms.
                  </p>
                  <ul className="mil-breadcrumbs mil-center">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/professional-book-formatting">Book Formatting</Link>
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
                  <h2 className="mil-mb-30 mil-up">Flawless Formatting</h2>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    Our professional formatting ensures that your manuscript is fully compatible with all major ebook and print platforms. From font consistency to spacing, layout, and pagination, we handle every detail so your book looks impeccable on every device or shelf.
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

export default ProfessionalBookFormattingPage;
