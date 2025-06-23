import { PageBanner } from "@/components/Banner";
import { CallToAction2 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import ServicesPage from "@/components/service_main";

export const metadata = {
  title: "Our Services | DoMyEbook",
  description: "Explore DoMyEbook's full range of professional services including ghostwriting, editing, formatting, publishing, book design, marketing, and audiobook creation.",
  keywords: "ebook services, ghostwriting, editing, proofreading, ebook formatting, publishing, illustration, book cover design, ebook marketing, promo video, audiobook, audio ebook",
  openGraph: {
    title: "DoMyEbook Services",
    description: "Discover premium ebook services from DoMyEbook — including writing, editing, publishing, design, and marketing solutions.",
    type: "website",
    url: "https://domyebook.com/services",
    images: ["https://domyebook.com/images/services/ebook-services-banner.png"], // Replace if you have a better banner
  },
};


const page = () => {
  return (
    <PlaxLayout bg={false}>

      <ServicesPage></ServicesPage>
    </PlaxLayout>
  );
};
export default page;