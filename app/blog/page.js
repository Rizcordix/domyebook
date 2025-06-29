import BlogPage from "@/components/blog_page";
import PlaxLayout from "@/layouts/PlaxLayout";

const bpage = () => {
  return (
    <>
    <head>
        <title>Blog | DoMyEbook</title>
        <meta name="description" content="Explore DoMyEbook's latest blogs and articles." />
        <meta name="keywords" content="blog, articles, DoMyEbook" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="DoMyEbook Blog" />
        <meta property="og:description" content="Discover insightful articles and updates from DoMyEbook." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://domyebook.com/blog" />
        <meta property="og:image" content="https://domyebook.com/public/img/logo.png" />
      </head>
    <PlaxLayout>
      
      <BlogPage></BlogPage>
    </PlaxLayout>
    </>
  );
};

export default bpage;