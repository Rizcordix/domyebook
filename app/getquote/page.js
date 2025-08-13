import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";

const page = () => {
  return (
    <PlaxLayout>
      {/* <PageBanner pageName="Get a Quote" title="Get a Quote" /> */}

      <div className="mil-banner2 mil-banner-inner mil-dissolve">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <h2 className="mil-mb-10">
                  Get a Quote
                </h2>
                <p className="mil-text-m mil-soft mil-mb-40">
                  Fill out the form below to get a personalized quote for your ebook project. Our team will review your requirements and get back to you with a detailed proposal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Form Embed with Image */}
      <div
        style={{
          padding: "40px 0",
          display: "flex",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f2fafa 0%, #7eb947 100%)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1000px",
            height: "1600px", // Adjust if necessary
            overflow: "hidden",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            backgroundColor: "#f2fafa",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Banner Image */}
          <img
            src="/img/banner.webp"
            alt="Form Banner"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
          />

          {/* Google Form */}
          <div style={{ flex: 1 }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfEd455szG1s45jxvTSuGZbDA3mnYjy5XTh5CYymUqwqUzK9w/viewform?embedded=true"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
              title="Get a Quote Form"
              allowFullScreen
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>

      <div style={{ height: "60px" }} />
    </PlaxLayout>
  );
};

export default page;
