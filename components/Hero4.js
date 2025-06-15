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

  useEffect(() => {
    // Auto-advance slides
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

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
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
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
      animation: 'logoFloat 3s ease-in-out infinite'
    },
    logoInner: {
      width: '32px',
      height: '32px',
      backgroundColor: '#65a30d',
      borderRadius: '50%',
      position: 'relative',
      transition: 'all 0.3s ease'
    },
    logoDot1: {
      position: 'absolute',
      top: '-4px',
      right: '-4px',
      width: '12px',
      height: '12px',
      backgroundColor: '#bef264',
      borderRadius: '50%',
      animation: 'pulse 2s ease-in-out infinite'
    },
    logoDot2: {
      position: 'absolute',
      top: '4px',
      left: '-4px',
      width: '8px',
      height: '8px',
      backgroundColor: '#bef264',
      borderRadius: '50%',
      animation: 'pulse 2s ease-in-out infinite 0.5s'
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
      overflow: 'hidden'
    },
    showcaseBtnIcon: {
      width: '24px',
      height: '24px',
      backgroundColor: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#1f2937',
      fontSize: '14px',
      fontWeight: 'bold',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    sliderContainer: {
      position: 'relative',
      width: '100%',
      height: '100%'
    },
    sliderWrapper: {
      width: '100%',
      height: '100%',
      transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    slide: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
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
      transition: 'all 0.8s ease-out'
    },
    slideContent: {
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      height: '100%'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    },
    contentLeft: {
      maxWidth: '600px'
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
      transitionDelay: contentVisible ? '0.2s' : '0s'
    },
    title: {
      fontSize: '5rem',
      fontWeight: 'bold',
      color: 'white',
      lineHeight: '0.9',
      marginBottom: '32px',
      opacity: contentVisible ? 1 : 0,
      transform: contentVisible ? 'translateY(0)' : 'translateY(50px)',
      transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDelay: contentVisible ? '0.4s' : '0s'
    },
    titleResponsive: {
      '@media (max-width: 768px)': {
        fontSize: '3rem'
      }
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
      transitionDelay: contentVisible ? '0.6s' : '0s'
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
      transform: 'rotate(0deg)'
    },
    buttonText: {
      fontWeight: '600',
      position: 'relative',
      zIndex: 2
    },
    visualElement: {
      display: 'none',
      position: 'relative',
      opacity: contentVisible ? 1 : 0,
      transform: contentVisible ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(10deg)',
      transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDelay: contentVisible ? '0.8s' : '0s',
      '@media (minWidth: 1024px)': {
        display: 'block'
      }
    },
    visualContainer: {
      width: '384px',
      height: '384px',
      position: 'relative'
    },
    visualLayer1: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
      borderRadius: '24px',
      transform: 'rotate(12deg)',
      animation: 'float1 4s ease-in-out infinite'
    },
    visualLayer2: {
      position: 'absolute',
      top: '16px',
      left: '16px',
      right: '16px',
      bottom: '16px',
      background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.3), rgba(59, 130, 246, 0.3))',
      borderRadius: '16px',
      transform: 'rotate(-6deg)',
      animation: 'float2 4s ease-in-out infinite 1s'
    },
    visualLayer3: {
      position: 'absolute',
      top: '32px',
      left: '32px',
      right: '32px',
      bottom: '32px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(8px)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'float3 4s ease-in-out infinite 2s'
    },
    visualCircle: {
      width: '128px',
      height: '128px',
      background: 'linear-gradient(135deg, #84cc16, #16a34a)',
      borderRadius: '50%',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      animation: 'spin 8s linear infinite'
    },
    navigation: {
      position: 'absolute',
      left: '24px',
      bottom: '24px',
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    navButton: {
      width: '48px',
      height: '48px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden'
    },
    pagination: {
      position: 'absolute',
      right: '24px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 50
    },
    paginationContainer: {
      position: 'relative'
    },
    activeIndicator: {
      position: 'absolute',
      left: '-10px',
      width: '32px',
      height: '32px',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '50%',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      top: currentSlide * 48 + 'px',
      background: 'rgba(132, 204, 22, 0.1)',
      backdropFilter: 'blur(4px)'
    },
    paginationBullets: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      padding: '16px'
    },
    bullet: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      border: 'none',
      position: 'relative'
    },
    bulletActive: {
      backgroundColor: 'white',
      transform: 'scale(1.2)',
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
    },
    bulletInactive: {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      transform: 'scale(1)'
    }
  };

  // Create style element for keyframes
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes logoFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.7; transform: scale(1.1); }
      }
      
      @keyframes float1 {
        0%, 100% { transform: rotate(12deg) translateY(0px); }
        50% { transform: rotate(12deg) translateY(-8px); }
      }
      
      @keyframes float2 {
        0%, 100% { transform: rotate(-6deg) translateY(0px); }
        50% { transform: rotate(-6deg) translateY(6px); }
      }
      
      @keyframes float3 {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-4px); }
      }
      
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    `;
    document.head.appendChild(style);
    
    return () => document.head.removeChild(style);
  }, []);

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
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = 'rgba(132, 204, 22, 0.1)';
                          e.target.style.borderColor = '#84cc16';
                          e.target.style.color = '#84cc16';
                          e.target.style.transform = 'translateY(-3px)';
                          e.target.style.boxShadow = '0 15px 40px rgba(132, 204, 22, 0.3)';
                          
                          // Add shimmer effect
                          e.target.style.position = 'relative';
                          const shimmer = document.createElement('div');
                          shimmer.style.position = 'absolute';
                          shimmer.style.top = '0';
                          shimmer.style.left = '-100%';
                          shimmer.style.width = '100%';
                          shimmer.style.height = '100%';
                          shimmer.style.background = 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)';
                          shimmer.style.animation = 'shimmer 0.6s ease-out';
                          shimmer.style.pointerEvents = 'none';
                          e.target.appendChild(shimmer);
                          
                          setTimeout(() => {
                            if (e.target.contains(shimmer)) {
                              e.target.removeChild(shimmer);
                            }
                          }, 600);
                          
                          const icon = e.target.querySelector('div');
                          if (icon) {
                            icon.style.transform = 'rotate(180deg) scale(1.1)';
                            icon.style.borderColor = '#84cc16';
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                          e.target.style.color = 'white';
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                          
                          const icon = e.target.querySelector('div');
                          if (icon) {
                            icon.style.transform = 'rotate(0deg) scale(1)';
                            icon.style.borderColor = 'currentColor';
                          }
                        }}
                      >
                        <div style={styles.buttonIcon}>+</div>
                        <span style={styles.buttonText}>{item.button.label}</span>
                      </a>
                    </div>
                  </div>

                  {/* 3D Visual Element */}
                  <div style={styles.visualElement}>
                    <div style={styles.visualContainer}>
                      <div style={styles.visualLayer1}></div>
                      <div style={styles.visualLayer2}></div>
                      <div style={styles.visualLayer3}>
                        <div style={styles.visualCircle}></div>
                      </div>
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
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(132, 204, 22, 0.2)';
            e.target.style.borderColor = '#84cc16';
            e.target.style.color = '#84cc16';
            e.target.style.transform = 'scale(1.1) translateX(-3px)';
            e.target.style.boxShadow = '0 8px 25px rgba(132, 204, 22, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            e.target.style.color = 'white';
            e.target.style.transform = 'scale(1) translateX(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          ←
        </button>
        <button 
          onClick={nextSlide} 
          style={styles.navButton}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(132, 204, 22, 0.2)';
            e.target.style.borderColor = '#84cc16';
            e.target.style.color = '#84cc16';
            e.target.style.transform = 'scale(1.1) translateX(3px)';
            e.target.style.boxShadow = '0 8px 25px rgba(132, 204, 22, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            e.target.style.color = 'white';
            e.target.style.transform = 'scale(1) translateX(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          →
        </button>
      </div>

      {/* Pagination */}
      <div style={styles.pagination}>
        <div style={styles.paginationContainer}>
          {/* Active indicator */}
          <div style={styles.activeIndicator}></div>
          
          {/* Pagination bullets */}
          <div style={styles.paginationBullets}>
            {heroData.items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  ...styles.bullet,
                  ...(index === currentSlide ? styles.bulletActive : styles.bulletInactive)
                }}
                onMouseEnter={(e) => {
                  if (index !== currentSlide) {
                    e.target.style.backgroundColor = 'rgba(132, 204, 22, 0.7)';
                    e.target.style.transform = 'scale(1.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== currentSlide) {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    e.target.style.transform = 'scale(1)';
                  }
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