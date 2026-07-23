"use client";

import { useEffect, useState } from "react";
import styles from "./VideoPromoSection.module.css";

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
      <section className={styles.videopromoSection}>
        <div className={`container ${styles.container}`}>
          <div className={styles.videopromoSectionHeader}>
            <h2 className="mil-mb-15">VIDEO PROMO TRAILERS</h2>
            <p className={`mil-text-m mil-soft ${styles.videopromoSectionDescription}`}>
              Experience captivating book trailers that bring stories to life through stunning visuals and compelling narratives.
            </p>
          </div>

          <div className={styles.videopromoBooksGrid}>
            {videoBooks.map((videoBook) => (
              <button
                key={videoBook.id}
                type="button"
                className={styles.videopromoBookCard}
                onClick={() => openModal(videoBook)}
                aria-label={`Open trailer for ${videoBook.title}`}
              >
                <div className={styles.videopromoBookImageWrapper}>
                  <img
                    src={videoBook.image}
                    alt={videoBook.title}
                    className={styles.videopromoBookImage}
                  />
                  <div className={styles.videopromoPlayOverlay}>
                    <div className={styles.videopromoPlayButton} aria-hidden="true">
                      <svg width="68" height="48" viewBox="0 0 68 48" fill="none">
                        <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#7eb947"/>
                        <path d="M 45,24 27,14 27,34" fill="#ffffff"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles.videopromoBookMeta}>
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
        <div className={styles.videopromoModalOverlay} onClick={closeModal} role="presentation">
          <div className={styles.videopromoModalContent} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.videopromoModalClose}
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <div className={styles.videopromoModalHeader}>
              <h3 className={styles.videopromoModalTitle}>{currentVideo.title}</h3>
              <p className={styles.videopromoModalSubtitle}>{currentVideo.subtitle}</p>
              <p className={styles.videopromoModalAuthor}>by {currentVideo.author}</p>
            </div>

            <div className={styles.videopromoModalVideo}>
              <div className={styles.videopromoVideoWrapper}>
                <iframe
                  src={getYouTubeEmbedUrl(currentVideo.youtubeUrl)}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.videopromoIframe}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPromoSection;
