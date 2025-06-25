import PlaxLayout from '@/layouts/PlaxLayout';
import Aboutpage from '@/components/AboutUS';

export const metadata = {
  title: "About Us | DoMyEbook",
  description: "Learn more about DoMyEbook, our mission, vision, and values that drive our commitment to deliver expert ebook writing, editing, publishing, and marketing services.",
  keywords: "About DoMyEbook, ebook writing services, ghostwriting, ebook publishing, editing, proofreading, book cover design, promo video, audiobook",
  openGraph: {
    title: "About DoMyEbook | Trusted eBook Experts",
    description: "DoMyEbook provides comprehensive ebook services with a team of experienced writers and editors. Discover our story, values, and what sets us apart.",
    type: "website",
    url: "https://domyebook.com/about",
    images: ["https://domyebook.com/public/img/logo.png"], // Replace with your actual image if needed
  },
};

const page = () => {
  return (
    <PlaxLayout bg={false}>
      <Aboutpage />
    </PlaxLayout>
  );
};
export default page;