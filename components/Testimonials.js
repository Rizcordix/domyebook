"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Testimonials.module.css";

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
      <div className={styles.starRating}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`${styles.star} ${i < rating ? styles.filled : ""}`}
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
    <div className={styles.testimonialsContainer}>
      <div className={styles.floatingElements}>
        <div className={styles.floatingCircle}></div>
        <div className={styles.floatingCircle}></div>
        <div className={styles.floatingCircle}></div>
      </div>

      <div className={styles.testimonialsWrapper}>
        <div className={styles.testimonialsHeader}>
          <h2 className={styles.testimonialsTitle}>What Our Clients Say</h2>
        </div>

        <div
          className={styles.testimonialsSlider}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={styles.testimonialsTrack}
            style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={styles.testimonialSlide}
                style={{ minWidth: `${100 / slidesToShow}%` }}
              >
                <div className={styles.testimonialCard}>
                  <img
                    className={styles.quoteIcon}
                    src={testimonial.flag}
                    alt="flag"
                  />

                  <div className={styles.testimonialText}>&quot;{testimonial.text}&quot;</div>

                  <div className={styles.testimonialFooter}>
                    <Image
                      src={`/${testimonial.image}`}
                      alt={testimonial.name}
                      className={styles.customerAvatar}
                      width={50}
                      height={50}
                    />
                    <div className={styles.customerInfo}>
                      <h6 className={styles.customerName}>{testimonial.name}</h6>
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.navigationButtons}>
          <button className={styles.navButton} onClick={prevSlide}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className={styles.navButton} onClick={nextSlide}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className={styles.dotsIndicator}>
          {Array.from({ length: maxSlides + 1 }).map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.active : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
