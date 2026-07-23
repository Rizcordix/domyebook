"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PlaxLayout from "@/layouts/PlaxLayout";
import styles from "./testimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Rachel Johnson",
    role: "Marketing Director",
    company: "TechCorp Solutions",
    content: "This service exceeded all our expectations. The team was professional, responsive, and delivered outstanding results that helped grow our business significantly. Their attention to detail and commitment to excellence is truly remarkable.",
    image: "/img/girl7.webp",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Simon",
    role: "CEO",
    company: "TechStart",
    content: "Working with this team was a game-changer for our company. Their expertise and dedication helped us achieve our goals faster than we thought possible. I highly recommend their services.",
    image: "/img/boy6.webp",
    rating: 5
  },
  {
    id: 3,
    name: "Katherine Brandon",
    role: "Product Manager",
    company: "InnovateHub",
    content: "The quality of work and attention to detail is remarkable. They understood our vision perfectly and brought it to life better than we imagined. Outstanding collaboration throughout.",
    image: "/img/girl8.webp",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder",
    company: "InnovateCorp",
    content: "Exceptional service from start to finish. The team's professionalism and expertise made the entire process smooth and stress-free. Delivered beyond expectations. I would highly recommend it.",
    image: "/img/boy7.webp",
    rating: 4
  },
  {
    id: 5,
    name: "Grace Lawrence",
    role: "Operations Director",
    company: "GlobalTech",
    content: "Outstanding results and incredible support throughout the project. I would highly recommend their services to anyone looking for quality work and reliable partnership.",
    image: "/img/girl9.webp",
    rating: 5
  },
  {
    id: 6,
    name: "Samuel Raymond",
    role: "Creative Director",
    company: "DesignStudio",
    content: "The creativity and innovation they brought to our project was impressive. They delivered beyond our expectations and on time. Truly professional and expert team.",
    image: "/img/boy8.webp",
    rating: 5
  },
  {
    id: 7,
    name: "Amanda Smith",
    role: "Marketing Manager",
    company: "BrandMax",
    content: "Their strategic approach and creative solutions helped us achieve remarkable growth. The team is incredibly talented and dedicated to client success.",
    image: "/img/girl10.webp",
    rating: 4
  },
  {
    id: 8,
    name: "Henry Bryan",
    role: "CTO",
    company: "DataFlow",
    content: "Technical expertise combined with excellent communication. They solved complex challenges with elegant solutions and maintained high quality throughout the project.",
    image: "/img/boy9.webp",
    rating: 5
  },
  {
    id: 9,
    name: "Sophia Carter",
    role: "VP of Sales",
    company: "SalesForce Pro",
    content: "Impressive results that directly impacted our bottom line. Their data-driven approach and strategic insights were exactly what we needed to scale our operations.",
    image: "/img/girl11.webp",
    rating: 5
  },
  {
    id: 10,
    name: "Justin Gary",
    role: "Project Manager",
    company: "BuildRight",
    content: "Seamless project execution with clear communication at every step. They transformed our ideas into reality with precision, expertise, and creativity.",
    image: "/img/boy10.webp",
    rating: 4
  },
  {
    id: 11,
    name: "Melissa Jason",
    role: "Brand Manager",
    company: "StyleHub",
    content: "Their creative vision and attention to brand consistency was exceptional. They helped us establish a strong market presence with innovative solutions.",
    image: "/img/girl12.webp",
    rating: 5
  },
  {
    id: 12,
    name: "Jonathan Nicholas",
    role: "Operations Manager",
    company: "LogiFlow",
    content: "Streamlined our processes and improved efficiency dramatically. Their systematic approach, precision, and problem-solving skills are top-notch.",
    image: "/img/boy11.webp",
    rating: 5
  },
  {
    id: 13,
    name: "Shirley Franklin",
    role: "Digital Director",
    company: "MediaWorks",
    content: "Revolutionary approach to digital transformation. They modernized our systems while ensuring zero downtime. Exceptional technical skills.",
    image: "/img/girl13.webp",
    rating: 4
  },
  {
    id: 14,
    name: "Christian Austin",
    role: "Strategy Consultant",
    company: "GrowthLab",
    content: "Strategic insights that drove measurable results. Their analytical approach and market understanding helped us identify new opportunities.",
    image: "/img/boy12.webp",
    rating: 5
  },
  {
    id: 15,
    name: "Charlotte Dylan",
    role: "Content Manager",
    company: "ContentPro",
    content: "Content strategy that resonated with our audience perfectly. Their understanding of market trends and consumer behavior is outstanding.",
    image: "/img/girl14.webp",
    rating: 5
  }
];

const TestimonialsPage = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedIds, setExpandedIds] = useState([]);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, testimonials.length));
  };

  const toggleReadMore = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;

  return (
    <PlaxLayout>
    <div>
      {/* banner */}
      <div className="mil-banner2 mil-banner-inner mil-dissolve">
        <div className={`container ${styles.container}`}>
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <h2 className="mil-mb-10">
                  What Our Clients Say
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* Testimonials Section */}
      <div className={styles.testimonialsSection}>
        <div className={`container ${styles.container}`}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${styles.highlight}`}>
              Recommended by leading experts in <br />
              <span className={styles.highlight}>Writing and SEO</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Discover what our clients have to say about their experience working with us
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={styles.testimonialCard}
                onMouseEnter={() => setHoveredCard(testimonial.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.quoteIcon}>
                    <svg width="32" height="24" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 18V6.857C0 3.048 1.792 0 5.333 0v3.429c-1.419 0-2.666 1.372-2.666 3.428v.571H8V18H0zm13.333 0V6.857C13.333 3.048 15.125 0 18.667 0v3.429c-1.42 0-2.667 1.372-2.667 3.428v.571H21.33V18h-8z" fill="#7eb947" />
                    </svg>
                  </div>
                  <div className={`${styles.ratingStars} ${hoveredCard === testimonial.id ? 'show-rating' : ''}`}>
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className={`${styles.star} ${index < testimonial.rating ? styles.filled : styles.empty}`}>★</span>
                    ))}
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <p className={`${styles.testimonialText} ${expandedIds.includes(testimonial.id) ? styles.expanded : ''}`}>
                    &quot;{testimonial.content}&quot;
                  </p>
                  {testimonial.content.length > 180 && (
                    <button className={styles.readMore} onClick={() => toggleReadMore(testimonial.id)}>
                      {expandedIds.includes(testimonial.id) ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </div>

                <div className={styles.cardFooter}>
                  <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={styles.customerAvatar}
                    />
                  <div className="author-details">
                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                    <p className={styles.authorPosition}>{testimonial.role}</p>
                    <p className={styles.authorCompany}>{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className={styles.loadMoreSection}>
              <button onClick={loadMore} className={styles.loadMoreButton}>
                Load More ...
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
      </PlaxLayout>
  );
};

export default TestimonialsPage;
