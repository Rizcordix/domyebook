'use client'
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

const HowItWorksPage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const processSteps = [
    {
      number: "1",
      title: "Book a Demo",
      description: "Ready to bring your project to life? Book a quick call with Do My eBook through our calendar to get a clear overview of pricing, timelines, and how we can help. Whether you need writing, editing, design, or a full package, just click 'Post a Project,' choose your services, and we'll connect you with the right expert.",
      icon: "img/how_it_works/How_It_Work_Book_A_Demo_Icon.png",
      image: "/img/how_it_works/How_It_Work_Book_A_Demo_Image1.png"
    },
    {
      number: "2", 
      title: "Get a Free Quote",
      description: "Ready to turn your ebook idea into a stunning reality? Just tell us a little about your project using the form below. Once we hear from you, a friendly expert from Do My Ebook will personally get in touch to chat about pricing and all the exciting next steps.",
      icon: "img/how_it_works/How_It_Work_Get_A_Free_Quote_Icon.png",
      image: "/img/how_it_works/How_It_Work_Get_A_Free_Quote_image.png"
    },
    {
      number: "3",
      title: "No Commitment Until You're Happy",
      description: "We believe in a completely stress-free experience from start to finish. That's why you're in control: you can pay upfront or wait until you've personally chosen the perfect freelancer for your project.",
      icon: "img/how_it_works/How_It_Work_No_Commitment_Until_You're_Happy_Icon.png",
      image: "/img/how_it_works/How_It_Work_No_Commitment_Until_You're_Happy_Image.png"
    },
    {
      number: "4",
      title: "Real-Time Project Updates", 
      description: "Keeping an eye on your project couldn't be simpler! You'll easily track progress and get updates as your project moves through different stages. We'll keep you in the loop with automated emails and notifications.",
      icon: '/img/how_it_works/How_It_Work_Real_Time_Project_Updates_Icon.png',
      image: "/img/how_it_works/How_It_Work_Real-Time_Project_Updates_Image.png"
    },
    {
      number: "5",
      title: "Quality You Can Trust",
      description: "Your peace of mind is our priority! Before anything comes back to you, our dedicated quality assurance team gives your content a thorough final review. We meticulously check everything to ensure it meets our high standards.",
      icon: "img/how_it_works/How_It_Work_Quality_You_Can_Trust_Icon.png",
      image: "/img/how_it_works/How_It_Work_Quality_You_Can_Trust_Image.png"
    },
    {
      number: "6",
      title: "Download Your Finished Project",
      description: "Ready to see your work? Simply log in to your Do My Ebook account or click the secure link we send you by email. You can then download your completed content directly from your dashboard.",
      icon: "img/how_it_works/How_It_Work_Download_Your_Finished_Project_Icon.png",
      image: "/img/how_it_works/How_It_Work_Book_A_Demo_Image1.png"
    }
  ];

  const controlFeatures = [
    {
      title: "Direct Communication",
      description: "Chat directly with your writer, editor, designer, or illustrator on your dedicated project page. Got a question or an idea? They're just a message away!",
      image: "/img/how_it_works/How_It_Work_Direct_Communication_Icon.png"
    },
    {
      title: "Real-Time Progress Tracking", 
      description: "Watch your project come alive! Our real-time document view lets you track your order, so you're always in the loop.",
      image: "/img/how_it_works/How_It_Work_Real-Time_Progress_Tracking_Icon.png"
    },
    {
      title: "Collaborate on Your Content",
      description: "Add comments directly to the document for your writer or editor to implement or discuss with you.",
      image: "/img/how_it_works/How_It_Work_Collaborate_on_Your_Content_Icon.png"
    },
    {
      title: "Approve or Revise",
      description: "Approve submissions when you're thrilled with the work, or request a revision if anything isn't aligned with your initial requirements.",
      image: "/img/how_it_works/How_It_Work_Approve_or_Revise_Icon.png"
    },
    {
      title: "Personalized Service",
      description: "Your project is unique, and so is our approach. We tailor our services to fit your specific needs, ensuring a customized experience from start to finish.",
      image: "/img/how_it_works/How_It_Work_Personalized_Service_Icon.png"
    },
    {
      title: "Transparent Process",
      description: "No hidden surprises here! We keep you informed at every stage, from initial concept to final delivery, so you always know what to expect.",
      image: "/img/how_it_works/How_It_Work_Transparent_Process_Icon.png"
    }
  ];

  return (
    <>
    <div className="how-it-works-page">
      {/* Banner Section */}
      <div className="mil-banner mil-banner-inner mil-dissolve">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <h1 className="mil-mb-60">
                  How It Works
                </h1>
                <p className="mil-text-m mil-soft mil-mb-40">
                  We set the standard for amazing content creation with a platform designed around you, giving you full control over your projects every step of the way!
                </p>
                <ul className="mil-breadcrumbs mil-center">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/how-it-works">How It Works</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Video Section */}
      <div className="mil-features mil-p-80-80" style={{backgroundColor: '#f2fafa'}}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
                Want to take a look around before jumping in?
              </h2>
              <p className="mil-text-m mil-soft mil-mb-40 mil-up">
                We totally understand you&apos;ll want to see how everything works before diving in. Check out our quick demo video to learn how to find your ideal writer and kick off your project smoothly.
              </p>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                It&apos;s the perfect way to get comfortable before getting started, no rush, just helpful insights.
              </p>
              <div className="mil-up">
                <button 
                  className="demo-btn"
                  onClick={() => setShowVideo(!showVideo)}
                >
                  📹 Watch Demo Video
                </button>
              </div>
            </div>
            <div className="col-xl-5 mil-mb-80">
              <div className="mil-image-frame mil-up demo-placeholder">
                {showVideo ? (
                  <div className="video-placeholder">
                    <div className="play-icon">▶️</div>
                    <p>Demo Video Player</p>
                    <small>Your demo video would appear here</small>
                  </div>
                ) : (
                  <div className="video-thumbnail">
                    <div className="play-overlay">
                      <div className="play-button">▶️</div>
                    </div>
                    <div className="thumbnail-content">
                      <h4>Platform Demo</h4>
                      <p>See how our platform works</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="mil-features mil-p-160-100">
        <div className="container">
          <div className="row justify-content-center mil-mb-80">
            <div className="col-xl-8 mil-text-center">
              <h2 className="mil-mb-30 mil-up">Our Simple 6-Step Process</h2>
              <p className="mil-text-m mil-soft mil-up">
                From initial consultation to final delivery, we&apos;ve streamlined every step to make your ebook creation journey as smooth as possible.
              </p>
            </div>
          </div>
          
          {processSteps.map((step, index) => (
            <div key={step.number} className={`row ${index % 2 === 1 ? 'flex-sm-row-reverse' : ''} justify-content-between align-items-center mil-mb-100`}>
              <div className="col-xl-6 mil-mb-60">
                <div className="step-content">
                  <div className="step-header mil-mb-30 mil-up">
                    <div className="step-icon">
                    <img
                        src={step.icon}
                        alt="Satisfied Authors Icon"
                    />
                    </div>
                  </div>
                  <h3 className="mil-mb-30 mil-up">{step.title}</h3>
                  <p className="mil-text-m mil-soft mil-up">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="col-xl-5 mil-mb-60">
                <div className="mil-image-frame mil-up">
                  <img src={step.image} alt={`Step ${step.number}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* You're In Control Section */}
      <div className="mil-cta mil-up" style={{backgroundColor: '#f2fafa'}}>
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row justify-content-center mil-text-center mil-mb-80">
              <div className="col-xl-8">
                <h2 className="mil-up">You&apos;re In Control</h2>
                <p className="mil-text-m mil-soft mil-mb-40 mil-up">
                  We believe your ebook journey should be completely in your hands. Here&apos;s how Do My Ebook empowers you every step of the way:
                </p>
              </div>
            </div>
            <div className="row">
              {controlFeatures.map((feature, index) => (
                <div key={index} className="col-xl-4 mil-mb-60">
                  <div className="mil-icon-box control-feature">
                    <div className="feature-icon mil-mb-30 mil-up">
                      <span className="control-icon"><img src={feature.image} alt={`Feature ${index + 1}`} width={50} height={50}/></span>
                    </div>
                    <h5 className="mil-mb-20 mil-up">{feature.title}</h5>
                    <p className="mil-text-m mil-soft mil-up">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mil-quote mil-p-80-80">
        <div className="container">
          <div className="row justify-content-center mil-text-center">
            <div className="col-xl-8">
              <h3 className="mil-mb-40 mil-up">
                Ready to Get Started?
              </h3>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                Join thousands of satisfied authors who have brought their ebook dreams to life with our expert team.
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
        .how-it-works-page {
          font-family: inherit;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .demo-btn {
          background: #7eb947;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .demo-btn:hover {
          background: #6ba339;
          transform: translateY(-2px);
        }

        .demo-placeholder {
          position: relative;
          min-height: 300px;
        }

        .video-placeholder {
          background: #f8f9fa;
          border: 2px dashed #dee2e6;
          border-radius: 12px;
          padding: 60px 20px;
          text-align: center;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .video-placeholder .play-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .video-thumbnail {
          background: linear-gradient(135deg, #7eb947 0%, #6ba339 100%);
          border-radius: 12px;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          cursor: pointer;
          transition: transform 0.3s ease;
          color: white;
        }

        .video-thumbnail:hover {
          transform: scale(1.02);
        }

        .play-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .play-button {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: #7eb947;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .thumbnail-content {
          text-align: center;
          z-index: 2;
          position: relative;
          margin-top: 100px;
        }

        .step-content {
          padding: 20px 0;
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .step-icon {
          margin-bottom: 15px; /* Reduced margin */
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          background: #7eb947;
          border-radius: 50%;
          box-shadow: 0 8px 20px rgba(126, 185, 71, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .step-icon img {
          width: 30px; /* Smaller icons */
          height: 30px;
          object-fit: contain;
          color: black; /* Ensure icons are visible */
        }

        .step-number {
          font-size: 24px;
          font-weight: bold;
          color: #7eb947;
          background: #f2fafa;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-illustration {
          background: linear-gradient(135deg, #f2fafa 0%, #e8f5e8 100%);
          border-radius: 12px;
          min-height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #7eb947;
        }

        .illustration-content {
          text-align: center;
          color: #333;
        }

        .step-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .large-icon {
          font-size: 48px;
          background: #7eb947;
          color: white;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .control-feature {
          text-align: center;
          padding: 30px 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .control-feature:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .control-icon {
          font-size: 32px;
          background: #7eb947;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
        
        .control-icon img {
          width: 40px; /* Smaller icons */
          height: 40px;
          object-fit: contain;
          color: black; /* Ensure icons are visible */
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 15px 30px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .cta-btn.primary {
          background: #7eb947;
          color: white;
        }

        .cta-btn.primary:hover {
          background: #6ba339;
          transform: translateY(-2px);
          color: white;
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
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .step-header {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-btn {
            width: 100%;
            max-width: 250px;
            text-align: center;
          }

          .demo-btn {
            width: 100%;
            justify-content: center;
          }
          .mil-features .step-content {
            text-align: center;
            display: block;
          }

          .mil-features .step-header {
            justify-content: center;
            text-align: center;
          }

          /* Optional: Adjust the images to fit better on small screens */
          .mil-features .step-content img {
            max-width: 80%; /* Scale down images */
            margin: 0 auto;
          }

          /* Optional: Adjusting the step text and icon */
          .mil-features .step-header .step-icon {
            margin: 0 auto;
          }
        }

        /* Animation enhancements */
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
        .mil-up:nth-child(4) { animation-delay: 0.4s; }
      `}</style>
    </div>
    </>
  );
};

export default HowItWorksPage;