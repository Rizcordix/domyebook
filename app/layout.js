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

// export const metadata = {
//   title: "Your App Title",
//   description: "Your app description",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${secondary_font.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DoMyEbook</title>
        <meta name="description" content="DoMyEbook offers professional ebook services including ghostwriting, editing, formatting, publishing, book cover design, marketing, promo videos, and audiobook creation." />
        <link rel="icon" type="image/x-icon" href="/public/favicon.ico" />
        <meta name="theme-color" content="#7eb947" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
