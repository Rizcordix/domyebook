"use client";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import Image from "next/image";

// Sample testimonials data - replace with your actual data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    content: "This service exceeded all our expectations. The team was professional, responsive, and delivered outstanding results that helped grow our business significantly.",
    image: "/img/avatar.webp",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, TechStart",
    content: "Working with this team was a game-changer for our company. Their expertise and dedication helped us achieve our goals faster than we thought possible.",
    image: "/img/avatar1.webp",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    content: "The quality of work and attention to detail is remarkable. They understood our vision perfectly and brought it to life better than we imagined.",
    image: "/img/avatar2.webp",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder, InnovateCorp",
    content: "Exceptional service from start to finish. The team's professionalism and expertise made the entire process smooth and stress-free.",
    image: "/img/avatar3.webp",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Operations Director",
    content: "Outstanding results and incredible support throughout the project. I would highly recommend their services to anyone looking for quality work.",
    image: "/img/avatar4.webp",
    rating: 5
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Creative Director",
    content: "The creativity and innovation they brought to our project was impressive. They delivered beyond our expectations and on time.",
    image: "/img/avatar4.webp",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="col-lg-4 col-md-6 mil-mb-40">
      <div className="mil-testimonial-card">
        <div className="mil-testimonial-content">
          <div className="mil-quote-icon">
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 18V6.857C0 3.048 1.792 0 5.333 0v3.429c-1.419 0-2.666 1.372-2.666 3.428v.571H8V18H0zm13.333 0V6.857C13.333 3.048 15.125 0 18.667 0v3.429c-1.42 0-2.667 1.372-2.667 3.428v.571H21.33V18h-8z" fill="#7eb947"/>
            </svg>
          </div>
          <p className="mil-testimonial-text">
            {testimonial.content}
          </p>
          <div className="mil-testimonial-stars">
            {[...Array(testimonial.rating)].map((_, index) => (
              <span key={index} className="mil-star">★</span>
            ))}
          </div>
        </div>
        <div className="mil-testimonial-author">
          <div className="mil-author-image">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={50}
              height={50}
              className="mil-author-img"
            />
          </div>
          <div className="mil-author-info">
            <h5 className="mil-author-name">{testimonial.name}</h5>
            <p className="mil-author-role">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <PlaxLayout bg={false}>
      {/* banner */}
      <div className="mil-banner mil-banner-inner mil-dissolve">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <h1 className="mil-mb-60">
                  What Our Clients Say
                </h1>
                <ul className="mil-breadcrumbs mil-pub-info mil-center">
                  <li>
                    <Link href="home">Home</Link>
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
      
      {/* testimonials */}
      <div className="mil-testimonials-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mil-section-title mil-text-center mil-mb-80">
                <h2 className="mil-section-heading">Recommended by leading experts in<br />writing and SEO</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
      {/* testimonials end */}
      
      <style jsx>{`
        .mil-testimonials-section {
          padding: 100px 0 120px;
          background: #ffffff;
        }
        
        .mil-section-heading {
          font-size: 48px;
          color: #333333;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-align: center;
        }
        
        .mil-testimonial-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 40px 30px 30px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
          border: 1px solid #f1f3f4;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .mil-testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(126, 185, 71, 0.15);
          border-color: #7eb947;
        }
        
        .mil-testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #7eb947 0%, #6ba83a 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .mil-testimonial-card:hover::before {
          opacity: 1;
        }
        
        .mil-testimonial-content {
          flex: 1;
          margin-bottom: 25px;
        }
        
        .mil-quote-icon {
          margin-bottom: 20px;
        }
        
        .mil-testimonial-text {
          color: #4a5568;
          font-size: 16px;
          line-height: 1.7;
          margin: 0 0 20px 0;
          font-style: normal;
          position: relative;
        }
        
        .mil-testimonial-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 0;
        }
        
        .mil-star {
          color: #ffc107;
          font-size: 16px;
        }
        
        .mil-testimonial-author {
          display: flex;
          align-items: center;
          gap: 15px;
          padding-top: 25px;
          border-top: 1px solid #f1f3f4;
        }
        
        .mil-author-image {
          flex-shrink: 0;
        }
        
        .mil-author-img {
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #f1f3f4;
          transition: border-color 0.3s ease;
        }
        
        .mil-testimonial-card:hover .mil-author-img {
          border-color: #7eb947;
        }
        
        .mil-author-info {
          flex: 1;
        }
        
        .mil-author-name {
          color: #1a202c;
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 4px 0;
          line-height: 1.3;
        }
        
        .mil-author-role {
          color: #7eb947;
          font-size: 14px;
          margin: 0;
          font-weight: 500;
          line-height: 1.3;
        }
        
        /* Responsive Design */
        @media (max-width: 1200px) {
          .mil-section-heading {
            font-size: 40px;
          }
        }
        
        @media (max-width: 992px) {
          .mil-section-heading {
            font-size: 36px;
          }
          
          .mil-testimonials-section {
            padding: 80px 0 100px;
          }
        }
        
        @media (max-width: 768px) {
          .mil-section-heading {
            font-size: 32px;
            line-height: 1.3;
          }
          
          .mil-testimonial-card {
            padding: 30px 25px 25px;
            margin-bottom: 30px;
          }
          
          .mil-testimonials-section {
            padding: 60px 0 80px;
          }
          
          .mil-section-title {
            margin-bottom: 60px !important;
          }
        }
        
        @media (max-width: 576px) {
          .mil-section-heading {
            font-size: 28px;
          }
          
          .mil-testimonial-card {
            padding: 25px 20px;
          }
          
          .mil-testimonial-text {
            font-size: 15px;
          }
          
          .mil-testimonials-section {
            padding: 50px 0 70px;
          }
        }
        
        /* Additional styling for better visual hierarchy */
        .mil-mb-40 {
          margin-bottom: 40px;
        }
        
        .mil-mb-80 {
          margin-bottom: 80px;
        }
        
        @media (max-width: 768px) {
          .mil-mb-40 {
            margin-bottom: 30px;
          }
          
          .mil-mb-80 {
            margin-bottom: 60px;
          }
        }
      `}</style>
    </PlaxLayout>
  );
};

export default page;