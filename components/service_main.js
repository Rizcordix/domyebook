"use client";
import React, { useState, useEffect } from 'react';
import { PageBanner } from "@/components/Banner"; // Assuming PageBanner is in this path
import PlaxLayout from "@/layouts/PlaxLayout"; // Assuming PlaxLayout is in this path

const ServicesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(undefined); // Initialize to undefined

  const slideImages = [
    'img/services/ghostwriting.png',
    'img/services/Strategic.png',
    'img/service/Transform-Your-Ideas-Into-Literary-Masterpieces1.png',
    'img/services/AI-Enhanced.png'
  ];

  useEffect(() => {
    // This effect runs only on the client-side
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [slideImages.length]);

  return (
    <>
      {/* Page Banner */}
      <div className="mil-banner2 mil-banner-inner mil-dissolve" style={{ paddingTop: '80px'}}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                        <h2 className="mil-mb-10">
                          Extensive eBook Solutions
                        </h2>
                        </div>
                      </div>
                      </div>
                    </div>
                    </div>

      {/* Writing Services */}
      <div className="mil-features" style={{ backgroundColor: '#f2fafa', padding: '120px 0' }}> {/* Increased padding */}
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <span className="mil-suptitle mil-upper mil-mb-30" style={{ color: '#7eb947', fontSize: '1.5em' }}> {/* Adjusted font size */}
                Writing
              </span>
              <h2 className="mil-mb-30 mil-up" style={{ color: '#000' }}>
                Transform Your Ideas Into Literary Masterpieces
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up" style={{ color: '#666' }}>
                Our expert team of professional writers brings your vision to life with
                compelling narratives, engaging plots, and authentic voices. From concept
                to completion, we deliver exceptional writing that captivates readers.
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-30">
                <li className="mil-up" style={{ color: '#000' }}>
                  Ghostwriting Excellence
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  Strategic Plot & Outline Development
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  Children&apos;s Book Magic
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  AI-Enhanced Human Editing
                </li>
              </ul>
              <div className="mil-up">
                <a href="/getquote" className="mil-btn mil-m mil-add-arrow" style={{
                  backgroundColor: '#7eb947',
                  borderColor: '#7eb947'
                }}>
                  Get Quote
                </a>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up" style={{ position: 'relative', overflow: 'hidden' }}>
                {slideImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Writing Services ${index + 1}`}
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                    style={{
                      position: index === 0 ? 'relative' : 'absolute',
                      top: index === 0 ? 'auto' : '0',
                      left: index === 0 ? 'auto' : '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: currentSlide === index ? 1 : 0,
                      transition: 'opacity 0.8s ease-in-out'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Services */}
      <div className="mil-features" style={{ backgroundColor: 'white', padding: '120px 0' }}> {/* Increased padding */}
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <span className="mil-suptitle mil-upper mil-mb-30" style={{ color: '#7eb947', fontSize: '1.5em' }}> {/* Adjusted font size */}
                Editorial
              </span>
              <h2 className="mil-mb-30 mil-up" style={{ color: '#000' }}>
                Perfecting Every Word, Sentence, and Story
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up" style={{ color: '#666' }}>
                Our meticulous editorial process ensures your manuscript achieves the highest
                standards of clarity, coherence, and impact. We polish your work to professional
                publishing quality while preserving your unique voice and message.
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-30">
                <li className="mil-up" style={{ color: '#000' }}>
                  Precision Editing & Proofreading
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  Unwavering Quality & Plagiarism Checks
                </li>
              </ul>
              <div className="mil-up">
                <a href="/getquote" className="mil-btn mil-m mil-add-arrow" style={{
                  backgroundColor: '#7eb947',
                  borderColor: '#7eb947'
                }}>
                  Get Quote
                </a>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/service/Perfecting-Every-Word,-Sentence,-and-Story1.png"
                  alt="Editorial Services"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Services */}
      <div className="mil-features" style={{ backgroundColor: '#f2fafa', padding: '120px 0' }}> {/* Increased padding */}
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <span className="mil-suptitle mil-upper mil-mb-30" style={{ color: '#7eb947', fontSize: '1.5em' }}> {/* Adjusted font size */}
                Design
              </span>
              <h2 className="mil-mb-30 mil-up" style={{ color: '#000' }}>
                Visual Excellence That Commands Attention
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up" style={{ color: '#666' }}>
                Our creative design team crafts stunning visuals
                that not only attract readers but also communicate the essence of your story.
                From covers to illustrations, we create designs that sell.
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-30">
                <li className="mil-up" style={{ color: '#000' }}>
                  Signature eBook Design
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  Impactful Cover Artistry
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  Custom Illustrations
                </li>
              </ul>
              <div className="mil-up">
                <a href="/getquote" className="mil-btn mil-m mil-add-arrow" style={{
                  backgroundColor: '#7eb947',
                  borderColor: '#7eb947'
                }}>
                  Get Quote
                </a>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/service/Visual12.png"
                  alt="Design Services"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Publishing Services */}
      <div className="mil-features" style={{ backgroundColor: 'white', padding: '120px 0' }}> {/* Increased padding */}
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <span className="mil-suptitle mil-upper mil-mb-30" style={{ color: '#7eb947', fontSize: '1.5em' }}> {/* Adjusted font size */}
                Publishing
              </span>
              <h2 className="mil-mb-30 mil-up" style={{ color: '#000' }}>
                From Manuscript to Market Success
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up" style={{ color: '#666' }}>
                Navigate the complex world of publishing with our comprehensive solutions.
                We handle every technical detail and marketing element, ensuring your book
                reaches its target audience with maximum impact and professional presentation.
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-30">
                <li className="mil-up" style={{ color: '#000' }}>
                  Professional Book Formatting
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  Compelling Book Descriptions
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  Audio Ebook Production
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  Dynamic Video Promos
                </li>
              </ul>
              <div className="mil-up">
                <a href="/getquote" className="mil-btn mil-m mil-add-arrow" style={{
                  backgroundColor: '#7eb947',
                  borderColor: '#7eb947'
                }}>
                  Get Quote
                </a>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/service/Marketing _Business2.png"
                  alt="Publishing Services"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Author Support Services */}
      <div className="mil-features" style={{ backgroundColor: '#f2fafa', padding: '120px 0' }}> {/* Increased padding */}
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <span className="mil-suptitle mil-upper mil-mb-30" style={{ color: '#7eb947', fontSize: '1.5em' }}> {/* Adjusted font size */}
                Author Support
              </span>
              <h2 className="mil-mb-30 mil-up" style={{ color: '#000' }}>
                Your Success Is Our Mission
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up" style={{ color: '#666' }}>
                Beyond writing and publishing, we provide comprehensive support to ensure
                your author journey is smooth and successful. From project management to
                global reach, we&apos;re your dedicated publishing partner.
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-30">
                <li className="mil-up" style={{ color: '#000' }}>
                  End-to-End Project Management
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  Global Content Translation
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  Book Launch Bundle
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  Bulk Order Solutions
                </li>
              </ul>
              <div className="mil-up">
                <a href="/getquote" className="mil-btn mil-m mil-add-arrow" style={{
                  backgroundColor: '#7eb947',
                  borderColor: '#7eb947'
                }}>
                  Get Quote
                </a>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/service/Author-support1.png"
                  alt="Author Support Services"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mil-cta mil-up" style={{ backgroundColor: 'white', padding: '120px 0' }}> {/* Increased padding */}
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up" style={{ color: '#000' }}>
                  Ready to Transform Your Ideas Into Bestsellers?
                </h2>
                <p className="mil-text-m mil-soft mil-mb-30 mil-up" style={{ color: '#666' }}>
                  Join thousands of successful authors who&apos;ve trusted DoMyEbook with their
                  publishing journey. Let&apos;s turn your manuscript into a marketplace success story.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <div className="mil-mb-30 mil-up" style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#7eb947',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}>
                    <img src="/img/service/Services_2,500+_Books_Published.png" alt="icon" style={{ width: '40px', height: '40px' }} />
                  </div>
                  <h5 className="mil-mb-20 mil-up" style={{ color: '#000' }}>
                    2,500+ Books Published
                  </h5>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    Successfully published thousands of books across all genres with
                    professional quality and market-ready presentation.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <div className="mil-mb-30 mil-up" style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#7eb947',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}>
                    <img src="/img/service/Services_Client_Satisfaction.png" alt="icon" style={{ width: '40px', height: '40px' }} />
                  </div>
                  <h5 className="mil-mb-20 mil-up" style={{ color: '#000' }}>
                    98% Client Satisfaction
                  </h5>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    Our commitment to excellence ensures nearly perfect client satisfaction
                    with every project we complete.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <div className="mil-mb-30 mil-up" style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#7eb947',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}>
                    <img src="/img/service/Global-Icon.png" alt="icon" style={{ width: '40px', height: '40px' }} />
                  </div>
                  <h5 className="mil-mb-20 mil-up" style={{ color: '#000' }}>
                    Global Reach
                  </h5>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    Serving authors worldwide with 24/7 support and expertise in
                    multiple languages and markets.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-6 mil-mb-30">
                <div className="mil-up">
                  <a
                    href="/calendly"
                    className="mil-btn mil-m mil-add-arrow mil-mr-15"
                    style={{
                      backgroundColor: '#7eb947',
                      borderColor: '#7eb947',
                      marginRight: '15px',
                      display: 'inline-block',
                      // Only apply marginBottom based on isMobile if it's defined (client-side)
                      marginBottom: isMobile !== undefined ? (isMobile ? '10px' : '0px') : '0px',
                      justifyContent: 'center',
                      alignContent: 'center',
                      textAlign: 'center',
                    }}
                  >
                    Book a Free Consultation
                  </a>
                  <a
                    href="/how-it-works"
                    className="mil-btn mil-m mil-add-arrow mil-border"
                    style={{
                      borderColor: '#7eb947',
                      color: '#7eb947',
                      display: 'inline-block',
                      justifyContent: 'center',
                      alignContent: 'center',
                      textAlign: 'center',
                    }}
                  >
                    How It Works
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;