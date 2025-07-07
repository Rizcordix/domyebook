import Link from "next/link";
import Image from "next/image";

export const CallToAction1 = () => {
  return (
    <div
      className="mil-cta mil-up"
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
              <p className="mil-text-m mil-dark-soft mil-mb-60 mil-up">

              </p>
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
                <img src="/img/home-2/call_to_action.png" alt="illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};