import Link from "next/link";
import PlaxLayout from "@/layouts/PlaxLayout";
import Image from "next/image";
import EbookServicesComponent from "@/components/genericservices";

export const metadata = {
  title: "Signature eBook Design | DoMyEbook",
  description: "Elevate your ebook’s visual appeal with custom designs, illustrations, and immersive interactive elements.",
  keywords: "ebook design, interactive ebooks, custom ebook layout, ebook illustrations, visual storytelling, DoMyEbook design",
  openGraph: {
    title: "Signature eBook Design | DoMyEbook",
    description: "Transform your manuscript into a visually immersive experience with our custom ebook design services.",
    type: "website",
    url: "https://domyebook.com/signature-ebook-design",
    images: ["https://domyebook.com/img/logo.png"],
  },
};

const SignatureEbookDesignPage = () => {
  return (
    <PlaxLayout>
      <div className="features-page">
        {/* Banner Section */}
        <div className="mil-banner2 mil-banner-inner mil-dissolve">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8">
                <div className="mil-banner-text mil-text-center">
                  <h2 className="mil-mb-10">Signature eBook Design</h2>
                  <p className="mil-text-m mil-soft mil-mb-40">
                    Captivate readers with engaging and professional eBook designs.
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
                  <h2 className="mil-mb-30 mil-up">Design That Resonates</h2>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    Go beyond basic formatting. Our designers craft stunning layouts, integrate interactive features like animations and hover effects, and deliver a digital reading experience that’s as compelling visually as it is narratively. Your ebook deserves to look as good as it reads.
                  </p>
                </div>
              </div>
              <div className="col-xl-5 mil-mb-80">
                <div className="mil-image-frame mil-up">
                  <div className="feature-image-placeholder">
                    <img
                      src="/img/services/signature.png"
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

export default SignatureEbookDesignPage;
