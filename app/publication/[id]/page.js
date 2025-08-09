// app/publication/[id]/page.js
'use client';

import { useEffect, useState } from 'react';
import PlaxLayout from '@/layouts/PlaxLayout';
import { useParams } from 'next/navigation';

const PublicationPage = () => {
  const { id } = useParams(); // ✅ Use route param, not query param

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blog:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <PlaxLayout>
      <div className="mil-banner2 mil-banner-inner mil-dissolve">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <h2 className="mil-mb-60">{blog.MainTitle}</h2>
                <ul className="mil-breadcrumbs mil-pub-info mil-center">
                  <li>{blog.date}</li>
                  <li>{blog.Author}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mil-blog-list mil-p-0-160">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              {blog.Image1 && (
                <div className="mil-pub-cover mil-up">
                  <img
                    src={blog.Image1}
                    alt="cover"
                    width={1000}
                    height={600}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
              )}
            </div>

            <div className="col-xl-9 mil-p-80-80">
              <h2 className="mil-mb-60 mil-up">{blog.SubHeading1}</h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">{blog.Paragraph1}</p>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">{blog.Paragraph2}</p>

              {blog.Quote && (
                <blockquote className="mil-text-xl mil-mb-30 mil-up">
                  &rdquo;{blog.Quote}&rdquo;
                </blockquote>
              )}
              {blog.Author && <p className="mil-text-m mil-up">- {blog.Author}</p>}

              {blog.Image2 && (
                <img
                  src={blog.Image2}
                  alt="Image2"
                  width={1000}
                  height={600}
                  className="mil-mb-30 mil-up"
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              )}

              <h4 className="mil-mb-30 mil-up">{blog.SubHeading2}</h4>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">{blog.Paragraph3}</p>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">{blog.Paragraph4}</p>

              {blog.Image3 && (
                <img
                  src={blog.Image3}
                  alt="Image3"
                  width={1000}
                  height={600}
                  className="mil-mb-30 mil-up"
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              )}

              <h4 className="mil-mb-30 mil-up">{blog.SubHeading3}</h4>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">{blog.Paragraph5}</p>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">{blog.Paragraph6}</p>

              <h4 className="mil-mb-30 mil-up">{blog.SubHeading4}</h4>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">{blog.Paragraph7}</p>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">{blog.Paragraph8}</p>
            </div>
          </div>
        </div>
      </div>
    </PlaxLayout>
  );
};

export default PublicationPage;
