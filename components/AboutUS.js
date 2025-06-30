'use client'
import Link from "next/link";
import { useState, useEffect } from 'react';

// Enhanced Rotating Vision List Component with True Circular Rolling Effect
const RotatingVisionList = () => {
  const visionItems = [
    {
      title: "Vision for Quality",
      description: "Our vision is to provide high-quality eBook writing services that simplify the publishing process and empower authors."
    },
    {
      title: "Innovation Excellence", 
      description: "We continuously innovate our writing and publishing techniques to deliver cutting-edge solutions for modern authors."
    },
    {
      title: "Global Impact",
      description: "Our mission extends globally, helping authors from around the world bring their stories to life with professional expertise."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % visionItems.length);
        setIsAnimating(false);
      }, 800); // Match the CSS transition duration
    }, 4000);

    return () => clearInterval(interval);
  }, [nextIndex, visionItems.length]);

  return (
    <>
      <ul className="mil-list-2 mil-type-2">
        <li>
          <div className="mil-up">
            <div className="rolling-container">
              {/* Current Item */}
              <div 
                className={`rolling-item ${isAnimating ? 'rolling-out' : 'current'}`}
                key={`item-${currentIndex}`}
              >
                <h5 className="mil-mb-15">
                  {visionItems[currentIndex].title}
                </h5>
                <p className="mil-text-m mil-soft">
                  {visionItems[currentIndex].description}
                </p>
              </div>
              
              {/* Next Item - Only visible during animation */}
              {isAnimating && (
                <div 
                  className="rolling-item rolling-in"
                  key={`item-${nextIndex}`}
                >
                  <h5 className="mil-mb-15">
                    {visionItems[nextIndex].title}
                  </h5>
                  <p className="mil-text-m mil-soft">
                    {visionItems[nextIndex].description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </li>
      </ul>

      <style jsx>{`
        .rolling-container {
          position: relative;
          min-height: 140px;
          overflow: hidden;
          perspective: 1500px;
          perspective-origin: center center;
        }
        
        .rolling-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1),
                     opacity 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
          will-change: transform, opacity;
        }
        
        /* Default visible state */
        .rolling-item.current {
          transform: translateY(0%) rotateX(0deg);
          opacity: 1;
          z-index: 2;
        }
        
        /* Rolling out animation */
        .rolling-item.rolling-out {
          transform: translateY(-100%) rotateX(90deg);
          opacity: 0;
          z-index: 1;
        }
        
        /* Rolling in animation */
        .rolling-item.rolling-in {
          transform: translateY(0%) rotateX(0deg);
          opacity: 1;
          z-index: 3;
          animation: rollInFromBottom 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
        }
        
        @keyframes rollInFromBottom {
          0% {
            transform: translateY(100%) rotateX(-90deg);
            opacity: 0;
          }
          100% {
            transform: translateY(0%) rotateX(0deg);
            opacity: 1;
          }
        }
        
        /* Text elements with 3D depth */
        .rolling-item h5 {
          transform: translateZ(20px);
          transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1),
                     opacity 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
          backface-visibility: hidden;
        }
        
        .rolling-item p {
          transform: translateZ(15px);
          transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) 0.05s,
                     opacity 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) 0.05s;
          backface-visibility: hidden;
        }
        
        /* Text animation during transitions */
        .rolling-out h5 {
          transform: translateZ(-20px) rotateX(30deg);
          opacity: 0;
        }
        
        .rolling-out p {
          transform: translateZ(-15px) rotateX(30deg);
          opacity: 0;
        }
        
        /* Visual effects */
        .rolling-item {
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08));
        }
        
        .rolling-in {
          filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.12));
        }
        
        .rolling-out {
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.15));
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .rolling-container {
            min-height: 160px;
            perspective: 1200px;
          }
          
          .rolling-item {
            transition-duration: 0.7s;
          }
          
          .rolling-item h5,
          .rolling-item p {
            transition-duration: 0.7s;
          }
          
          .rolling-in {
            animation-duration: 0.7s;
          }
        }
        
        @media (max-width: 480px) {
          .rolling-container {
            min-height: 180px;
            perspective: 1000px;
          }
          
          .rolling-item {
            transition-duration: 0.6s;
          }
          
          .rolling-item h5,
          .rolling-item p {
            transition-duration: 0.6s;
          }
          
          .rolling-in {
            animation-duration: 0.6s;
          }
        }
        
        /* Initial page load animation */
        @keyframes rollIn {
          from {
            opacity: 0;
            transform: translateY(50px) rotateX(-30deg);
          }
          to {
            opacity: 1;
            transform: translateY(0%) rotateX(0deg);
          }
        }
        
        .rolling-container {
          animation: rollIn 1.2s ease-out;
        }
        
        /* Hardware acceleration optimization */
        .rolling-item,
        .rolling-item h5,
        .rolling-item p {
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </>
  );
};

const Aboutpage = () => {
  return (
   <>

      <div className="mil-banner mil-banner-inner mil-dissolve">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                {/* <div className="mil-text-m mil-mb-20">About Us</div> */}
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
              <RotatingVisionList />
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  // width={500}
                  // height={500}
                  src="/img/about/about_us_1.png"
                  alt="image"
                  // className="mil-scale-img"
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
                <span className="mil-accent mil-counter" data-number={7}>
                  10
                </span>
                <span className="mil-pale">+</span>
              </p>
              <h5>Years of Experience</h5>
            </div>
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number="371">
                  500
                </span>
                <span className="mil-pale">+</span>
              </p>
              <h5>Successful Projects</h5>
            </div>
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number={13}>
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


        <div className="mil-cta mil-up">
          <div className="container">
            <div className="mil-out-frame mil-p-160-100">
          <div className="row justify-content-center mil-text-center">
            <div className="col-xl-8 mil-mb-80-adaptive-30">
              <h2 className="mil-up" style={{ textAlign: 'center' }}>
            Our Strengths: Building Trust <br />
            with Every eBook Project
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 mil-mb-60">
              <div className="mil-icon-box" style={{ textAlign: 'center' }}>
            <img
              src="/img/about/About_Us_Expert_Team_of_Writers_Icon.png"
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
              <div className="mil-icon-box" style={{ textAlign: 'center' }}>
            <img
              src="/img/about/About_Us_Comprehensive_Services_Icon.png"
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
              <div className="mil-icon-box" style={{ textAlign: 'center' }}>
            <img
              src="/img/about/commitment.png"
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
                  src="/img/about/about-us-2.png"
                  alt="image"
                  // className="mil-scale-img"
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
              <h5 className="mil-mb-30" style={{ fontStyle: 'italic', textAlign: 'center' }}>
                &quot;At DoMyEbook, transparency is not just a promise; it&apos;s the cornerstone of our relationship with you. We believe that trust is built with clear policies and coherent actions.&quot;
              </h5>
              <p className="mil-text-m mil-soft mil-mb-60" style={{ textAlign: 'center' }}>- DoMyEbook Team</p>
            </div>
          </div>
        </div>
      </div>
      {/* quote end */}
      </>
  );
};
export default Aboutpage;