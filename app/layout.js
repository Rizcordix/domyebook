import { Questrial } from 'next/font/google';
import './globals.css';
import '@fonts/css/switzer.css';
import '@fonts/font-awesome.min.css';
import '@css/plugins/bootstrap-grid.css';
import '@css/plugins/swiper.min.css';
import '@css/plugins/magnific-popup.css';
import '@css/style.css';
import ClientLayout from '@/components/ClientLayout';

const secondary_font = Questrial({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-secondary',
  display: 'swap',
  adjustFontFallback: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${secondary_font.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DoMyEbook</title>
        <meta name="description" content="DoMyEbook offers professional ebook services..." />
        <meta name="keywords" content="Do my ebook, Ebook, professional ebook services..." />
        <link rel="icon" type="image/x-icon" href="/public/favicon.ico" />
        <meta name="theme-color" content="#7eb947" />
        
        {/* Start of Tawk.to Script */}
        <script type="text/javascript">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/687a342a86520d191450094f/1j0elnk9p';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </script>
        {/* End of Tawk.to Script */}
        
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
