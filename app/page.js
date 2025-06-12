"use client";
import Banner from "@/components/Banner";
import { CallToAction1 } from "@/components/CallToAction";
import { Testimonials2 } from "@/components/Testimonials";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";

const page = () => {
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

  return (
    <PlaxLayout>
      {/* Add keyframe animations */}
      <style>{playButtonStyles}</style>
      
      {/* banner */}
      <Banner />
      
      {/* New Animated Hero Section */}
      <div className="mil-banner mil-p-160-160" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
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
                We help innovators to successfully
                <br />
                bring their business to life
              </h1>
              
              {/* Descriptionexx */}
              <p className="mil-text-m mil-soft mil-mb-60 mil-up" style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1.2rem',
                maxWidth: '600px',
                animationDelay: '0.4s'
              }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto beatae doloribus odio nulla
                vero impedit quam omnis amet est! Ex ratione
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
                      <div style={{ display: 'flex', marginLeft: '-10px' }}>
                        <img
                          src="img/avatar.webp"
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
                          src="img/avatar1.webp"
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
                          src="img/avatar2.webp"
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
                          src="img/avatar3.webp"
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
                          src="img/avatar4.webp"
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
                      
                      {/* Client Text */}
                      <div style={{ color: 'white' }}>
                        <p style={{ margin: '0', fontWeight: '600', fontSize: '0.9rem' }}>We have over 4,000 clients</p>
                        <p style={{ margin: '0', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem' }}>around the world</p>
                      </div>
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
                          onClick={() => console.log('Play video')}
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
                          
                          <svg 
                            width="24" 
                            height="24" 
                            fill="white" 
                            viewBox="0 0 20 20"
                            style={{ 
                              marginLeft: '3px',
                              position: 'relative',
                              zIndex: 1
                            }}
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
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
                        src="img/avatar.webp"
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
                        src="img/avatar1.webp"
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
                        src="img/avatar2.webp"
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
                        src="img/avatar3.webp"
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
                        src="img/avatar4.webp"
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
                      <p style={{ margin: '0', fontWeight: '600', fontSize: '1rem' }}>We have over 4,000 clients</p>
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
                    onClick={() => console.log('Play video')}
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
                    
                    {/* Play icon */}
                    <svg 
                      width="32" 
                      height="32" 
                      fill="white" 
                      viewBox="0 0 20 20"
                      style={{ 
                        marginLeft: '4px',
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* New Hero Section End */}
      {/* brands */}
      <div className="mil-brands mil-p-160-160">
        <div className="container">
          <h5 className="mil-text-center mil-soft mil-mb-60 mil-up">
            Join over 7,000 satisfied customers who enjoy our service!
          </h5>
          <div className="row justify-content-center">
            <div className="col-3 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/1.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-3 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/2.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-3 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/3.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-3 col-md-2">
              <div className="mil-brand mil-text-center">
                <img src="img/brands/4.svg" alt="brand" className="mil-up" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* brands end */}
      {/* features */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">Our essence, your experience</h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                Visualize your financial progress with detailed reports and
                graphs <br />
                that give you visual insights into your spending and saving
                habits.
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Plax® Global Service</h5>
                    <p className="mil-text-m mil-soft">
                      Experience exceptional service around the world. <br />
                      With our Plax® Global Service, we provide assistance{" "}
                      <br />
                      and support, wherever you are, to ensure your peace.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Personalized Rewards Program</h5>
                    <p className="mil-text-m mil-soft">
                      Enjoy a rewards program that fits your lifestyle. Earn{" "}
                      <br />
                      points with every purchase and access exclusive <br />
                      rewards, from trips to high-quality products.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame">
                <img src="img/home-2/2.png" alt="image" className="mil-up" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* call to action */}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-visible mil-illustration-fix mil-p-160-0">
            <div className="row align-items-end">
              <div className="mil-text-center">
                <h2 className="mil-mb-30 mil-up">
                  Protected coverage on your <br />
                  purchases with Plax Standard
                </h2>
                <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                  Enjoy instant coverage against theft or accidental damage{" "}
                  <br />
                  for the first forty-five (45) days from the date of purchase.
                </p>
              </div>
            </div>
            <div className="mil-illustration-absolute mil-up">
              <img src="img/home-2/3.png" alt="illustration" />
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
      {/* icon boxes */}
      <div className="icon-boxes mil-p-160-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-with-bg mil-center mil-up">
                <img
                  src="img/home-2/icons/1.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-up">Make your Purchase</h5>
                <p className="mil-text-s mil-soft mil-up">
                  Enjoy instant coverage against theft or accidental damage for
                  the first forty-five (45) days from the date of purchase.
                </p>
              </div>
            </div>
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-with-bg mil-center mil-up">
                <img
                  src="img/home-2/icons/2.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-up">Manage your Rewards</h5>
                <p className="mil-text-s mil-soft mil-up">
                  Rewards easily, Access a personalized rewards program that
                  fits your lifestyle and preferences.
                </p>
              </div>
            </div>
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-with-bg mil-center mil-up">
                <img
                  src="img/home-2/icons/3.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-up">Access Exclusive Benefits</h5>
                <p className="mil-text-s mil-soft mil-up">
                  From special offers to added security, every transaction is
                  not just a purchase, but an open door to a range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* icon boxes end */}
      {/* call to action */}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row align-items-end">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up">
                  Innovation and Efficiency in Every Transaction
                </h2>
              </div>
              <div className="col-xl-4 mil-mb-80 mil-up">
                <Link
                  href="register"
                  className="mil-btn mil-m mil-add-arrow mil-adaptive-right"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/1.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">Unmatched Speed</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Make instant transfers and experience <br />
                    Plax's unparalleled speed with every transaction.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/2.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">Extensive Global Network</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Connect with the world through our <br />
                    global network that spans more than <br />
                    170 countries.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/3.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">Advanced Security</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Protect your assets with our robust <br />
                    security protocols and cutting-edge <br />
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
      {/* features */}
      <div className="mil-features mil-p-160-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
                Plax Standard unusual activity detection
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                Keep track of your financial activity and the response to alert.{" "}
                <br />
                Your security is our priority, are always one step forward.
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-60">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Connected device management</h5>
                    <p className="mil-text-m mil-soft">
                      Plax monitors the devices connected to your <br />
                      account. If we detect activity from a new device or <br />
                      an unusual change, we will notify you.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mil-up">
                <Link
                  href="/about"
                  className="mil-btn mil-button-transform mil-m mil-add-arrow"
                >
                  More Information
                </Link>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <img
                src="img/home-2/4.png"
                alt="image"
                className="mil-up"
                style={{ width: "115%" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* features end */}

      <div className="mil-p-160-130">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 mil-mb-60">
              <h2 className="mil-mb-30 mil-up">
                Unlimited Mobile Connectivity: Mobile Wallet Integrations
              </h2>
              <p className="mil-text-l mil-pale-2 mil-up mil-mb-60">
                Explore how our key integrations with leading <br />
                mobile wallet apps can make your transactions <br />
                faster and more convenient than ever.
              </p>
              <div className="mil-up">
                <Link href="about" className="mil-btn mil-m mil-add-arrow">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="mil-brand-card mil-mb-30 mil-up">
                <img src="img/brands/1.svg" alt="brand" className="mil-mb-30" />
                <h5 className="mil-mb-20">Amper Pay</h5>
                <p className="mil-text-s mil-pale-2">
                  Make fast and secure payments directly from your Amper device
                  with the seamless integration of Plax and Amper Pay.
                </p>
              </div>
              <div className="mil-brand-card mil-mb-30 mil-up">
                <img src="img/brands/2.svg" alt="brand" className="mil-mb-30" />
                <h5 className="mil-mb-20">Yelii Pay</h5>
                <p className="mil-text-s mil-pale-2">
                  Pay with a touch using Yeli Pay and maintain full control of
                  your transactions by integrating your Plax account.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="mil-brand-card mil-mb-30 mil-up">
                <img src="img/brands/3.svg" alt="brand" className="mil-mb-30" />
                <h5 className="mil-mb-20">Booster</h5>
                <p className="mil-text-s mil-pale-2">
                  Send money instantly and securely through Booster, integrating
                  your Plax account for a frictionless financial experience.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="mil-brand-card mil-mb-30 mil-up">
                <img src="img/brands/4.svg" alt="brand" className="mil-mb-30" />
                <h5 className="mil-mb-20">Amerill</h5>
                <p className="mil-text-s mil-pale-2">
                  Connect your Plax account with Amerill to simplify splitting
                  expenses and quickly make payments between friends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
                Instant Alerts &amp; Notifications with Plax
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                Visualize your financial progress with detailed reports and
                graphs <br />
                that give you visual insights into your spending and saving
                habits.
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Security in real time</h5>
                    <p className="mil-text-m mil-soft">
                      Notifications allow you to take immediate action in <br />
                      case of unauthorized transactions or unusual activities.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Notification History</h5>
                    <p className="mil-text-m mil-soft">
                      Keep track of your financial activity and the response to
                      alert. <br />
                      Your security is our priority, are always one step
                      forward.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-5 mil-mb-80">
              <img
                src="img/home-2/5.png"
                alt="image"
                className="mil-up"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* testimonials */}
      <div className="mil-testimonials mil-p-0-160">
        <div className="container">
          <Testimonials2 />
        </div>
      </div>
      {/* testimonials end */}
      {/* call to action */}
      <CallToAction1 />
    </PlaxLayout>
  );
};
export default page;