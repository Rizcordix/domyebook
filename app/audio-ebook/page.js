import Link from "next/link";
import PlaxLayout from "@/layouts/PlaxLayout";
import Image from "next/image";
import EbookServicesComponent from "@/components/genericservices";

export const metadata = {
  title: "Audio Ebook Production | DoMyEbook",
  description: "Reach new audiences through professional audiobook production with high-quality narration and studio sound.",
  keywords: "audiobook production, ebook narration, audio ebook, voiceover services, professional narration, DoMyEbook audio",
  openGraph: {
    title: "Audio Ebook Production | DoMyEbook",
    description: "Transform your ebook into a compelling audio experience with expert narration and professional studio quality.",
    type: "website",
    url: "https://domyebook.com/audio-ebook-production",
    images: ["https://domyebook.com/img/logo.png"],
  },
};

const AudioEbookProductionPage = () => {
  return (
    <PlaxLayout>
      <div className="features-page">
        {/* Banner Section */}
        <div className="mil-banner mil-banner-inner mil-dissolve">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8">
                <div className="mil-banner-text mil-text-center">
                  <h1 className="mil-mb-60">Audio Ebook Production</h1>
                  <p className="mil-text-m mil-soft mil-mb-40">
                    Let your words be heard. Deliver your story through powerful narration.
                  </p>
                  <ul className="mil-breadcrumbs mil-center">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/audio-ebook-production">Audio Ebook</Link>
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
                  <h2 className="mil-mb-30 mil-up">Voice That Connects</h2>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    Expand your reach with professionally produced audiobooks. Our talented narrators, combined with experienced audio engineers, ensure your content is delivered with emotion, clarity, and studio-grade polish—ready for distribution on platforms like Audible, iTunes, and more.
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

export default AudioEbookProductionPage;
