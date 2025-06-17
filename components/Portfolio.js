'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import testimonial_data from '@/data/TestimonialData';

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(-1);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handlePrevSlide();
      } else if (event.key === 'ArrowRight') {
        handleNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  const handlePrevSlide = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonial_data.length - 1));
  };

  const handleNextSlide = () => {
    setActiveIndex((prev) => (prev < testimonial_data.length - 1 ? prev + 1 : 0));
  };

  const getSlideStyle = (index) => {
    const diff = index - activeIndex;
    let transform = '';
    let zIndex = 1;
    let opacity = 0.3;
    let scale = 0.8;

    if (diff === 0) {
      // Active slide
      transform = 'translateX(0px) translateZ(0px) rotateY(0deg)';
      zIndex = 10;
      opacity = 1;
      scale = 1;
    } else if (diff === 1) {
      // Next slide
      transform = 'translateX(300px) translateZ(-200px) rotateY(-25deg)';
      zIndex = 5;
      opacity = 0.7;
      scale = 0.85;
    } else if (diff === -1) {
      // Previous slide
      transform = 'translateX(-300px) translateZ(-200px) rotateY(25deg)';
      zIndex = 5;
      opacity = 0.7;
      scale = 0.85;
    } else if (diff === 2) {
      // Far next slide
      transform = 'translateX(500px) translateZ(-400px) rotateY(-45deg)';
      zIndex = 2;
      opacity = 0.4;
      scale = 0.7;
    } else if (diff === -2) {
      // Far previous slide
      transform = 'translateX(-500px) translateZ(-400px) rotateY(45deg)';
      zIndex = 2;
      opacity = 0.4;
      scale = 0.7;
    } else {
      // Hidden slides
      transform = diff > 0 
        ? 'translateX(700px) translateZ(-600px) rotateY(-60deg)'
        : 'translateX(-700px) translateZ(-600px) rotateY(60deg)';
      zIndex = 1;
      opacity = 0;
      scale = 0.6;
    }

    return {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '750px',
      height: '500px',
      marginLeft: '-385px',
      marginTop: '-200px',
      transform: `${transform} scale(${scale})`,
      transformStyle: 'preserve-3d',
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      zIndex: zIndex,
      opacity: opacity,
      cursor: 'pointer',
    };
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    background: '#f2fafa',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    perspective: '1000px',
    perspectiveOrigin: 'center center',
  };

  const slideWrapperStyle = {
    position: 'relative',
    width: '100%',
    height: '500px',
    transformStyle: 'preserve-3d',
  };

  const navigationStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '50px',
    height: '50px',
    background: 'rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 100,
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  };

  const leftArrowStyle = {
    ...navigationStyle,
    left: '50px',
  };

  const rightArrowStyle = {
    ...navigationStyle,
    right: '50px',
  };

  const portfolioItemStyle = (index) => ({
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    overflow: 'hidden',
    position: 'relative',
    background: `url(${testimonial_data[index]?.brand_img?.src || '/placeholder.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
    transform: isHovered === index ? 'scale(1.02)' : 'scale(1)',
  });

  const overlayStyle = (index) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: isHovered === index 
      ? 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)'
      : 'linear-gradient(45deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 100%)',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
  });

  const metaStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const tagStyle = {
    background: 'rgba(255, 255, 255, 0.2)',
    padding: '5px 12px',
    borderRadius: '15px',
    fontSize: '12px',
    color: 'white',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  };

  const titleStyle = {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
  };

  const viewWorkStyle = (index) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
    color: '#333',
    padding: '15px 25px',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'center',
    opacity: isHovered === index ? 1 : 0,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    zIndex: 10,
  });

  const starsStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  };

  const starStyle = (index) => ({
    position: 'absolute',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: Math.random() * 10 + 10 + 'px',
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    animation: `twinkle ${2 + Math.random() * 3}s infinite`,
  });

  return (
    <>
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        .nav-arrow:hover {
          background: rgba(0, 0, 0, 0.2) !important;
          transform: translateY(-50%) scale(1.1) !important;
        }
        
        .nav-arrow svg {
          color: #333;
          width: 20px;
          height: 20px;
        }
      `}</style>
      
      <div style={containerStyle}>
        {/* Animated Stars Background */}
        <div style={starsStyle}>
          {[...Array(20)].map((_, i) => (
            <div key={i} style={{...starStyle(i), color: 'rgba(0, 0, 0, 0.1)'}}>✦</div>
          ))}
        </div>

        {/* Left Navigation Arrow */}
        <div 
          className="nav-arrow"
          style={leftArrowStyle}
          onClick={handlePrevSlide}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M15 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 1L1 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Right Navigation Arrow */}
        <div 
          className="nav-arrow"
          style={rightArrowStyle}
          onClick={handleNextSlide}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Slides Container */}
        <div style={slideWrapperStyle}>
          {testimonial_data.map((item, index) => (
            <div
              key={item.id}
              style={getSlideStyle(index)}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(-1)}
            >
              <Link href="/portfolio-details" style={{ textDecoration: 'none' }}>
                <div style={portfolioItemStyle(index)}>
                  <div style={overlayStyle(index)}>
                    {/* Top Meta Information */}
                    <div style={metaStyle}>
                      <span style={tagStyle}>{item.brand_tag}</span>
                      <span style={{ color: 'white', fontSize: '14px' }}>{item.time}</span>
                    </div>

                    {/* Bottom Title */}
                    <div>
                      <h3 style={titleStyle}>{item.brand_name}</h3>
                    </div>

                    {/* View Work Button (appears on hover) */}
                    <div style={viewWorkStyle(index)}>
                      VIEW<br />WORK
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Copyright
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          color: 'rgba(0, 0, 0, 0.6)',
          fontSize: '12px',
        }}>
          © DIEGO<br />
          ALL RIGHTS RESERVED
        </div> */}

      </div>
    </>
  );
};

export default Portfolio;