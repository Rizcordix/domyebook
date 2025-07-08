import Link from "next/link";
import PlaxLayout from "@/layouts/PlaxLayout";
import Image from "next/image";
import EbookServicesComponent from "@/components/genericservices";

export const metadata = {
  title: "Global Content Translation | DoMyEbook",
  description: "Reach international audiences with expert translations that preserve your message and voice across languages.",
  keywords: "ebook translation, multilingual ebook, global publishing, language translation, DoMyEbook translation services",
  openGraph: {
    title: "Global Content Translation | DoMyEbook",
    description: "Expand your reach with high-quality translations that make your book accessible to readers around the world.",
    type: "website",
    url: "https://domyebook.com/global-content-translation",
    images: ["https://domyebook.com/img/logo.png"],
  },
};

const GlobalContentTranslationPage = () => {
  return (
    <PlaxLayout>
      <div className="features-page">
        {/* Banner Section */}
        <div className="mil-banner mil-banner-inner mil-dissolve">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8">
                <div className="mil-banner-text mil-text-center">
                  <h1 className="mil-mb-60">Global Content Translation</h1>
                  <p className="mil-text-m mil-soft mil-mb-40">
                    Break language barriers and take your story global.
                  </p>
                  <ul className="mil-breadcrumbs mil-center">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/global-content-translation">Translation</Link>
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
                  <h2 className="mil-mb-30 mil-up">Multilingual Reach</h2>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    Let your book transcend borders. Our team of skilled translators adapts your content for international audiences while preserving tone, style, and cultural relevance. We support a wide range of languages so your story can connect with readers worldwide.
                  </p>
                </div>
              </div>
              <div className="col-xl-5 mil-mb-80">
                <div className="mil-image-frame mil-up">
                  <div className="feature-image-placeholder">
                    <img
                      src="/img/home-6/3.png"
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

export default GlobalContentTranslationPage;
