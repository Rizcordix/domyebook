'use client'
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import styles from './AboutUS.module.css';

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
            <div className={styles.rollingContainer}>
              {/* Current Item */}
              <div
                className={`${styles.rollingItem} ${isAnimating ? styles.rollingOut : styles.current}`}
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
                  className={`${styles.rollingItem} ${styles.rollingIn}`}
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

    </>
  );
};

const Aboutpage = () => {
  return (
   <>

      <div className="mil-banner2 mil-banner-inner mil-dissolve" style={{ paddingTop: '80px'}}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                        <h2 className="mil-mb-10">
                          Expert eBook Writing Services
                        </h2>
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
                <Image
                  src="/img/about/about_us_1.png"
                  alt="image"
                  width={1260}
                  height={1340}
                  sizes="(max-width: 1200px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}

      {/* facts */}
        <div
          className="mil-facts mil-p-0-130"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <div className="container" style={{ width: '100%' }}>
            <div
          className="row"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            textAlign: 'center',
          }}
            >
          <div
            className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <p className="h1 mil-display mil-mb-15" style={{ textAlign: 'center' }}>
              <span className="mil-accent mil-counter" data-number={7}>
            10
              </span>
              <span className="mil-pale">+</span>
            </p>
            <h5 style={{ textAlign: 'center' }}>Years of Experience</h5>
          </div>
          <div
            className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <p className="h1 mil-display mil-mb-15" style={{ textAlign: 'center' }}>
              <span className="mil-accent mil-counter" data-number="371">
            500
              </span>
              <span className="mil-pale">+</span>
            </p>
            <h5 style={{ textAlign: 'center' }}>Successful Projects</h5>
          </div>
          <div
            className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <p className="h1 mil-display mil-mb-15" style={{ textAlign: 'center' }}>
              <span className="mil-accent mil-counter" data-number={13}>
            50
              </span>
              <span className="mil-pale">+</span>
            </p>
            <h5 style={{ textAlign: 'center' }}>Countries Served</h5>
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
            Our Strengths, Building Trust <br />
            with Every eBook Project
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 mil-mb-60">
              <div className="mil-icon-box" style={{ textAlign: 'center' }}>
            <Image
              src="/img/about/About_Us_Expert_Team_of_Writers_Icon.png"
              alt="icon"
              width={120}
              height={120}
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
            <Image
              src="/img/about/About_Us_Comprehensive_Services_Icon.png"
              alt="icon"
              width={120}
              height={120}
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
            <Image
              src="/img/about/commitment.png"
              alt="icon"
              width={120}
              height={120}
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
                <Image
                  src="/img/about/about-us-2.png"
                  alt="image"
                  width={1100}
                  height={1440}
                  sizes="(max-width: 1200px) 100vw, 42vw"
                  style={{ width: "100%", height: "auto" }}
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