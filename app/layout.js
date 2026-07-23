import { Questrial } from 'next/font/google';
import './globals.css';
import '@fonts/css/switzer.css';
import '@fonts/font-awesome.min.css';
import '@css/plugins/bootstrap-grid.css';
import '@css/plugins/swiper.min.css';
import '@css/plugins/magnific-popup.css';
import '@css/style.css';
import ClientLayout from '@/components/ClientLayout';
import Script from 'next/script';
import PopupClientWrapper from "@/components/Popupclient";
import DeferredChat from "@/components/DeferredChat";

// Load font
const secondary_font = Questrial({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-secondary',
  display: 'swap',
  adjustFontFallback: false,
});

// ✅ Metadata API (instead of <title>, <meta> tags inside head)
export const metadata = {
  title: "DoMyEbook",
  description: "DoMyEbook offers professional ebook services...",
  keywords: "Do my ebook, Ebook, professional ebook services...",
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#7eb947",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={secondary_font.variable}>
      {/* suppressHydrationWarning: browser extensions (Grammarly, dark-mode, etc.)
          inject a style attribute on <body> before React hydrates, causing a
          false-positive mismatch. This only ignores ATTRIBUTE diffs on body itself —
          all children are still fully hydration-checked. */}
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
        <PopupClientWrapper />

        {/* ✅ Tawk.to script with next/script (safe for hydration) */}

        <Script id="trustpilot" strategy="lazyOnload">
        {`(function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
            a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;f=d.getElementsByTagName(s)[0];
            f.parentNode.insertBefore(a,f)})(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');
            tp('register', 'hpkotXHlg0I5bYCY');`}
        </Script>
        
        {/* Tawk.to loads on first user interaction (see DeferredChat) — keeps its
            heavy JS + layout-shifting iframe out of the critical rendering window. */}
        <DeferredChat />
      </body>
    </html>
  );
}


