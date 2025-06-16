"use client";
import React, { useEffect, useRef, useState } from 'react';

// Mock data structure based on the original design
const heroData = {
  items: [
    {
      subtitle: "BRANDING",
      title: "Museums<br/>Art Concept",
      image: {
        desktop: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop",
        mobile: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=768&h=1024&fit=crop"
      },
      button: {
        label: "View Project",
        link: "/project"
      }
    },
    {
      subtitle: "DIGITAL",
      title: "Creative<br/>Portfolio",
      image: {
        desktop: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&h=1080&fit=crop",
        mobile: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=768&h=1024&fit=crop"
      },
      button: {
        label: "View Project",
        link: "/project"
      }
    },
    {
      subtitle: "DESIGN",
      title: "Modern<br/>Architecture",
      image: {
        desktop: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop",
        mobile: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=768&h=1024&fit=crop"
      },
      button: {
        label: "View Project",
        link: "/project"
      }
    }
  ]
};

const Hero4Slider = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);
  const totalSlides = heroData.items.length;
  const intervalRef = useRef(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setContentVisible(false);

    setTimeout(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
      setContentVisible(true);
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setContentVisible(false);

    setTimeout(() => {
      setCurrentSlide(prev => prev === 0 ? totalSlides - 1 : prev - 1);
      setContentVisible(true);
      setIsAnimating(false);
    }, 300);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setContentVisible(false);

    setTimeout(() => {
      setCurrentSlide(index);
      setContentVisible(true);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const slider = swiperRef.current;
    if (slider) {
      const translateY = -currentSlide * 100;
      slider.style.transform = `translateY(${translateY}%)`;
    }
  }, [currentSlide]);

  const styles = {
    heroSection: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#1f2937',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      '@media (max-width: 768px)': {
        height: 'auto',
      },
    },
    logo: {
      position: 'absolute',
      top: '24px',
      left: '24px',
      zIndex: 50,
      width: '48px',
      height: '48px',
      backgroundColor: '#84cc16',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      animation: 'logoFloat 3s ease-in-out infinite',
      '@media (max-width: 768px)': {
        top: '16px',
        left: '16px',
        width: '36px',
        height: '36px',
      },
    },
    showcaseBtn: {
      position: 'absolute',
      top: '24px',
      right: '24px',
      zIndex: 50,
      padding: '12px 24px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(8px)',
      borderRadius: '25px',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      overflow: 'hidden',
      '@media (max-width: 768px)': {
        top: '12px',
        right: '12px',
        padding: '8px 16px',
      },
    },
    sliderContainer: {
      position: 'relative',
      width: '100%',
      height: '100%',
    },
    sliderWrapper: {
      width: '100%',
      height: '100%',
      transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      '@media (max-width: 768px)': {
        height: 'auto',
      },
    },
    slide: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      '@media (max-width: 768px)': {
        height: 'auto',
      },
    },
    slideImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      filter: 'brightness(0.7)',
      transition: 'all 0.8s ease-out',
      '@media (max-width: 768px)': {
        height: 'auto',
        filter: 'brightness(0.5)',
      },
    },
    slideContent: {
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        justifyContent: 'center',
      },
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 16px',
      },
    },
    contentLeft: {
      maxWidth: '600px',
      '@media (max-width: 768px)': {
        maxWidth: '100%',
        textAlign: 'center',
        padding: '0 16px',
      },
    },
    subtitle: {
      color: '#84cc16',
      fontSize: '14px',
      fontWeight: '600',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      marginBottom: '16px',
      opacity: contentVisible ? 1 : 0,
      transform: contentVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDelay: contentVisible ? '0.2s' : '0s',
      '@media (max-width: 768px)': {
        fontSize: '12px',
        marginBottom: '8px',
      },
    },
    title: {
      fontSize: '5rem',
      fontWeight: 'bold',
      color: 'white',
      lineHeight: '1.1',
      marginBottom: '32px',
      opacity: contentVisible ? 1 : 0,
      transform: contentVisible ? 'translateY(0)' : 'translateY(50px)',
      transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDelay: contentVisible ? '0.4s' : '0s',
      '@media (max-width: 768px)': {
        fontSize: '3rem',
        lineHeight: '1.2',
        marginBottom: '16px',
      },
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '16px 32px',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '25px',
      color: 'white',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      textDecoration: 'none',
      position: 'relative',
      overflow: 'hidden',
      opacity: contentVisible ? 1 : 0,
      transform: contentVisible ? 'translateY(0)' : 'translateY(30px)',
      transitionDelay: contentVisible ? '0.6s' : '0s',
      '@media (max-width: 768px)': {
        padding: '12px 24px',
      },
    },
    buttonIcon: {
      width: '32px',
      height: '32px',
      border: '1px solid currentColor',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: 'rotate(0deg)',
      '@media (max-width: 768px)': {
        width: '24px',
        height: '24px',
        fontSize: '16px',
      },
    },
    navigation: {
      position: 'absolute',
      left: '50%',
      bottom: '40px',
      transform: 'translateX(-50%)',
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      '@media (max-width: 768px)': {
        bottom: '20px',
        gap: '16px',
      },
    },
    navButton: {
      width: '64px',
      height: '64px',
      border: '2px solid rgba(255, 255, 255, 0.4)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(8px)',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
      fontSize: '24px',
      fontWeight: 'bold',
      '@media (max-width: 768px)': {
        width: '48px',
        height: '48px',
        fontSize: '18px',
      },
    },
    pagination: {
      position: 'absolute',
      right: '24px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 50,
    },
    paginationBullets: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      padding: '16px',
    },
    bullet: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      border: 'none',
      position: 'relative',
    },
    bulletActive: {
      backgroundColor: 'white',
      transform: 'scale(1.2)',
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
    },
    bulletInactive: {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      transform: 'scale(1)',
    },
  };

  return (
    <section style={styles.heroSection}>
      {/* Logo */}
      <div 
        style={styles.logo}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1) rotate(5deg)';
          e.target.style.boxShadow = '0 10px 30px rgba(132, 204, 22, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1) rotate(0deg)';
          e.target.style.boxShadow = 'none';
        }}
      >
        <div style={styles.logoInner}>
          <div style={styles.logoDot1}></div>
          <div style={styles.logoDot2}></div>
        </div>
      </div>

      {/* Showcase Button */}
      <button 
        style={styles.showcaseBtn}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(132, 204, 22, 0.2)';
          e.target.style.borderColor = 'rgba(132, 204, 22, 0.5)';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 10px 30px rgba(132, 204, 22, 0.2)';
          const icon = e.target.querySelector('div');
          if (icon) {
            icon.style.transform = 'rotate(90deg)';
            icon.style.backgroundColor = '#84cc16';
            icon.style.color = 'white';
          }
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = 'none';
          const icon = e.target.querySelector('div');
          if (icon) {
            icon.style.transform = 'rotate(0deg)';
            icon.style.backgroundColor = 'white';
            icon.style.color = '#1f2937';
          }
        }}
      >
        Showcase
        <div style={styles.showcaseBtnIcon}>+</div>
      </button>

      {/* Main Slider Container */}
      <div style={styles.sliderContainer}>
        <div 
          ref={swiperRef}
          style={{
            ...styles.sliderWrapper,
            transform: `translateY(${-currentSlide * 100}%)`
          }}
        >
          {heroData.items.map((item, index) => (
            <div 
              key={index}
              style={{
                ...styles.slide,
                top: `${index * 100}%`
              }}
            >
              {/* Background Image */}
              <div 
                style={{
                  ...styles.slideImage,
                  backgroundImage: `url(${item.image.desktop})`,
                  transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)',
                  filter: index === currentSlide ? 'brightness(0.7)' : 'brightness(0.5)'
                }}
              />
              
              {/* Content Overlay */}
              <div style={styles.slideContent}>
                <div style={styles.container}>
                  {/* Left Content */}
                  <div style={styles.contentLeft}>
                    <div style={styles.subtitle}>
                      {item.subtitle}
                    </div>
                    <h1 
                      style={styles.title}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <div>
                      <a 
                        href={item.button.link} 
                        style={styles.button}
                      >
                        <div style={styles.buttonIcon}>+</div>
                        <span style={styles.buttonText}>{item.button.label}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div style={styles.navigation}>
        <button 
          onClick={prevSlide} 
          style={styles.navButton}
        >
          ←
        </button>
        <button 
          onClick={nextSlide} 
          style={styles.navButton}
        >
          →
        </button>
      </div>

      {/* Pagination Bullets */}
      <div style={styles.pagination}>
        <div style={styles.paginationContainer}>
          {/* Pagination Bullets */}
          <div style={styles.paginationBullets}>
            {heroData.items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  ...styles.bullet,
                  ...(index === currentSlide ? styles.bulletActive : styles.bulletInactive)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4Slider;
