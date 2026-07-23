"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './services2.module.css';

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
    <section className={`${styles.ebook_services_section} section_space`}>
        <div className={`container ${styles.container}`}>
            <div className={`row align-items-center ${styles.row}`}>
                {/* Image Section - Left */}
                <div className={`col-lg-6 order-lg-first ${styles.col}`}>
                    <div className={`${styles.services_image_container} ${isVisible ? styles.animateIn : ''}`}>
                        <div className={styles.service_image_box}>
                            <div className={styles.image_content}>
                                <div
                                    className={styles.diagram_placeholder}
                                    key={activeTab}
                                >
                                    <img
                                        src={services[activeTab].image}
                                        alt={`${services[activeTab].title} Service`}
                                        style={{
                                            objectFit: 'contain',
                                            borderRadius: '12px',
                                            filter: 'drop-shadow(0 4px 20px rgba(126, 185, 71, 0.2))'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className={`${styles.floating_element} ${styles.element_1}`}>
                                <div className={styles.pulse_dot}></div>
                            </div>
                            <div className={`${styles.floating_element} ${styles.element_2}`}>
                                <div className={styles.pulse_dot}></div>
                            </div>
                            <div className={`${styles.floating_element} ${styles.element_3}`}>
                                <div className={styles.pulse_dot}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section - Right */}
                <div className={`col-lg-6 order-lg-last ${styles.col}`}>
                    <div className={`${styles.services_content} ${isVisible ? styles.animateIn : ''}`}>
                        {/* Enhanced Navigation Tabs */}
                        <div className={styles.services_nav}>
                            <div className={styles.nav_container}>
                                {services.map((service, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.service_tab} ${activeTab === index ? styles.active : ''}`}
                                        onClick={() => handleTabClick(index)}
                                    >
                                        <span className={styles.tab_text}>{service.title}</span>
                                    </button>
                                ))}
                                <div
                                    className={styles.active_indicator}
                                    style={{
                                        transform: `translateX(${activeTab * 100}%)`,
                                        width: `${100 / services.length}%`
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* Enhanced Content */}
                        <div className={styles.service_content_active} key={activeTab}>
                            <h2 className={styles.service_title}>
                                <span className={styles.title_highlight}>{services[activeTab].title.split('-')[0]}</span>
                                {services[activeTab].title.includes('-') && (
                                    <span className={styles.title_normal}>-{services[activeTab].title.split('-')[1]}</span>
                                )}
                            </h2>

                            <p className={styles.service_description}>
                                {services[activeTab].description}
                            </p>

                            <ul className={styles.service_features}>
                                {services[activeTab].features.map((feature, index) => (
                                    <li key={index} className={styles.feature_item} style={{ animationDelay: `${index * 100}ms` }}>
                                        <div className={styles.feature_icon}>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M10 3L4.5 8.5L2 6" stroke="#7eb947" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <span className={styles.feature_text}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Stats Banner - Show for Audio-Ebook */}
                            {services[activeTab].showBanner && (
                                <div className={styles.stats_banner}>
                                    <div className={styles.stats_grid}>
                                        {bannerStats.map((stat, index) => (
                                            <div key={index} className={styles.stat_card} style={{ animationDelay: `${index * 150}ms` }}>
                                                <div className={styles.stat_icon}>
                                                    <Image src={stat.iconSrc} alt={stat.alt} width={40} height={40} style={{ objectFit: 'contain' }} />
                                                </div>
                                                <div className={styles.stat_number}>{stat.number}</div>
                                                <div className={styles.stat_label}>{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className={styles.cta_section}>
                               <div>
                                    <Link
                                    href={services[activeTab].extlink}
                                    target="_blank"
                                    className="mil-btn mil-button-transform mil-md mil-add-arrow"
                                    >
                                    get started
                                    </Link>
                                </div>

                                <div className={styles.stats_mini}>
                                    <div className={styles.stat_item}>
                                        <span className={styles.stat_number}>98%</span>
                                        <span className={styles.stat_label}>Client Satisfaction</span>
                                    </div>
                                    <div className={styles.stat_divider}></div>
                                    <div className={styles.stat_item}>
                                        <span className={styles.stat_number}>24/7</span>
                                        <span className={styles.stat_label}>Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
);
};

export default EbookServices;