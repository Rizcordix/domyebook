import Link from "next/link";
import PlaxLayout from "@/layouts/PlaxLayout";
import Image from "next/image";
import EbookServicesComponent from "@/components/genericservices";
import BookCoverCarousel from "@/components/Illustartioncarousel";

export const metadata = {
  title: "Custom Illustrations | DoMyEbook",
  description: "Bring your story to life with tailored illustrations that add depth, emotion, and visual appeal to your ebook.",
  keywords: "ebook illustrations, custom book art, children book drawings, professional illustrations, DoMyEbook visuals",
  openGraph: {
    title: "Custom Illustrations | DoMyEbook",
    description: "Add visual richness to your narrative with bespoke illustrations that enhance storytelling and reader engagement.",
    type: "website",
    url: "https://domyebook.com/custom-illustrations",
    images: ["https://domyebook.com/img/logo.png"],
  },
};

const CustomIllustrationsPage = () => {
  return (
    <PlaxLayout>
      <div className="features-page">
        {/* Banner Section */}
        <div className="mil-banner2 mil-banner-inner mil-dissolve">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8">
                <div className="mil-banner-text mil-text-center">
                  <h2 className="mil-mb-10">Custom Illustrations</h2>
                  <p className="mil-text-m mil-soft mil-mb-40">
                    Visual storytelling that enhances every page of your ebook.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mil-features mil-p-60-0" style={{ backgroundColor: '#f2fafa' }}>
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-6 mil-mb-80">
                <div className="feature-content">
                  <h2 className="mil-mb-30 mil-up">Illustrations with Impact</h2>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    Captivate your audience with custom-drawn illustrations that breathe life into your words. Whether you’re publishing a children’s book, a graphic novel, or need spot illustrations for emphasis, our artists create compelling visuals tailored to your unique narrative.
                  </p>
                </div>
              </div>
              <div className="col-xl-5 mil-mb-80">
                <div className="mil-image-frame mil-up">
                  <div className="feature-image-placeholder">
                    <img
                      src="/img/services/custom1.png"
                      alt="service image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BookCoverCarousel />

        {/* Additional Services Section */}
        <EbookServicesComponent />
      </div>
    </PlaxLayout>
  );
};

export default CustomIllustrationsPage;
