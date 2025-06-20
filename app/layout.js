import { Questrial } from 'next/font/google'

import "@fonts/css/switzer.css";
import "./globals.css";

import "@fonts/font-awesome.min.css";

import "@css/plugins/bootstrap-grid.css";

import "@css/plugins/swiper.min.css";

import "@css/plugins/magnific-popup.css";

import Preloader from "@/layouts/Preloader";
import "@css/style.css";


const secondary_font = Questrial({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-secondary',
  display: 'swap',
  adjustFontFallback: false,
})

// export const metadata = {
//   title: "DoMyEbook",
//   description: "Ebook creation and publishing platform",
// };

export const metadata = {
        title: "DoMyEbook",
        description: "DoMyEbook offers professional ebook services including ghostwriting, editing, formatting, publishing, book cover design, marketing, promo videos, and audiobook creation.",
        keywords: "DoMyEbook, ebook services, ghostwriting, editing, proofreading, formatting, publishing, book design, book cover, illustration, ebook marketing, promo video, audiobook, audio ebook",
        openGraph: {
          title: "DoMyEbook | Full-Service eBook Publishing Solutions",
          description: "From ghostwriting and editing to book cover design, promo videos, and audiobooks — DoMyEbook is your one-stop solution for all ebook needs.",
          type: "website",
          url: "https://domyebook.com",
          images: ["https://domyebook.com/public/img/logo.png"],
        },
      };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${secondary_font.variable}`}>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
