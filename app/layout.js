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
        <meta name="keywords" content="Do my ebook, Do My Ebook, do my ebook, Ebook, Domyebook, ebook services, professional ebook writing, ghostwriting, ebook editing, ebook formatting, ebook publishing, book cover design, ebook marketing, promo video for ebooks, audiobook creation, hire ebook writer, self publishing services, custom ebook design, Amazon Kindle publishing, ebook promotion, long tail ebook services, affordable ebook solutions, expert ebook editors, ebook cover designers, ebook marketing strategies, audiobook production services" />
        <link rel="icon" type="image/x-icon" href="/public/favicon.ico" />
        <meta name="theme-color" content="#7eb947" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
