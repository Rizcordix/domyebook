import { useState } from "react";

const Footer = ({ bg = true, margin = 160, footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 bg={bg} margin={margin} />;
    case 2:
      return <Footer2 bg={bg} margin={margin} />;
    case 3:
      return <Footer3 bg={bg} margin={margin} />;
    default:
      return <Footer1 bg={bg} margin={margin} />;
  }
};
export default Footer;

const Footer1 = ({ bg = true, margin = 160 }) => {
  const iconBaseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "45px",
    height: "45px",
    backgroundColor: "#f2fafa",
    color: "#004c4f",
    borderRadius: "50%",
    textDecoration: "none",
    fontSize: "18px",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const iconHoverEffects = {
    instagram: "0 4px 15px rgba(131, 58, 180, 0.4)",
    facebook: "0 4px 15px rgba(59, 89, 152, 0.4)",
    youtube: "0 4px 15px rgba(255, 0, 0, 0.4)",
    whatsapp: "0 4px 15px rgba(37, 211, 102, 0.4)",
    pinterest: "0 4px 15px rgba(189, 8, 8, 0.4)",
    twitter: "0 4px 15px rgba(29, 161, 242, 0.4)",
  };

  const socialLinks = [
    {
      href: "https://www.instagram.com/domyebook?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      icon: "fab fa-instagram",
      hoverShadow: iconHoverEffects.instagram,
    },
    {
      href: "https://www.facebook.com/profile.php?id=61576622832616",
      icon: "fab fa-facebook-f",
      hoverShadow: iconHoverEffects.facebook,
    },
    {
      href: "https://youtube.com/@domyebook?si=EoT_b3isXnI2j_0O",
      icon: "fab fa-youtube",
      hoverShadow: iconHoverEffects.youtube,
    },
    {
      href: "https://wa.me/+15123259725",
      icon: "fab fa-whatsapp",
      hoverShadow: iconHoverEffects.whatsapp,
    },
    {
      href: "https://au.pinterest.com/domyebook/",
      icon: "fab fa-pinterest",
      hoverShadow: iconHoverEffects.pinterest,
    },
    {
      href: "https://x.com/Domyebook",
      icon: "fab fa-twitter",
      hoverShadow: iconHoverEffects.twitter,
    },
  ];

  const policyLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Acceptable AI Usage", href: "/acceptable-uses-AI" },
    { name: "Plagiarism Policy", href: "/plagiarism-disclaimer" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Refund and Revision", href: "/refund-and-revision" },
  ];

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <footer className={`${bg ? "mil-footer-with-bg" : ""} mil-p-120-0`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <a href="#." className="mil-footer-logo mil-mb-30">
              <img src="/img/logo.png" alt="Plax" width={90} height={32} />
            </a>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                alignItems: "center",
                maxWidth: "200px",
                marginBottom: "60px",

              }}
            >
              {socialLinks.map(({ href, icon, hoverShadow }, index) => (
                <li
                  key={index}
                  style={{
                    transition: "transform 0.3s ease",
                    flexBasis: "calc(33.33% - 10px)",
                    marginBottom: "15px",
                  }}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={iconBaseStyle}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-3px)";
                      e.target.style.boxShadow = hoverShadow;
                      e.target.style.backgroundColor = "#f2fafd";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                      e.target.style.backgroundColor = "#f2fafa";
                    }}
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-xl-2 mil-mb-60">
            <h6 className="mil-mb-60">Useful Links</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-soft mil-mb-15">
                <a href="/about">About Us</a>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <a href="/how-it-works">How it Works</a>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <a href="/features">Features</a>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <a href="/services">Services</a>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <a href="/blog">Blogs</a>
              </li>
            </ul>
          </div>

          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60">Contact</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-soft mil-mb-15">
                5900 Balcones Drive STE ,<br />
                10544 Austin, Texas 78731
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                +1 (512) 3259725
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">+61480810531</li>
              <li className="mil-text-m mil-soft mil-mb-15">
                info@domyebook.com
              </li>
            </ul>
          </div>

          <div className="col-xl-2 mil-mb-60">
            <h6 className="mil-mb-60">Policies</h6>
            <ul className="mil-footer-list">
              {policyLinks.map((link, index) => (
                <li key={index} className="mil-text-m mil-soft mil-mb-15">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-xl-2 mil-mb-80">
            <h6 className="mil-mb-60">Newsletter</h6>
            <p className="mil-text-xs mil-soft mil-mb-15">
              Subscribe to get the latest news from us
            </p>
            <form
              className="mil-subscripe-form-footer"
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                setMessage("");
                const email = e.target.email.value;

                try {
                  const response = await fetch(
                    "https://script.google.com/macros/s/AKfycbydaJ4SBOOl0pD98SiZLCS1BlDAt3sCWOR0FkWv0dIIgAn0v7OIqBMWYV4ZcG5FE1R6/exec",
                    {
                      method: "POST",
                      body: new URLSearchParams({ email }),
                    }
                  );

                  if (response.ok) {
                    setSuccess(true);
                    setMessage("Thanks for subscribing!");
                    e.target.reset();
                  } else {
                    setSuccess(false);
                    setMessage("Something went wrong. Try again.");
                  }
                } catch {
                  setSuccess(false);
                  setMessage("Network error. Try again.");
                } finally {
                  setLoading(false);
                }
              }}
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                maxWidth: "250px",
              }}
            >
              <input
                className="mil-input"
                name="email"
                type="email"
                placeholder="Email"
                required
                autoComplete="off"
                style={{
                  flex: 1,
                  paddingRight: "40px",
                }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  position: "absolute",
                  right: "10px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                {loading ? (
                  <i className="fas fa-spinner fa-spin mil-dark" />
                ) : (
                  <i className="far fa-envelope-open mil-dark" />
                )}
              </button>
            </form>

            {message && (
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "14px",
                  color: success ? "#7eb947" : "#d9534f",
                }}
              >
                {message}
              </p>
            )}
          </div>
        </div>

        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-6">
              <p className="mil-text-s mil-soft">
                © 2025 DoMyEbook. All Rights Reserved.
              </p>
            </div>
            <div className="col-xl-6">
              <p className="mil-text-s mil-text-right mil-sm-text-left mil-soft">
                Developed by{" "}
                <a href="https://Rizcordixglobal.com" target="blank">
                  Rizcordix Global Pvt Ltd
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};



