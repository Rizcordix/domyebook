import Link from "next/link";
import PlaxLayout from "@/layouts/PlaxLayout";
import Image from "next/image";
import EbookServicesComponent from "@/components/genericservices";

export const metadata = {
  title: "Unwavering Quality & Plagiarism Checks | DoMyEbook",
  description: "Ensure your content's originality and professional standard with our meticulous quality and plagiarism review services.",
  keywords: "plagiarism check, quality assurance, original ebook content, ebook writing standards, DoMyEbook services",
  openGraph: {
    title: "Unwavering Quality & Plagiarism Checks | DoMyEbook",
    description: "Maintain integrity and excellence. Our quality assurance and plagiarism check services ensure your ebook meets the highest standards.",
    type: "website",
    url: "https://domyebook.com/unwavering-quality",
    images: ["https://domyebook.com/img/logo.png"],
  },
};

const UnwaveringQualityPage = () => {
  return (
    <PlaxLayout>
      <div className="features-page">
        {/* Banner Section */}
        <div className="mil-banner mil-banner-inner mil-dissolve">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8">
                <div className="mil-banner-text mil-text-center">
                  <h1 className="mil-mb-60">Unwavering Quality</h1>
                  <p className="mil-text-m mil-soft mil-mb-40">
                    Rigorous quality control and originality guaranteed for every manuscript.
                  </p>
                  <ul className="mil-breadcrumbs mil-center">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/unwavering-quality">Unwavering Quality</Link>
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
                  <h2 className="mil-mb-30 mil-up">Originality & Professionalism</h2>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    Rest assured your content is authentic and refined. Our multi-step quality assurance process checks every line for accuracy, consistency, and professionalism. Plagiarism detection tools further ensure that your work is 100% original and publication-ready.
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

export default UnwaveringQualityPage;
