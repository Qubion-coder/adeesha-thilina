import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const VIDEO_SRC = '/Couple_saying_goodbye_202608130003 (online-video-cutter.com).mp4';

export const GoodbyeVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play only while on screen
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 sm:py-28 px-6 bg-gradient-to-b from-brand-blush via-[#e4c1ae] to-brand-blush overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-4 mb-5">
          <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#b58466]/60" />
          <span className="text-brand-ink uppercase tracking-[0.4em] text-[10px] sm:text-[11px] font-semibold font-sans">
            Until Then
          </span>
          <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#b58466]/60" />
        </div>
        <h2 className="font-['Pinyon_Script',_cursive] text-5xl sm:text-6xl text-brand-ink leading-none">
          See you there!
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative mx-auto w-[78%] max-w-[340px]"
      >
        {/* Offset outline */}
        <div className="absolute -inset-3 sm:-inset-4 rounded-t-full rounded-b-3xl border border-[#b58466]/45 pointer-events-none" />

        {/* Framed video */}
        <div className="relative rounded-t-full rounded-b-2xl bg-[#e4c1ae] p-1.5 shadow-[0_25px_50px_-12px_rgba(110,70,54,0.45)]">
          <div className="relative overflow-hidden rounded-t-full rounded-b-xl aspect-[9/16] bg-[#ba8281]/30">
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-12 font-serif italic text-lg sm:text-xl text-brand-ink/80"
      >
        With love, Adeesha &amp; Thilina
      </motion.p>
    </section>
  );
};
