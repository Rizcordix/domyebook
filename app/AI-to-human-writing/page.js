import Link from "next/link";
import PlaxLayout from "@/layouts/PlaxLayout";
import Image from "next/image";
import EbookServicesComponent from "@/components/genericservices";



export const metadata = {
  title: "AI-Enhanced Human Writing | DoMyEbook",
  description: "AI-enhanced human writing services by DoMyEbook. Combine the creativity of human writers with the efficiency of AI.",
  keywords: "AI Writing, Human Writing, Ebook Writing, DoMyEbook",
  openGraph: {
    title: "AI-Enhanced Human Writing | DoMyEbook",
    description: "Have questions about ebook writing or publishing? Contact the DoMyEbook team for expert support and guidance.",
    type: "website",
    url: "https://domyebook.com/AI-to-human-writing",
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
                    AI-Enhanced Human Writing
                  </h1>
                  <p className="mil-text-m mil-soft mil-mb-40">
                    Experience top-notch AI-enhanced human writing services tailored to your needs.
                  </p>
                  <ul className="mil-breadcrumbs mil-center">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/AI-human-writing">AI-Enhanced Human Writing</Link>
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
                             For those utilizing AI in their writing process, our specialized editors humanize and polish your AI-generated content, ensuring it reads authentically and meets professional publishing standards
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
}

export default Page;