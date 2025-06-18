// Using Slick Carousel
// First, import Slick at the top of your component file:
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Component with Slick Carousel:
const BrandCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const brands = [
    { src: "img/brands/kindle.svg", alt: "Kindle" },
    { src: "img/brands/kobo.svg", alt: "Kobo" },
    { src: "img/brands/ibooks.svg", alt: "iBooks" },
    { src: "img/brands/scribd.svg", alt: "Scribd" },
    { src: "img/brands/GooglePlayBooks.svg", alt: "Google Play Books" },
    // Duplicate for more slides
    { src: "img/brands/kindle.svg", alt: "Kindle" },
    { src: "img/brands/kobo.svg", alt: "Kobo" },
    { src: "img/brands/ibooks.svg", alt: "iBooks" },
    { src: "img/brands/scribd.svg", alt: "Scribd" },
    { src: "img/brands/GooglePlayBooks.svg", alt: "Google Play Books" },
  ];

  return (
    <div className="mil-brands mil-p-80-80">
      <div className="container">
        <h5 className="mil-text-center mil-soft mil-mb-60 mil-up">
          Trusted by authors across major platforms!
        </h5>
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="mil-text-center">
              <div className="mil-brand">
                <img src={brand.src} alt={brand.alt} className="mil-up" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandCarousel;