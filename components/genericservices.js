"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './genericservices.module.css';

const EbookServicesComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const sliderRef = useRef(null); // Ref for the slider wrapper to control scroll position

  const services = [
    {
      title: "Ghostwriting",
      icon: "/img/icons/Ghostwriting-icon.png", // Example icon path
      description: "Transform your ideas into compelling narratives with our professional ghostwriting services. Our experienced writers craft engaging content that captures your unique voice and vision, ensuring your story resonates with readers while maintaining complete confidentiality."
    },
    {
      title: "Editorial",
      icon: "/img/icons/editorial.png", // Example icon path
      description: "Elevate your manuscript with our comprehensive editorial services. From developmental editing to copy editing and proofreading, we ensure your content is polished, coherent, and professionally presented to meet industry standards."
    },
    {
      title: "Design",
      icon: "/img/icons/design.png", // Example icon path
      description: "Create visually stunning ebooks with our professional design services. We craft eye-catching covers, format your interior layout, and ensure your book looks professional across all digital platforms and devices."
    },
    {
      title: "Publishing",
      icon: "/img/icons/publishing.png", // Example icon path
      description: "Navigate the publishing world with confidence. We handle the technical aspects of getting your book published across major platforms, including formatting, metadata optimization, and distribution strategy to maximize your reach."
    },
    {
      title: "Author Support",
      icon: "/img/icons/support.png", // Example icon path
      description: "Receive ongoing support throughout your publishing journey. From marketing guidance to author branding and promotion strategies, we're here to help you succeed as a published author in today's competitive market."
    },
    {
      title: "Marketing",
      icon: "/img/icons/marketing.png", // Example icon path
      description: "Boost your book's visibility with our tailored marketing strategies. We help you reach your target audience and maximize your sales potential through various promotional channels."
    }
  ];

  // // Logic for automatic slide change and controlling visible slides
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % services.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [services.length]);

  useEffect(() => {
    setMounted(true); // Set mounted to true after the component is mounted
  }, []);

  useEffect(() => {
    if (mounted) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [services.length, mounted]);

  // Adjust scroll position when currentSlide changes
  useEffect(() => {
    if (sliderRef.current) {
      // Calculate scroll position based on how many items are visible
      // This is a simplified approach, for true multiple slides, you'd calculate based on item width and gap
      const slideWidth = sliderRef.current.children[0]?.offsetWidth || 0;
      const gap = 30; // Assuming 30px gap from CSS
      const itemsPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      const scrollTo = Math.floor(currentSlide / itemsPerView) * (slideWidth * itemsPerView + gap * (itemsPerView - 1));
      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  // The goToSlide function will need to be re-evaluated for showing multiple slides,
  // as each dot will represent a "page" or group of slides.
  // For now, it will just jump to the start of the slide corresponding to the dot.
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleSlidesCount = () => {
    if (typeof window === 'undefined') return 1; // Default for SSR
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const totalPages = Math.ceil(services.length / getVisibleSlidesCount());
  const currentPage = Math.floor(currentSlide / getVisibleSlidesCount());

  


  return (
    <div className={styles.ebookServicesContainer}>
      {/* Section 2: Video Section */}
      {/* <section className="video-section">
        <div className="container">
          <div className="video-content">
            <div className="video-wrapper">
              <img src="/img/inner-pages/6.png" alt="Video Placeholder Graphic" />
              <button className="play-button">
                ▶
              </button>
            </div>
            <div className="video-text">
              <h2>What&apos;s in Our Ebook Writing Package?</h2>
              <p>
                Discover how our comprehensive ebook writing services can transform your ideas into a professionally published book. From initial concept to final publication, we guide you through every step of the process with expert support and industry-leading quality.
              </p>
              <p>
                Watch this quick overview to learn more about our complete ebook package and find out how we can turn your vision into an epic page-turner that captivates readers and achieves your publishing goals.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Section 1: Services Slider */}
      {/* <section className="services-slider-section mil-p-160-0">
        <div className="container">
          <div className="slider-container">
            <div className="slider-wrapper" ref={sliderRef}>
              {services.map((service, index) => (
                <div key={index} className="slide">
                  <div className="slide-icon">
                    <img src={service.icon || "/img/brands/2.svg"} alt={`${service.title} icon`} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
            
            <button className="slider-controls prev-btn" onClick={prevSlide}>
              &#8249;
            </button>
            <button className="slider-controls next-btn" onClick={nextSlide}>
              &#8250;
            </button>
          </div>
          
          <div className="slider-pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                className={`pagination-dot ${index === currentPage ? 'active' : ''}`}
                onClick={() => goToSlide(index * getVisibleSlidesCount())} // Go to the first slide of the page
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Section 3: Stats Banner */}
        <section className={styles.statsBanner}>
          <div className={`container ${styles.container}`}>
            <h2 className={styles.statsTitle}>What We Have Accomplished So Far</h2>
            <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <img
            src="/img/icons/customer-11.png"
            alt="Satisfied Authors Icon"
              />
              </div>
              <span className={styles.statNumber}>Over 120</span>
              <div className={styles.statLabel}>Satisfied Customers</div>
              <div className={styles.statDescription}>
                Trusting us with their projects, satisfied with our quality and dedication.
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <img src="/img/icons/editor-11.png" alt="Words Written Icon" /> {/* Placeholder icon */}
              </div>
              <span className={styles.statNumber}>Over 1 Million</span>
              <div className={styles.statLabel}>Words Written and Edited</div>
              <div className={styles.statDescription}>
                Professional content created and refined by our amazing freelancers.
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <img src="/img/icons/content-11.png" alt="Content Creators Icon" /> {/* Placeholder icon */}
              </div>
              <span className={styles.statNumber}>Over 50+</span>
              <div className={styles.statLabel}>Exceptional Content Creators</div>
              <div className={styles.statDescription}>
                Writers, Editors, Designers, Illustrators, Formatters, Narrators.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials CTA */}
      <section className={styles.testimonialsCta}>
        <div className={`container ${styles.container}`}>
          <div className={styles.ctaIcon}>
            <img src="/img/inner-pages/testimonial_icon.webp" alt="Testimonials Icon" />
          </div>
          <h2 className={styles.ctaTitle}>What Our Authors Are Saying</h2>
          <p className={styles.ctaDescription}>
            Transparency and genuine feedback are important to us. Here&apos;s what some of our authors have to say about their experiences working with DomyEbook - The Premier Ebook Writing Service.
          </p>
          <div className="mil-up mil-mb-60">
                <Link
                  href="/testimonials"
                  className="mil-btn mil-button-transform mil-md mil-add-arrow"
                >
                  Testimonials
                </Link>
              </div>
        </div>
      </section>
    </div>
  );
};

export default EbookServicesComponent;