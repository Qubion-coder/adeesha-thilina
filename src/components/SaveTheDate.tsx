import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const INK = '#1c1917';
const EASE = [0.22, 1, 0.36, 1] as const;

/** Script text revealed left-to-right, as if being handwritten. */
const Written: React.FC<{ delay: number; duration?: number; className?: string; children: React.ReactNode }> = ({
  delay,
  duration = 1.4,
  className,
  children,
}) => (
  <motion.span
    className={`inline-block ${className ?? ''}`}
    // Negative insets leave room for swashes and descenders
    initial={{ clipPath: 'inset(-25% 105% -25% -10%)', opacity: 0 }}
    animate={{ clipPath: 'inset(-25% -10% -25% -10%)', opacity: 1 }}
    transition={{ duration, delay, ease: EASE, opacity: { duration: 0.3, delay } }}
  >
    {children}
  </motion.span>
);

/** Letters drift up from a soft blur, one after another. */
const Letters: React.FC<{ text: string; delay: number; stagger?: number; className?: string }> = ({
  text,
  delay,
  stagger = 0.05,
  className,
}) => (
  <span className={`inline-block whitespace-pre ${className ?? ''}`} aria-label={text}>
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        aria-hidden="true"
        className="inline-block"
        initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, delay: delay + i * stagger, ease: EASE }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

const Pop: React.FC<{ delay: number; children: React.ReactNode }> = ({ delay, children }) => (
  <motion.span
    className="inline-flex"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: [0, 1.35, 1] }}
    transition={{ duration: 0.7, delay, ease: 'easeOut', opacity: { duration: 0.2, delay } }}
  >
    {children}
  </motion.span>
);

/** "Save the Date" layout shown over the hero video's final frame. */
export const SaveTheDate = () => {
  return (
    <div className="flex flex-col items-center w-[min(78vw,26rem)] -mt-6" style={{ color: INK }}>
      {/* Save the Date */}
      <div className="self-start pl-[6%] leading-none">
        <p className="font-['Pinyon_Script',_cursive] text-[clamp(2.75rem,7vh,4.25rem)] leading-[0.9]">
          <Written delay={0.2}>Save</Written>
        </p>
        <p className="font-['Cormorant_Garamond',_serif] italic text-[clamp(1.25rem,3vh,1.875rem)] pl-[3.5em] -mt-1">
          <Letters text="the" delay={1.1} stagger={0.08} />
        </p>
        <p className="font-['Pinyon_Script',_cursive] text-[clamp(2.75rem,7vh,4.25rem)] leading-[0.9] pl-[1.6em] flex items-center gap-2">
          <Written delay={1.4}>Date</Written>
          <Pop delay={2.6}>
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 mt-3" strokeWidth={1.5} />
          </Pop>
        </p>
      </div>

      {/* Couple photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.3, delay: 2.4, ease: EASE }}
        className="relative mt-[2.5vh] w-[min(56vw,29vh,15rem)]"
      >
        <motion.div
          className="absolute -inset-2 border border-[#1c1917]/40"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 2.9, ease: EASE }}
        />
        <div className="relative bg-[#e4c1ae] p-1 shadow-[0_15px_30px_-10px_rgba(28,25,23,0.35)]">
          <img
            src="/WhatsApp Image 2026-10-18 at 22.37.40.jpeg"
            alt="Adeesha and Thilina"
            className="block w-full aspect-[481/574] object-cover select-none"
            draggable="false"
          />
        </div>
      </motion.div>

      {/* Names & date */}
      <p className="mt-[3vh] font-['Pinyon_Script',_cursive] text-[clamp(2rem,4.8vh,2.75rem)] leading-none text-center">
        <Written delay={3.4} duration={1.8}>
          Adeesha <span className="font-['Cormorant_Garamond',_serif] italic text-[0.6em] align-middle">&amp;</span> Thilina
        </Written>
      </p>
      <span className="my-[1.4vh]">
        <Pop delay={5.0}>
          <Heart className="w-3.5 h-3.5 fill-current" />
        </Pop>
      </span>
      <p className="font-['Cinzel',_serif] text-sm sm:text-base tracking-[0.35em] pl-[0.35em]">
        <Letters text="10 . 12 . 2026" delay={5.3} stagger={0.06} />
      </p>
    </div>
  );
};
