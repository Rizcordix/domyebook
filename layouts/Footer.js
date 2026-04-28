import { useState } from "react";
import Link from "next/link";

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

/* ─────────────────────────────────────────────
   FOOTER 1 — Main redesigned footer (light bg)
───────────────────────────────────────────── */
const Footer1 = ({ bg = true, margin = 160 }) => {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const email = e.target.email.value;
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbydaJ4SBOOl0pD98SiZLCS1BlDAt3sCWOR0FkWv0dIIgAn0v7OIqBMWYV4ZcG5FE1R6/exec",
        { method: "POST", body: new URLSearchParams({ email }) }
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
  };

  const socialLinks = [
    {
      href: "https://www.instagram.com/domyebook?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "Instagram",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      href: "https://www.facebook.com/profile.php?id=61576622832616",
      label: "Facebook",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      href: "https://youtube.com/@domyebook?si=EoT_b3isXnI2j_0O",
      label: "YouTube",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      href: "https://wa.me/+15123259725",
      label: "WhatsApp",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      ),
    },
    {
      href: "https://au.pinterest.com/domyebook/",
      label: "Pinterest",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
      ),
    },
    {
      href: "https://x.com/Domyebook",
      label: "X / Twitter",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  const policyLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Acceptable AI Usage", href: "/acceptable-uses-AI" },
    { name: "Plagiarism Policy", href: "/plagiarism-disclaimer" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Refund & Revision", href: "/refund-and-revision" },
  ];

  const paymentIcons = [
    { label: "Visa", src: "/img/payments/logo-visa.svg" },
    { label: "Mastercard", src: "/img/payments/logo-mastercard.svg" },
    { label: "PayPal", src: "/img/payments/logo-paypal.svg" },
    { label: "American Express", src: "/img/payments/logo-american-express-2.svg" },
    { label: "Stripe", src: "/img/payments/stripe.svg" },
  ];

  /* ── Styles ── */
  const s = {
    footer: {
      background: "#f4f9f9",
      borderTop: "1px solid rgba(0,76,79,0.1)",
      fontFamily: "inherit",
      width: "100%",
      position: "relative",
      zIndex: 2,
      pointerEvents: "auto",
    },
    upper: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "60px 48px 52px",
      display: "grid",
      gridTemplateColumns: "1.7fr 1fr 1.3fr 1fr 1.1fr",
      gap: "0 44px",
      borderBottom: "1px solid rgba(0,76,79,0.1)",
      position: "relative",
      zIndex: 2,
      pointerEvents: "auto",
    },
    col: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: "0.13em",
      textTransform: "uppercase",
      color: "#004c4f",
      marginBottom: "22px",
      opacity: 0.55,
    },
    tagline: {
      fontSize: "14px",
      color: "#4a6568",
      lineHeight: 1.65,
      marginBottom: "24px",
      maxWidth: "210px",
    },
    socialsWrap: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      marginBottom: "24px",
    },
    socialBtn: {
      width: "34px",
      height: "34px",
      borderRadius: "8px",
      border: "1px solid rgba(0,76,79,0.15)",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#004c4f",
      textDecoration: "none",
      transition: "all 0.2s ease",
      cursor: "pointer",
      flexShrink: 0,
    },
    trustPill: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      background: "rgba(0,182,122,0.08)",
      border: "1px solid rgba(0,182,122,0.22)",
      borderRadius: "999px",
      padding: "6px 12px",
      textDecoration: "none",
      width: "fit-content",
    },
    trustStars: {
      color: "#00b67a",
      fontSize: "12px",
      letterSpacing: "1px",
    },
    trustLabel: {
      fontSize: "12px",
      color: "#4a6568",
      fontWeight: 500,
    },
    navLink: {
      display: "block",
      fontSize: "14px",
      color: "#3a5558",
      textDecoration: "none",
      marginBottom: "13px",
      transition: "color 0.2s",
      lineHeight: 1,
      pointerEvents: "auto",
    },
    addrCards: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "8px",
      marginBottom: "14px",
    },
    addrCard: {
      background: "#fff",
      border: "1px solid rgba(0,76,79,0.1)",
      borderRadius: "10px",
      padding: "11px 12px",
    },
    addrFlag: {
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "0.07em",
      color: "#004c4f",
      textTransform: "uppercase",
      marginBottom: "5px",
    },
    addrText: {
      fontSize: "14px",
      color: "#5a7073",
      lineHeight: 1.55,
    },
    contactRow: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "14px",
      color: "#3a5558",
      textDecoration: "none",
      marginBottom: "8px",
      transition: "color 0.2s",
    },
    newsletterText: {
      fontSize: "14px",
      color: "#4a6568",
      lineHeight: 1.6,
      marginBottom: "14px",
    },
    emailWrap: {
      position: "relative",
      marginBottom: "20px",
    },
    emailInput: {
      width: "100%",
      background: "#fff",
      border: "1px solid rgba(0,76,79,0.18)",
      borderRadius: "10px",
      padding: "11px 44px 11px 14px",
      fontSize: "14px",
      color: "#1a2e2f",
      outline: "none",
      fontFamily: "inherit",
    },
    emailBtn: {
      position: "absolute",
      right: "6px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "30px",
      height: "30px",
      background: "#004c4f",
      border: "none",
      borderRadius: "7px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: "#fff",
      fontSize: "13px",
    },
    shieldRow: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      fontSize: "11px",
      color: "#004c4f",
      marginBottom: "8px",
      opacity: 0.65,
    },
    payRow: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center",
    },
    payIconWrap: {
      background: "#fff",
      border: "1px solid rgba(0,76,79,0.12)",
      borderRadius: "6px",
      padding: "6px 8px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "26px",
    },
    payIcon: {
      height: "18px",
      width: "auto",
      display: "block",
    },
    bottom: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "16px 48px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
      zIndex: 2,
      pointerEvents: "auto",
    },
    copyText: {
      fontSize: "12px",
      color: "#7a9598",
    },
    creditText: {
      fontSize: "12px",
      color: "#7a9598",
    },
  };

  return (
    <footer style={s.footer}>
      <div style={s.upper}>

        {/* ── Col 1: Brand ── */}
        <div style={s.col}>
          <a href="/" style={{ display: "block", marginBottom: "12px" }}>
            <img src="/img/logo.png" alt="DoMyEbook" width={90} height={32} />
          </a>
          <p style={s.tagline}>
            Professional ebook writing services trusted by authors worldwide.
          </p>

          {/* Socials */}
          <div style={s.socialsWrap}>
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                style={s.socialBtn}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#e6f4f4";
                  e.currentTarget.style.borderColor = "rgba(0,76,79,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.borderColor = "rgba(0,76,79,0.15)";
                }}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Trustpilot pill */}
          <a
            href="https://www.trustpilot.com/review/domyebook"
            target="_blank"
            rel="noopener noreferrer"
            style={s.trustPill}
          >
            <svg width="13" height="13" viewBox="0 0 122.88 116.76" fill="#00b67a">
              <path d="M61.44,0,80.17,39.26l43.09,6.27L92.36,74.93l7.37,43.06L61.44,98.58,23.15,118,30.52,74.93,0,45.53l43.09-6.27Z" />
            </svg>
            <span style={s.trustStars}>★★★★★</span>
            <span style={s.trustLabel}>Verified reviews</span>
          </a>
        </div>

        {/* ── Col 2: Quick Links ── */}
        <div style={s.col}>
          <div style={s.label}>Quick Links</div>
          {[
            { name: "About Us", href: "/about" },
            { name: "How it Works", href: "/how-it-works" },
            { name: "Features", href: "/features" },
            { name: "Services", href: "/services" },
            { name: "Blog", href: "/blog" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={s.navLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#004c4f")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#3a5558")}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ── Col 3: Contact ── */}
        <div style={s.col}>
          <div style={s.label}>Contact</div>

          <div style={s.addrCards}>
            <div style={s.addrCard}>
              <div style={s.addrFlag}>🇺🇸</div>
              <div style={s.addrText}>5539 Casa Martin Dr,<br />Katy, TX 77449</div>
            </div>
            <div style={s.addrCard}>
              <div style={s.addrFlag}>🇬🇧</div>
              <div style={s.addrText}>Suite C141, 4-6 Greatorex St, London E1 5NF</div>
            </div>
          </div>

          <a
            href="tel:+12812470786"
            style={s.contactRow}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#004c4f")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#3a5558")}
          >
            <span style={{ fontSize: "15px" }}>🇺🇸</span>
            <span>+1 281-247-0786</span>
          </a>
          <a
            href="tel:+447400705723"
            style={s.contactRow}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#004c4f")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#3a5558")}
          >
            <span style={{ fontSize: "15px" }}>🇬🇧</span>
            <span>+44 7400 705723</span>
          </a>
          <a
            href="mailto:info@domyebook.com"
            style={{ ...s.contactRow, marginTop: "4px" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#004c4f")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#3a5558")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>info@domyebook.com</span>
          </a>
        </div>

        {/* ── Col 4: Policies ── */}
        <div style={s.col}>
          <div style={s.label}>Policies</div>
          {policyLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={s.navLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#004c4f")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#3a5558")}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ── Col 5: Newsletter + Payments ── */}
        <div style={s.col}>
          <div style={s.label}>Newsletter</div>
          <p style={s.newsletterText}>
            Get writing tips &amp; updates straight to your inbox.
          </p>

          <form onSubmit={handleSubscribe} style={s.emailWrap}>
            <input
              name="email"
              type="email"
              placeholder="Your email address"
              required
              autoComplete="off"
              style={s.emailInput}
              onFocus={(e) => (e.target.style.borderColor = "rgba(0,76,79,0.45)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(0,76,79,0.18)")}
            />
            <button
              type="submit"
              disabled={loading}
              style={s.emailBtn}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#006467")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#004c4f")}
            >
              {loading ? (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              ) : (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              )}
            </button>
          </form>

          {message && (
            <p style={{ fontSize: "13px", color: success ? "#1a7a55" : "#c0392b", marginBottom: "16px", marginTop: "-12px" }}>
              {message}
            </p>
          )}

          {/* Payment methods */}
          <div style={s.shieldRow}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            Secure payments via Stripe
          </div>
          <div style={s.payRow}>
            {paymentIcons.map(({ label, src }) => (
              <span key={label} style={s.payIconWrap} title={label}>
                <img src={src} alt={label} style={s.payIcon} />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={s.bottom}>
        <p style={s.copyText}>© 2025 DoMyEbook. All Rights Reserved.</p>
        <p style={s.creditText}>
          Developed by{" "}
          <a
            href="https://Rizcordixglobal.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#5a9598", textDecoration: "none" }}
          >
            Rizcordix Global Pvt Ltd
          </a>
        </p>
      </div>
    </footer>
  );
};

/* ─────────────────────────────────────────────
   FOOTER 2 & 3 — Unchanged originals
───────────────────────────────────────────── */
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
            <h6 className="mil-mb-60 mil-soft">Useful Links</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-pale mil-mb-15"><Link href="/">Home</Link></li>
              <li className="mil-text-m mil-pale mil-mb-15"><Link href="/about">About Us</Link></li>
              <li className="mil-text-m mil-pale mil-mb-15"><Link href="/contact">Contact Us</Link></li>
              <li className="mil-text-m mil-pale mil-mb-15"><Link href="/services">Services</Link></li>
              <li className="mil-text-m mil-pale mil-mb-15"><Link href="/price">Pricing</Link></li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60 mil-soft">Help</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-pale mil-mb-15">5539 Casa Martin Dr Katy, TX 77449</li>
              <li className="mil-text-m mil-pale mil-mb-15">+1 (512) 3259725</li>
              <li className="mil-text-m mil-pale mil-mb-15">info@domyebook.com</li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-80">
            <h6 className="mil-mb-60 mil-soft">Newsletter</h6>
            <p className="mil-text-xs mil-pale mil-mb-15">Subscribe to get the latest news from us</p>
            <form className="mil-subscripe-form-footer">
              <input className="mil-input" type="email" placeholder="Email" />
              <button type="submit">
                <i className="far fa-envelope-open mil-dark" />
              </button>
            </form>
          </div>
        </div>
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-6">
              <p className="mil-text-s mil-pale">© 2024 Plax Finance &amp; Fintech Design</p>
            </div>
            <div className="col-xl-6">
              <p className="mil-text-s mil-text-right mil-sm-text-left mil-pale">
                Developed by <a href="https://bslthemes.com" target="_blank" rel="noopener noreferrer">bslthemes</a>
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
              <li className="mil-text-m mil-dark-soft mil-mb-15"><Link href="/">Home</Link></li>
              <li className="mil-text-m mil-dark-soft mil-mb-15"><Link href="/about">About Us</Link></li>
              <li className="mil-text-m mil-dark-soft mil-mb-15"><Link href="/contact">Contact Us</Link></li>
              <li className="mil-text-m mil-dark-soft mil-mb-15"><Link href="/services">Services</Link></li>
              <li className="mil-text-m mil-dark-soft mil-mb-15"><Link href="/price">Pricing</Link></li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-dark-soft mil-mb-15">999 Rue du Cherche-Midi, Paris, France</li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">+1 (512) 3259725</li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">info@domyebook.com</li>
            </ul>
          </div>
        </div>
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-6">
              <p className="mil-text-s mil-dark-soft">© 2024 Plax Finance &amp; Fintech Design</p>
            </div>
            <div className="col-xl-6">
              <p className="mil-text-s mil-text-right mil-sm-text-left mil-dark-soft">
                Developed by <a href="https://dsynex.com" target="_blank" rel="noopener noreferrer">Dsynex</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};