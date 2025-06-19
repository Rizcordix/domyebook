'use client';
import Link from 'next/link';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import testimonial_data from '@/data/TestimonialData';

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(-1);

  // Memoized handlers to prevent unnecessary re-renders
  const handlePrevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonial_data.length - 1));
  }, []);

  const handleNextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev < testimonial_data.length - 1 ? prev + 1 : 0));
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'ArrowLeft') {
      handlePrevSlide();
    } else if (event.key === 'ArrowRight') {
      handleNextSlide();
    }
  }, [handlePrevSlide, handleNextSlide]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Optimized slide style calculation with memoization
  const getSlideStyle = useMemo(() => {
    return (index) => {
      const diff = index - activeIndex;
      let transform = '';
      let zIndex = 1;
      let opacity = 0.3;
      let scale = 0.8;

      if (diff === 0) {
        transform = 'translateX(0px) translateZ(0px) rotateY(0deg)';
        zIndex = 10;
        opacity = 1;
        scale = 1;
      } else if (diff === 1) {
        transform = 'translateX(300px) translateZ(-200px) rotateY(-25deg)';
        zIndex = 5;
        opacity = 0.7;
        scale = 0.85;
      } else if (diff === -1) {
        transform = 'translateX(-300px) translateZ(-200px) rotateY(25deg)';
        zIndex = 5;
        opacity = 0.7;
        scale = 0.85;
      } else if (diff === 2) {
        transform = 'translateX(500px) translateZ(-400px) rotateY(-45deg)';
        zIndex = 2;
        opacity = 0.4;
        scale = 0.7;
      } else if (diff === -2) {
        transform = 'translateX(-500px) translateZ(-400px) rotateY(45deg)';
        zIndex = 2;
        opacity = 0.4;
        scale = 0.7;
      } else {
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
        marginLeft: '-375px',
        marginTop: '-200px',
        transform: `${transform} scale(${scale})`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
        zIndex: zIndex,
        opacity: opacity,
        cursor: 'pointer',
        willChange: 'transform, opacity',
      };
    };
  }, [activeIndex]);

  // Static styles to prevent recalculation
  const containerStyle = useMemo(() => ({
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
  }), []);

  const slideWrapperStyle = useMemo(() => ({
    position: 'relative',
    width: '100%',
    height: '500px',
    transformStyle: 'preserve-3d',
  }), []);

  const navigationStyle = useMemo(() => ({
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
    transition: 'background 0.2s ease, transform 0.2s ease',
    backdropFilter: 'blur(10px)',
  }), []);

  const portfolioItemStyle = useCallback((index) => ({
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    overflow: 'hidden',
    position: 'relative',
    backgroundImage: `url(${testimonial_data[index]?.brand_img?.src || '/placeholder.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.2s ease',
    transform: isHovered === index ? 'scale(1.02)' : 'scale(1)',
    willChange: 'transform',
  }), [isHovered]);

  const overlayStyle = useCallback((index) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: isHovered === index 
      ? 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)'
      : 'linear-gradient(45deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 100%)',
    transition: 'background 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
  }), [isHovered]);

  const viewWorkStyle = useCallback((index) => ({
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
    transition: 'opacity 0.2s ease',
    cursor: 'pointer',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    zIndex: 10,
    pointerEvents: isHovered === index ? 'auto' : 'none',
  }), [isHovered]);

  // Throttled hover handlers
  const handleMouseEnter = useCallback((index) => {
    setIsHovered(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(-1);
  }, []);

  // Render only visible slides to improve performance
  const renderSlide = useCallback((item, index) => {
    const diff = Math.abs(index - activeIndex);
    if (diff > 2) return null; // Don't render slides that are too far away

    return (
      <div
        key={item.id}
        style={getSlideStyle(index)}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <Link href="/portfolio-details" style={{ textDecoration: 'none' }}>
          <div style={portfolioItemStyle(index)}>
            <div style={overlayStyle(index)}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
              }}>
                <span style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '5px 12px',
                  borderRadius: '15px',
                  fontSize: '12px',
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  {item.brand_tag}
                </span>
                <span style={{ color: 'white', fontSize: '14px' }}>{item.time}</span>
              </div>

              <div>
                <h3 style={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  margin: '10px 0',
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                }}>
                  {item.brand_name}
                </h3>
              </div>

              <div style={viewWorkStyle(index)}>
                VIEW WORK
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }, [activeIndex, getSlideStyle, handleMouseEnter, handleMouseLeave, portfolioItemStyle, overlayStyle, viewWorkStyle]);

  return (
    <div style={containerStyle}>
      <style jsx>{`
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

      {/* Left Navigation Arrow */}
      <div 
        className="nav-arrow"
        style={{...navigationStyle, left: '50px'}}
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
        style={{...navigationStyle, right: '50px'}}
        onClick={handleNextSlide}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Slides Container */}
      <div style={slideWrapperStyle}>
        {testimonial_data.map(renderSlide)}
      </div>
    </div>
  );
};

export default Portfolio;