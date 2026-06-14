"use client";

import { useEffect, useState } from "react";

const videoBooks = [
  {
    id: 1,
    title: "The House You Build Within",
    subtitle: "A Guide to Building Your Inner Self",
    author: "Liam Green",
    image: "/img/bookcovers/1_converted.avif",
    youtubeUrl: "https://youtu.be/rqlW57_y7qs",
  },
  {
    id: 2,
    title: "Marshall's Keep",
    subtitle: "Love is a Fortress.",
    author: "Ryan Marshall",
    image: "/img/bookcovers/2_converted.avif",
    youtubeUrl: "https://www.youtu.be/NVjCwgGM3MY",
  },
  {
    id: 3,
    title: "The Story of a Thief",
    subtitle:
      "Tony was born into a family of thieves. His life seems predestined, until his girlfriend Eva disappears suddenly.",
    author: "Hristina BloomField",
    image: "/img/bookcovers/storyofathief.png",
    youtubeUrl: "https://www.youtu.be/JpaN6ZXxv6M",
  },
  {
    id: 4,
    title: "Beyond The Resume:",
    subtitle: "A 40-Year Framework for the Modern Professional.",
    author: "Joshua Sciascia",
    image: "/img/bookcovers/4_converted.avif",
    youtubeUrl: "https://youtu.be/oDq5KDsTbY8",
  },
  {
    id: 5,
    title: "The Last Good Liar",
    subtitle: "Followed by Millions. Hunted by One.",
    author: "Clara Monet",
    image: "/img/bookcovers/thelastgoodliar_converted.avif",
    youtubeUrl: "https://youtu.be/TSLXxeWuMlw",
  },
  {
    id: 6,
    title: "Before I Cheat",
    subtitle:
      "Nolan must haunt Harriet, but realizes she is not the person needing redemption, leading to a forbidden romance.",
    author: "Meek White",
    image: "/img/bookcovers/cheat.png",
    youtubeUrl: "https://youtu.be/PgprsepKhR0",
  },
  {
    id: 7,
    title: "PAX: Journey Home",
    subtitle:
      "Both boy and fox find themselves on journeys toward home, healing – and each other. A breathtaking novel about chosen families and the healing power of love.",
    author: "Jon Klassen",
    image: "/img/bookcovers/PAX.png",
    youtubeUrl: "https://youtu.be/XNcFc5lmHuA",
  },
  {
    id: 8,
    title: "The Librarian of Lost Things",
    subtitle: "Every object holds a memory. Some are deadly.",
    author: "Jennifer Delmont",
    image: "/img/bookcovers/6_converted.avif",
    youtubeUrl: "https://youtu.be/LIQMaH_zDu4",
  },
  {
    id: 9,
    title: "The Last Station to Port Vance",
    subtitle: "Not all journeys have a destination. Some only have an end.",
    author: "Ryan Marshall",
    image: "/img/bookcovers/portvance.png",
    youtubeUrl: "https://youtu.be/2w0_zKsHW_c",
  },
  {
    id: 10,
    title: "BILLI",
    subtitle:
      "Discover the extraordinary journey of Alma Billi Jampolli, a woman whose life was forged in the fires of the Great Depression and World War II. ",
    author: "Robert K. Bateman",
    image: "/img/bookcovers/Billi_cover.jpg.jpeg",
    youtubeUrl: "https://youtu.be/adfKr2No3wQ",
  },
  {
    id: 11,
    title: "Exiled",
    subtitle: "In a world of chaos and betrayal, one boy must fight to survive.",
    author: "Joaquin Lopez",
    image: "/img/bookcovers/exiled.png",
    youtubeUrl: "https://youtu.be/P9_3sMbVBoI",
  },
  {
    id: 12,
    title: "The Buried",
    subtitle: "The world above us is gone. But we, the chosen few, have survived.",
    author: "Melissa Grey",
    image: "/img/bookcovers/buried.png",
    youtubeUrl: "https://youtu.be/qq_69yHaFI4",
  },
];

const getYouTubeEmbedUrl = (url) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{6,})/);
  const videoId = match ? match[1] : url;
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
};

const VideoPromoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
        setCurrentVideo(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const openModal = (videoBook) => {
    setCurrentVideo(videoBook);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  return (
    <>
      <section className="videopromo-section">
        <div className="container">
          <div className="videopromo-section-header">
            <h2 className="mil-mb-15">VIDEO PROMO TRAILERS</h2>
            <p className="mil-text-m mil-soft videopromo-section-description">
              Experience captivating book trailers that bring stories to life through stunning visuals and compelling narratives.
            </p>
          </div>

          <div className="videopromo-books-grid">
            {videoBooks.map((videoBook) => (
              <button
                key={videoBook.id}
                type="button"
                className="videopromo-book-card"
                onClick={() => openModal(videoBook)}
                aria-label={`Open trailer for ${videoBook.title}`}
              >
                <div className="videopromo-book-image-wrapper">
                  <img
                    src={videoBook.image}
                    alt={videoBook.title}
                    className="videopromo-book-image"
                  />
                  <div className="videopromo-play-overlay">
                    <div className="videopromo-play-button" aria-hidden="true">
                      <svg width="68" height="48" viewBox="0 0 68 48" fill="none">
                        <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#7eb947"/>
                        <path d="M 45,24 27,14 27,34" fill="#ffffff"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="videopromo-book-meta">
                  <h3>{videoBook.title}</h3>
                  <p>{videoBook.subtitle}</p>
                  <span>by {videoBook.author}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && currentVideo && (
        <div className="videopromo-modal-overlay" onClick={closeModal} role="presentation">
          <div className="videopromo-modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="videopromo-modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <div className="videopromo-modal-header">
              <h3 className="videopromo-modal-title">{currentVideo.title}</h3>
              <p className="videopromo-modal-subtitle">{currentVideo.subtitle}</p>
              <p className="videopromo-modal-author">by {currentVideo.author}</p>
            </div>

            <div className="videopromo-modal-video">
              <div className="videopromo-video-wrapper">
                <iframe
                  src={getYouTubeEmbedUrl(currentVideo.youtubeUrl)}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="videopromo-iframe"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .videopromo-section {
          position: relative;
          overflow: hidden;
          padding: 90px 0;
          background: linear-gradient(180deg, #f2fafa 0%, #ffffff 100%);
        }

        .videopromo-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 20%, rgba(126, 185, 71, 0.12) 0, transparent 28%), radial-gradient(circle at 80% 0%, rgba(126, 185, 71, 0.08) 0, transparent 24%);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
        }

        .videopromo-section-header {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 40px;
        }

        .videopromo-section-header h2 {
          margin: 0;
          color: #0f252f;
          letter-spacing: -0.04em;
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 700;
        }

        .videopromo-section-description {
          max-width: 700px;
          margin: 0 auto;
          color: #5f6f69;
          line-height: 1.7;
        }

        .videopromo-books-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
        }

        .videopromo-book-card {
          appearance: none;
          border: 0;
          background: transparent;
          padding: 0;
          text-align: left;
          cursor: pointer;
          color: inherit;
        }

        .videopromo-book-card:focus-visible {
          outline: 3px solid rgba(126, 185, 71, 0.5);
          outline-offset: 6px;
          border-radius: 16px;
        }

        .videopromo-book-image-wrapper {
          position: relative;
          aspect-ratio: 2 / 3;
          border-radius: 16px;
          overflow: hidden;
          background: #dfe8e5;
          box-shadow: 0 16px 35px rgba(15, 37, 47, 0.14);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .videopromo-book-card:hover .videopromo-book-image-wrapper {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(15, 37, 47, 0.22);
        }

        .videopromo-book-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .videopromo-play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, rgba(15, 37, 47, 0.1), rgba(15, 37, 47, 0.35));
          transition: background 0.28s ease;
        }

        .videopromo-book-card:hover .videopromo-play-overlay {
          background: linear-gradient(180deg, rgba(15, 37, 47, 0.16), rgba(15, 37, 47, 0.5));
        }

        .videopromo-play-button {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.28s ease, filter 0.28s ease;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.22));
        }

        .videopromo-book-card:hover .videopromo-play-button {
          transform: scale(1.08);
        }

        .videopromo-book-meta {
          padding: 14px 4px 0;
        }

        .videopromo-book-meta h3 {
          margin: 0 0 8px;
          color: #0f252f;
          font-size: 18px;
          line-height: 1.35;
          font-weight: 700;
        }

        .videopromo-book-meta p {
          margin: 0 0 8px;
          color: #5f6f69;
          font-size: 14px;
          line-height: 1.55;
        }

        .videopromo-book-meta span {
          color: #7eb947;
          font-size: 13px;
          font-weight: 600;
        }

        .videopromo-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          background: rgba(15, 37, 47, 0.92);
          backdrop-filter: blur(10px);
        }

        .videopromo-modal-content {
          position: relative;
          width: min(980px, 100%);
          max-height: min(92vh, 980px);
          overflow: auto;
          border-radius: 22px;
          background: linear-gradient(180deg, #ffffff 0%, #f2fafa 100%);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
          padding: 28px;
        }

        .videopromo-modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 44px;
          height: 44px;
          border: 0;
          border-radius: 999px;
          background: rgba(15, 37, 47, 0.08);
          color: #0f252f;
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .videopromo-modal-close:hover {
          transform: scale(1.05);
          background: rgba(126, 185, 71, 0.14);
        }

        .videopromo-modal-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 20px;
          padding: 12px 16px 0;
        }

        .videopromo-modal-title {
          margin: 0 0 10px;
          color: #0f252f;
          font-size: clamp(24px, 3vw, 40px);
          line-height: 1.15;
          font-weight: 700;
        }

        .videopromo-modal-subtitle {
          margin: 0 0 10px;
          color: #5f6f69;
          font-size: 15px;
          line-height: 1.7;
        }

        .videopromo-modal-author {
          margin: 0;
          color: #7eb947;
          font-weight: 600;
        }

        .videopromo-modal-video {
          background: #0f252f;
          border-radius: 18px;
          padding: 12px;
        }

        .videopromo-video-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          overflow: hidden;
          border-radius: 14px;
          background: #09141a;
        }

        .videopromo-iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media (max-width: 1200px) {
          .videopromo-books-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .videopromo-section {
            padding: 72px 0;
          }

          .videopromo-books-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }
        }

        @media (max-width: 640px) {
          .videopromo-section {
            padding: 56px 0;
          }

          .videopromo-section-header {
            margin-bottom: 28px;
          }

          .videopromo-books-grid {
            grid-template-columns: 1fr;
          }

          .videopromo-modal-content {
            padding: 18px;
            border-radius: 18px;
          }

          .videopromo-modal-video {
            padding: 8px;
          }

          .videopromo-modal-close {
            top: 12px;
            right: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default VideoPromoSection;
