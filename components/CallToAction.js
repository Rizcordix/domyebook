import Link from "next/link";
import Image from "next/image";

export const CallToAction1 = () => {
  return (
    <div
      className="mil-cta"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="container">
        <div
          className="mil-out-frame mil-visible mil-image mil-illustration-fix mil-p-60-0"
          style={{
            maxHeight: '100vh',
          }}
        >
          <div className="row align-items-end">
            <div className="mil-text-center">
              <h2 className="mil-mb-30 mil-light mil-up">
                Buy with Confidence, Guaranteed <br />
                Protection for your purchases
              </h2>
              <p className="mil-text-m mil-dark-soft mil-mb-60 mil-up"></p>
              <p className="mil-text-m mil-dark-soft mil-mb-60 mil-up" style={{ color: "#fff" }}>
                Let&apos;s Make Sure Your Ebook Is Safe. <br />
                Click below to get started, and we&apos;ll take care of the rest.
              </p>

              <div className="mil-up mil-mb-60">
                <Link
                  href="/getquote"
                  className="mil-btn mil-button-transform mil-md mil-add-arrow"
                >
                  Get a Quote
                </Link>
              </div>
              <div className="mil-illustration-absolute mil-type-2 mil-up">
                <img
                  src="/img/home-2/Buy_with_Confidence,_Guaranteed.png" 
                  alt="illustration" 
                  layout="responsive"
                  width={2000} 
                  height={708}
                  style={{ 
                    maxWidth: "100%", 
                    height: "auto" 
                  }} // Ensures the image scales down on smaller screens
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export const CallToAction2 = () => {
  return (
    <div className="mil-cta mil-up">
      <div className="container">
        <div
          className="mil-out-frame mil-p-160-160"
          style={{ backgroundImage: "url(img/home-3/5.png)" }}
        >
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-7 mil-sm-text-center">
              <h2 className="mil-light mil-mb-30 mil-up">
                Discover the freedom <br />
                of Total Financial Control
              </h2>
              <p className="mil-text-m mil-mb-60 mil-dark-soft mil-up">
                Join Plax and take the first step towards a more <br /> balanced
                and hassle-free financial life.
              </p>
              <div className="mil-buttons-frame mil-up">
                <a href="https://apps.apple.com/" target="_blank" className="mil-btn mil-md">
                  App Store
                </a>
                <a href="https://play.google.com/" target="_blank" className="mil-btn mil-border mil-md">
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};