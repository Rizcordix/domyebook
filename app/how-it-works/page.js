import PlaxLayout from '@/layouts/PlaxLayout';
import HowItWorksPage from '@/components/HowitWorks';

export const metadata = {
  title: "How It Works | DoMyEbook",
  description: "Discover the simple steps to create your ebook with DoMyEbook. Our streamlined process ensures a smooth journey from idea to final product.",
  keywords: "How It Works, ebook creation process, DoMyEbook, ebook writing services, ghostwriting, ebook publishing",
  openGraph: {
    title: "How It Works | DoMyEbook",
    description: "Discover the simple steps to create your ebook with DoMyEbook. Our streamlined process ensures a smooth journey from idea to final product.",
    type: "website",
    url: "https://domyebook.com/how-it-works",
    images: ["https://domyebook.com/public/img/logo.png"], // Replace with your actual image if needed
  },
};

const page = () => {
  return (
    <PlaxLayout bg={false}>
      <HowItWorksPage />
    </PlaxLayout>
  );
};
export default page;