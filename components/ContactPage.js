"use client";
import { PageBanner } from "@/components/Banner";
import Link from "next/link";
const Contactpage = () => {
  return (
    <>
      <div className="mil-banner2 mil-banner-inner mil-dissolve">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-8">
                        <div className="mil-banner-text mil-text-center">
                            
                            <h2 className="mil-mb-10">
                                Contact Us
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
      {/* Enhanced Contact Section */}
      <div className="mil-blog-list mil-p-0-160">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              
              {/* Introduction */}
              <div  style={{ textAlign: 'center' }}>
                <h3 className="mil-mb-30 mil-up" style={{ color: '#7eb947', fontWeight: '600' , fontSize: '50px' }}>
                  Ready to Transform Your Ideas into a Bestselling Ebook?
                </h3>
                <p className="mil-text-l mil-soft mil-mb-60 mil-up" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  Whether you&apos;re a first-time author or looking to expand your publishing portfolio, our expert team is here to guide you through every step of your ebook journey. From initial concept to final publication, we make your publishing dreams a reality.
                </p>
              </div>

              {/* Enhanced Contact Methods Grid */}
              <div className="row mil-mb-80 mil-p-60-0" style={{ padding: '30px 20px' }}>
                <div className="col-lg-6 mil-mb-40">
                  <div 
                    className="mil-p-60-0"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)',
                      borderRadius: '20px',
                      border: '1px solid rgba(126, 185, 71, 0.1)',
                      boxShadow: '0 8px 32px rgba(126, 185, 71, 0.08)',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      padding: '40px 35px'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(126, 185, 71, 0.15)';
                      e.currentTarget.style.borderColor = 'rgba(126, 185, 71, 0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(126, 185, 71, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(126, 185, 71, 0.1)';
                    }}
                  >
                    {/* Decorative background element */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: '-30px',
                        right: '-30px',
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, rgba(126, 185, 71, 0.1) 0%, rgba(126, 185, 71, 0.05) 100%)',
                        borderRadius: '50%',
                        zIndex: '0'
                      }}
                    ></div>
                    
                    <div style={{ position: 'relative', zIndex: '1' }}>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                        <div 
                          style={{
                            width: '60px',
                            height: '60px',
                            background: 'linear-gradient(135deg, #7eb947 0%, #8bc653 100%)',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '20px',
                            boxShadow: '0 8px 20px rgba(126, 185, 71, 0.25)'
                          }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h5 style={{ margin: '0', color: '#2c3e50', fontSize: '20px', fontWeight: '700' }}>Email Us</h5>
                      </div>
                      
                      <p className="mil-text-m mil-soft" style={{ marginBottom: '20px', lineHeight: '1.6', color: '#64748b' }}>
                        Get detailed information about our services, pricing, and timelines with personalized responses.
                      </p>
                      
                      <div style={{ marginBottom: '20px' }}>
                        <a 
                          href="mailto:info@domyebook.com"
                          style={{ 
                            color: '#7eb947', 
                            fontWeight: '700',
                            fontSize: '18px',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.color = '#6aa83a'}
                          onMouseOut={(e) => e.currentTarget.style.color = '#7eb947'}
                        >
                          info@domyebook.com
                        </a>
                      </div>
                      
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        padding: '12px 16px',
                        backgroundColor: 'rgba(126, 185, 71, 0.08)',
                        borderRadius: '10px',
                        border: '1px solid rgba(126, 185, 71, 0.15)'
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#7eb947',
                          borderRadius: '50%',
                          marginRight: '12px',
                          animation: 'pulse 2s infinite'
                        }}></div>
                        <p className="mil-text-s" style={{ margin: '0', color: '#475569', fontWeight: '500' }}>
                          Response time: Within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mil-mb-40">
                  <div 
                    className="mil-p-60-0"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)',
                      borderRadius: '20px',
                      border: '1px solid rgba(126, 185, 71, 0.1)',
                      boxShadow: '0 8px 32px rgba(126, 185, 71, 0.08)',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      padding: '40px 35px'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(126, 185, 71, 0.15)';
                      e.currentTarget.style.borderColor = 'rgba(126, 185, 71, 0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(126, 185, 71, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(126, 185, 71, 0.1)';
                    }}
                  >
                    {/* Decorative background element */}
                              <div 
                                style={{
                                position: 'absolute',
                                top: '-30px',
                                right: '-30px',
                                width: '80px',
                                height: '80px',
                                background: 'linear-gradient(135deg, rgba(126, 185, 71, 0.1) 0%, rgba(126, 185, 71, 0.05) 100%)',
                                borderRadius: '50%',
                                zIndex: '0'
                                }}
                              ></div>
                              
                              <div style={{ position: 'relative', zIndex: '1' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                                <div 
                                  style={{
                                  width: '60px',
                                  height: '60px',
                                  background: 'linear-gradient(135deg, #7eb947 0%, #8bc653 100%)',
                                  borderRadius: '16px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  marginRight: '20px',
                                  boxShadow: '0 8px 20px rgba(126, 185, 71, 0.25)'
                                  }}
                                >
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59524 1.99522 8.06572 2.16708 8.43369 2.48353C8.80166 2.79999 9.04201 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                                <h5 style={{ margin: '0', color: '#2c3e50', fontSize: '20px', fontWeight: '700' }}>Call Us</h5>
                                </div>
                                
                                <p className="mil-text-m mil-soft" style={{ marginBottom: '20px', lineHeight: '1.6', color: '#64748b' }}>
                                Speak directly with our publishing consultants for immediate assistance and expert guidance.
                                </p>
                                
                                <div style={{ marginBottom: '20px' }}>
                                <a 
                                  href="tel:+0018085550111"
                                  style={{ 
                                  color: '#7eb947', 
                                  fontWeight: '700',
                                  fontSize: '18px',
                                  textDecoration: 'none',
                                  transition: 'color 0.3s ease'
                                  }}
                                  onMouseOver={(e) => e.currentTarget.style.color = '#6aa83a'}
                                  onMouseOut={(e) => e.currentTarget.style.color = '#7eb947'}
                                >
                                  +1 (512) 3259725
                                </a>
                                <br />
                                <a 
                                  href="tel:+0018085550111"
                                  style={{ 
                                  color: '#7eb947', 
                                  fontWeight: '700',
                                  fontSize: '18px',
                                  textDecoration: 'none',
                                  transition: 'color 0.3s ease'
                                  }}
                                  onMouseOver={(e) => e.currentTarget.style.color = '#6aa83a'}
                                  onMouseOut={(e) => e.currentTarget.style.color = '#7eb947'}
                                >
                                  +61480810531
                                </a>
                                </div>
                                
                                <div style={{ 
                                display: 'flex', 
                                alignItems: 'center',
                                padding: '12px 16px',
                                backgroundColor: 'rgba(126, 185, 71, 0.08)',
                                borderRadius: '10px',
                                border: '1px solid rgba(126, 185, 71, 0.15)'
                                }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '12px' }}>
                                  <circle cx="12" cy="12" r="10" stroke="#7eb947" strokeWidth="2"/>
                                  <polyline points="12,6 12,12 16,14" stroke="#7eb947" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p className="mil-text-s" style={{ margin: '0', color: '#475569', fontWeight: '500' }}>
                                  Available: Mon-Fri, 9 AM - 6 PM EST
                                </p>
                                </div>
                              </div>
                              </div>
                            </div>
                            </div>

                            {/* Services We Help With */}
                                <div className="mil-mb-80">
                                <h4 className="mil-mb-40 mil-up" style={{ color: '#333', textAlign: 'center' }}>
                                What Can We Help You With?
                                </h4>
                                <div className="row">
                                {[
                                { icon: '/img/contact/Ebook_Writing_&_Ghostwriting_Icon.png', title: 'Ebook Writing & Ghostwriting', desc: 'Professional writers to bring your ideas to life' },
                                { icon: '/img/contact/Editing-&-Proofreading-icon.png', title: 'Editing & Proofreading', desc: 'Polish your manuscript to perfection' },
                                { icon: '/img/contact/Book-Cover-Design-icon.png', title: 'Book Cover Design', desc: 'Eye-catching covers that sell books' },
                                { icon: '/img/contact/Publishing-&-Distribution-icon.png', title: 'Publishing & Distribution', desc: 'Get your ebook on all major platforms' },
                                { icon: '/img/contact/Marketing-&-Promotion-icon.png', title: 'Marketing & Promotion', desc: 'Strategies to boost your book sales' },
                                { icon: '/img/contact/Publishing-Consultation-icon.png', title: 'Publishing Consultation', desc: 'Expert advice for your publishing journey' }
                                ].map((service, index) => (
                                <div key={index} className="col-md-6 col-lg-4 mil-mb-30">
                                  <div 
                                  style={{
                                  padding: '25px',
                                  backgroundColor: 'white',
                                  borderRadius: '8px',
                                  border: '1px solid #e9ecef',
                                  textAlign: 'center',
                                  transition: 'all 0.3s ease',
                                  height: '100%'
                                  }}
                                  onMouseOver={(e) => {
                                  e.currentTarget.style.borderColor = '#7eb947';
                                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(126, 185, 71, 0.1)';
                                  }}
                                  onMouseOut={(e) => {
                                  e.currentTarget.style.borderColor = '#e9ecef';
                                  e.currentTarget.style.boxShadow = 'none';
                                  }}
                                  >
                                  <img 
                                  src={service.icon} 
                                  alt={service.title + " icon"} 
                                  style={{ width: '55px', height: '55px', marginBottom: '15px', objectFit: 'contain', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
                                  />
                                  <h6 style={{ color: '#333', marginBottom: '10px' }}>{service.title}</h6>
                                  <p className="mil-text-s mil-soft">{service.desc}</p>
                                  </div>
                                </div>
                                ))}
                                </div>
                                </div>

                                {/* Contact Information Card */}
              <div 
                className="mil-p-60-0"
                style={{
                  backgroundImage: "url(/img/buildings.png)",
                  backgroundSize: 'cover', 
                  backgroundPosition: 'bottom center',
                  // backgroundColor: '#7eb947',
                  borderRadius: '16px',
                  color: 'white',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%)'
                  }}
                ></div>
                <div style={{ position: 'relative', zIndex: '1' }}>
                  <h4 className="mil-mb-30" style={{ color: 'white' }}>
                    Our Office
                  </h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mil-mb-30">
                        <h6 style={{ color: 'white', marginBottom: '10px' }}>📍 Address</h6>
                        <p className="mil-text-m" style={{ color: 'rgba(255,255,255,0.9)' }}>
                          5539 Casa Martin,<br />
                          Dr Katy, TX 77449
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mil-mb-30">
                        <h6 style={{ color: 'white', marginBottom: '10px' }}>🕒 Business Hours</h6>
                        <p className="mil-text-m" style={{ color: 'rgba(255,255,255,0.9)' }}>
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '10px', paddingBottom: '10px' , marginTop: '20px' }}>
                    <p className="mil-text-s" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      Fax: +1 (512) 3259725
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mil-p-60-0" style={{ textAlign: 'center' }}>
                <h4 className="mil-mb-30" style={{ color: '#333' }}>
                  Ready to Get Started?
                </h4>
                <p className="mil-text-l mil-soft mil-mb-40">
                  Don&apos;t let your story remain untold. Contact us today and let&apos;s discuss how we can help you publish your next bestseller.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a 
                    href="mailto:info@domyebook.com"
                    style={{
                      display: 'inline-block',
                      padding: '15px 30px',
                      backgroundColor: '#7eb947',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#6aa83a';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#7eb947';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Send us an Email
                  </a>
                  <a 
                    href="tel:+1 (512) 3259725"
                    style={{
                      display: 'inline-block',
                      padding: '15px 30px',
                      backgroundColor: 'transparent',
                      color: '#7eb947',
                      textDecoration: 'none',
                      border: '2px solid #7eb947',
                      borderRadius: '8px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#7eb947';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#7eb947';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Call Now!
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* contact end */}
      
      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Contactpage;