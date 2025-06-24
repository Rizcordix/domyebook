import React from 'react';
import { PageBanner } from "@/components/Banner"; // Assuming PageBanner is in this path
import PlaxLayout from "@/layouts/PlaxLayout"; // Assuming PlaxLayout is in this path

const ServicesPage = () => {
  return (
    <>
      {/* Page Banner */}
      <PageBanner
        pageName="Our Services"
        title="Comprehensive eBook Solutions"
      />

      {/* Writing Services */}
      <div className="mil-features" style={{ backgroundColor: '#f2fafa', padding: '120px 0' }}> {/* Increased padding */}
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <span className="mil-suptitle mil-upper mil-mb-30" style={{ color: '#7eb947', fontSize: '1.5em' }}> {/* Adjusted font size */}
                Writing
              </span>
              <h2 className="mil-mb-30 mil-up" style={{ color: '#000' }}>
                Transform Your Ideas Into Literary Masterpieces
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up" style={{ color: '#666' }}>
                Our expert team of professional writers brings your vision to life with
                compelling narratives, engaging plots, and authentic voices. From concept
                to completion, we deliver exceptional writing that captivates readers.
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-30">
                <li className="mil-up" style={{ color: '#000' }}>
                  <span style={{ color: '#7eb947', marginRight: '10px' }}>✓</span>
                  Ghostwriting Excellence
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  <span style={{ color: '#7eb947', marginRight: '10px' }}>✓</span>
                  Strategic Plot & Outline Development
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  <span style={{ color: '#7eb947', marginRight: '10px' }}>✓</span>
                  Children&apos;s Book Magic
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  <span style={{ color: '#7eb947', marginRight: '10px' }}>✓</span>
                  AI-Enhanced Human Editing
                </li>
              </ul>
              <div className="mil-up">
                <a href="/contact" className="mil-btn mil-m mil-add-arrow" style={{
                  backgroundColor: '#7eb947',
                  borderColor: '#7eb947'
                }}>
                  Get Quote
                </a>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/6.png"
                  alt="Writing Services"
                  className="mil-scale-img"
                  style={{ width: '500px', height: '500px', objectFit: 'cover' }}
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Services */}
      <div className="mil-features" style={{ backgroundColor: 'white', padding: '120px 0' }}> {/* Increased padding */}
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <span className="mil-suptitle mil-upper mil-mb-30" style={{ color: '#7eb947', fontSize: '1.5em' }}> {/* Adjusted font size */}
                Editorial
              </span>
              <h2 className="mil-mb-30 mil-up" style={{ color: '#000' }}>
                Perfecting Every Word, Sentence, and Story
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up" style={{ color: '#666' }}>
                Our meticulous editorial process ensures your manuscript achieves the highest
                standards of clarity, coherence, and impact. We polish your work to professional
                publishing quality while preserving your unique voice and message.
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-30">
                <li className="mil-up" style={{ color: '#000' }}>
                  <span style={{ color: '#7eb947', marginRight: '10px' }}>✓</span>
                  Precision Editing & Proofreading
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  <span style={{ color: '#7eb947', marginRight: '10px' }}>✓</span>
                  Unwavering Quality & Plagiarism Checks
                </li>
              </ul>
              <div className="mil-up">
                <a href="/contact" className="mil-btn mil-m mil-add-arrow" style={{
                  backgroundColor: '#7eb947',
                  borderColor: '#7eb947'
                }}>
                  Get Quote
                </a>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/6.png"
                  alt="Editorial Services"
                  className="mil-scale-img"
                  style={{ width: '500px', height: '500px', objectFit: 'cover' }}
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Services */}
      <div className="mil-features" style={{ backgroundColor: '#f2fafa', padding: '120px 0' }}> {/* Increased padding */}
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <span className="mil-suptitle mil-upper mil-mb-30" style={{ color: '#7eb947', fontSize: '1.5em' }}> {/* Adjusted font size */}
                Design
              </span>
              <h2 className="mil-mb-30 mil-up" style={{ color: '#000' }}>
                Visual Excellence That Commands Attention
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up" style={{ color: '#666' }}>
                First impressions matter. Our creative design team crafts stunning visuals
                that not only attract readers but also communicate the essence of your story.
                From covers to illustrations, we create designs that sell.
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-30">
                <li className="mil-up" style={{ color: '#000' }}>
                  <span style={{ color: '#7eb947', marginRight: '10px' }}>✓</span>
                  Signature eBook Design
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  <span style={{ color: '#7eb947', marginRight: '10px' }}>✓</span>
                  Impactful Cover Artistry
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  <span style={{ color: '#7eb947', marginRight: '10px' }}>✓</span>
                  Custom Illustrations
                </li>
              </ul>
              <div className="mil-up">
                <a href="/contact" className="mil-btn mil-m mil-add-arrow" style={{
                  backgroundColor: '#7eb947',
                  borderColor: '#7eb947'
                }}>
                  Get Quote
                </a>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/6.png"
                  alt="Design Services"
                  className="mil-scale-img"
                  style={{ width: '500px', height: '500px', objectFit: 'cover' }}
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Publishing Services */}
      <div className="mil-features" style={{ backgroundColor: 'white', padding: '120px 0' }}> {/* Increased padding */}
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <span className="mil-suptitle mil-upper mil-mb-30" style={{ color: '#7eb947', fontSize: '1.5em' }}> {/* Adjusted font size */}
                Publishing
              </span>
              <h2 className="mil-mb-30 mil-up" style={{ color: '#000' }}>
                From Manuscript to Market Success
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up" style={{ color: '#666' }}>
                Navigate the complex world of publishing with our comprehensive solutions.
                We handle every technical detail and marketing element, ensuring your book
                reaches its target audience with maximum impact and professional presentation.
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-30">
                <li className="mil-up" style={{ color: '#000' }}>
                  <span style={{ color: '#7eb947', marginRight: '10px' }}>✓</span>
                  Professional Book Formatting
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  <span style={{ color: '#7eb947', marginRight: '10px' }}>✓</span>
                  Compelling Book Descriptions
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  <span style={{ color: '#7eb947', marginRight: '10px' }}>✓</span>
                  Audio Ebook Production
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  <span style={{ color: '#7eb947', marginRight: '10px' }}>✓</span>
                  Dynamic Video Promos
                </li>
              </ul>
              <div className="mil-up">
                <a href="/contact" className="mil-btn mil-m mil-add-arrow" style={{
                  backgroundColor: '#7eb947',
                  borderColor: '#7eb947'
                }}>
                  Get Quote
                </a>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/6.png"
                  alt="Publishing Services"
                  className="mil-scale-img"
                  style={{ width: '500px', height: '500px', objectFit: 'cover' }}
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Author Support Services */}
      <div className="mil-features" style={{ backgroundColor: '#f2fafa', padding: '120px 0' }}> {/* Increased padding */}
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <span className="mil-suptitle mil-upper mil-mb-30" style={{ color: '#7eb947', fontSize: '1.5em' }}> {/* Adjusted font size */}
                Author Support
              </span>
              <h2 className="mil-mb-30 mil-up" style={{ color: '#000' }}>
                Your Success Is Our Mission
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up" style={{ color: '#666' }}>
                Beyond writing and publishing, we provide comprehensive support to ensure
                your author journey is smooth and successful. From project management to
                global reach, we&apos;re your dedicated publishing partner.
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-30">
                <li className="mil-up" style={{ color: '#000' }}>
                  <span style={{ color: '#7eb947', marginRight: '10px' }}>✓</span>
                  End-to-End Project Management
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  <span style={{ color: '#7eb947', marginRight: '10px' }}>✓</span>
                  Global Content Translation
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  <span style={{ color: '#7eb947', marginRight: '10px' }}>✓</span>
                  Book Launch Bundle
                </li>
                <li className="mil-up" style={{ color: '#000' }}>
                  <span style={{ color: '#7eb947', marginRight: '10px' }}>✓</span>
                  Bulk Order Solutions
                </li>
              </ul>
              <div className="mil-up">
                <a href="/contact" className="mil-btn mil-m mil-add-arrow" style={{
                  backgroundColor: '#7eb947',
                  borderColor: '#7eb947'
                }}>
                  Get Quote
                </a>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/6.png"
                  alt="Author Support Services"
                  className="mil-scale-img"
                  style={{ width: '500px', height: '500px', objectFit: 'cover' }}
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mil-cta mil-up" style={{ backgroundColor: 'white', padding: '120px 0' }}> {/* Increased padding */}
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up" style={{ color: '#000' }}>
                  Ready to Transform Your Ideas Into Bestsellers?
                </h2>
                <p className="mil-text-m mil-soft mil-mb-30 mil-up" style={{ color: '#666' }}>
                  Join thousands of successful authors who&apos;ve trusted DoMyEbook with their
                  publishing journey. Let&apos;s turn your manuscript into a marketplace success story.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <div className="mil-mb-30 mil-up" style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#7eb947',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}>
                    ✓
                  </div>
                  <h5 className="mil-mb-20 mil-up" style={{ color: '#000' }}>
                    2,500+ Books Published
                  </h5>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    Successfully published thousands of books across all genres with
                    professional quality and market-ready presentation.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <div className="mil-mb-30 mil-up" style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#7eb947',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}>
                    ★
                  </div>
                  <h5 className="mil-mb-20 mil-up" style={{ color: '#000' }}>
                    98% Client Satisfaction
                  </h5>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    Our commitment to excellence ensures nearly perfect client satisfaction
                    with every project we complete.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <div className="mil-mb-30 mil-up" style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#7eb947',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}>
                    🌍
                  </div>
                  <h5 className="mil-mb-20 mil-up" style={{ color: '#000' }}>
                    Global Reach
                  </h5>
                  <p className="mil-text-m mil-soft mil-up" style={{ color: '#666' }}>
                    Serving authors worldwide with 24/7 support and expertise in
                    multiple languages and markets.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-6 mil-mb-30">
                <div className="mil-up">
                  <a href="/contact" className="mil-btn mil-m mil-add-arrow mil-mr-15" style={{
                    backgroundColor: '#7eb947',
                    borderColor: '#7eb947',
                    marginRight: '15px'
                  }}>
                    Start Your Project
                  </a>
                  <a href="/how-it-works" className="mil-btn mil-m mil-add-arrow mil-border" style={{
                    borderColor: '#7eb947',
                    color: '#7eb947'
                  }}>
                    How It Works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;