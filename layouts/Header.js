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

  // Function to toggle submenu visibility on click
  const handleSubmenuToggle = (key) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Helper to apply 'mil-active' class to submenu items on mobile
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

        /* --- MODIFIED RULES BELOW for color: #333 --- */

        /* Target all links within the top menu for consistent font and color */
        .mil-top-menu ul li a {
          font-family: inherit; /* This will make it inherit from the body or html */
          color: #333; /* Set to desired color */
        }

        /* Specifically target links within submenus to ensure consistency */
        .mil-top-menu .mil-submenu li a {
          font-family: inherit;
          color: #333; /* Set to desired color */
        }

        /* You might need to be even more specific for nested submenus if issues persist */
        .mil-top-menu .mil-submenu .mil-submenu li a {
          font-family: inherit;
          color: #333; /* Set to desired color */
        }

        /* Ensure active menu items also have the desired color if they have specific styles */
        .mil-top-menu .mil-active > a {
            font-family: inherit;
            color: #333; /* Set to desired color */
        }
        .mil-top-menu .mil-submenu .mil-active > a {
            font-family: inherit;
            color: #333; /* Set to desired color */
        }

        /* --- END MODIFIED RULES --- */


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
            position: 'fixed',
            top: offsetTop, // dynamically from prop
            zIndex: 998,
            backgroundColor: "#f2fafa",
            width: '100%',
            transition: 'top 0.3s ease',
      }}
    >
        <div className="container">
          <Link href="/" className="mil-logo">
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
                <Link href="/">Home</Link>
              </li>
              <li className={`${activeMenuFuntion(["about"])}`}>
                <Link href="about">About</Link>
              </li>
              <li className={`${activeMenuFuntion(["how-it-works"])}`}>
                <Link href="how-it-works">How It Works</Link>
              </li>
              <li className={`${activeMenuFuntion(["features"])}`}>
                <Link href="features">Features</Link>
              </li>
              <li className={`${activeMenuFuntion(["services"])} mil-has-children ${getSubmenuToggleClass("services")}`}>
                {/* On desktop, this is a hover item. On mobile, it's a clickable toggle */}
                <Link href="services" onClick={(e) => {
                  // Prevent default link behavior only if it has submenus
                  if (window.innerWidth < 992) {
                    e.preventDefault();
                    handleSubmenuToggle("services");
                  }
                }}>Services</Link>
                <ul className="mil-submenu">
                  <li className={`mil-has-children ${getSubmenuToggleClass("writing")}`}>
                    <Link href="#" onClick={(e) => {
                      if (window.innerWidth < 992) {
                        e.preventDefault();
                        handleSubmenuToggle("writing");
                      }
                    }}>Writing</Link>
                    <ul className="mil-submenu">
                      <li><Link href="ghostwriting">Ghostwriting Excellence</Link></li>
                      <li><Link href="strategicplot">Strategic Plot & Outline Development</Link></li>
                      <li><Link href="childrens-book-writing">Children's Book Magic</Link></li>
                      <li><Link href="AI-to-human-writing">AI-Enhanced Human Editing</Link></li>
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
                      <li><Link href="precision-editing">Precision Editing & Proofreading</Link></li>
                      <li><Link href="unwavering-quality">Unwavering Quality & Plagiarism Checks</Link></li>
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
                      <li><Link href="signature-ebook-design">Signature eBook Design</Link></li>
                      <li><Link href="impactful-cover">Impactful Cover Artistry</Link></li>
                      <li><Link href="custom-illustrations">Custom Illustrations</Link></li>
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
                      <li><Link href="professional-book-formatting">Professional Book Formatting</Link></li>
                      <li><Link href="compelling-book-descriptions">Compelling Book Descriptions</Link></li>
                      <li><Link href="audio-ebook">Audio Ebook Production</Link></li>
                      <li><Link href="dynamic-video-promos">Dynamic Video Promos</Link></li>
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
                      <li><Link href="end-to-end-project-management">End-to-End Project Management</Link></li>
                      <li><Link href="global-content-translation">Global Content Translation</Link></li>
                      <li><Link href="book-launch-bundles">Book Launch Bundles</Link></li>
                      <li><Link href="bulk-order-solutions">Bulk Order Solutions</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li
                className={`${activeMenuFuntion(["blog"])}`}>
                <Link href="blog">Blogs</Link>
              </li>
              <li className={`${activeMenuFuntion(["contact"])}`}>
                <Link href="contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="mil-menu-buttons">
            <Link href="calendly" className="mil-btn mil-sm">
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