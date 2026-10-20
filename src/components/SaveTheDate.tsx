import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const INK = '#1c1917';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: 'easeOut' as const },
});

/** "Save the Date" layout shown over the hero video's final frame. */
export const SaveTheDate = () => {
  return (
    <div className="flex flex-col items-center w-[min(78vw,26rem)] -mt-6" style={{ color: INK }}>
      {/* Save the Date */}
      <div className="self-start pl-[6%] leading-none">
        <motion.p {...fadeUp(0.2)} className="font-['Pinyon_Script',_cursive] text-[clamp(2.75rem,7vh,4.25rem)] leading-[0.9]">
          Save
        </motion.p>
        <motion.p {...fadeUp(0.5)} className="font-['Cormorant_Garamond',_serif] italic text-[clamp(1.25rem,3vh,1.875rem)] pl-[3.5em] -mt-1">
          the
        </motion.p>
        <motion.p {...fadeUp(0.8)} className="font-['Pinyon_Script',_cursive] text-[clamp(2.75rem,7vh,4.25rem)] leading-[0.9] pl-[1.6em] flex items-center gap-2">
          Date
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 mt-3" strokeWidth={1.5} />
        </motion.p>
      </div>

      {/* Couple photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 1.1, ease: 'easeOut' }}
        className="relative mt-[2.5vh] w-[min(56vw,29vh,15rem)]"
      >
        <div className="absolute -inset-2 border border-[#1c1917]/40" />
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
      <motion.p {...fadeUp(1.7)} className="mt-[3vh] font-['Pinyon_Script',_cursive] text-[clamp(2rem,4.8vh,2.75rem)] leading-none text-center">
        Adeesha <span className="font-['Cormorant_Garamond',_serif] italic text-[0.6em] align-middle">&amp;</span> Thilina
      </motion.p>
      <motion.div {...fadeUp(2.0)}>
        <Heart className="w-3.5 h-3.5 my-[1.4vh] fill-current" />
      </motion.div>
      <motion.p {...fadeUp(2.2)} className="font-['Cinzel',_serif] text-sm sm:text-base tracking-[0.35em] pl-[0.35em]">
        10 . 12 . 2026
      </motion.p>
    </div>
  );
};
