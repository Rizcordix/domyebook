import PlaxLayout from "@/layouts/PlaxLayout";
import Contactpage from "@/components/ContactPage";

export const metadata = {
  title: "Contact Us | DoMyEbook",
  description: "Get in touch with DoMyEbook for professional ebook services including writing, editing, publishing, and marketing. We're here to help you every step of the way.",
  keywords: "contact DoMyEbook, ebook help, ebook services support, ghostwriting contact, publishing assistance, editing services, book cover inquiry",
  openGraph: {
    title: "Contact DoMyEbook | Get in Touch",
    description: "Have questions about ebook writing or publishing? Contact the DoMyEbook team for expert support and guidance.",
    type: "website",
    url: "https://domyebook.com/contact",
    images: ["https://domyebook.com/img/contact/contact-banner.png"],
  },
};

const page = () => {
  return (
    <PlaxLayout bg={false}>
      <Contactpage />
    </PlaxLayout>
  );
};

export default page;