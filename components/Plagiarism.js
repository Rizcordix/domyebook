"use client";
import React from 'react';

const PlagiarismDisclaimerSection = () => {
  return (
    <>
      <div className="terms-content">
        <div className="container">
          <div className="terms-wrapper">
            <section className="terms-section">
              <h2 className="terms-heading">Plagiarism Disclaimer</h2>
              <div className="terms-text">
                <p>
                  Welcome to <span className="highlight-brand">Do My Ebook</span>! By using our website and services, you&apos;re agreeing to the terms outlined in this Plagiarism Disclaimer and our broader <a href="/terms-of-service" className="contact-email">Terms of Service</a>. Please note, you must be 18 years of age or older to use our services. If you don&apos;t agree or are under 18, please stop using our site immediately.
                </p>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="terms-heading">Our Commitment to Originality</h2>
              <div className="terms-text">
                <p>
                  At <span className="highlight-brand">Do My Ebook</span>, we are deeply committed to providing you with original, high-quality content. Our professional writers, editors, and designers are experts in their fields, and we hold them to strict standards for integrity and originality.
                </p>
                <p>
                  We make every reasonable effort to ensure your projects are plagiarism-free. This includes internal quality checks and the use of various tools to scan for potential plagiarism before we deliver your completed order. Our team is dedicated to detecting and addressing any unoriginal content. If plagiarism is detected on our end during a project, we take immediate action to remedy it, which may include reassigning the project or offering a refund, depending on the severity.
                </p>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="terms-heading">Your Role in Ensuring Originality</h2>
              <div className="terms-text">
                <p>
                  While we work hard to deliver original content, the final responsibility for ensuring your project is plagiarism-free to your satisfaction rests with you, the customer.
                </p>
                <p>
                  We encourage you to review your completed projects thoroughly. If you have any concerns about plagiarism after receiving your project, please reach out to us immediately. We highly recommend that you perform your own plagiarism scans and checks before publishing or distributing any content received through our services.
                </p>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="terms-heading">Important Considerations</h2>
              <div className="services-list">
                <div className="service-item">
                  <span className="service-bullet">•</span>
                  <span><span className="highlight-important">No Guarantees:</span> While we make significant efforts, we cannot guarantee that every single product or service will be 100% plagiarism-free in all possible contexts. The landscape of available content is vast and constantly changing.</span>
                </div>
                <div className="service-item">
                  <span className="service-bullet">•</span>
                  <span><span className="highlight-important">Third-Party Tools & Platforms:</span> We may use third-party tools and services in our process. You acknowledge that such tools, including plagiarism checkers, may not have access to all published works. If you publish your content on platforms like Kindle Direct Publishing (KDP) or others, <span className="highlight-brand">Do My Ebook</span> is not responsible for any actions these platforms may take regarding your content or account. Your use of any optional third-party plagiarism tools is at your own risk.</span>
                </div>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="terms-heading">Limitation of Liability</h2>
              <div className="terms-text">
                <p>
                  Your use of <span className="highlight-brand">Do My Ebook</span> services is at your sole risk. Our services and all products delivered to you are provided &quot;as is&quot; and &quot;as available.&quot; We are not liable for any direct, indirect, incidental, punitive, or consequential damages (like lost profits, data loss, or replacement costs) that arise from your use of our services, including claims related to errors, omissions, or plagiarized content.
                </p>
                <p>
                  If, for any reason, the law prevents us from applying these limitations, our liability will be limited to the amount you paid us for services in the six months prior to your claim, or the minimum amount permitted by law, whichever is greater.
                </p>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="terms-heading">Indemnity</h2>
              <div className="terms-text">
                <p>
                  You agree to protect and hold <span className="highlight-brand">Do My Ebook</span> and our affiliated companies, directors, employees, and partners harmless from any claims or demands, including legal fees, made by any third party due to or arising from the products or services you receive through us. This includes claims of intellectual property infringement (like plagiarism), except in cases where the infringement is directly caused by our willful misconduct or gross negligence.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <style jsx>{`
        .terms-content {
          padding: 80px 0 100px;
          background: #fafafa;
          font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .terms-wrapper {
          max-width: 900px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          padding: 60px;
        }

        .terms-section {
          margin-bottom: 50px;
        }

        .terms-section:last-child {
          margin-bottom: 0;
        }

        .terms-heading {
          font-size: 26px;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 3px solid #7eb947;
          position: relative;
        }

        .terms-heading::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(135deg, #7eb947 0%,rgb(174, 215, 193) 100%);
          border-radius: 2px;
        }

        .terms-text {
          color: #4a5568;
          line-height: 1.8;
          font-size: 16px;
        }

        .terms-text p {
          margin-bottom: 20px;
          text-align: justify;
        }

        .terms-text p:last-child {
          margin-bottom: 0;
        }

        .services-list {
          margin: 24px 0;
          background: #f7fafc;
          border-radius: 8px;
          padding: 24px;
          border-left: 4px solid #7eb947;
        }

        .service-item {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          font-size: 16px;
          color: #2d3748;
        }

        .service-item:last-child {
          margin-bottom: 0;
        }

        .service-bullet {
          color: #7eb947;
          font-weight: bold;
          margin-right: 12px;
          font-size: 18px;
        }

        .contact-email {
          color: #7eb947;
          text-decoration: none;
          font-weight: 600;
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .contact-email:hover {
          color:rgb(125, 154, 98);
          border-bottom-color: #7eb947;
        }

        @media (max-width: 768px) {
          .terms-content {
            padding: 50px 0 60px;
          }

          .terms-wrapper {
            margin: 0 20px;
            padding: 40px 30px;
          }

          .terms-heading {
            font-size: 22px;
            margin-bottom: 20px;
          }

          .terms-text {
            font-size: 15px;
          }

          .services-list {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .terms-wrapper {
            margin: 0 15px;
            padding: 30px 20px;
          }

          .terms-heading {
            font-size: 20px;
          }

          .terms-text {
            font-size: 14px;
            line-height: 1.7;
          }
        }
      `}</style>
    </>
  );
};

export default PlagiarismDisclaimerSection;
