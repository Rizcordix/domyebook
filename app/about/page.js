import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";

export const metadata = {
  title: "About Us | DoMyEbook",
  description: "Learn more about DoMyEbook, our mission, vision, and values that drive our commitment to deliver expert ebook writing, editing, publishing, and marketing services.",
  keywords: "About DoMyEbook, ebook writing services, ghostwriting, ebook publishing, editing, proofreading, book cover design, promo video, audiobook",
  openGraph: {
    title: "About DoMyEbook | Trusted eBook Experts",
    description: "DoMyEbook provides comprehensive ebook services with a team of experienced writers and editors. Discover our story, values, and what sets us apart.",
    type: "website",
    url: "https://domyebook.com/about",
    images: ["https://domyebook.com/public/img/logo.png"], // Replace with your actual image if needed
  },
};

const page = () => {
  return (
    <PlaxLayout bg={false}>

      <div className="mil-banner mil-banner-inner mil-dissolve">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <div className="mil-text-m mil-mb-20">About Us</div>
                <h1 className="mil-mb-60">
                  More than a Platform, Expert eBook Writing Services
                </h1>
                <ul className="mil-breadcrumbs mil-center">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="about">About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* features */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
                The Vision that Drives Our Team
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                At DoMyEbook, we are on a mission to simplify the process of creating and publishing eBooks. We aim to provide authors with high-quality writing, editing, and publishing services to help them bring their ideas to life. From ghostwriting to final publication, our expert team ensures that each project is treated with precision and care.
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Vision for Quality</h5>
                    <p className="mil-text-m mil-soft">
                      Our vision is to provide high-quality eBook writing services that simplify the publishing process and empower authors.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="/img/inner-pages/1.png"
                  alt="image"
                  className="mil-scale-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}

      {/* facts */}
      <div className="mil-facts mil-p-0-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number={10}>
                  10
                </span>
                <span className="mil-pale">+</span>
              </p>
              <h5>Years of Experience</h5>
            </div>
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number="500">
                  500
                </span>
                <span className="mil-pale">+</span>
              </p>
              <h5>Successful Projects</h5>
            </div>
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number={50}>
                  50
                </span>
                <span className="mil-pale">+</span>
              </p>
              <h5>Countries Served</h5>
            </div>
          </div>
        </div>
      </div>
      {/* facts end */}

      {/* call to action */}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up">
                  Our Strengths: Building Trust <br />
                  with Every eBook Project
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="/img/inner-pages/icons/1.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Expert Team of Writers</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Our team is dedicated to providing you with professional ghostwriting services, ensuring that your ideas are conveyed perfectly.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="/img/inner-pages/icons/2.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Comprehensive Services</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    From writing to publishing, we offer a complete range of eBook services to support authors in their journey.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="/img/inner-pages/icons/3.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Commitment to Quality</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    We take pride in delivering high-quality, error-free eBooks that meet your expectations every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}

      {/* features */}
      <div className="mil-features mil-p-160-0">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
                Our Values: The Foundation of Trust
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                At DoMyEbook, our core values are centered around transparency, excellence, and client satisfaction. We work with the utmost professionalism to ensure your project is a success.
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Commitment to Excellence:</h5>
                    <p className="mil-text-m mil-soft">
                      We deliver high-quality writing, editing, and formatting services that meet your needs and exceed your expectations.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Absolute Transparency:</h5>
                    <p className="mil-text-m mil-soft">
                      We maintain transparency in every step of the process, ensuring you are informed and satisfied with the outcome.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-5 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="/img/inner-pages/2.png"
                  alt="image"
                  className="mil-scale-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}

      {/* quote */}
      <div className="mil-quote mil-p-60-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h4 className="mil-mb-30">
                &quot;At DoMyEbook, transparency is not just a promise; it&apos;s the cornerstone of our relationship with you. We believe that trust is built with clear policies and coherent actions.&quot;
              </h4>
              <p className="mil-text-m mil-soft mil-mb-60">- DoMyEbook Team</p>
            </div>
          </div>
        </div>
      </div>
      {/* quote end */}
    </PlaxLayout>
  );
};
export default page;
