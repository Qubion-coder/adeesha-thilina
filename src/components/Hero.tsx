import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ChevronDown, Play } from 'lucide-react';
import { SaveTheDate } from './SaveTheDate';

interface HeroProps {
  event?: string | null;
  inviteeName?: string;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return reduced;
}

function useIsTouchDevice() {
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    setTouch(window.matchMedia('(hover: none) and (pointer: coarse)').matches);
  }, []);

  return touch;
}

export const Hero: React.FC<HeroProps> = ({ event = 'both', inviteeName }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();
  const useParallax = !reducedMotion && !isTouch;

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const [started, setStarted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const fallbackRef = useRef<number>();

  const showText = () => setVideoEnded(true);

  useEffect(() => {
    const video = videoRef.current;
    video?.addEventListener('error', showText);
    return () => {
      video?.removeEventListener('error', showText);
      window.clearTimeout(fallbackRef.current);
    };
  }, []);

  // First tap opens the invitation: play the intro once, then the Save the Date text stays.
  const open = () => {
    const video = videoRef.current;
    if (!video || started) return;
    setStarted(true);
    video.play().catch(showText);
    // Safety net if the video stalls or never fires "ended"
    fallbackRef.current = window.setTimeout(showText, 9000);
  };

  return (
    <div ref={containerRef} className="relative h-screen h-[100svh] flex items-center justify-center overflow-hidden bg-brand-blush/30 group">
      <motion.div
        className="absolute inset-0 z-0 origin-center cursor-pointer"
        style={useParallax ? { y: y1, scale } : undefined}
        onClick={open}
      >
        <video
          ref={videoRef}
          src="/intro.mp4#t=0.001"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 20%' }}
          muted
          playsInline
          preload="auto"
          onEnded={(e) => {
            // Hold on the last frame
            e.currentTarget.pause();
            window.clearTimeout(fallbackRef.current);
            setVideoEnded(true);
          }}
        />
      </motion.div>

      <AnimatePresence>
        {!started && (
          <motion.button
            type="button"
            onClick={open}
            className="absolute bottom-[17%] sm:bottom-14 left-1/2 -translate-x-1/2 z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="block bg-black/25 backdrop-blur-md px-8 py-4 rounded-full border border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-[11px] font-sans uppercase tracking-[0.4em] text-white font-medium pl-[calc(2rem+0.4em)]"
              animate={{ scale: [1, 1.05, 1], opacity: [0.85, 1, 0.85] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              Tap to open
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(started || videoEnded) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center"
          >
            <SaveTheDate />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {videoEnded && (
          <motion.div
            className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <div className="flex flex-col items-center gap-2 bg-black/20 hover:bg-black/40 transition-colors backdrop-blur-md px-6 py-4 rounded-full border border-[#e4c1ae]/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-white font-medium pl-1">
                Scroll Down
              </span>
              <motion.div 
                animate={{ y: [0, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ChevronDown className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
