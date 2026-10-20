import { motion } from 'motion/react';
import { GOLD, GOLD_TEXT } from '../utils/gold';

const BROWN = '#4a2c1d';

export const OurBeginning = () => {
  return (
    <section className="relative py-12 sm:py-32 px-6 bg-brand-blush overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-xl mx-auto text-center flex flex-col items-center"
        style={{ color: BROWN }}
      >
        <h2 className="font-['Pinyon_Script',_cursive] text-6xl sm:text-7xl leading-none pb-2 px-2" style={GOLD_TEXT}>
          Our Beginning
        </h2>

        {/* Underline flourish */}
        <svg viewBox="0 0 260 24" className="w-56 sm:w-64 h-6 -mt-1" aria-hidden="true">
          <path
            d="M4 14 C 50 22, 110 22, 150 14 S 230 2, 256 8"
            fill="none"
            stroke={GOLD}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-7 sm:mt-12 font-['Cormorant_Garamond',_serif] italic text-2xl sm:text-3xl leading-relaxed"
        >
          “Two hearts, one journey,
          <br />
          one beautiful beginning.”
        </motion.p>
      </motion.div>
    </section>
  );
};
