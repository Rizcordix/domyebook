import Link from "next/link";
import Image from "next/image";
const Banner = ({
  title = "Bring your ebook vision to life!",
  subTitle = "Turn Your Ideas into Profitable eBooks—Done For You.",
  img = "/img/home-2/1.png",
  style = { maxWidth: "135%", transform: "translateX(15%)" },
  dark = false,
}) => {
  return (
    <div className={`mil-banner mil-dissolve ${dark ? "mil-dark-2" : ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="mil-banner-text">
              <h6 className="mil-text-gradient-2 mil-mb-20">{subTitle}</h6>
              <h1 className="mil-display mil-text-gradient-3 mil-mb-60">
                {title}
              </h1>
              <div className="mil-buttons-frame">
                <Link href="getquote" className="mil-btn mil-md mil-add-arrow">
                  Get Quote
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=gRhoYxy9Oss"
                  className="mil-btn mil-md mil-light mil-add-play has-popup-video"
                >
                  Watch tutorial
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mil-banner-img">
              <img
                src={img} 
                alt="banner" 
                style={style} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;

export const PageBanner = ({
  title = "More than a Platform, a Financial Revolution",
  pageName = "About us",
}) => {
  return (
    <div className="mil-banner2 mil-banner-inner mil-dissolve">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-8">
            <div className="mil-banner-text mil-text-center">
              <h2 className="mil-mb-10">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
