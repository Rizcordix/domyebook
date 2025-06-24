"use client";
import React, { useState, useEffect, useRef } from 'react';

const EbookServicesComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null); // Ref for the slider wrapper to control scroll position

  const services = [
    {
      title: "Ghostwriting",
      icon: "/img/icons/ghostwriting.svg", // Example icon path
      description: "Transform your ideas into compelling narratives with our professional ghostwriting services. Our experienced writers craft engaging content that captures your unique voice and vision, ensuring your story resonates with readers while maintaining complete confidentiality."
    },
    {
      title: "Editorial",
      icon: "/img/icons/editorial.svg", // Example icon path
      description: "Elevate your manuscript with our comprehensive editorial services. From developmental editing to copy editing and proofreading, we ensure your content is polished, coherent, and professionally presented to meet industry standards."
    },
    {
      title: "Design",
      icon: "/img/icons/design.svg", // Example icon path
      description: "Create visually stunning ebooks with our professional design services. We craft eye-catching covers, format your interior layout, and ensure your book looks professional across all digital platforms and devices."
    },
    {
      title: "Publishing",
      icon: "/img/icons/publishing.svg", // Example icon path
      description: "Navigate the publishing world with confidence. We handle the technical aspects of getting your book published across major platforms, including formatting, metadata optimization, and distribution strategy to maximize your reach."
    },
    {
      title: "Author Support",
      icon: "/img/icons/support.svg", // Example icon path
      description: "Receive ongoing support throughout your publishing journey. From marketing guidance to author branding and promotion strategies, we're here to help you succeed as a published author in today's competitive market."
    },
    {
      title: "Marketing",
      icon: "/img/icons/marketing.svg", // Example icon path
      description: "Boost your book's visibility with our tailored marketing strategies. We help you reach your target audience and maximize your sales potential through various promotional channels."
    }
  ];

  // Logic for automatic slide change and controlling visible slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

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
    <div className="ebook-services-container">
      <style jsx>{`
        .ebook-services-container {
          font-family: "Wagen", sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Section 1: Services Slider */
        .services-slider-section {
          background: #f8fcfd; /* Lighter, professional background */
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .section-heading {
          text-align: center;
          font-size: 3rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 60px;
          position: relative;
        }

        .section-heading::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 5px;
          background: linear-gradient(90deg, #7eb947, #a8d96e);
          border-radius: 5px;
        }

        .slider-container {
          position: relative;
          background: white;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08); /* More refined shadow */
          overflow: hidden;
        }

        .slider-wrapper {
          display: flex;
          scroll-behavior: smooth;
          overflow-x: hidden; /* Hide scrollbar for smooth visual */
          scroll-snap-type: x mandatory;
          gap: 30px; /* Gap between slides */
          padding: 40px; /* Padding inside the slider container */
        }

        .slide {
          min-width: calc((100% / var(--items-per-view)) - (var(--gap) * (var(--items-per-view) - 1) / var(--items-per-view)));
          flex-shrink: 0;
          background: #ffffff;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          scroll-snap-align: start;
        }

        .slide:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .slide-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #7eb947 0%, #90c955 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          box-shadow: 0 8px 20px rgba(126, 185, 71, 0.3);
          position: relative;
          overflow: hidden;
        }

        .slide-icon img {
          width: 45px;
          height: 45px;
          object-fit: contain;
          filter: brightness(0) invert(1); /* Makes SVG icons white */
        }

        .slide-icon::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
          transform: rotate(45deg);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .slide h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .slide p {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 0;
          max-width: 300px;
        }

        .slider-controls {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: none;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: #7eb947;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .slider-controls:hover {
          background: linear-gradient(135deg, #7eb947 0%, #90c955 100%);
          color: white;
          transform: translateY(-50%) scale(1.08);
          box-shadow: 0 8px 20px rgba(126, 185, 71, 0.4);
        }

        .prev-btn {
          left: 20px;
        }

        .next-btn {
          right: 20px;
        }

        .slider-pagination {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 40px;
        }

        .pagination-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ddd;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pagination-dot.active {
          background: linear-gradient(135deg, #7eb947 0%, #90c955 100%);
          transform: scale(1.2);
          box-shadow: 0 0 8px rgba(126, 185, 71, 0.4);
        }

        /* Section 2: Video Section */
        .video-section {
          background: #ffffff;
          padding: 100px 0;
        }

        .video-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .video-wrapper {
          position: relative;
          background: #f2fafa;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 16/9;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }

        .video-wrapper img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
        }

        .play-button {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #7eb947 0%, #90c955 50%, #6aa838 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          font-size: 2rem;
          color: white;
          box-shadow: 0 10px 30px rgba(126, 185, 71, 0.4);
          position: relative;
          overflow: hidden;
          z-index: 2;
        }

        .play-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .play-button:hover::before {
          opacity: 1;
        }

        .play-button:hover {
          transform: scale(1.15);
          background: linear-gradient(135deg, #90c955 0%, #7eb947 50%, #5a9630 100%);
          box-shadow: 0 15px 40px rgba(126, 185, 71, 0.5);
        }

        .video-text h2 {
          font-size: 3rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 30px;
          line-height: 1.2;
        }

        .video-text p {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 20px;
        }

        /* Section 3: Stats Banner */
        .stats-banner {
          background: linear-gradient(45deg, #7eb947, #90c955, #a8d96e, #7eb947); /* More varied gradient */
          background-size: 300% 300%;
          animation: gradientMovement 10s ease infinite alternate; /* Slower, smoother movement */
          padding: 60px 0; /* Significantly decreased height */
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        @keyframes gradientMovement {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
        }

        .stats-banner::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                radial-gradient(circle at 10% 10%, rgba(255,255,255,0.08) 0%, transparent 30%),
                radial-gradient(circle at 90% 90%, rgba(255,255,255,0.08) 0%, transparent 30%),
                radial-gradient(circle at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 50%),
                radial-gradient(circle at 50% 100%, rgba(255,255,255,0.05) 0%, transparent 50%);
            pointer-events: none;
            opacity: 0.8;
        }

        .stats-title {
          font-size: 3.2rem;
          font-weight: 700;
          margin-bottom: 40px;
          text-shadow: 0 3px 6px rgba(0,0,0,0.2);
          letter-spacing: -0.02em;
        }

        .stats-grid {
          display: flex; /* Use flexbox for non-card layout */
          justify-content: space-around; /* Distribute items evenly */
          align-items: flex-start; /* Align items to the top */
          gap: 30px; /* Space between stat items */
          max-width: 1100px;
          margin: 0 auto;
        }

        .stat-item {
          flex: 1; /* Allows items to grow and shrink */
          padding: 20px; /* Reduced padding */
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,0.1); /* Subtle background */
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .stat-item:hover {
            background: rgba(255,255,255,0.2);
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
            transform: translateY(-3px);
        }

        .stat-icon {
          margin-bottom: 15px; /* Reduced margin */
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          background-color: rgba(255,255,255,0.2);
          border-radius: 50%;
        }

        .stat-icon img {
          width: 35px; /* Smaller icons */
          height: 35px;
          object-fit: contain;
          filter: brightness(0) invert(1); /* Make SVG icons white */
        }

        .stat-number {
          font-size: 2.5rem; /* Slightly smaller number */
          font-weight: 700;
          margin-bottom: 5px;
          display: block;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .stat-label {
          font-size: 1rem; /* Smaller label */
          opacity: 0.95;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .stat-description {
          font-size: 0.85rem; /* Smaller description */
          opacity: 0.85;
          line-height: 1.3;
          text-align: center;
        }

        /* Section 4: Testimonials CTA */
        .testimonials-cta {
          background: #f8fcfd;
          padding: 100px 0;
          text-align: center;
        }

        .cta-icon {
          display: flex;
          justify-content: center;
          height: 100px;
        }


        .cta-icon::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.15), transparent);
          animation: rotate 4s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .cta-title {
          font-size: 3rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .cta-description {
          font-size: 1.1rem;
          color: #666;
          max-width: 650px;
          margin: 0 auto 35px;
          line-height: 1.6;
        }

        .cta-button {
          background: #7eb947;
          color: white;
          padding: 16px 35px;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 5px 15px rgba(126, 185, 71, 0.2);
        }

        .cta-button:hover {
          background: #6aa838;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(126, 185, 71, 0.3);
        }

        /* Responsive Design */
        @media (min-width: 1024px) {
          .slider-wrapper {
            --items-per-view: 3;
            --gap: 30px;
            padding: 40px;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .slider-wrapper {
            --items-per-view: 2;
            --gap: 20px;
            padding: 30px;
          }
          .slide h3 { font-size: 1.6rem; }
          .slide p { font-size: 0.9rem; }
          .stats-grid { gap: 20px; }
          .stat-number { font-size: 2.2rem; }
          .stat-label { font-size: 0.9rem; }
          .stat-description { font-size: 0.8rem; }
          .stats-title { font-size: 2.8rem; }
          .video-text h2, .cta-title { font-size: 2.8rem; }
        }

        @media (max-width: 767px) {
          .services-slider-section,
          .video-section,
          .stats-banner,
          .testimonials-cta {
            padding: 60px 0;
          }

          .section-heading { font-size: 2.5rem; margin-bottom: 40px; }

          .slider-wrapper {
            --items-per-view: 1;
            --gap: 0px;
            padding: 20px;
            flex-direction: column; /* Stack slides vertically on small screens */
            align-items: center;
          }
          .slide { min-width: 90%; padding: 25px; }
          .slide h3 { font-size: 1.5rem; }
          .slide p { font-size: 0.85rem; }

          .slider-controls { display: none; } /* Hide controls on very small screens if not needed */
          .slider-pagination { margin-top: 20px; }

          .video-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .video-text h2 { font-size: 2.2rem; }
          .video-text p { font-size: 1rem; }

          .stats-title { font-size: 2.2rem; margin-bottom: 30px; }
          .stats-grid {
            flex-direction: column; /* Stack stats vertically */
            align-items: center;
            gap: 25px;
          }
          .stat-item {
            width: 90%; /* Take up more width */
            padding: 25px;
          }
          .stat-number { font-size: 2.2rem; }
          .stat-label { font-size: 0.95rem; }
          .stat-description { font-size: 0.8rem; }

          .cta-title { font-size: 2.2rem; }
          .cta-description { font-size: 1rem; }
          .cta-button { padding: 14px 30px; font-size: 0.95rem; }
        }
      `}</style>

      {/* Section 2: Video Section */}
      <section className="video-section">
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
      </section>

      {/* Section 1: Services Slider */}
      <section className="services-slider-section mil-p-160-0">
        <div className="container">
          {/* <h2 className="section-heading">Our Comprehensive Ebook Services</h2> */}
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
      </section>

      

      {/* Section 3: Stats Banner */}
      <section className="stats-banner">
        <div className="container">
          <h2 className="stats-title">What We Have Accomplished So Far</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <img src="/img/stats-icon-1.svg" alt="Satisfied Authors Icon" /> {/* Placeholder icon */}
              </div>
              <span className="stat-number">Over 20,000</span>
              <div className="stat-label">Satisfied Customers</div>
              <div className="stat-description">
                Trusting us with their projects, satisfied with our quality and dedication.
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <img src="/img/stats-icon-2.svg" alt="Words Written Icon" /> {/* Placeholder icon */}
              </div>
              <span className="stat-number">Over 1 Billion</span>
              <div className="stat-label">Words Written and Edited</div>
              <div className="stat-description">
                Professional content created and refined by our amazing freelancers.
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <img src="/img/stats-icon-3.svg" alt="Content Creators Icon" /> {/* Placeholder icon */}
              </div>
              <span className="stat-number">Over 5000+</span>
              <div className="stat-label">Exceptional Content Creators</div>
              <div className="stat-description">
                Writers, Editors, Designers, Illustrators, Formatters, Narrators.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials CTA */}
      <section className="testimonials-cta">
        <div className="container">
          <div className="cta-icon">
            <img src="/img/inner-pages/testimonial_icon.webp" alt="Testimonials Icon" />
          </div>
          <h2 className="cta-title">What Our Authors Are Saying</h2>
          <p className="cta-description">
            Transparency and genuine feedback are important to us. Here&apos;s what some of our authors have to say about their experiences working with DomyEbook - The Premier Ebook Writing Service.
          </p>
          <a href="#testimonials" className="cta-button">
            Read Testimonials →
          </a>
        </div>
      </section>
    </div>
  );
};

export default EbookServicesComponent;