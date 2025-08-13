import Link from "next/link";
import PlaxLayout from "@/layouts/PlaxLayout";
import Image from "next/image";
import EbookServicesComponent from "@/components/genericservices";
import BookCoverCarousel from "@/components/InteriorCarousel";

export const metadata = {
  title: "Interior Layout | DoMyEbook",
  description: "Craft magnetic blurbs that spark curiosity and drive reader interest. Perfect for ebook listings and marketing.",
  keywords: "book descriptions, blurb writing, ebook summary writing, back cover copy, DoMyEbook descriptions",
  openGraph: {
    title: "Interior Layout | DoMyEbook",
    description: "Convert browsers into buyers with persuasive, well-written book descriptions that highlight your ebook’s appeal.",
    type: "website",
    url: "https://domyebook.com/compelling-book-descriptions",
    images: ["https://domyebook.com/img/logo.png"],
  },
};

const CompellingBookDescriptionsPage = () => {
  return (
    <PlaxLayout>
      <div className="features-page">
        {/* Banner Section */}
        <div className="mil-banner2 mil-banner-inner mil-dissolve">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8">
                <div className="mil-banner-text mil-text-center">
                  <h2 className="mil-mb-10">Interior Layout</h2>
                  <p className="mil-text-m mil-soft mil-mb-40">
                    Entice readers with blurbs that sell your story from the start.
                  </p>
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
                  <h2 className="mil-mb-30 mil-up">Blurbs That Hook</h2>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    A great description is your book’s elevator pitch. Our copywriters specialize in creating attention-grabbing summaries that intrigue readers, highlight key themes, and boost your book’s appeal across sales platforms, back covers, and promotions.
                  </p>
                </div>
              </div>
              <div className="col-xl-5 mil-mb-80">
                <div className="mil-image-frame mil-up">
                  <div className="feature-image-placeholder">
                    <img
                      src="/img/services/compelling.png"
                      alt="service image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BookCoverCarousel />
        <EbookServicesComponent />
      </div>
    </PlaxLayout>
  );
};

export default CompellingBookDescriptionsPage;
