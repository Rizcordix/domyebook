import Link from "next/link";
import PlaxLayout from "@/layouts/PlaxLayout";
import Image from "next/image";
import EbookServicesComponent from "@/components/genericservices";



export const metadata = {
  title: "Strategic Plot Development | DoMyEbook",
  description: "Strategic plot and outline development services by DoMyEbook. Structure your book ideas into a compelling manuscript blueprint.",
  keywords: "Strategic Plot, Outline Development, Ebook Writing, Book Structure, DoMyEbook",
  openGraph: {
    title: "Strategic Plot Development | DoMyEbook",
    description: "Have questions about ebook writing or publishing? Contact the DoMyEbook team for expert support and guidance.",
    type: "website",
    url: "https://domyebook.com/strategicplot",
    images: ["https://domyebook.com/img/logo.png"],
  },
};

const Page = () => {
  return (
    <PlaxLayout>
      <div className="features-page">
        {/* Banner Section */}
        <div className="mil-banner mil-banner-inner mil-dissolve">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8">
                <div className="mil-banner-text mil-text-center">
                  <h1 className="mil-mb-60">
                    Strategic Plot and Outline Development
                  </h1>
                  <p className="mil-text-m mil-soft mil-mb-40">
                    Experience top-notch strategic plot and outline development services tailored to your needs.
                  </p>
                  <ul className="mil-breadcrumbs mil-center">
                    <li>
                      <Link href="/" style={{position: 'relative', zIndex: '10'}}>Home</Link>
                    </li>
                    <li>
                      <Link href="/strategicplot">Strategic Plot Development</Link>
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
                            <h2 className="mil-mb-30 mil-up">
                                Strategic Plot and Outline Development
                            </h2>
                            <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                              Lay the perfect foundation for your book with our expert plot and outline services. We help structure your ideas into a coherent, engaging, and commercially viable manuscript blueprint.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-5 mil-mb-80">
                          <div className="mil-image-frame mil-up">
                            <div className="feature-image-placeholder">
                              <img
                                src="/img/services/Strategic.png"
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
}

export default Page;