"use client";
import { useState, useRef } from 'react'; // Import useState and useRef
import Banner from "@/components/Banner";
import { CallToAction1 } from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Special from "@/components/services2";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import Portfolio from "@/components/Portfolio";
import BrandCarousel from "@/components/BrandCarousel";
import BenefitsSection from "@/components/IconBoxes";

const Page = () => { // Renamed 'page' to 'Page' for consistency with component naming conventions
  // CSS for play button animations
  const playButtonStyles = `
    @keyframes btn-drop-13 {
      0% { transform: scale(1.1); }
      50% { transform: scale(1.3); }
      100% { transform: scale(1.1); }
    }
    
    @keyframes btn-drop-16 {
      0% { transform: scale(1.1); }
      50% { transform: scale(1.6); }
      100% { transform: scale(1.1); }
    }

    /* Enhanced mobile layout */
    @media (max-width: 767.98px) {
      .mil-banner {
        padding: 80px 0 !important;
        min-height: 90vh !important;
      }
      
      .mil-banner h1 {
        font-size: 2.2rem !important;
        margin-bottom: 20px !important;
      }
      
      .mil-banner p {
        font-size: 1rem !important;
        margin-bottom: 30px !important;
      }
    }
  `;

  // State to track if the video is playing
  const [isPlaying, setIsPlaying] = useState(true); // Video starts playing due to autoplay

  // Ref to access the video DOM element
  const videoRef = useRef(null);

  // Function to toggle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <PlaxLayout>
      {/* Add keyframe animations */}
      <style>{playButtonStyles}</style>
      
      {/* banner */}
        <Banner />
        
        {/* New Animated Hero Section */}
        <div className="mil-banner" style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`,
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '70vh',
          maxHeight: '75vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden'
        }}>
          {/* Background Video */}
          <video
            ref={videoRef} // Attach ref to video element
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0
            }}
          >
            <source src="/img/home-2/herosection.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for dark effect */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))',
              zIndex: 1
            }}
          />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-12">
                {/* Main Heading exxxx */}
                <h1 className="mil-mb-30 mil-up" style={{
                  fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                  fontWeight: 'bold',
                  color: 'white',
                  lineHeight: '1.2',
                  animationDelay: '0.2s'
                }}>
                  Your Story,
                  <br />
                  Our Words,
                  <br />
                  Professionally Published.
                </h1>
                
                {/* Descriptionexx */}
                <p className="mil-text-m mil-soft mil-mb-60 mil-up" style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1.2rem',
                  maxWidth: '600px',
                  animationDelay: '0.4s'
                }}>
                  We believe your story deserves to be shared with the world. Let us help you turn your manuscript into a stunning ebook, whether it&apos;s formatting, design, or distribution, we&apos;ve got you covered every step of the way.
                </p>
                
                {/* Mobile: Client Section + Play Button Combined */}
                <div className="d-xl-none">
                  <div className="mil-up" style={{ animationDelay: '0.6s' }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '20px'
                    }}>
                      {/* Client Section */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: '1', minWidth: '250px' }}>
                        {/* Client Avatars */}
                        <div style={{ display: 'flex', marginLeft: '10px' }}>
                          <img
                            src="img/girl1.jpg"
                            alt="Client 1"
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              border: '2px solid white',
                              objectFit: 'cover',
                              marginLeft: '-8px',
                              transition: 'transform 0.3s ease'
                            }}
                            className="mil-up"
                          />
                          <img
                            src="img/girl2.jpg"
                            alt="Client 2"
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              border: '2px solid white',
                              objectFit: 'cover',
                              marginLeft: '-8px',
                              transition: 'transform 0.3s ease'
                            }}
                            className="mil-up"
                          />
                          <img
                            src="img/girl3.jpg"
                            alt="Client 3"
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              border: '2px solid white',
                              objectFit: 'cover',
                              marginLeft: '-8px',
                              transition: 'transform 0.3s ease'
                            }}
                            className="mil-up"
                          />
                          <img
                            src="img/boy1.jpg"
                            alt="Client 4"
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              border: '2px solid white',
                              objectFit: 'cover',
                              marginLeft: '-8px',
                              transition: 'transform 0.3s ease'
                            }}
                            className="mil-up"
                          />
                          <img
                            src="img/boy2.jpg"
                            alt="Client 5"
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              border: '2px solid white',
                              objectFit: 'cover',
                              marginLeft: '-8px',
                              transition: 'transform 0.3s ease'
                            }}
                            className="mil-up"
                          />
                        </div>
                      </div>
                      
                      <div style={{ color: 'white' }}>
                        <p style={{ margin: '0', fontWeight: '600', fontSize: '0.9rem', color: '#fff', }}>We have over 4,000 clients</p>
                      </div>
                      
                      {/* Play Button - Mobile */}
                      <div style={{ animationDelay: '0.8s' }}>
                        <div 
                          className="mobile-play-wrapper"
                          style={{
                            position: 'relative',
                            display: 'inline-block',
                            width: '70px',
                            height: '70px',
                          }}
                        >
                          {/* Animated rings */}
                          <span style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 1
                          }}>
                            <span style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              opacity: 0.4,
                              transform: 'scale(1.1)',
                              background: 'rgba(255, 255, 255, 0.1)',
                              width: '100%',
                              height: '100%',
                              borderRadius: '50%',
                              animation: 'btn-drop-13 2s ease-out infinite',
                              pointerEvents: 'none'
                            }} />
                            <span style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              opacity: 0.2,
                              transform: 'scale(1.1)',
                              background: 'rgba(255, 255, 255, 0.1)',
                              width: '100%',
                              height: '100%',
                              borderRadius: '50%',
                              animation: 'btn-drop-16 2.1s ease-out infinite',
                              pointerEvents: 'none'
                            }} />
                          </span>

                          <button 
                            className="mobile-play-button"
                            style={{
                              position: 'relative',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: 'rgba(255, 255, 255, 0.15)',
                              backdropFilter: 'blur(5px)',
                              width: '70px',
                              height: '70px',
                              borderRadius: '50%',
                              border: 'none',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              zIndex: 3,
                              overflow: 'hidden'
                            }}
                            onClick={togglePlay} // Call togglePlay
                          >
                            <div className="gradient-bg" style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              opacity: 0.15,
                              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                              borderRadius: '50%',
                              transition: 'opacity 0.06s linear',
                              zIndex: -1
                            }} />
                            
                            {/* Play/Pause Icon */}
                            <svg 
                              width="24" 
                              height="24" 
                              fill="white" 
                              viewBox="0 0 20 20"
                              style={{ 
                                marginLeft: isPlaying ? '0px' : '3px', // Adjust margin for play icon
                                position: 'relative',
                                zIndex: 1
                              }}
                            >
                              <path d={isPlaying ? "M4.5 4.5h3v11h-3v-11zm8 0h3v11h-3v-11z" : "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"} />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop: Client Section Only */}
                <div className="d-none d-xl-block">
                  <div className="mil-up" style={{ animationDelay: '0.6s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      {/* Client Avatars */}
                      <div style={{ display: 'flex', marginLeft: '-10px' }}>
                        <img
                          src="img/girl1.jpg"
                          alt="Client 1"
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            border: '3px solid white',
                            objectFit: 'cover',
                            marginLeft: '-10px',
                            transition: 'transform 0.3s ease'
                          }}
                          className="mil-up"
                          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        />
                        <img
                          src="img/girl2.jpg"
                          alt="Client 2"
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            border: '3px solid white',
                            objectFit: 'cover',
                            marginLeft: '-10px',
                            transition: 'transform 0.3s ease'
                          }}
                          className="mil-up"
                          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        />
                        <img
                          src="img/girl3.jpg"
                          alt="Client 3"
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            border: '3px solid white',
                            objectFit: 'cover',
                            marginLeft: '-10px',
                            transition: 'transform 0.3s ease'
                          }}
                          className="mil-up"
                          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        />
                        <img
                          src="img/boy1.jpg"
                          alt="Client 4"
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            border: '3px solid white',
                            objectFit: 'cover',
                            marginLeft: '-10px',
                            transition: 'transform 0.3s ease'
                          }}
                          className="mil-up"
                          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        />
                        <img
                          src="img/boy2.jpg"
                          alt="Client 5"
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            border: '3px solid white',
                            objectFit: 'cover',
                            marginLeft: '-10px',
                            transition: 'transform 0.3s ease'
                          }}
                          className="mil-up"
                          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        />
                      </div>
                      
                      {/* Client Text */}
                      <div style={{ color: 'white' }}>
                        <p style={{ margin: '0', fontWeight: '600', fontSize: '1rem', color: '#fff', }}>We have over 4,000 clients</p>
                        <p style={{ margin: '0', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>around the world</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Play Button Column - Desktop Only */}
              <div className="col-xl-4 text-right d-none d-xl-block">
                <div className="mil-up" style={{ animationDelay: '0.8s' }}>
                  <div 
                    className="mobile-play-wrapper"
                    style={{
                      position: 'relative',
                      display: 'inline-block',
                      width: '100px',
                      height: '100px',
                    }}
                  >
                    {/* Animated rings - positioned behind button */}
                    <span
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1
                      }}
                    >
                      {/* First animated ring */}
                      <span
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          opacity: 0.4,
                          transform: 'scale(1.1)',
                          background: 'rgba(255, 255, 255, 0.1)',
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          animation: 'btn-drop-13 2s ease-out infinite',
                          pointerEvents: 'none'
                        }}
                      />
                      
                      {/* Second animated ring */}
                      <span
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          opacity: 0.2,
                          transform: 'scale(1.1)',
                          background: 'rgba(255, 255, 255, 0.1)',
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          animation: 'btn-drop-16 2.1s ease-out infinite',
                          pointerEvents: 'none'
                        }}
                      />
                    </span>

                    {/* Main Button */}
                    <button 
                      className="mobile-play-button"
                      style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(5px)',
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        zIndex: 3,
                        overflow: 'hidden'
                      }}
                      onClick={togglePlay} // Call togglePlay
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                        // Update gradient opacity on hover
                        const gradientEl = e.target.querySelector('.gradient-bg');
                        if (gradientEl) gradientEl.style.opacity = '0.2';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                        // Reset gradient opacity
                        const gradientEl = e.target.querySelector('.gradient-bg');
                        if (gradientEl) gradientEl.style.opacity = '0.15';
                      }}
                    >
                      {/* Gradient background */}
                      <div
                        className="gradient-bg"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          opacity: 0.15,
                          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                          borderRadius: '50%',
                          transition: 'opacity 0.06s linear',
                          zIndex: -1
                        }}
                      />
                      
                      {/* Play/Pause Icon */}
                      <div style={{
                        position: 'relative',
                        zIndex: 1,
                        color: 'white',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                      }}>
                        <svg 
                          width="32" 
                          height="32" 
                          fill="white" 
                          viewBox="0 0 20 20"
                        >
                          <path d={isPlaying ? "M4.5 4.5h3v11h-3v-11zm8 0h3v11h-3v-11z" : "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"} />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* New Hero Section End */}
        {/* brands */}
      <BrandCarousel />
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <Special />
        </div>
      </div>
      {/* call to action end */}
      {/* icon boxes */}
      <BenefitsSection />
      {/* icon boxes end */}
      {/* Portfolio */}
            <Portfolio />
      {/* Portfolio end */}
      <div className="mil-testimonials mil-p-80-160">
        <div className="container">
          <Testimonials />
        </div>
      </div>
      {/* testimonials end */}
      {/* call to action */}
      <CallToAction1 />
    </PlaxLayout>
  );
};
export default Page; // Export the renamed component