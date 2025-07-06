"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PlaxLayout from "@/layouts/PlaxLayout";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp Solutions",
    content: "This service exceeded all our expectations. The team was professional, responsive, and delivered outstanding results that helped grow our business significantly. Their attention to detail and commitment to excellence is truly remarkable.",
    image: "/img/avatar.webp",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "TechStart",
    content: "Working with this team was a game-changer for our company. Their expertise and dedication helped us achieve our goals faster than we thought possible. I highly recommend their services.",
    image: "/img/avatar1.webp",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateHub",
    content: "The quality of work and attention to detail is remarkable. They understood our vision perfectly and brought it to life better than we imagined. Outstanding collaboration throughout.",
    image: "/img/avatar2.webp",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder",
    company: "InnovateCorp",
    content: "Exceptional service from start to finish. The team's professionalism and expertise made the entire process smooth and stress-free. Delivered beyond expectations.",
    image: "/img/avatar3.webp",
    rating: 4
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Operations Director",
    company: "GlobalTech",
    content: "Outstanding results and incredible support throughout the project. I would highly recommend their services to anyone looking for quality work and reliable partnership.",
    image: "/img/avatar4.webp",
    rating: 5
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Creative Director",
    company: "DesignStudio",
    content: "The creativity and innovation they brought to our project was impressive. They delivered beyond our expectations and on time. Truly professional team.",
    image: "/img/avatar.webp",
    rating: 5
  },
  {
    id: 7,
    name: "Amanda Foster",
    role: "Marketing Manager",
    company: "BrandMax",
    content: "Their strategic approach and creative solutions helped us achieve remarkable growth. The team is incredibly talented and dedicated to client success.",
    image: "/img/avatar1.webp",
    rating: 4
  },
  {
    id: 8,
    name: "Robert Kim",
    role: "CTO",
    company: "DataFlow",
    content: "Technical expertise combined with excellent communication. They solved complex challenges with elegant solutions and maintained high quality throughout the project.",
    image: "/img/avatar2.webp",
    rating: 5
  },
  {
    id: 9,
    name: "Jennifer Adams",
    role: "VP of Sales",
    company: "SalesForce Pro",
    content: "Impressive results that directly impacted our bottom line. Their data-driven approach and strategic insights were exactly what we needed to scale our operations.",
    image: "/img/avatar3.webp",
    rating: 5
  },
  {
    id: 10,
    name: "Alex Martinez",
    role: "Project Manager",
    company: "BuildRight",
    content: "Seamless project execution with clear communication at every step. They transformed our ideas into reality with precision and creativity.",
    image: "/img/avatar4.webp",
    rating: 4
  },
  {
    id: 11,
    name: "Rachel Green",
    role: "Brand Manager",
    company: "StyleHub",
    content: "Their creative vision and attention to brand consistency was exceptional. They helped us establish a strong market presence with innovative solutions.",
    image: "/img/avatar.webp",
    rating: 5
  },
  {
    id: 12,
    name: "Kevin Brown",
    role: "Operations Manager",
    company: "LogiFlow",
    content: "Streamlined our processes and improved efficiency dramatically. Their systematic approach and problem-solving skills are top-notch.",
    image: "/img/avatar1.webp",
    rating: 5
  },
  {
    id: 13,
    name: "Sophie Turner",
    role: "Digital Director",
    company: "MediaWorks",
    content: "Revolutionary approach to digital transformation. They modernized our systems while ensuring zero downtime. Exceptional technical skills.",
    image: "/img/avatar2.webp",
    rating: 4
  },
  {
    id: 14,
    name: "Daniel Lee",
    role: "Strategy Consultant",
    company: "GrowthLab",
    content: "Strategic insights that drove measurable results. Their analytical approach and market understanding helped us identify new opportunities.",
    image: "/img/avatar3.webp",
    rating: 5
  },
  {
    id: 15,
    name: "Maria Gonzalez",
    role: "Content Manager",
    company: "ContentPro",
    content: "Content strategy that resonated with our audience perfectly. Their understanding of market trends and consumer behavior is outstanding.",
    image: "/img/avatar4.webp",
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
      <div className="mil-banner mil-banner-inner mil-dissolve">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <h1 className="mil-mb-60">
                  What Our Clients Say
                </h1>
                <ul className="mil-breadcrumbs mil-center">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="testimonials">Testimonials</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Recommended by leading experts in <br />
              <span className="highlight">writing and SEO</span>
            </h2>
            <p className="section-subtitle">
              Discover what our clients have to say about their experience working with us
            </p>
          </div>

          <div className="testimonials-grid">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card"
                onMouseEnter={() => setHoveredCard(testimonial.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-header">
                  <div className="quote-icon">
                    <svg width="32" height="24" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 18V6.857C0 3.048 1.792 0 5.333 0v3.429c-1.419 0-2.666 1.372-2.666 3.428v.571H8V18H0zm13.333 0V6.857C13.333 3.048 15.125 0 18.667 0v3.429c-1.42 0-2.667 1.372-2.667 3.428v.571H21.33V18h-8z" fill="#7eb947" />
                    </svg>
                  </div>
                  <div className={`rating-stars ${hoveredCard === testimonial.id ? 'show-rating' : ''}`}>
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className={`star ${index < testimonial.rating ? 'filled' : 'empty'}`}>★</span>
                    ))}
                  </div>
                </div>

                <div className="card-body">
                  <p className={`testimonial-text ${expandedIds.includes(testimonial.id) ? 'expanded' : ''}`}>
                    &quot;{testimonial.content}&quot;
                  </p>
                  {testimonial.content.length > 180 && (
                    <button className="read-more" onClick={() => toggleReadMore(testimonial.id)}>
                      {expandedIds.includes(testimonial.id) ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </div>

                <div className="card-footer">
                  <div className="author-avatar">
                    <Image src={testimonial.image} alt={testimonial.name} width={60} height={60} className="avatar-img" />
                  </div>
                  <div className="author-details">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-position">{testimonial.role}</p>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="load-more-section">
              <button onClick={loadMore} className="load-more-button">
                Load More ...
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .banner {
          background: linear-gradient(135deg, #ffffff 0%, #f2fafa 100%);
          padding: 100px 0 60px;
          text-align: center;
        }

        .banner-title {
          font-size: 48px;
          font-weight: 700;
          color: #000;
        }

        .breadcrumbs {
          margin-top: 20px;
          font-size: 14px;
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .breadcrumb-link {
          color: #7eb947;
          text-decoration: none;
        }

        .breadcrumb-current {
          color: #000;
        }

        .testimonials-section {
          background: #f2fafa;
          padding: 80px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 36px;
          font-weight: 700;
        }

        .highlight {
          color: #7eb947;
        }

        .section-subtitle {
          font-size: 16px;
          color: #555;
          max-width: 600px;
          margin: 0 auto;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
        }

        .testimonial-card {
          background: #fff;
          border-radius: 20px;
          padding: 25px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          aspect-ratio: 1 / 1;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          border-color: #7eb94780;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
        }

        .quote-icon {
          opacity: 0.7;
        }

        .rating-stars {
          display: flex;
          gap: 4px;
          opacity: 0;
          transform: translateY(-8px);
          transition: all 0.3s ease;
        }

        .testimonial-card:hover .rating-stars {
          opacity: 1;
          transform: translateY(0);
        }

        .star {
          font-size: 16px;
        }

        .star.filled {
          color: #ffc107;
        }

        .star.empty {
          color: #ddd;
        }

        .card-body {
          margin: 20px 0;
          flex: 1;
        }

        .testimonial-text {
          font-style: italic;
          font-size: 15px;
          line-height: 1.6;
          color: #333;
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .testimonial-text.expanded {
          -webkit-line-clamp: unset;
          overflow: visible;
        }

        .read-more {
          background: none;
          color: #7eb947;
          border: none;
          cursor: pointer;
          margin-top: 8px;
          font-weight: 500;
        }

        .card-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          border-top: 1px solid #eee;
          padding-top: 15px;
        }

        .avatar-img {
          border-radius: 50%;
          border: 3px solid #f2fafa;
        }

        .author-name {
          font-size: 16px;
          font-weight: 600;
        }

        .author-position {
          font-size: 13px;
          color: #7eb947;
        }

        .author-company {
          font-size: 12px;
          color: #888;
        }

        .load-more-section {
          text-align: center;
          margin-top: 40px;
        }

        .load-more-button {
          background: linear-gradient(135deg, #7eb947, #6ba83a);
          color: #fff;
          padding: 12px 30px;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          font-weight: 600;
        }

        .load-more-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(126, 185, 71, 0.4);
        }

        @media (max-width: 768px) {
          .banner-title {
            font-size: 36px;
          }
          .section-title {
            font-size: 28px;
          }
        }

        @media (max-width: 480px) {
          .banner-title {
            font-size: 28px;
          }
          .testimonial-card {
            padding: 20px;
          }
        }
      `}</style>
    </div>
      </PlaxLayout>
  );
};

export default TestimonialsPage;
