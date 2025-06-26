'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageBanner } from '@/components/Banner';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
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
            {/* Render blog cards */}
            {blogs.map((blog) => (
              <div key={blog.BlogID} className="col-xl-4 col-md-6">
                <Link
                  href={`/publication/${blog.BlogID}`} // ✅ Changed to use dynamic route
                  className="mil-blog-card mil-mb-30 mil-up"
                >
                  <div className="mil-card-cover">
                    {blog.Image1 ? (
                      <Image
                        width={600}
                        height={600} // Square image
                        src={blog.Image1}
                        alt="cover"
                        className="mil-scale-img"
                        style={{ objectFit: 'cover' }} // ✅ Updated syntax for Next 13+
                      />
                    ) : (
                      <div style={{
                        width: 600,
                        height: 600,
                        backgroundColor: '#eee',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        No Image
                      </div>
                    )}
                  </div>

                  <div className="mil-descr">
                    {blog.date && (
                      <p className="mil-text-xs mil-mb-5">
                        {new Date(blog.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    )}
                    <p className="mil-text-xs mil-accent mil-mb-15">
                      {blog.SubHeading1 || 'No Subheading'}
                    </p>
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
