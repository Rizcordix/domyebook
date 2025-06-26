import PlaxLayout from '@/layouts/PlaxLayout';
import FeaturesPage from '@/components/Featurespage';

export const metadata = {
  title: "Features | DoMyEbook",
  description: "Explore the powerful features of DoMyEbook that make ebook creation a breeze.",
  keywords: "Features, ebook creation, DoMyEbook, writing services, ghostwriting, ebook publishing",
  openGraph: {
    title: "Features | DoMyEbook",
    description: "Explore the powerful features of DoMyEbook that make ebook creation a breeze.",
    type: "website",
    url: "https://domyebook.com/features",
    images: ["https://domyebook.com/public/img/logo.png"], // Replace with your actual image if needed
  },
};

const page = () => {
  return (
    <PlaxLayout bg={false}>
      <FeaturesPage />
    </PlaxLayout>
  );
};
export default page;