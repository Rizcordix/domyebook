import { PageBanner } from "@/components/Banner";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog | DoMyEbook",
  description: "Stay updated with the latest ebook publishing trends, writing tips, marketing strategies, and expert insights from the DoMyEbook team.",
  keywords: "ebook blog, writing tips, publishing advice, ebook marketing, self-publishing tips, ghostwriting, book cover design, audiobook tips, DoMyEbook blog",
  openGraph: {
    title: 'DoMyEbook Blog',
    description: 'Explore expert advice, guides, and industry updates on ebook creation, publishing, and promotion — brought to you by DoMyEbook.',
    type: 'website',
    url: 'https://domyebook.com/blogs',
    images: ['https://domyebook.com/public/img/logo.png'],
  },
};

const page = () => {
  return (
    <PlaxLayout>

      <PageBanner
        pageName="Blog"
        title="Your Source of Financial Information"
      />

      {/* banner end */}
      {/* blog list */}
      <div className="mil-blog-list mil-p-0-160">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <Link
                href="publication"
                className="mil-blog-card mil-mb-30 mil-up"
              >
                <div className="mil-card-cover">
                  <Image
                    width={600}
                    height={400}
                    src="/img/inner-pages/blog/1.png"
                    alt="cover"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-descr">
                  <p className="mil-text-xs mil-accent mil-mb-15">
                    Financial Advice
                  </p>
                  <h4>How to Send Money Safely</h4>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-md-6">
              <Link
                href="publication"
                className="mil-blog-card mil-mb-30 mil-up"
              >
                <div className="mil-card-cover">
                  <Image
                    width={600}
                    height={400}
                    src="/img/inner-pages/blog/2.png"
                    alt="cover"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-descr">
                  <p className="mil-text-xs mil-accent mil-mb-15">
                    Personal Finance
                  </p>
                  <h4>The Benefits of Using Virtual Cards</h4>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-md-6">
              <Link
                href="publication"
                className="mil-blog-card mil-mb-30 mil-up"
              >
                <div className="mil-card-cover">
                  <Image
                    width={600}
                    height={400}
                    src="/img/inner-pages/blog/3.png"
                    alt="cover"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-descr">
                  <p className="mil-text-xs mil-accent mil-mb-15">
                    Business Payments
                  </p>
                  <h4>How to Optimize Business Payments</h4>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-md-6">
              <Link
                href="publication"
                className="mil-blog-card mil-mb-30 mil-up"
              >
                <div className="mil-card-cover">
                  <Image
                    width={600}
                    height={400}
                    src="/img/inner-pages/blog/4.png"
                    alt="cover"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-descr">
                  <p className="mil-text-xs mil-accent mil-mb-15">
                    Financial Inclusion
                  </p>
                  <h4>The Importance of Financial Inclusion in the world</h4>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-md-6">
              <Link
                href="publication"
                className="mil-blog-card mil-mb-30 mil-up"
              >
                <div className="mil-card-cover">
                  <Image
                    width={600}
                    height={400}
                    src="/img/inner-pages/blog/5.png"
                    alt="cover"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-descr">
                  <p className="mil-text-xs mil-accent mil-mb-15">
                    Product Updates
                  </p>
                  <h4>New Features in Plax Enterprise: What Can You Expect?</h4>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-md-6">
              <Link
                href="publication"
                className="mil-blog-card mil-mb-30 mil-up"
              >
                <div className="mil-card-cover">
                  <Image
                    width={600}
                    height={400}
                    src="/img/inner-pages/blog/6.png"
                    alt="cover"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-descr">
                  <p className="mil-text-xs mil-accent mil-mb-15">
                    Savings Tips
                  </p>
                  <h4>Tips to Save on International Transactions</h4>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-md-6">
              <Link
                href="publication"
                className="mil-blog-card mil-mb-30 mil-up"
              >
                <div className="mil-card-cover">
                  <Image
                    width={600}
                    height={400}
                    src="/img/inner-pages/blog/7.png"
                    alt="cover"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-descr">
                  <p className="mil-text-xs mil-accent mil-mb-15">
                    Financial Advice
                  </p>
                  <h4>How to Send Money Safely</h4>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-md-6">
              <Link
                href="publication"
                className="mil-blog-card mil-mb-30 mil-up"
              >
                <div className="mil-card-cover">
                  <Image
                    width={600}
                    height={400}
                    src="/img/inner-pages/blog/8.png"
                    alt="cover"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-descr">
                  <p className="mil-text-xs mil-accent mil-mb-15">
                    Personal Finance
                  </p>
                  <h4>The Benefits of Using Virtual Cards</h4>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-md-6">
              <Link
                href="publication"
                className="mil-blog-card mil-mb-30 mil-up"
              >
                <div className="mil-card-cover">
                  <Image
                    width={600}
                    height={400}
                    src="/img/inner-pages/blog/9.png"
                    alt="cover"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-descr">
                  <p className="mil-text-xs mil-accent mil-mb-15">
                    Business Payments
                  </p>
                  <h4>How to Optimize Business Payments</h4>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-md-6">
              <Link
                href="publication"
                className="mil-blog-card mil-mb-30 mil-up"
              >
                <div className="mil-card-cover">
                  <Image
                    width={600}
                    height={400}
                    src="/img/inner-pages/blog/10.png"
                    alt="cover"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-descr">
                  <p className="mil-text-xs mil-accent mil-mb-15">
                    Financial Inclusion
                  </p>
                  <h4>The Importance of Financial Inclusion in the world</h4>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-md-6">
              <Link
                href="publication"
                className="mil-blog-card mil-mb-30 mil-up"
              >
                <div className="mil-card-cover">
                  <Image
                    width={600}
                    height={400}
                    src="/img/inner-pages/blog/11.png"
                    alt="cover"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-descr">
                  <p className="mil-text-xs mil-accent mil-mb-15">
                    Product Updates
                  </p>
                  <h4>New Features in Plax Enterprise: What Can You Expect?</h4>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-md-6">
              <Link
                href="publication"
                className="mil-blog-card mil-mb-30 mil-up"
              >
                <div className="mil-card-cover">
                  <Image
                    width={600}
                    height={400}
                    src="/img/inner-pages/blog/12.png"
                    alt="cover"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-descr">
                  <p className="mil-text-xs mil-accent mil-mb-15">
                    Savings Tips
                  </p>
                  <h4>Tips to Save on International Transactions</h4>
                </div>
              </Link>
            </div>
          </div>
          <div className="mil-text-center mil-mt-30 mil-up">
            <a href="#" className="mil-btn mil-m mil-add-arrow">
              Loads more publications
            </a>
          </div>
        </div>
      </div>
      {/* blog list end */}
    </PlaxLayout>
  );
};
export default page;
