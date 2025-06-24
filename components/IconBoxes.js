import React from 'react';
// import './BenefitsSection.css';

const BenefitsSection = () => {
  return (
    <div className="icon-boxes mil-p-80-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 mil-mb-30">
            <div className="mil-icon-box mil-with-bg mil-center mil-up mil-hover-card">
              <div className="mil-icon-wrapper mil-mb-30 mil-up">
                <img
                  src="img/home-2/icons/1.svg"
                  alt="icon"
                  className="mil-icon-img"
                />
              </div>
              <h5 className="mil-mb-20 mil-up mil-title">Stress-Free Purchase</h5>
              <p className="mil-text-s mil-soft mil-up mil-description">
                When you make a purchase, we&apos;ve got your back. Enjoy immediate protection against theft or accidental damage for the first 45 days. It’s our way of ensuring you can enjoy your ebook worry-free.

              </p>
              <div className="mil-hover-line"></div>
              <div className="mil-particles">
                <span className="mil-particle mil-particle-1"></span>
                <span className="mil-particle mil-particle-2"></span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 mil-mb-30">
            <div className="mil-icon-box mil-with-bg mil-center mil-up mil-hover-card">
              <div className="mil-icon-wrapper mil-mb-30 mil-up">
                <img
                  src="img/home-2/icons/2.svg"
                  alt="icon"
                  className="mil-icon-img"
                />
              </div>
              <h5 className="mil-mb-20 mil-up mil-title">Earn Rewards That Matter</h5>
              <p className="mil-text-s mil-soft mil-up mil-description">
                Who doesn&apos;t love rewards? With our easy-to-manage program, you&apos;ll unlock personalized perks that fit your lifestyle. It&apos;s our little way of saying thank you for choosing us.
              </p>
              <div className="mil-hover-line"></div>
              <div className="mil-particles">
                <span className="mil-particle mil-particle-3"></span>
                <span className="mil-particle mil-particle-4"></span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 mil-mb-30">
            <div className="mil-icon-box mil-with-bg mil-center mil-up mil-hover-card">
              <div className="mil-icon-wrapper mil-mb-30 mil-up">
                <img
                  src="img/home-2/icons/3.svg"
                  alt="icon"
                  className="mil-icon-img"
                />
              </div>
              <h5 className="mil-mb-20 mil-up mil-title">More With Every Transaction</h5>
              <p className="mil-text-s mil-soft mil-up mil-description">
                Every purchase is more than just a transaction. With exclusive benefits, 
                like special offers and added security, we make sure you get the most out of every step of your journey with us.
              </p>
              <div className="mil-hover-line"></div>
              <div className="mil-particles">
                <span className="mil-particle mil-particle-5"></span>
                <span className="mil-particle mil-particle-6"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;