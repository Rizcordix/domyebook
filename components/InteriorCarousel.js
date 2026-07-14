"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BookCoverCarousel = () => {
    const bookCovers = [
        {
            id: 1,
            src: '/img/portfolio/2/archive_1.png',
            alt: 'Book Cover 1',
        },
        {
            id: 2,
            src: '/img/portfolio/2/archive_2.png',
            alt: 'Book Cover 2',
        },
        {
            id: 3,
            src: '/img/portfolio/2/archive_3.png',
            alt: 'Book Cover 3',
        },
        {
            id: 4,
            src: '/img/portfolio/2/archive_4.png',
            alt: 'Book Cover 4',
        },
        {
            id: 5,
            src: '/img/portfolio/2/archive_5.png',
            alt: 'Book Cover 5',
        }
    ];

    return (
        <>
        <div style={styles.carouselContainer}>
            <h2 style={{textAlign: 'center', marginBottom: '1rem'}}>Sample layouts</h2>
            
            <div style={styles.frameContainer}>
                                    {/* Outer Frame */}
                                    <div style={styles.outerFrame}>
                                            {/* Inner Frame */}
                                            <div style={styles.innerFrame}>
                                                    {/* Content Area */}
                                                    <div style={styles.contentArea}>
                                                            <Swiper
                                                                    modules={[Navigation, Pagination, Autoplay]}
                                                                    spaceBetween={0}
                                                                    slidesPerView={1}
                                                                    centeredSlides={true}
                                                                    autoplay={{
                                                                            delay: 4000,
                                                                            disableOnInteraction: false,
                                                                            pauseOnMouseEnter: true,
                                                                    }}
                                                                    navigation={{
                                                                            nextEl: '.custom-next',
                                                                            prevEl: '.custom-prev',
                                                                    }}
                                                                    pagination={{
                                                                            clickable: true,
                                                                            dynamicBullets: false,
                                                                    }}
                                                                    loop={true}
                                                                    speed={800}
                                                                    style={styles.swiper}
                                                            >
                                                                    {bookCovers.map((book) => (
                                                                            <SwiperSlide key={book.id} style={styles.slide}>
                                                                                    <img
                                                                                            src={book.src}
                                                                                            alt={book.alt}
                                                                                            style={styles.slideImage} />
                                                                            </SwiperSlide>
                                                                    ))}
                                                            </Swiper>

                                                            {/* Custom Navigation Arrows */}
                                                            <div className="custom-prev" style={styles.customPrev}>
                                                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                                                                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                            </div>
                                                            <div className="custom-next" style={styles.customNext}>
                                                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                                                                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                            </div>
                                                    </div>
                                            </div>
                                    </div>
                            </div>
                    </div>

        </>
    );
};

const styles = {
    carouselContainer: {
        width: '100%',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',  // Ensure the heading is above the carousel
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f2fafa 0%, #ffffff 100%)',
        padding: '3rem',
        borderRadius: '12px',
    },

    frameContainer: {
        position: 'relative',
        width: '100%',
        maxWidth: '700px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    outerFrame: {
        width: '100%',
        height: '100%',
        background: '#7eb947',
        padding: '8px',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    },

    innerFrame: {
        width: '100%',
        height: '100%',
        background: '#4A5568',
        padding: '8px',
        borderRadius: '8px',
    },

    contentArea: {
        width: '100%',
        height: '100%',
        background: '#E2E8F0',
        borderRadius: '4px',
        position: 'relative',
        overflow: 'hidden',
    },

    swiper: {
        width: '100%',
        height: '100%',
    },

    slide: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    slideImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        maxWidth: '100%',
        maxHeight: '100%',
    },

    customPrev: {
        position: 'absolute',
        top: '50%',
        left: '20px',
        transform: 'translateY(-50%)',
        width: '50px',
        height: '50px',
        background: 'rgba(0, 0, 0, 0.3)',
        border: 'none',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 10,
        color: 'white',
        transition: 'all 0.3s ease',
    },

    customNext: {
        position: 'absolute',
        top: '50%',
        right: '20px',
        transform: 'translateY(-50%)',
        width: '50px',
        height: '50px',
        background: 'rgba(0, 0, 0, 0.3)',
        border: 'none',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 10,
        color: 'white',
        transition: 'all 0.3s ease',
    },
};

export default BookCoverCarousel;
