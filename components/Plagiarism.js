import React from 'react';
import styles from './legal.module.css';

const PlagiarismDisclaimerSection = () => {
  return (
    <>
      <div className={styles.termsContent}>
        <div className="container">
          <div className={styles.termsWrapper}>
            <section className={styles.termsSection}>
              <h2 className={styles.termsHeading}>Plagiarism Disclaimer</h2>
              <div className={styles.termsText}>
                <p>
                  Welcome to <span className="highlight-brand">Do My Ebook</span>! By using our website and services, you&apos;re agreeing to the terms outlined in this Plagiarism Disclaimer and our broader <a href="/terms-of-service" className={styles.contactEmail}>Terms of Service</a>. Please note, you must be 18 years of age or older to use our services. If you don&apos;t agree or are under 18, please stop using our site immediately.
                </p>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.termsHeading}>Our Commitment to Originality</h2>
              <div className={styles.termsText}>
                <p>
                  At <span className="highlight-brand">Do My Ebook</span>, we are deeply committed to providing you with original, high-quality content. Our professional writers, editors, and designers are experts in their fields, and we hold them to strict standards for integrity and originality.
                </p>
                <p>
                  We make every reasonable effort to ensure your projects are plagiarism-free. This includes internal quality checks and the use of various tools to scan for potential plagiarism before we deliver your completed order. Our team is dedicated to detecting and addressing any unoriginal content. If plagiarism is detected on our end during a project, we take immediate action to remedy it, which may include reassigning the project or offering a refund, depending on the severity.
                </p>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.termsHeading}>Your Role in Ensuring Originality</h2>
              <div className={styles.termsText}>
                <p>
                  While we work hard to deliver original content, the final responsibility for ensuring your project is plagiarism-free to your satisfaction rests with you, the customer.
                </p>
                <p>
                  We encourage you to review your completed projects thoroughly. If you have any concerns about plagiarism after receiving your project, please reach out to us immediately. We highly recommend that you perform your own plagiarism scans and checks before publishing or distributing any content received through our services.
                </p>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.termsHeading}>Important Considerations</h2>
              <div className={styles.servicesList}>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceBullet}>•</span>
                  <span><span className="highlight-important">No Guarantees:</span> While we make significant efforts, we cannot guarantee that every single product or service will be 100% plagiarism-free in all possible contexts. The landscape of available content is vast and constantly changing.</span>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceBullet}>•</span>
                  <span><span className="highlight-important">Third-Party Tools & Platforms:</span> We may use third-party tools and services in our process. You acknowledge that such tools, including plagiarism checkers, may not have access to all published works. If you publish your content on platforms like Kindle Direct Publishing (KDP) or others, <span className="highlight-brand">Do My Ebook</span> is not responsible for any actions these platforms may take regarding your content or account. Your use of any optional third-party plagiarism tools is at your own risk.</span>
                </div>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.termsHeading}>Limitation of Liability</h2>
              <div className={styles.termsText}>
                <p>
                  Your use of <span className="highlight-brand">Do My Ebook</span> services is at your sole risk. Our services and all products delivered to you are provided &quot;as is&quot; and &quot;as available.&quot; We are not liable for any direct, indirect, incidental, punitive, or consequential damages (like lost profits, data loss, or replacement costs) that arise from your use of our services, including claims related to errors, omissions, or plagiarized content.
                </p>
                <p>
                  If, for any reason, the law prevents us from applying these limitations, our liability will be limited to the amount you paid us for services in the six months prior to your claim, or the minimum amount permitted by law, whichever is greater.
                </p>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.termsHeading}>Indemnity</h2>
              <div className={styles.termsText}>
                <p>
                  You agree to protect and hold <span className="highlight-brand">Do My Ebook</span> and our affiliated companies, directors, employees, and partners harmless from any claims or demands, including legal fees, made by any third party due to or arising from the products or services you receive through us. This includes claims of intellectual property infringement (like plagiarism), except in cases where the infringement is directly caused by our willful misconduct or gross negligence.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlagiarismDisclaimerSection;
