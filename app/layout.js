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
      <body>
        <ClientLayout>{children}</ClientLayout>
        <PopupClientWrapper />

        {/* ✅ Tawk.to script with next/script (safe for hydration) */}

        <Script id="trustpilot" strategy="afterInteractive">
        {`(function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
            a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;f=d.getElementsByTagName(s)[0];
            f.parentNode.insertBefore(a,f)})(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');
            tp('register', 'hpkotXHlg0I5bYCY');`}
        </Script>
        
        <Script id="tawkto" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),
                  s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/687a342a86520d191450094f/1j0elnk9p';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}


