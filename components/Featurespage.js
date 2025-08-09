'use client'
import Link from "next/link";
import Image from "next/image";

const FeaturesPage = () => {
  // Removed activeTestimonial state and testimonials array as they are no longer used for display on this page.

  const features = [
    {
      title: "Post Your Project",
      description: "Ready to create your ebook? On Do My Ebook, you'll find hundreds of vetted experts for writing, cover design, illustrations, narration, and more! The best part? You only pay once you've found your perfect freelancer and they're ready to start. No commitment until you're happy with your choice!",
      highlight: ["vetted experts", "writing, cover design, illustrations, narration", "No commitment"],
      images: "/img/features/features1.png"
    },
    {
      title: "Book a Call with Your Production Head",
      description: "Want to know exactly how your project is progressing? You can book a call directly with your dedicated Production Head! They'll walk you through the latest updates and discuss how your ebook is coming to life, whether it's being written, edited, designed, or illustrated. This is a great way to get a personalized overview and have all your questions answered.",
      highlight: ["dedicated Production Head", "personalized overview"],
      images: "/img/features/Book-a-Call-with-Your-Production-Head.png"
    },
    {
      title: "Live Order Tracking",
      description: "Stay in the loop every step of the way! With Do My Ebook's live order tracking, you'll never miss an update. Need to multitask? No problem! Our text-to-speech feature lets you listen to your content as it's being created, or catch up on recent additions right from your order page. Plus, you can chat directly with your creative team as they work on your project, ensuring your vision is perfectly realized.",
      highlight: ["never miss an update", "text-to-speech feature", "listen to your content", "chat directly with your creative team"],
      images: "/img/features/Live-Order-Tracking.png"
    },
    {
      title: "Expert Matching",
      description: "Tired of searching for the right person for your ebook? Don't worry, we've got you covered! At Do My Ebook, we take the hassle out of finding the perfect creative. Just tell us what you need, and we'll personally connect you with a highly skilled and thoroughly vetted writer, editor, designer, illustrator, translator, or narrator from our team. We'll make sure their unique talents are a perfect match for your vision, so you can focus on bringing your ebook to life!",
      highlight: ["highly skilled and thoroughly vetted", "perfect match for your vision"],
      images: "/img/features/Expert-Matching.png"
    },
    {
      title: "Collaborate & Refine",
      description: "We believe in a truly collaborative process to get your ebook just right! You can easily leave comments and feedback directly within your project. We want your ebook to be perfect! That's why we make it easy for you to leave comments and reviews directly in your project's chat with the production team. Got a specific thought on the text, or a broader idea for your production head? Just share it in the dedicated chat on your order page. This ensures constant communication and that your vision is perfectly captured throughout the entire process.",
      highlight: ["leave comments and feedback", "constant communication", "vision is perfectly captured"],
      images: "/img/features/Collaborate-&-Refine.png"
    },
    {
      title: "Dedicated Platform Support",
      description: "Need a hand? Getting help is super easy with Do My Ebook! Our dedicated admin support is available right on the platform. Just use the chat feature or send us an email. Our team is always ready to assist with any questions or concerns you have about your project, making sure your experience is smooth and stress-free!",
      highlight: ["dedicated admin support", "chat feature", "smooth and stress-free"],
      images: "/img/features/Dedicated-Platform-Support.png"
    }
  ];

  const renderHighlightedText = (text, highlights) => {
    if (!highlights || highlights.length === 0) return text;

    let highlightedText = text;
    highlights.forEach(highlight => {
      const regex = new RegExp(`(${highlight})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<strong class="mil-accent-text">$1</strong>');
    });

    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  return (
    <>
      <div className="features-page">
        {/* Banner Section */}
        <div className="mil-banner2 mil-banner-inner mil-dissolve">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8">
                <div className="mil-banner-text mil-text-center">
                  <h2 className="mil-mb-60">
                    Platform Features
                  </h2>
                  <p className="mil-text-m mil-soft mil-mb-40">
                    Discover everything our user-friendly, all in one platform has to offer! We&apos;ve designed it to make your ebook creation journey as smooth and enjoyable as possible.
                  </p>
                  <ul className="mil-breadcrumbs mil-center">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/features">Features</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Sections */}
        {features.map((feature, index) => (
          <div key={index} className="mil-features mil-p-80-80">
            <div className="container">
              <div className={`row ${index % 2 === 1 ? 'flex-sm-row-reverse' : ''} justify-content-between align-items-center`}>
                <div className="col-xl-6 mil-mb-80">
                  <div className="feature-content">
                    <h2 className="mil-mb-30 mil-up">
                      {feature.title}
                    </h2>
                    <p className="mil-text-m mil-soft mil-up">
                      {renderHighlightedText(feature.description, feature.highlight)}
                    </p>
                  </div>
                </div>
                <div className="col-xl-5 mil-mb-80">
                  <div className="mil-image-frame mil-up">
                    <div className="feature-image-placeholder">
                      <img
                        src={feature.images} // Kept as requested
                        alt={feature.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Testimonials Section - Now a link to testimonials page */}
        <div className="mil-cta mil-up" style={{backgroundColor: '#f2fafa'}}>
          <div className="container">
            <div className="mil-out-frame mil-p-160-100">
              <div className="row justify-content-center mil-text-center mil-mb-80">
                <div className="col-xl-8">
                            <div className="mil-mb-30 mil-up" style={{ display: 'flex', justifyContent: 'center' }}>
                            <Image
                              src="/img/inner-pages/testimonial_icon.webp" // Placeholder for the survey line drawing image
                              alt="What Our Customers Are Saying"
                              width={100} // Adjust width as needed
                              height={100} // Adjust height as needed
                            />
                            </div>
                            <h2 className="mil-mb-30 mil-up">What Our Customers Are Saying</h2>
                            <p className="mil-text-m mil-soft mil-up">
                            Transparency and genuine feedback are important to us. Here&apos;s what some of our wonderful Do My Ebook customers have shared about their experiences working with us.
                            </p>
                            <div className="mil-mt-60 mil-up">
                              <Link href="/testimonials" className="cta-btn primary">
                            <div className="mil-btn mil-button-transform mil-md mil-add-arrow">
                              
                        Testimonials <span className="mil-arrow"></span>
                      
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Final CTA Section */}
        <div className="mil-quote mil-p-80-80">
          <div className="container">
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-8">
                <h3 className="mil-mb-40 mil-up">
                  Ready to Experience Our Platform?
                </h3>
                <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                  Join thousands of authors who have successfully published their ebooks using our comprehensive platform and expert services.
                </p>
                <div className="cta-buttons mil-up">
                  <div className="mil-btn mil-button-transform mil-md mil-add-arrow">
                    <Link href="/calendly" className="cta-btn primary">
                      Book a Demo
                    </Link>
                  </div>
                  <div className="mil-btn mil-button-transform mil-md mil-add-arrow">
                    <Link href="/getquote" className="cta-btn secondary">
                      Get Free Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .features-page {
            font-family: inherit;
          }
          .cta-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
          }
          .feature-content {
            padding: 20px 0;
          }

          .feature-image-placeholder {
            background: #f8f9fa;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .feature-image-placeholder:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          }

          .mil-accent-text {
            color: #7eb947;
            font-weight: 600;
          }

          /* Removed testimonial-specific styles as they are no longer needed */
          /* .testimonial-slider { text-align: center; } */
          /* .testimonial-card { ... } */
          /* .testimonial-card::before { ... } */
          /* .testimonial-rating { ... } */
          /* .star { ... } */
          /* .testimonial-card blockquote { ... } */
          /* .testimonial-card cite { ... } */
          /* .testimonial-controls { ... } */
          /* .testimonial-dot { ... } */
          /* .testimonial-dot.active { ... } */
          /* .testimonial-dot:hover { ... } */


          .cta-btn {
            padding: 15px 30px;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-block;
            font-size: 16px;
          }

          .cta-btn.primary {
            background: #7eb947;
            color: white;
            border: 2px solid #7eb947;
          }

          .cta-btn.primary:hover {
            background: #6ba339;
            border-color: #6ba339;
            transform: translateY(-2px);
            color: white;
            text-decoration: none;
          }

          .cta-btn.secondary {
            background: transparent;
            color: #7eb947;
            border: 2px solid #7eb947;
          }

          .cta-btn.secondary:hover {
            background: #7eb947;
            color: white;
            transform: translateY(-2px);
            text-decoration: none;
          }

          /* Enhanced animations */
          .mil-up {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.8s ease forwards;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .mil-up:nth-child(1) { animation-delay: 0.1s; }
          .mil-up:nth-child(2) { animation-delay: 0.2s; }
          .mil-up:nth-child(3) { animation-delay: 0.3s; }

          /* Responsive Design */
          @media (max-width: 768px) {
            .cta-buttons {
              flex-direction: column;
              align-items: center;
            }

            .cta-btn {
              width: 100%;
              max-width: 250px;
              text-align: center;
            }

            /* Removed testimonial-specific responsive styles */
            /* .testimonial-card { ... } */
            /* .testimonial-card blockquote { ... } */
            /* .testimonial-card::before { ... } */
          }

          @media (max-width: 480px) {
            .feature-content {
              text-align: center;
            }

            /* Removed testimonial-specific responsive styles */
            /* .testimonial-card { ... } */
            /* .testimonial-card blockquote { ... } */
          }

          /* Professional styling enhancements */
          .mil-features:nth-child(even) {
            background: #f2fafa;
          }

          .feature-content h2 {
            color: #333;
            font-weight: 700;
          }

          .feature-content p {
            line-height: 1.7;
            font-size: 17px;
          }

          /* Image hover effects */
          .mil-scale-img {
            transition: transform 0.4s ease;
          }

          .feature-image-placeholder:hover .mil-scale-img {
            transform: scale(1.05);
          }
        `}</style>
      </div>
    </>
  );
};

export default FeaturesPage;