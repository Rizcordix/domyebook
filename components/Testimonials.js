"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      text: "I had never felt so connected to my writing process. The support from Do My Ebook has kept me informed every step of the way, giving me confidence that my ebook is in great hands. They truly care about their clients and their work.",
      name: "John Schmidt",
      image: "img/boy3.webp",
      flag: "img/flags/germany.svg",
      rating: 5,
    },
    {
      text: "The team at Do My Ebook truly goes above and beyond. They've helped me transform my manuscript into a professional, polished ebook. Their personalized service and attention to detail are unmatched.",
      name: "Lisa Paul",
      image: "img/girl4.webp",
      flag: "img/flags/us.svg",
      rating: 5,
    },
    {
      text: "From formatting to publishing, Do My Ebook has been a lifesaver. I'm so grateful for their efficient service and excellent communication throughout the process. It feels like having a personal assistant for my ebook journey.",
      name: "Dennis Noah",
      image: "img/boy4.webp",
      flag: "img/flags/uk.svg",
      rating: 5,
    },
    {
      text: "Do My Ebook provided exceptional design services! My ebook looks incredibly professional and engaging. They understood my vision perfectly and brought it to life with their creative expertise. Highly recommend for anyone seeking top-tier ebook design.",
      name: "Joyce Aaron",
      image: "img/girl5.webp",
      flag: "img/flags/us.svg",
      rating: 5,
    },
    {
      text: "As a first-time ebook author, I was overwhelmed. Do My Ebook made the entire process seamless. Their guidance on formatting and publishing was invaluable, and I'm thrilled with the final product. A truly stress-free experience!",
      name: "Ethan Zachary",
      image: "img/boy5.webp",
      flag: "img/flags/uk.svg",
      rating: 5,
    },
    {
      text: "I'm incredibly impressed with the quality of work from Do My Ebook. They took my raw manuscript and turned it into a beautifully formatted and professional ebook. The communication was excellent, and they delivered on time!",
      name: "Heather Jose",
      image: "img/girl6.webp",
      flag: "img/flags/us.svg",
      rating: 5,
    },
  ];

  // Handle responsive slides to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlides = Math.max(0, testimonials.length - slidesToShow);

  // Auto-rotate functionality
  useEffect(() => {
    if (!isHovered && maxSlides > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % (maxSlides + 1));
      }, 2000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered, maxSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (maxSlides + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides + 1) % (maxSlides + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`star ${i < rating ? "filled" : ""}`}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill={i < rating ? "#7eb947" : "#e0e0e0"}
            />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="testimonials-container">
      <style jsx>{`
        .testimonials-container {
          background: #ffffff;
          padding: 80px 20px;
          position: relative;
          overflow: hidden;
        }

        .testimonials-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .testimonials-title {
          font-size: 2.5rem;
          color: #000;
          margin-bottom: 16px;
          font-weight: 700;
          position: relative;
        }

        .testimonials-title::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #7eb947, #5fa032);
          border-radius: 2px;
        }

        .testimonials-subtitle {
          font-size: 1.1rem;
          color: #666;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .testimonials-slider {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
        }

        .testimonials-track {
          display: flex;
          transform: translateX(-${currentSlide * (100 / slidesToShow)}%);
          transition: transform 0.5s ease-in-out;
        }

        .testimonial-slide {
          min-width: ${100 / slidesToShow}%;
          display: flex;
          justify-content: center;
          align-items: stretch;
          padding: 0 15px;
        }

        .testimonial-card {
          background: #f2fafa;
          border-radius: 20px;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 30px rgba(126, 185, 71, 0.1);
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
          text-align: center;
          width: 100%;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        // .testimonial-card:hover {
        //   transform: translateY(-5px);
        //   box-shadow: 0 15px 40px rgba(126, 185, 71, 0.2);
        // }

        .testimonial-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 20px;
          padding: 2px;
          background: linear-gradient(135deg, #7eb947, #5fa032, #7eb947);
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: exclude;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
        }

        .quote-icon {
          width: 50px;
          height: 35px;
          margin: 0 auto 25px;
          opacity: 0.8;
        }

        .quote-icon path {
          fill: #7eb947;
        }

        .testimonial-text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #333;
          margin-bottom: 25px;
          font-style: italic;
          position: relative;
          flex-grow: 1;
          display: flex;
          align-items: center;
          text-align: center;
        }

        .testimonial-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-top: auto;
        }

        .customer-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #7eb947;
          box-shadow: 0 4px 12px rgba(126, 185, 71, 0.2);
        }

        .customer-info {
          text-align: left;
        }

        .customer-name {
          font-size: 1rem;
          font-weight: 600;
          color: #000;
          margin: 0 0 8px 0;
        }

        .star-rating {
          display: flex;
          gap: 2px;
        }

        .star {
          transition: all 0.2s ease;
        }

        .star.filled {
          transform: scale(1.1);
        }

        .navigation-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 40px;
        }

        .nav-button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: white;
          border: 2px solid #7eb947;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(126, 185, 71, 0.1);
        }

        .nav-button:hover {
          background: #7eb947;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(126, 185, 71, 0.3);
        }

        .nav-button:hover svg {
          stroke: white;
        }

        .nav-button svg {
          width: 20px;
          height: 20px;
          stroke: #7eb947;
          transition: stroke 0.3s ease;
        }

        .dots-indicator {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ddd;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #7eb947;
          transform: scale(1.2);
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-circle {
          color: #7eb947;
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            rgba(126, 185, 71, 0.4),
            rgba(126, 185, 71, 0.2)
          );
          animation: float 6s ease-in-out infinite;
        }

        .floating-circle:nth-child(1) {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-circle:nth-child(2) {
          width: 60px;
          height: 60px;
          top: 20%;
          right: 15%;
          animation-delay: 2s;
        }

        .floating-circle:nth-child(3) {
          width: 80px;
          height: 80px;
          bottom: 15%;
          left: 15%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @media (max-width: 1024px) {
          .testimonial-slide {
            min-width: 50%;
          }
          
          .testimonial-card {
            padding: 35px 25px;
          }
          
          .testimonial-text {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .testimonials-container {
            padding: 60px 15px;
          }

          .testimonials-title {
            font-size: 2rem;
          }

          .testimonial-slide {
            min-width: 100%;
            padding: 0 10px;
          }

          .testimonial-card {
            padding: 40px 30px;
          }

          .testimonial-text {
            font-size: 1.1rem;
          }

          .customer-avatar {
            width: 45px;
            height: 45px;
          }

          .testimonial-footer {
            flex-direction: column;
            gap: 15px;
          }

          .customer-info {
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .testimonials-title {
            font-size: 1.8rem;
          }
          .testimonials-subtitle {
            font-size: 1rem;
          }
          .testimonial-card {
            padding: 30px 20px;
          }
          .quote-icon {
            width: 45px;
            height: 30px;
            margin-bottom: 20px;
          }
          .testimonial-text {
            font-size: 1rem;
            margin-bottom: 20px;
          }
          .customer-avatar {
            width: 40px;
            height: 40px;
          }
          .customer-name {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <div className="floating-elements">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>

      <div className="testimonials-wrapper">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Clients Say</h2>
        </div>

        <div
          className="testimonials-slider"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="testimonials-track">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <img
                    className="quote-icon"
                    src={testimonial.flag}
                    alt="flag"
                  />

                  <div className="testimonial-text">&quot;{testimonial.text}&quot;</div>

                  <div className="testimonial-footer">
                    <Image
                      src={`/${testimonial.image}`}
                      alt={testimonial.name}
                      className="customer-avatar"
                      width={50}
                      height={50}
                    />
                    <div className="customer-info">
                      <h6 className="customer-name">{testimonial.name}</h6>
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="navigation-buttons">
          <button className="nav-button" onClick={prevSlide}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="nav-button" onClick={nextSlide}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="dots-indicator">
          {Array.from({ length: maxSlides + 1 }).map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;