const Footer3 = ({ bg = true, margin = 160 }) => {
  return (
    <footer className="mil-footer-dark-2 mil-p-160-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <a href="#." className="mil-footer-logo mil-mb-60">
              <img src="/img/logo-2.png" alt="Plax" width={28} height={32} />
            </a>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60 mil-soft">Usefull Links</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="/">Home</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="about">About Us</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="contact">Contact Us</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="services">Services</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="price">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60 mil-soft">Help</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-pale mil-mb-15">
                5900 Balcones Drive STE 10544 Austin,
                 Texas 78731
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                +1 (512) 3259725
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                info@domyebook.com
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-80">
            <h6 className="mil-mb-60 mil-soft">Newsletter</h6>
            <p className="mil-text-xs mil-pale mil-mb-15">
              Subscribe to get the latest news form us
            </p>
            <form className="mil-subscripe-form-footer">
              <input className="mil-input" type="email" placeholder="Email" />
              <button type="submit">
                <i className="far fa-envelope-open mil-dark" />
              </button>
              <div className="mil-checkbox-frame mil-mt-15">
                <div className="mil-checkbox">
                  <input type="checkbox" id="checkbox" defaultChecked="" />
                  <label htmlFor="checkbox" />
                </div>
                <p className="mil-text-xs mil-pale">
                  Subscribe to get the latest news
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-6">
              <p className="mil-text-s mil-pale">
                © 2024 Plax Finance &amp; Fintech Design
              </p>
            </div>
            <div className="col-xl-6">
              <p className="mil-text-s mil-text-right mil-sm-text-left mil-pale">
                Developed by{" "}
                <a href="https://bslthemes.com" target="blank">
                  bslthemes
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer className="mil-footer-dark mil-p-160-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mil-mb-60 mil-footer-space-fix">
            <a href="#." className="mil-footer-logo mil-logo-2 mil-mb-60">
              <img src="/img/logo-light.png" alt="Plax" width={83} height={32} />
            </a>
            <ul className="mil-footer-list mil-footer-list-2">
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href="/">Home</Link>
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href="about">About Us</Link>
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href="contact">Contact Us</Link>
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href="services">Services</Link>
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href="price">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                999 Rue du Cherche-Midi, 7755500666 Paris, <br />
                France
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                +1 (512) 3259725
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                info@domyebook.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-6">
              <p className="mil-text-s mil-dark-soft">
                © 2024 Plax Finance &amp; Fintech Design
              </p>
            </div>
            <div className="col-xl-6">
              <p className="mil-text-s mil-text-right mil-sm-text-left mil-dark-soft">
                Developed by{" "}
                <a href="https://bslthemes.com" target="blank">
                  bslthemes
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};