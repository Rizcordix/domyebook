"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EbookServices = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      title: "Ghostwriting",
      description: "Transform your ideas into a polished manuscript with our professional ghostwriting services. We help you articulate your vision and bring your story to life.",
      features: [
        "Collaborative writing process",
        "Expert research and fact-checking",
        "Customized writing style",
        "Confidentiality and privacy",
        "Revisions and editing included"
      ],
      image: "/img/home-2/Ghostwriting.png",
      showBanner: false,
      extlink: "/ghostwriting"
    },
    {
      title: "Audio-Ebook",
      description: "Transform your written content into engaging audiobooks with professional narration and high-quality production. Reach a wider audience through multiple formats and platforms.",
      features: [
        "Professional voice-over recording",
        "Multi-format audio production",
        "Chapter-by-chapter organization",
        "Background music integration",
        "Cross-platform compatibility"
      ],
      image: "/img/home-2/Audio-Ebook.png",
      showBanner: false,
      extlink: "/audio-ebook"
    },
    {
      title: "Promo-Video",
      description: "Create compelling promotional videos that showcase your ebook and attract readers. Professional video production to boost your marketing efforts and sales.",
      features: [
        "Script writing and storyboarding",
        "Professional video editing",
        "Motion graphics and animations",
        "Social media optimization",
        "Multiple format delivery"
      ],
      image: "/img/home-2/promo_video.png",
      showBanner: false,
      extlink: "/dynamic-video-promos"
    }
  ];

  const bannerStats = [
    {
      iconSrc: "/img/brands/1.svg",
      alt: "Happy Authors Icon",
      number: "31+",
      label: "Published Authors"
    },
    {
      iconSrc: "/img/brands/2.svg",
      alt: "Books Icon",
      number: "355+",
      label: "Ebooks Published"
    },
    {
      iconSrc: "/img/brands/3.svg",
      alt: "Languages Icon",
      number: "25+",
      label: "Languages"
    },
    {
      iconSrc: "/img/brands/4.svg",
      alt: "Downloads Icon",
      number: "300K+",
      label: "Total Downloads"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

return (
    <section className="ebook_services_section section_space">
        <div className="container">
            <div className="row align-items-center">
                {/* Image Section - Left */}
                <div className="col-lg-6 order-lg-first">
                    <div className={`services_image_container ${isVisible ? 'animate-in' : ''}`}>
                        <div className="service_image_box">
                            <div className="image_content">
                                <div 
                                    className={`diagram_placeholder tab-${activeTab}`}
                                    key={activeTab}
                                >
                                    <img
                                        src={services[activeTab].image}
                                        alt={`${services[activeTab].title} Service`}
                                        // width={450}
                                        // height={450}
                                        style={{ 
                                            objectFit: 'contain',
                                            borderRadius: '12px',
                                            filter: 'drop-shadow(0 4px 20px rgba(126, 185, 71, 0.2))'
                                        }}
                                        priority
                                    />
                                </div>
                            </div>
                            
                            {/* Floating Elements */}
                            <div className="floating_element element_1">
                                <div className="pulse_dot"></div>
                            </div>
                            <div className="floating_element element_2">
                                <div className="pulse_dot"></div>
                            </div>
                            <div className="floating_element element_3">
                                <div className="pulse_dot"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section - Right */}
                <div className="col-lg-6 order-lg-last">
                    <div className={`services_content ${isVisible ? 'animate-in' : ''}`}>
                        {/* Enhanced Navigation Tabs */}
                        <div className="services_nav">
                            <div className="nav_container">
                                {services.map((service, index) => (
                                    <button
                                        key={index}
                                        className={`service_tab ${activeTab === index ? 'active' : ''}`}
                                        onClick={() => handleTabClick(index)}
                                    >
                                        <span className="tab_text">{service.title}</span>
                                        <div className="tab_indicator"></div>
                                    </button>
                                ))}
                                <div 
                                    className="active_indicator"
                                    style={{
                                        transform: `translateX(${activeTab * 100}%)`,
                                        width: `${100 / services.length}%`
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* Enhanced Content */}
                        <div className={`service_content_active content-${activeTab}`} key={activeTab}>
                            <h2 className="service_title">
                                <span className="title_highlight">{services[activeTab].title.split('-')[0]}</span>
                                {services[activeTab].title.includes('-') && (
                                    <span className="title_normal">-{services[activeTab].title.split('-')[1]}</span>
                                )}
                            </h2>
                            
                            <p className="service_description">
                                {services[activeTab].description}
                            </p>

                            <ul className="service_features">
                                {services[activeTab].features.map((feature, index) => (
                                    <li key={index} className="feature_item" style={{ animationDelay: `${index * 100}ms` }}>
                                        <div className="feature_icon">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M10 3L4.5 8.5L2 6" stroke="#7eb947" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <span className="feature_text">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Stats Banner - Show for Audio-Ebook */}
                            {services[activeTab].showBanner && (
                                <div className="stats_banner">
                                    <div className="stats_grid">
                                        {bannerStats.map((stat, index) => (
                                            <div key={index} className="stat_card" style={{ animationDelay: `${index * 150}ms` }}>
                                                <div className="stat_icon">
                                                    <Image src={stat.iconSrc} alt={stat.alt} width={40} height={40} style={{ objectFit: 'contain' }} />
                                                </div>
                                                <div className="stat_number">{stat.number}</div>
                                                <div className="stat_label">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="cta_section">
                               <div>
                                    <Link
                                    href={services[activeTab].extlink}
                                    target="_blank"
                                    className="mil-btn mil-button-transform mil-md mil-add-arrow"
                                    >
                                    get started
                                    </Link>
                                </div>
                                
                                <div className="stats_mini">
                                    <div className="stat_item">
                                        <span className="stat_number">98%</span>
                                        <span className="stat_label">Client Satisfaction</span>
                                    </div>
                                    <div className="stat_divider"></div>
                                    <div className="stat_item">
                                        <span className="stat_number">24/7</span>
                                        <span className="stat_label">Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`
            .ebook_services_section {
                background: linear-gradient(135deg, #f2fafa 0%, #ffffff 100%);
                padding: 100px 0;
                position: relative;
                overflow: hidden;
            }

            .ebook_services_section::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: 
                    radial-gradient(circle at 20% 20%, rgba(126, 185, 71, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(126, 185, 71, 0.05) 0%, transparent 50%);
                pointer-events: none;
            }

            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
                position: relative;
                z-index: 1;
            }
            
            .row {
                display: flex;
                align-items: center;
                gap: 60px;
            }
            
            .col-lg-6 {
                flex: 1;
                min-width: 0;
            }

            /* Enhanced Image Section */
            .services_image_container {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                opacity: 0;
                transform: translateX(-50px);
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .services_image_container.animate-in {
                opacity: 1;
                transform: translateX(0);
            }

            .service_image_box {
                background: linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%);
                border-radius: 24px;
                box-shadow: 
                    0 20px 60px rgba(126, 185, 71, 0.15),
                    0 8px 25px rgba(0, 0, 0, 0.08),
                    inset 0 1px 0 rgba(255, 255, 255, 0.8);
                padding: 0px 0px;
                width: 100%;
                max-width: 540px;
                position: relative;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                border: 1px solid rgba(126, 185, 71, 0.2);
            }

            .service_image_box:hover {
                transform: translateY(-8px) scale(1.02);
                box-shadow: 
                    0 30px 80px rgba(126, 185, 71, 0.2),
                    0 12px 35px rgba(0, 0, 0, 0.1);
                border-color: rgba(126, 185, 71, 0.4);
            }

            .image_content {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 300px;
            }

            .diagram_placeholder {
                opacity: 0;
                transform: scale(0.9) rotate(2deg);
                animation: slideInImage 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
            }

            /* Floating Elements */
            .floating_element {
                position: absolute;
                z-index: 2;
            }

            .element_1 {
                top: 20px;
                right: 20px;
                animation: float 6s ease-in-out infinite;
            }

            .element_2 {
                bottom: 30px;
                left: 20px;
                animation: float 8s ease-in-out infinite reverse;
            }

            .element_3 {
                top: 50%;
                right: -10px;
                animation: float 7s ease-in-out infinite 2s;
            }

            .pulse_dot {
                width: 12px;
                height: 12px;
                background: linear-gradient(135deg, #7eb947, #5a8a32);
                border-radius: 50%;
                position: relative;
            }

            .pulse_dot::before {
                content: '';
                position: absolute;
                top: -5px;
                left: -5px;
                right: -5px;
                bottom: -5px;
                background: inherit;
                border-radius: 50%;
                opacity: 0.3;
                animation: pulse 2s infinite;
            }

            /* Enhanced Content Section */
            .services_content {
                padding-left: 20px;
                opacity: 0;
                transform: translateX(50px);
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
            }

            .services_content.animate-in {
                opacity: 1;
                transform: translateX(0);
            }

            /* Enhanced Navigation */
            .services_nav {
                margin-bottom: 50px;
            }

            .nav_container {
                position: relative;
                background: rgba(255, 255, 255, 0.9);
                backdrop-filter: blur(10px);
                border-radius: 50px;
                padding: 6px;
                display: flex;
                box-shadow: 
                    0 8px 32px rgba(126, 185, 71, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.8);
                border: 1px solid rgba(126, 185, 71, 0.2);
            }

            .service_tab {
                position: relative;
                flex: 1;
                background: transparent;
                border: none;
                padding: 16px 24px;
                border-radius: 44px;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                z-index: 2;
                overflow: hidden;
            }

            .tab_text {
                font-size: 15px;
                font-weight: 600;
                color: #666;
                transition: all 0.3s ease;
                position: relative;
                z-index: 2;
            }

            .service_tab.active .tab_text {
                color: #ffffff;
            }

            .service_tab:hover:not(.active) .tab_text {
                color: #7eb947;
            }

            .active_indicator {
                position: absolute;
                top: 6px;
                bottom: 6px;
                background: linear-gradient(135deg, #7eb947 0%, #5a8a32 100%);
                border-radius: 44px;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 4px 20px rgba(126, 185, 71, 0.4);
            }

            /* Enhanced Content */
            .service_content_active {
                opacity: 0;
                transform: translateY(20px);
                animation: slideInContent 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s forwards;
            }

            .service_title {
                font-size: 42px;
                font-weight: 800;
                margin-bottom: 24px;
                line-height: 1.2;
            }

            .title_highlight {
                background: linear-gradient(135deg, #7eb947 0%, #5a8a32 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            .title_normal {
                color: #333333;
            }

            .service_description {
                font-size: 17px;
                color: #666666;
                line-height: 1.7;
                margin-bottom: 36px;
                font-weight: 400;
            }

            .service_features {
                list-style: none;
                padding: 0;
                margin: 0 0 40px 0;
            }

            .feature_item {
                display: flex;
                align-items: center;
                margin-bottom: 16px;
                opacity: 0;
                transform: translateX(-20px);
                animation: slideInFeature 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }

            .feature_icon {
                width: 24px;
                height: 24px;
                background: linear-gradient(135deg, rgba(126, 185, 71, 0.2) 0%, rgba(126, 185, 71, 0.1) 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 16px;
                flex-shrink: 0;
                transition: all 0.3s ease;
                border: 1px solid rgba(126, 185, 71, 0.3);
            }

            .feature_item:hover .feature_icon {
                background: linear-gradient(135deg, #7eb947 0%, #5a8a32 100%);
                border-color: #7eb947;
                transform: scale(1.1);
            }

            .feature_item:hover .feature_icon svg path {
                stroke: #000000;
            }

            .feature_text {
                font-size: 16px;
                color: #444444;
                font-weight: 500;
            }

            /* Stats Banner */
            .stats_banner {
                margin: 40px 0;
                background: linear-gradient(135deg, #7eb947 0%, #5a8a32 100%);
                border-radius: 20px;
                padding: 40px 30px;
                box-shadow: 0 20px 60px rgba(126, 185, 71, 0.3);
                position: relative;
                overflow: hidden;
            }

            .stats_banner::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: 
                    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
                pointer-events: none;
            }

            .stats_grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 30px;
                position: relative;
                z-index: 1;
            }

            .stat_card {
                text-align: center;
                opacity: 0;
                transform: translateY(20px);
                animation: slideInStat 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }

            .stat_icon {
                margin-bottom: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .stat_card .stat_number {
                font-size: 20px;
                font-weight: 800;
                color: #000000;
                display: block;
                line-height: 1;
                margin-bottom: 8px;
            }

            .stat_card .stat_label {
                font-size: 12px;
                color: rgba(0, 0, 0, 0.8);
                font-weight: 500;
                line-height: 1.3;
            }

            /* Enhanced CTA Section */
            .cta_section {
                display: flex;
                align-items: center;
                gap: 32px;
                flex-wrap: wrap;
            }

            .btn {
                background: linear-gradient(135deg, #7eb947 0%, #5a8a32 100%);
                color: #ffffff;
                border: none;
                padding: 16px 32px;
                border-radius: 50px;
                font-size: 15px;
                font-weight: 600;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                gap: 12px;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                text-decoration: none;
                position: relative;
                overflow: hidden;
                box-shadow: 0 4px 20px rgba(126, 185, 71, 0.3);
            }

            .btn::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                transition: left 0.5s;
            }

            .btn:hover::before {
                left: 100%;
            }

            .btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 30px rgba(126, 185, 71, 0.4);
                background: linear-gradient(135deg, #8bc653 0%, #6a9c3d 100%);
            }

            .btn_icon {
                transition: all 0.3s ease;
            }

            .btn:hover .btn_icon {
                transform: translate(2px, -2px);
            }

            .stats_mini {
                display: flex;
                align-items: center;
                gap: 20px;
            }

            .stat_item {
                text-align: center;
            }

            .stats_mini .stat_number {
                display: block;
                font-size: 18px;
                font-weight: 700;
                color: #7eb947;
                line-height: 1;
            }

            .stats_mini .stat_label {
                display: block;
                font-size: 12px;
                color: #666666;
                margin-top: 4px;
                font-weight: 500;
            }

            .stat_divider {
                width: 1px;
                height: 40px;
                background: linear-gradient(to bottom, transparent, rgba(126, 185, 71, 0.5), transparent);
            }

            /* Animations */
            @keyframes slideInImage {
                to {
                    opacity: 1;
                    transform: scale(1) rotate(0deg);
                }
            }

            @keyframes slideInContent {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes slideInFeature {
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            @keyframes slideInStat {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }

            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 0.3; }
                50% { transform: scale(1.5); opacity: 0.1; }
            }

            /* Responsive Design */
            @media (max-width: 1024px) {
                .row {
                    gap: 40px;
                }
                
                .services_content {
                    padding-left: 0;
                }

                .stats_grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 25px;
                }
            }

            @media (max-width: 992px) {
                .row {
                    flex-direction: column;
                    gap: 50px;
                }
                
                .col-lg-6 {
                    flex: none;
                    width: 100%;
                }
                
                .services_image_container {
                    order: 2;
                }
                
                .services_content {
                    order: 1;
                }
                
                .service_title {
                    font-size: 36px;
                }
                
                .service_image_box {
                    max-width: 100%;
                    padding: 40px 30px;
                }
            }

            @media (max-width: 768px) {
                .ebook_services_section {
                    padding: 80px 0;
                }
                
                .nav_container {
                    flex-direction: column;
                    border-radius: 16px;
                }
                
                .service_tab {
                    border-radius: 12px;
                }
                
                .active_indicator {
                    display: none;
                }
                
                .service_tab.active {
                    background: linear-gradient(135deg, #7eb947 0%, #5a8a32 100%);
                }
                
                .service_tab.active .tab_text {
                    color: #ffffff;
                }
                
                .service_title {
                    font-size: 28px;
                }
                
                .service_description {
                    font-size: 16px;
                }
                
                .cta_section {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 20px;
                }
                
                .stats_mini {
                    align-self: center;
                }
                
                .service_image_box {
                    padding: 30px 20px;
                }

                .stats_grid {
                    grid-template-columns: 1fr;
                    gap: 20px;
                }

                .stats_banner {
                    padding: 30px 20px;
                }

                .stat_card .stat_number {
                    font-size: 28px;
                }
            }

            @media (max-width: 480px) {
                .container {
                    padding: 0 15px;
                }
                
                .service_title {
                    font-size: 24px;
                }
                
                .btn {
                    padding: 14px 24px;
                    font-size: 14px;
                }

                .stats_grid {
                    gap: 15px;
                }

                .stat_card .stat_number {
                    font-size: 24px;
                }
            }
        `}</style>
    </section>
);
};

export default EbookServices;