// app/blogs/page.js
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageBanner } from '@/components/Banner';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog data from the API
    fetch('/api/blogs')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setBlogs(data))
      .catch(err => console.error('Error fetching blogs:', err));
  }, []);

  return (
    <>
      {/* Page banner for the blog section */}
      <PageBanner
        pageName="Blog"
        title="Your Source of Financial Information"
      />
      <div className="mil-blog-list mil-p-0-160">
        <div className="container">
          <div className="row">
            {/* Map through the blogs array to render each blog card */}
            {blogs.map((blog) => (
              <div key={blog.BlogID} className="col-xl-4 col-md-6">
                <Link
                  href={`/publication?id=${blog.BlogID}`}
                  className="mil-blog-card mil-mb-30 mil-up"
                >
                  <div className="mil-card-cover">
                    {/* Display blog image or a placeholder if no image is available */}
                    {blog.Image1 ? (
                      <Image
                        width={600}
                        height={600} // Changed height to 600 to make the image section square
                        src={blog.Image1}
                        alt="cover"
                        className="mil-scale-img"
                        objectFit="cover" // Added objectFit to ensure image covers the square area
                      />
                    ) : (
                      <div style={{ width: 600, height: 600, backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="mil-descr">
                    {/* Display the blog date */}
                    {blog.date && (
                      <p className="mil-text-xs mil-mb-5">
                        {new Date(blog.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    )}
                    {/* Display blog subheading */}
                    <p className="mil-text-xs mil-accent mil-mb-15">
                      {blog.SubHeading1 || 'No Subheading'}
                    </p>
                    {/* Display blog main title */}
                    <h4>{blog.MainTitle}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
