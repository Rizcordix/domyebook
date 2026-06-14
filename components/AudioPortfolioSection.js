"use client";

import { useEffect, useRef, useState } from "react";

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
    <section className="mil-audio-portfolio mil-p-80-80">
      <div className="container">
        <div className="mil-text-center mil-mb-40">
          <h2 className="mil-up mil-mb-20">Audio Portfolio</h2>
          <p className="mil-text-m mil-soft mil-up">
            Explore a selection of audiobook voice samples produced with clear narration and studio-quality finish.
          </p>
        </div>

        <div className="audio-grid">
          {samples.map((sample, index) => {
            const isCurrent = activeIndex === index;
            const currentAudio = audioRefs.current[index];
            const currentTime = currentAudio ? currentAudio.currentTime : 0;

            return (
              <article className={`audio-card ${isCurrent ? "active" : ""}`} key={sample.src}>
                <div className="audio-card-head">
                  <h3>{sample.title}</h3>
                  <button
                    type="button"
                    className={`audio-btn ${loadingIndex === index ? "loading" : ""}`}
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
                  className="audio-progress"
                  aria-label={`Seek in ${sample.title}`}
                />

                <div className="audio-time">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(durations[index] || 0)}</span>
                </div>

                <audio
                  ref={(el) => {
                    audioRefs.current[index] = el;
                  }}
                  className="audio-media"
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

      <style jsx>{`
        .mil-audio-portfolio {
          background: linear-gradient(180deg, #f2fafa 0%, #ffffff 100%);
        }

        .audio-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .audio-card {
          z-index: 2;
          position: relative;
          isolation: isolate;
          background: #ffffff;
          border: 1px solid rgba(126, 185, 71, 0.2);
          border-radius: 16px;
          padding: 18px;
          box-shadow: 0 8px 24px rgba(10, 36, 34, 0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .audio-card:hover {
          box-shadow: 0 12px 26px rgba(10, 36, 34, 0.1);
          border-color: rgba(126, 185, 71, 0.45);
        }

        .audio-card.active {
          border-color: #7eb947;
          box-shadow: 0 12px 28px rgba(126, 185, 71, 0.24);
        }

        .audio-card-head {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
          margin-bottom: 14px;
        }

        .audio-card-head h3 {
          margin: 0;
          font-size: 18px;
          line-height: 1.3;
        }

        .audio-btn {
          position: relative;
          z-index: 3;
          pointer-events: auto;
          touch-action: manipulation;
          cursor: pointer;
          background: #7eb947;
          color: #fff;
          border: none;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          padding: 8px 16px;
          min-width: 72px;
          transition: background 0.2s ease;
        }

        .audio-btn:hover {
          background: #6aa23e;
        }

        .audio-btn:disabled {
          cursor: wait;
          opacity: 0.9;
          background: #94c565;
        }

        .audio-btn.loading {
          background: #5f8f35;
        }

        .audio-progress {
          width: 100%;
          accent-color: #7eb947;
          cursor: pointer;
        }

        .audio-media {
          position: absolute;
          width: 0;
          height: 0;
          opacity: 0;
          pointer-events: none;
          left: 0;
          top: 0;
        }

        .audio-time {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: #5f6f69;
          margin-top: 8px;
        }

        @media (max-width: 991px) {
          .audio-grid {
            grid-template-columns: 1fr;
          }

          .audio-card-head h3 {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default AudioPortfolioSection;
