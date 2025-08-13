"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = ({ dark, offsetTop = 0 }) => {
  const currentPath = usePathname();
  const activeMenuFuntion = (value) =>
    value.some((el) => currentPath.includes(el)) ? "mil-active" : "";
  const [toggle, setToggle] = useState(false); // For the main mobile menu toggle
  const [openSubmenus, setOpenSubmenus] = useState({}); // State to manage open submenus

  const handleMobileNavClick = () => {
    if (window.innerWidth < 992) {
      setToggle(false);
    }
  };

  // Function to toggle submenu visibility on click
  const handleSubmenuToggle = (key) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getSubmenuToggleClass = (key) => {
    return openSubmenus[key] ? "mil-active" : "";
  };

  return (
    <>
      <style jsx>{`
        .mil-top-menu .mil-submenu {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease-in-out;
        }

        .mil-top-menu .mil-has-children:hover > .mil-submenu,
        .mil-top-menu .mil-has-children.mil-active > .mil-submenu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .mil-top-menu .mil-submenu .mil-submenu {
          transform: translateX(-10px);
        }

        .mil-top-menu .mil-submenu .mil-has-children:hover > .mil-submenu,
        .mil-top-menu .mil-submenu .mil-has-children.mil-active > .mil-submenu {
          transform: translateX(0);
        }

        .mil-top-menu .mil-submenu li {
          transition: all 0.2s ease-in-out;
        }

        .mil-top-menu .mil-submenu li:hover {
          transform: translateX(5px);
        }

        .mil-top-menu ul li a,
        .mil-top-menu .mil-submenu li a,
        .mil-top-menu .mil-submenu .mil-submenu li a,
        .mil-top-menu .mil-active > a,
        .mil-top-menu .mil-submenu .mil-active > a {
          font-family: inherit;
          color: #333;
        }

        @media (max-width: 991px) {
          .mil-top-menu .mil-submenu {
            max-height: 0;
            overflow: hidden;
            transform: none;
            transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
          }

          .mil-top-menu .mil-has-children.mil-active > .mil-submenu {
            max-height: 500px;
            transform: none;
          }

          .mil-top-menu .mil-submenu li:hover {
            transform: none;
          }

          .mil-top-menu .mil-submenu .mil-submenu {
            transform: none;
          }
        }
      `}</style>
      <div
        className={`mil-top-panel ${dark ? "mil-dark-2" : ""}`}
        style={{
          position: "fixed",
          top: offsetTop,
          zIndex: 998,
          backgroundColor: "#f2fafa",
          width: "100%",
          transition: "top 0.3s ease",
        }}
      >
        <div className="container">
          <Link href="/" className="mil-logo" onClick={handleMobileNavClick}>
            <img
              src={dark ? "/img/logo-light.png" : "/img/logo.png"}
              alt="Plax"
              width={170}
              height={64}
            />
          </Link>
          <nav className={`mil-top-menu ${toggle ? "mil-active" : ""}`}>
            <ul>
              <li className={`${activeMenuFuntion(["home"])}`}>
                <Link href="/" onClick={handleMobileNavClick}>Home</Link>
              </li>
              <li className={`${activeMenuFuntion(["about"])}`}>
                <Link href="/about" onClick={handleMobileNavClick}>About</Link>
              </li>
              <li className={`${activeMenuFuntion(["how-it-works"])}`}>
                <Link href="/how-it-works" onClick={handleMobileNavClick}>How It Works</Link>
              </li>
              <li className={`${activeMenuFuntion(["features"])}`}>
                <Link href="/features" onClick={handleMobileNavClick}>Features</Link>
              </li>
              <li
                className={`${activeMenuFuntion(["services"])} mil-has-children ${getSubmenuToggleClass("services")}`}
              >
                <Link
                  href="/services"
                  onClick={(e) => {
                    if (window.innerWidth < 992) {
                      e.preventDefault();
                      handleSubmenuToggle("services");
                    } else {
                      handleMobileNavClick();
                    }
                  }}
                >
                  Services
                </Link>
                <ul className="mil-submenu">
                  <li className={`mil-has-children ${getSubmenuToggleClass("writing")}`}>
                    <Link href="#" onClick={(e) => {
                      if (window.innerWidth < 992) {
                        e.preventDefault();
                        handleSubmenuToggle("writing");
                      }
                    }}>Writing</Link>
                    <ul className="mil-submenu">
                      <li><Link href="/ghostwriting" onClick={handleMobileNavClick}>Ghostwriting Excellence</Link></li>
                      <li><Link href="/strategicplot" onClick={handleMobileNavClick}>Strategic Plot & Outline Development</Link></li>
                      <li><Link href="/childrens-book-writing" onClick={handleMobileNavClick}>Children's Book Magic</Link></li>
                      <li><Link href="/AI-to-human-writing" onClick={handleMobileNavClick}>AI-Enhanced Human Editing</Link></li>
                    </ul>
                  </li>
                  <li className={`mil-has-children ${getSubmenuToggleClass("editorial")}`}>
                    <Link href="#" onClick={(e) => {
                      if (window.innerWidth < 992) {
                        e.preventDefault();
                        handleSubmenuToggle("editorial");
                      }
                    }}>Editorial</Link>
                    <ul className="mil-submenu">
                      <li><Link href="/precision-editing" onClick={handleMobileNavClick}>Precision Editing & Proofreading</Link></li>
                      <li><Link href="/unwavering-quality" onClick={handleMobileNavClick}>Unwavering Quality & Plagiarism Checks</Link></li>
                    </ul>
                  </li>
                  <li className={`mil-has-children ${getSubmenuToggleClass("design")}`}>
                    <Link href="#" onClick={(e) => {
                      if (window.innerWidth < 992) {
                        e.preventDefault();
                        handleSubmenuToggle("design");
                      }
                    }}>Design</Link>
                    <ul className="mil-submenu">
                      <li><Link href="/signature-ebook-design" onClick={handleMobileNavClick}>Signature eBook Design</Link></li>
                      <li><Link href="/impactful-cover" onClick={handleMobileNavClick}>Impactful Cover Artistry</Link></li>
                      <li><Link href="/custom-illustrations" onClick={handleMobileNavClick}>Custom Illustrations</Link></li>
                      <li><Link href="/interiorlayout" onClick={handleMobileNavClick}>Interior Layout</Link></li>
                    </ul>
                  </li>
                  <li className={`mil-has-children ${getSubmenuToggleClass("publishing")}`}>
                    <Link href="#" onClick={(e) => {
                      if (window.innerWidth < 992) {
                        e.preventDefault();
                        handleSubmenuToggle("publishing");
                      }
                    }}>Publishing</Link>
                    <ul className="mil-submenu">
                      <li><Link href="/professional-book-formatting" onClick={handleMobileNavClick}>Professional Book Formatting</Link></li>
                      <li><Link href="/compelling-book-descriptions" onClick={handleMobileNavClick}>Compelling Book Descriptions</Link></li>
                      <li><Link href="/audio-ebook" onClick={handleMobileNavClick}>Audio Ebook Production</Link></li>
                      <li><Link href="/dynamic-video-promos" onClick={handleMobileNavClick}>Dynamic Video Promos</Link></li>
                    </ul>
                  </li>
                  <li className={`mil-has-children ${getSubmenuToggleClass("authorSupport")}`}>
                    <Link href="#" onClick={(e) => {
                      if (window.innerWidth < 992) {
                        e.preventDefault();
                        handleSubmenuToggle("authorSupport");
                      }
                    }}>Author Support</Link>
                    <ul className="mil-submenu">
                      <li><Link href="/end-to-end-project-management" onClick={handleMobileNavClick}>End-to-End Project Management</Link></li>
                      <li><Link href="/global-content-translation" onClick={handleMobileNavClick}>Global Content Translation</Link></li>
                      <li><Link href="/book-launch-bundles" onClick={handleMobileNavClick}>Book Launch Bundles</Link></li>
                      <li><Link href="/bulk-order-solutions" onClick={handleMobileNavClick}>Bulk Order Solutions</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className={`${activeMenuFuntion(["blog"])}`}>
                <Link href="/blog" onClick={handleMobileNavClick}>Blogs</Link>
              </li>
              <li className={`${activeMenuFuntion(["contact"])}`}>
                <Link href="/contact" onClick={handleMobileNavClick}>Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="mil-menu-buttons">
            <Link href="/calendly" className="mil-btn mil-sm" onClick={handleMobileNavClick}>
              Book a Demo
            </Link>
            <div
              className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
