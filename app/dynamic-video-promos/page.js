import Link from "next/link";
import PlaxLayout from "@/layouts/PlaxLayout";
import Image from "next/image";
import EbookServicesComponent from "@/components/genericservices";

export const metadata = {
  title: "Dynamic Video Promos | DoMyEbook",
  description: "Promote your ebook with engaging video trailers designed for social media, ads, and online promotions.",
  keywords: "ebook promo video, book trailers, animated ebook promo, video marketing, DoMyEbook video promos",
  openGraph: {
    title: "Dynamic Video Promos | DoMyEbook",
    description: "Boost your ebook's visibility with short, powerful video promos that hook audiences instantly on any platform.",
    type: "website",
    url: "https://domyebook.com/dynamic-video-promos",
    images: ["https://domyebook.com/img/logo.png"],
  },
};

const DynamicVideoPromosPage = () => {
  return (
    <PlaxLayout>
      <div className="features-page">
        {/* Banner Section */}
        <div className="mil-banner2 mil-banner-inner mil-dissolve">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8">
                <div className="mil-banner-text mil-text-center">
                  <h2 className="mil-mb-60">Dynamic Video Promos</h2>
                  <p className="mil-text-m mil-soft mil-mb-40">
                    Market your ebook with cinematic flair and visual impact.
                  </p>
                  <ul className="mil-breadcrumbs mil-center">
                    <li>
                      <Link href="/" style={{position: 'relative', zIndex: '10'}}>Home</Link>
                    </li>
                    <li>
                      <Link href="/dynamic-video-promos">Video Promos</Link>
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
                  <h2 className="mil-mb-30 mil-up">Visual Storytelling That Sells</h2>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    Create buzz with compelling video promos tailored to your ebook’s tone and genre. From teaser trailers to full promotional shorts, we combine animation, music, and messaging to deliver attention-grabbing content optimized for platforms like Instagram, YouTube, and TikTok.
                  </p>
                </div>
              </div>
              <div className="col-xl-5 mil-mb-80">
                <div className="mil-image-frame mil-up">
                  <div className="feature-image-placeholder">
                    <img
                      src="/img/services/dynamic.png"
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

export default DynamicVideoPromosPage;
