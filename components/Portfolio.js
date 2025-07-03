import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import testimonial_data from '../data/TestimonialData'; // Adjust the path as necessary
import testimonial_data1 from '../data/TestimonialData1';


const DualPortfolioCarousel = () => {
  const [leftActiveIndex, setLeftActiveIndex] = useState(0);
  const [rightActiveIndex, setRightActiveIndex] = useState(3);
  const [isLeftHovered, setIsLeftHovered] = useState(-1);
  const [isRightHovered, setIsRightHovered] = useState(-1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotation effect - always enabled
  useEffect(() => {
    if (isTransitioning) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Left carousel moves forward (to the right)
      setLeftActiveIndex(prev => (prev + 1) % testimonial_data.length);
      
      // Right carousel moves backward (to the left) - opposite direction
      setRightActiveIndex(prev => prev === 0 ? testimonial_data.length - 1 : prev - 1);
      
      // Reset transition flag after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 900); // Slightly longer than the CSS transition duration
      
    }, 4000); // Increased interval for smoother experience
    
    return () => clearInterval(interval);
  }, [isTransitioning]);

  // Optimized navigation handlers
  const createNavigationHandler = useCallback((setActiveIndex, direction, isRight = false) => {
    return () => {
      if (isTransitioning) return;
      
      setIsAutoPlaying(false);
      setIsTransitioning(true);
      
      if (isRight) {
        // Right carousel logic (opposite direction)
        if (direction === 'next') {
          setActiveIndex(prev => prev === 0 ? testimonial_data.length - 1 : prev - 1);
        } else {
          setActiveIndex(prev => (prev + 1) % testimonial_data.length);
        }
      } else {
        // Left carousel logic
        if (direction === 'next') {
          setActiveIndex(prev => (prev + 1) % testimonial_data.length);
        } else {
          setActiveIndex(prev => prev === 0 ? testimonial_data.length - 1 : prev - 1);
        }
      }
      
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setIsAutoPlaying(true);
      }, 1000);
    };
  }, [isTransitioning]);

  const handleLeftPrev = useMemo(() => createNavigationHandler(setLeftActiveIndex, 'prev'), [createNavigationHandler]);
  const handleLeftNext = useMemo(() => createNavigationHandler(setLeftActiveIndex, 'next'), [createNavigationHandler]);
  const handleRightPrev = useMemo(() => createNavigationHandler(setRightActiveIndex, 'prev', true), [createNavigationHandler]);
  const handleRightNext = useMemo(() => createNavigationHandler(setRightActiveIndex, 'next', true), [createNavigationHandler]);

  // Keyboard navigation
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'ArrowLeft') {
      handleLeftPrev();
    } else if (event.key === 'ArrowRight') {
      handleLeftNext();
    } else if (event.key === ' ') {
      event.preventDefault();
      setIsAutoPlaying(prev => !prev);
    }
  }, [handleLeftPrev, handleLeftNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Memoized slide style calculation
  const getSlideStyle = useMemo(() => {
    return (index, activeIndex, isLeft = true) => {
      const diff = index - activeIndex;
      let transform = '';
      let zIndex = 1;
      let opacity = 0.2;
      let scale = 0.7;
      let blur = 3;
      let pointerEvents = 'none'; // Default: not clickable

      if (diff === 0) {
        transform = 'translateX(0px) translateZ(0px) rotateY(0deg)';
        zIndex = 10;
        opacity = 1;
        scale = 1;
        blur = 0;
        pointerEvents = 'auto'; // Active slide is clickable
      } else if (diff === 1) {
        transform = isLeft 
          ? 'translateX(200px) translateZ(-300px) rotateY(-35deg)'
          : 'translateX(-200px) translateZ(-300px) rotateY(35deg)';
        zIndex = 8;
        opacity = 0.8;
        scale = 0.85;
        blur = 1;
        pointerEvents = 'auto'; // Adjacent slides are clickable
      } else if (diff === -1) {
        transform = isLeft 
          ? 'translateX(-200px) translateZ(-300px) rotateY(35deg)'
          : 'translateX(200px) translateZ(-300px) rotateY(-35deg)';
        zIndex = 8;
        opacity = 0.8;
        scale = 0.85;
        blur = 1;
        pointerEvents = 'auto'; // Adjacent slides are clickable
      } else if (diff === 2 || diff === -(testimonial_data.length - 2)) {
        transform = isLeft 
          ? 'translateX(350px) translateZ(-500px) rotateY(-50deg)'
          : 'translateX(-350px) translateZ(-500px) rotateY(50deg)';
        zIndex = 5;
        opacity = 0.5;
        scale = 0.75;
        blur = 2;
      } else if (diff === -2 || diff === (testimonial_data.length - 2)) {
        transform = isLeft 
          ? 'translateX(-350px) translateZ(-500px) rotateY(50deg)'
          : 'translateX(350px) translateZ(-500px) rotateY(-50deg)';
        zIndex = 5;
        opacity = 0.5;
        scale = 0.75;
        blur = 2;
      } else {
        const normalizedDiff = diff > testimonial_data.length / 2 ? diff - testimonial_data.length : diff;
        transform = normalizedDiff > 0 
          ? (isLeft 
              ? 'translateX(500px) translateZ(-700px) rotateY(-65deg)'
              : 'translateX(-500px) translateZ(-700px) rotateY(65deg)')
          : (isLeft 
              ? 'translateX(-500px) translateZ(-700px) rotateY(65deg)'
              : 'translateX(500px) translateZ(-700px) rotateY(-65deg)');
        zIndex = 1;
        opacity = 0.1;
        scale = 0.6;
        blur = 4;
      }

      return {
        position: 'absolute',
        top: '70%',
        left: '50%',
        width: isMobile ? '300px' : '400px',
        height: isMobile ? '210px' : '280px',
        marginLeft: isMobile ? '-150px' : '-200px',
        marginTop: isMobile ? '-105px' : '-140px',
        transform: `${transform} scale(${scale})`,
        transformStyle: 'preserve-3d',
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        zIndex: zIndex,
        opacity: opacity,
        cursor: pointerEvents === 'auto' ? 'pointer' : 'default',
        willChange: 'transform, opacity',
        filter: `blur(${blur}px)`,
        pointerEvents: pointerEvents,
      };
    };
  }, [isMobile]);

  // Optimized Portfolio item component
  const PortfolioItem = React.memo(({ item, index, activeIndex, isLeft, isHovered, onMouseEnter, onMouseLeave }) => {
    const slideStyle = getSlideStyle(index, activeIndex, isLeft);
    const isActive = index === activeIndex;
    const isVisible = Math.abs(index - activeIndex) <= 2 || Math.abs(index - activeIndex) >= testimonial_data.length - 2;
    
    // Don't render invisible items to improve performance
    if (!isVisible) return null;

    const itemStyle = {
      width: '100%',
      height: '100%',
      borderRadius: '20px',
      overflow: 'hidden',
      position: 'relative',
      backgroundImage: `url(${item.brand_img?.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      boxShadow: isActive 
        ? '0 30px 60px rgba(0, 0, 0, 0.4), 0 0 50px rgba(255, 255, 255, 0.1)'
        : '0 15px 30px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease',
      transform: isHovered === index && slideStyle.pointerEvents === 'auto' ? 'scale(1.05)' : 'scale(1)',
    };

    const overlayStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: isHovered === index && slideStyle.pointerEvents === 'auto'
        ? 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)'
        : 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%)',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: isMobile ? '15px' : '20px',
    };

    const viewWorkStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'linear-gradient(135deg, #f2fafa 0%, #7eb947 100%)',
      color: 'white',
      padding: isMobile ? '10px 20px' : '12px 24px',
      borderRadius: '30px',
      fontSize: isMobile ? '11px' : '12px',
      fontWeight: '600',
      textAlign: 'center',
      opacity: isHovered === index && slideStyle.pointerEvents === 'auto' ? 1 : 0,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)',
      zIndex: 10,
      pointerEvents: isHovered === index && slideStyle.pointerEvents === 'auto' ? 'auto' : 'none',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    };

    return (
      <div
        style={slideStyle}
        onMouseEnter={() => slideStyle.pointerEvents === 'auto' && onMouseEnter(index)}
        onMouseLeave={() => slideStyle.pointerEvents === 'auto' && onMouseLeave()}
      >
        <div style={itemStyle}>
          <div style={overlayStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                background: 'rgba(255, 255, 255, 0.15)',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: isMobile ? '10px' : '11px',
                color: 'white',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                fontWeight: '500',
              }}>
                {item.brand_tag}
              </span>
              <span style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontSize: isMobile ? '11px' : '12px',
                fontWeight: '500',
              }}>
                {item.time}
              </span>
            </div>

            {/* <div>
              <h3 style={{
                color: 'white',
                fontSize: isMobile ? '16px' : '18px',
                fontWeight: '700',
                margin: '0',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                lineHeight: '1.2',
              }}>
                {item.brand_name}
              </h3>
            </div> */}

            <div style={viewWorkStyle}>
              View Work
            </div>
          </div>
        </div>
      </div>
    );
  });
  PortfolioItem.displayName = "PortfolioItem";

  // Navigation button component
  const NavButton = React.memo(({ direction, onClick}) => {
    const buttonStyle = {
      position: 'absolute',
      top: '60%',
      [direction === 'prev' ? 'left' : 'right']: isMobile ? '10px' : '20px',
      transform: 'translateY(-50%)',
      width: isMobile ? '40px' : '50px',
      height: isMobile ? '40px' : '50px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      color: 'white',
      opacity: isTransitioning ? 0.5 : 1,
      pointerEvents: isTransitioning ? 'none' : 'auto',
    };

    return (
      <div 
        style={buttonStyle}
        onClick={onClick}
        onMouseEnter={(e) => {
          if (!isTransitioning) {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
          }
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.1)';
        }}
      >
        <svg width={isMobile ? "16" : "20"} height={isMobile ? "16" : "20"} viewBox="0 0 24 24" fill="none">
          {direction === 'prev' ? (
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          ) : (
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          )}
        </svg>
      </div>
    );
  });
  NavButton.displayName = "NavButton";

  const carouselStyle = {
    position: 'relative',
    width: isMobile ? '100%' : '50%',
    height: isMobile ? '50vh' : '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    perspective: '1200px',
    perspectiveOrigin: 'center center',
  };

  const carouselInnerStyle = {
    position: 'relative',
    width: '100%',
    height: isMobile ? '250px' : '350px',
    transformStyle: 'preserve-3d',
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: 'auto',
      minHeight: '80vh',
      background: 'linear-gradient(135deg, #f2fafa 0%, #7eb947 100%)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '60px 10px' : '0',
      boxSizing: 'border-box'
    }}>
      {/* Background bubbles */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: `
          radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(102, 126, 234, 0.1) 0%, transparent 50%)
        `,
        animation: 'float 20s ease-in-out infinite',
        zIndex: 0,
      }} />

      {/* Header */}
      <div style={{
        position: 'absolute',
        top: isMobile ? '200px' : '10%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 1
      }}>
        <h1 style={{
          fontSize: isMobile ? '28px' : '48px',
          marginTop: isMobile ? '20px' : '0px'
          // margin: 0
        }}>Archive</h1>
        <h5 style={{
          fontSize: isMobile ? '14px' : '18px',
          fontWeight: '400',
          marginTop: isMobile ? '15px' : '15px'
        }}>Exploring imagination and reality, one page at a time</h5>
      </div>

      {/* Left Carousel */}
      <div style={{
        position: 'relative',
        width: isMobile ? '100%' : '50%',
        height: isMobile ? '50vh' : '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1200px',
        marginTop: isMobile ? '180px' : '0'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: isMobile ? '250px' : '350px',
          transformStyle: 'preserve-3d',
        }}>
          {testimonial_data1.map((item, index) => (
            <PortfolioItem
              key={`left-${item.id}`}
              item={item}
              index={index}
              activeIndex={leftActiveIndex}
              isLeft={true}
              isHovered={isLeftHovered}
              onMouseEnter={(i) => setIsLeftHovered(i)}
              onMouseLeave={() => setIsLeftHovered(-1)}
            />
          ))}
        </div>
        <NavButton direction="prev" onClick={handleLeftPrev} side="left" />
        <NavButton direction="next" onClick={handleLeftNext} side="left" />
      </div>

      {/* Right Carousel */}
      <div style={{
        position: 'relative',
        width: isMobile ? '100%' : '50%',
        height: isMobile ? '50vh' : '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1200px',
        marginBottom: isMobile ? '60px' : '0'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: isMobile ? '250px' : '350px',
          transformStyle: 'preserve-3d',
        }}>
          {testimonial_data.map((item, index) => (
            <PortfolioItem
              key={`right-${item.id}`}
              item={item}
              index={index}
              activeIndex={rightActiveIndex}
              isLeft={false}
              isHovered={isRightHovered}
              onMouseEnter={(i) => setIsRightHovered(i)}
              onMouseLeave={() => setIsRightHovered(-1)}
            />
          ))}
        </div>
        <NavButton direction="prev" onClick={handleRightPrev} side="right" />
        <NavButton direction="next" onClick={handleRightNext} side="right" />
      </div>

      {/* Optional floating instructions */}
      <div style={{
        position: 'absolute',
        bottom: isMobile ? '15px' : '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: isMobile ? '11px' : '12px',
        color: 'rgba(255, 255, 255, 0.6)',
        zIndex: 10,
      }}>
        {/* Optional content here */}
      </div>

      {/* Float animation keyframe */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(2deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default DualPortfolioCarousel;