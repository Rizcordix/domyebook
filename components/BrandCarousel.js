// Pure-CSS continuous logo marquee.
// Previously used react-slick + slick-carousel for a simple linear autoplay —
// replaced with a CSS animation (see BrandCarousel.module.css), which removed
// both libraries from the bundle and renders as a zero-JS server component.
import styles from "./BrandCarousel.module.css";

const brands = [
  { src: "/img/brands/amazon_kindle.svg", alt: "Kindle" },
  { src: "/img/brands/kobologo.svg", alt: "kobologo" },
  { src: "/img/brands/ibooks.svg", alt: "iBooks" },
  { src: "/img/brands/scribd.svg", alt: "Scribd" },
  { src: "/img/brands/GooglePlayBooks.svg", alt: "Google Play Books" },
];

const BrandCarousel = () => {
  return (
    <div className="mil-brands mil-p-80-80">
      <div className="container">
        <h5 className="mil-text-center mil-soft mil-mb-60 mil-up">
          Trusted by authors across major platforms!
        </h5>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {/* Two copies of the logo set make the -50% loop seamless */}
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className={styles.item}>
                <div className="mil-brand">
                  <img src={brand.src} alt={brand.alt} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
