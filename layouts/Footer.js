import Link from "next/link";
// Assuming you have Font Awesome or similar CSS imported globally
// For example, in your _app.js or a dedicated CSS file.

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
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45px',
    height: '45px',
    backgroundColor: '#f2fafa',
    color: '#004c4f', // Teal or dark green for consistency
    borderRadius: '50%',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  const iconHoverEffects = {
    instagram: '0 4px 15px rgba(131, 58, 180, 0.4)',
    facebook: '0 4px 15px rgba(59, 89, 152, 0.4)',
    linkedin: '0 4px 15px rgba(0, 119, 181, 0.4)',
    whatsapp: '0 4px 15px rgba(37, 211, 102, 0.4)',
  };

  const socialLinks = [
    {
      href: 'https://www.instagram.com/',
      icon: 'fab fa-instagram',
      hoverShadow: iconHoverEffects.instagram,
    },
    {
      href: 'https://www.facebook.com/digital53/',
      icon: 'fab fa-facebook-f',
      hoverShadow: iconHoverEffects.facebook,
    },
    {
      href: 'https://www.linkedin.com/in/joharmandav/',
      icon: 'fab fa-linkedin-in',
      hoverShadow: iconHoverEffects.linkedin,
    },
    {
      href: 'https://wa.me/96599144152',
      icon: 'fab fa-whatsapp',
      hoverShadow: iconHoverEffects.whatsapp,
    },
  ];

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
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                gap: '15px',
                alignItems: 'center',
              }}
            >
              {socialLinks.map(({ href, icon, hoverShadow }, index) => (
                <li
                  key={index}
                  style={{
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <Link
                    href={href}
                    target="_blank"
                    style={iconBaseStyle}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = hoverShadow;
                      e.target.style.backgroundColor = '#f2fafd';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                      e.target.style.backgroundColor = '#f2fafa';
                    }}
                  >
                    <i className={icon}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60">Usefull Links</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="/">Home</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="about">About Us</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="contact">Contact Us</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="services">Services</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="blog">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60">Help</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-soft mil-mb-15">
                5900 Balcones Drive STE ,<br />10544 Austin,
                 Texas 78731
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                +1 (727) 405-3480
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                info@domyebook.com
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-80">
            <h6 className="mil-mb-60">Newsletter</h6>
            <p className="mil-text-xs mil-soft mil-mb-15">
              Subscribe to get the latest news form us
            </p>
            <form id="subscribeForm" className="mil-subscripe-form-footer">
              <input className="mil-input" name="EMAIL" type="email" placeholder="Email" autoComplete="off" />
              <button type="submit">
                <i className="far fa-envelope-open mil-dark" />
              </button>
              <div className="mil-checkbox-frame mil-mt-15">
                <div className="mil-checkbox">
                  <input type="checkbox" id="checkbox" defaultChecked="" />
                  <label htmlFor="checkbox" />
                </div>
                <p className="mil-text-xs mil-soft">
                  Subscribe to get the latest news
                </p>
              </div>
            </form>
          </div>
          </div>
        </div>
        <div className="mil-footer-bottom" >
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
                  Rizcordix Global
                </a>
              </p>
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
                +1 (727) 405-3480
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
                +1 (727) 405-3480
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