"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AudioPortfolioSection.module.css";

const samples = [
  { title: "Before I Cheat", src: "/audio/beforeIcheat.mp3" },
  { title: "Beyond Resume", src: "/audio/beyondresume.mp3" },
  { title: "Exiled", src: "/audio/Exiled.mp3" },
  { title: "Good Spirits", src: "/audio/goodspirits.mp3" },
  { title: "Kadashus", src: "/audio/kadashus.mp3" },
  { title: "Last Liar", src: "/audio/lastliar.mp3" },
  { title: "Librarian", src: "/audio/librarian.mp3" },
  { title: "Marshalls", src: "/audio/marshalls.mp3" },
  { title: "PAX", src: "/audio/PAX.mp3" },
  { title: "Story of a Thief", src: "/audio/storyofathief.mp3" },
  { title: "The Burried", src: "/audio/theburried.mp3" },
  { title: "The House You Build Within", src: "/audio/The_house_you_build_within.mp3" },
];

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
};

const AudioPortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(-1);
  const [progress, setProgress] = useState({});
  const [durations, setDurations] = useState({});
  const audioRefs = useRef([]);

  useEffect(() => {
    return () => {
      audioRefs.current.forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    };
  }, []);

  const handlePlayPause = async (index) => {
    const selectedAudio = audioRefs.current[index];
    if (!selectedAudio) return;

    if (loadingIndex === index) return;

    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== index) {
        audio.pause();
      }
    });

    if (activeIndex === index && isPlaying) {
      selectedAudio.pause();
      setIsPlaying(false);
      setLoadingIndex(-1);
      return;
    }

    setActiveIndex(index);
    setLoadingIndex(index);

    try {
      const playPromise = selectedAudio.play();
      if (playPromise && typeof playPromise.then === "function") {
        await playPromise;
      }
      setIsPlaying(true);
    } catch (error) {
      setIsPlaying(false);
    } finally {
      setLoadingIndex((current) => (current === index ? -1 : current));
    }
  };

  const handleTimeUpdate = (index) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    const current = audio.currentTime;
    const duration = audio.duration || 0;
    const percentage = duration ? (current / duration) * 100 : 0;

    setProgress((prev) => ({ ...prev, [index]: percentage }));
  };

  const handleLoadedMetadata = (index) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    setDurations((prev) => ({ ...prev, [index]: audio.duration || 0 }));
  };

  const handleSeek = (index, value) => {
    const audio = audioRefs.current[index];
    if (!audio || !Number.isFinite(audio.duration)) return;

    const nextTime = (Number(value) / 100) * audio.duration;
    audio.currentTime = nextTime;

    setProgress((prev) => ({ ...prev, [index]: Number(value) }));
  };

  const handleEnded = (index) => {
    setProgress((prev) => ({ ...prev, [index]: 0 }));
    if (activeIndex === index) {
      setIsPlaying(false);
    }
    setLoadingIndex((current) => (current === index ? -1 : current));
  };

  return (
    <section className={`mil-audio-portfolio ${styles.milAudioPortfolio} mil-p-80-80`}>
      <div className="container">
        <div className="mil-text-center mil-mb-40">
          <h2 className="mil-up mil-mb-20">Audio Portfolio</h2>
          <p className="mil-text-m mil-soft mil-up">
            Explore a selection of audiobook voice samples produced with clear narration and studio-quality finish.
          </p>
        </div>

        <div className={styles.audioGrid}>
          {samples.map((sample, index) => {
            const isCurrent = activeIndex === index;
            const currentAudio = audioRefs.current[index];
            const currentTime = currentAudio ? currentAudio.currentTime : 0;

            return (
              <article className={`${styles.audioCard} ${isCurrent ? styles.active : ""}`} key={sample.src}>
                <div className={styles.audioCardHead}>
                  <h3>{sample.title}</h3>
                  <button
                    type="button"
                    className={`${styles.audioBtn} ${loadingIndex === index ? styles.loading : ""}`}
                    onClick={() => handlePlayPause(index)}
                    disabled={loadingIndex === index}
                    aria-label={isCurrent && isPlaying ? `Pause ${sample.title}` : `Play ${sample.title}`}
                  >
                    {loadingIndex === index ? "Loading..." : isCurrent && isPlaying ? "Pause" : "Play"}
                  </button>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress[index] || 0}
                  onChange={(e) => handleSeek(index, e.target.value)}
                  className={styles.audioProgress}
                  aria-label={`Seek in ${sample.title}`}
                />

                <div className={styles.audioTime}>
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(durations[index] || 0)}</span>
                </div>

                <audio
                  ref={(el) => {
                    audioRefs.current[index] = el;
                  }}
                  className={styles.audioMedia}
                  src={sample.src}
                  preload="auto"
                  playsInline
                  aria-hidden="true"
                  tabIndex="-1"
                  onLoadedMetadata={() => handleLoadedMetadata(index)}
                  onTimeUpdate={() => handleTimeUpdate(index)}
                  onEnded={() => handleEnded(index)}
                  onPlay={() => {
                    setActiveIndex(index);
                    setIsPlaying(true);
                  }}
                  onPause={() => {
                    if (activeIndex === index) setIsPlaying(false);
                  }}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AudioPortfolioSection;
