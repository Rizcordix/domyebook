'use client'
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./HowitWorks.module.css";

const HowItWorksPage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const processSteps = [
    {
      number: "1",
      title: "Book a Demo",
      description: "Ready to bring your project to life? Book a quick call with Do My eBook through our calendar to get a clear overview of pricing, timelines, and how we can help. Whether you need writing, editing, design, or a full package, just click 'Post a Project,' choose your services, and we'll connect you with the right expert.",
      icon: "/img/how_it_works/How_It_Work_Book_A_Demo_Icon.png",
      image: "/img/how_it_works/Book-a-Demo.png"
    },
    {
      number: "2", 
      title: "Get a Free Quote",
      description: "Ready to turn your ebook idea into a stunning reality? Just tell us a little about your project using the form below. Once we hear from you, a friendly expert from Do My Ebook will personally get in touch to chat about pricing and all the exciting next steps.",
      icon: "/img/how_it_works/Get-a-Free-Quote-icon.png",
      image: "/img/how_it_works/Get-a-Free-Quote-image.png"
    },
    {
      number: "3",
      title: "No Commitment Until You're Happy",
      description: "We believe in a completely stress-free experience from start to finish. That's why you're in control: you can pay upfront or wait until you've personally chosen the perfect freelancer for your project.",
      icon: "/img/how_it_works/How_It_Work_No_Commitment_Until_You're_Happy_Icon.png",
      image: "/img/how_it_works/No-Commitment-Until-You're-Happy.png"
    },
    {
      number: "4",
      title: "Real-Time Project Updates", 
      description: "Keeping an eye on your project couldn't be simpler! You'll easily track progress and get updates as your project moves through different stages. We'll keep you in the loop with automated emails and notifications.",
      icon: '/img/how_it_works/How_It_Work_Real_Time_Project_Updates_Icon.png',
      image: "/img/how_it_works/Real-Time-Project-Updates.png"
    },
    {
      number: "5",
      title: "Quality You Can Trust",
      description: "Your peace of mind is our priority! Before anything comes back to you, our dedicated quality assurance team gives your content a thorough final review. We meticulously check everything to ensure it meets our high standards.",
      icon: "/img/how_it_works/How_It_Work_Quality_You_Can_Trust_Icon.png",
      image: "/img/how_it_works/How_It_Work_Quality_You_Can_Trust_Image.png"
    },
    {
      number: "6",
      title: "Download Your Finished Project",
      description: "Ready to see your work? Simply log in to your Do My Ebook account or click the secure link we send you by email. You can then download your completed content directly from your dashboard.",
      icon: "/img/how_it_works/How_It_Work_Download_Your_Finished_Project_Icon.png",
      image: "/img/how_it_works/Download-Your-Finished-Project.png"
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
    <div className={styles.howItWorksPage}>
      {/* Banner Section */}
      <div className="mil-banner2 mil-banner-inner mil-dissolve">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <h2 className="mil-mb-10">
                  How It Works
                </h2>
                <p className="mil-text-m mil-soft mil-mb-40">
                  We set the standard for amazing content creation with a platform designed around you, giving you full control over your projects every step of the way!
                </p>
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
                  className={styles.demoBtn}
                  onClick={() => setShowVideo(!showVideo)}
                >
                  📹 Watch Demo Video
                </button>
              </div>
            </div>
            <div className="col-xl-5 mil-mb-80">
              <div className={`mil-image-frame mil-up ${styles.demoPlaceholder}`}>
                {showVideo ? (
                  <div className={styles.videoPlaceholder}>
                    <div className={styles.playIcon}>▶️</div>
                    <p>Demo Video Player</p>
                    <small>Your demo video would appear here</small>
                  </div>
                ) : (
                  <div className={styles.videoThumbnail}>
                    <div className={styles.playOverlay}>
                      <div className={styles.playButton}>▶️</div>
                    </div>
                    <div className={styles.thumbnailContent}>
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
                <div className={styles.stepContent}>
                  <div className={`${styles.stepHeader} mil-mb-30 mil-up`}>
                    <div className={styles.stepIcon}>
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
                  <img src={step.image} 
                   alt={`Step ${step.number}`}
                   />
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
                  <div className={`mil-icon-box ${styles.controlFeature}`}>
                    <div className="feature-icon mil-mb-30 mil-up">
                      <span className={styles.controlIcon}><img src={feature.image} alt={`Feature ${index + 1}`} width={50} height={50}/></span>
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
              <div className={`${styles.ctaButtons} mil-up`}>
              <div className="mil-btn mil-button-transform mil-md mil-add-arrow">
                <Link href="/calendly" className={`${styles.ctaBtn} ${styles.primary}`}>
                  Book a Demo
                </Link>
                </div>
                <div className="mil-btn mil-button-transform mil-md mil-add-arrow">
                  <Link href="/getquote" className={`${styles.ctaBtn} ${styles.secondary}`}>
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HowItWorksPage;