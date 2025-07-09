import Link from "next/link";
import PlaxLayout from "@/layouts/PlaxLayout";
import Image from "next/image";
import EbookServicesComponent from "@/components/genericservices";



export const metadata = {
  title: "Ghostwriting | DoMyEbook",
  description: "Ghostwriting services by DoMyEbook. Get professional writing assistance for your ebook projects, from concept to publication.",
  keywords: "ghostwriting, ebook writing, professional writing services, ebook publishing, DoMyEbook",
  openGraph: {
    title: "Ghostwriting | DoMyEbook",
    description: "Have questions about ebook writing or publishing? Contact the DoMyEbook team for expert support and guidance.",
    type: "website",
    url: "https://domyebook.com/ghostwriting",
    images: ["https://domyebook.com/img/logo.png"],
  },
};

const GhostwritingPage = () => {
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
                    Ghostwriting Excellence
                  </h1>
                  <p className="mil-text-m mil-soft mil-mb-40">
                    Experience top-notch ghostwriting services tailored to your needs.
                  </p>
                  <ul className="mil-breadcrumbs mil-center">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/ghostwriting">Ghostwriting</Link>
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
                                Ghostwriting Excellence
                            </h2>
                            <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                              Bring your stories to life with our seasoned ghostwriters. Whether it&apos;s compelling Fiction that captivates or insightful Non-Fiction that informs, we craft narratives that resonate. From the initial concept to the final draft, your voice, amplified by our expertise.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-5 mil-mb-80">
                          <div className="mil-image-frame mil-up">
                            <div className="feature-image-placeholder">
                              <img
                      src="/img/services/ghostwriting.png"
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

export default GhostwritingPage;