"use client";
import { useState, useRef } from "react";
import Image from "next/image";

const CLIENT_AVATARS = [
  { src: "/img/girl1.webp", alt: "Client 1" },
  { src: "/img/girl2.webp", alt: "Client 2" },
  { src: "/img/girl3.webp", alt: "Client 3" },
  { src: "/img/boy1.webp", alt: "Client 4" },
  { src: "/img/boy2.webp", alt: "Client 5" },
];

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

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

  // Keyframes + mobile hero sizing now live in app/globals.css
  // (they reference global .mil-banner and are used from inline styles).

  return (
    <>
      <div
        className="mil-banner"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`,
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
        //   backgroundAttachment: "fixed",
          minHeight: "70vh",
          maxHeight: "75vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Video */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `url('/img/home-2/hero-poster.jpg') center/cover no-repeat`,
            zIndex: 0,
          }}
        >
          <video
            ref={videoRef}
            autoPlay={false}
            loop
            muted
            playsInline
            preload="none"
            poster="/img/home-2/hero-poster.jpg"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
            }}
          >
            <source src="/img/home-2/herosection2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
            zIndex: 1,
          }}
        />

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-12">
              {/* Main Heading */}
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
              
              {/* Description */}
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
                        {CLIENT_AVATARS.map((a) => (
                          <Image
                            key={a.src}
                            src={a.src}
                            alt={a.alt}
                            width={40}
                            height={40}
                            className="mil-up"
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              border: '2px solid white',
                              objectFit: 'cover',
                              marginLeft: '-8px',
                              transition: 'transform 0.3s ease'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div style={{ color: 'white' }}>
                      <p style={{ margin: '0', fontWeight: '600', fontSize: '0.9rem', color: '#fff', }}>We have over 4,000 clients</p>
                    </div>
                    
                    {/* Play Button */}
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
                      {CLIENT_AVATARS.map((a) => (
                        <Image
                          key={a.src}
                          src={a.src}
                          alt={a.alt}
                          width={50}
                          height={50}
                          className="mil-up"
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            border: '3px solid white',
                            objectFit: 'cover',
                            marginLeft: '-10px',
                            transition: 'transform 0.3s ease'
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        />
                      ))}
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
    </>
  );
};

export default HeroSection;



