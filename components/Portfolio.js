"use client";
import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import testimonial_data from "../data/TestimonialData";
import testimonial_data1 from "../data/TestimonialData1";

const DualPortfolioCarousel = () => {
  const [leftActiveIndex, setLeftActiveIndex] = useState(0);
  const [rightActiveIndex, setRightActiveIndex] = useState(3);
  const [isLeftHovered, setIsLeftHovered] = useState(-1);
  const [isRightHovered, setIsRightHovered] = useState(-1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const timeoutRef = useRef(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);

      setLeftActiveIndex((prev) => (prev + 1) % testimonial_data.length);
      setRightActiveIndex((prev) =>
        prev === 0 ? testimonial_data.length - 1 : prev - 1
      );

      setTimeout(() => {
        setIsTransitioning(false);
      }, 900);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isTransitioning]);

  // Navigation handler factory
  const createNavigationHandler = useCallback(
    (setActiveIndex, direction, isRight = false) => {
      return () => {
        if (isTransitioning) return;
        setIsAutoPlaying(false);
        setIsTransitioning(true);

        if (isRight) {
          if (direction === "next") {
            setActiveIndex((prev) =>
              prev === 0 ? testimonial_data.length - 1 : prev - 1
            );
          } else {
            setActiveIndex((prev) => (prev + 1) % testimonial_data.length);
          }
        } else {
          if (direction === "next") {
            setActiveIndex((prev) => (prev + 1) % testimonial_data.length);
          } else {
            setActiveIndex((prev) =>
              prev === 0 ? testimonial_data.length - 1 : prev - 1
            );
          }
        }

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setIsTransitioning(false);
          setIsAutoPlaying(true);
        }, 1000);
      };
    },
    [isTransitioning]
  );

  const handleLeftPrev = useMemo(
    () => createNavigationHandler(setLeftActiveIndex, "prev"),
    [createNavigationHandler]
  );
  const handleLeftNext = useMemo(
    () => createNavigationHandler(setLeftActiveIndex, "next"),
    [createNavigationHandler]
  );
  const handleRightPrev = useMemo(
    () => createNavigationHandler(setRightActiveIndex, "prev", true),
    [createNavigationHandler]
  );
  const handleRightNext = useMemo(
    () => createNavigationHandler(setRightActiveIndex, "next", true),
    [createNavigationHandler]
  );

  // Helper to assign slide class
  const getSlideClass = (index, activeIndex, length) => {
    if (index === activeIndex) return "slide active";
    if (index === (activeIndex + 1) % length) return "slide next";
    if (index === (activeIndex - 1 + length) % length) return "slide prev";
    if (index === (activeIndex + 2) % length) return "slide far-right";
    if (index === (activeIndex - 2 + length) % length) return "slide far-left";
    return "hidden"; // don’t render
  };

  // Portfolio Item
  const PortfolioItem = React.memo(
    ({ item, index, activeIndex, isLeft, isHovered, onMouseEnter, onMouseLeave, length }) => {
      const slideClass = getSlideClass(index, activeIndex, length);
      if (slideClass === "hidden") return null;

      return (
        <div
          className={`${slideClass} ${isLeft ? "left" : "right"}`}
          onMouseEnter={() => onMouseEnter(index)}
          onMouseLeave={onMouseLeave}
        >
          <div
            className={`slide-inner ${isHovered === index ? "hovered" : ""}`}
            style={{
              backgroundImage: `url(${item.brand_img?.src})`,
            }}
          >
            <div className="overlay">
              <div className="overlay-top">
                <span className="tag">{item.brand_tag}</span>
                <span className="time">{item.time}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );
  PortfolioItem.displayName = "PortfolioItem";

  // Navigation Button
  const NavButton = React.memo(({ direction, onClick }) => {
    return (
      <div className={`nav-btn ${direction}`} onClick={onClick}>
        <svg
          width={isMobile ? "16" : "20"}
          height={isMobile ? "16" : "20"}
          viewBox="0 0 24 24"
          fill="none"
        >
          {direction === "prev" ? (
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </div>
    );
  });
  NavButton.displayName = "NavButton";

  return (
    <div className="dual-carousel">
      <div className="header">
        <h1>Archive</h1>
        <h5>Exploring imagination and reality, one page at a time</h5>
      </div>

      {/* Corrected structure: Wrap carousels in carousel-wrapper */}
      <div className="carousel-wrapper">
        
        {/* Left Carousel */}
        <div className="carousel">
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
              length={testimonial_data1.length}
            />
          ))}
          <NavButton direction="prev" onClick={handleLeftPrev} />
          <NavButton direction="next" onClick={handleLeftNext} />
        </div>

        {/* Right Carousel */}
        <div className="carousel">
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
              length={testimonial_data.length}
            />
          ))}
          <NavButton direction="prev" onClick={handleRightPrev} />
          <NavButton direction="next" onClick={handleRightNext} />
        </div>
      </div>
      {/* End of carousel-wrapper */}
    </div>
  );
};

export default DualPortfolioCarousel;
