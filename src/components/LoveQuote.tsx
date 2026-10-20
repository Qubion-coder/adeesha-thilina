import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const LoveQuote = () => {
  return (
    <section className="relative py-12 sm:py-28 px-6 bg-brand-blush overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-xl mx-auto text-center text-brand-ink"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#b58466]/60" />
          <Heart className="w-4 h-4 text-[#ba8281] fill-[#ba8281]/30" strokeWidth={1.5} />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#b58466]/60" />
        </div>

        <p className="font-['Cormorant_Garamond',_serif] italic text-2xl sm:text-3xl leading-snug">
          Every love story is beautiful,
        </p>
        <p className="font-['Cormorant_Garamond',_serif] italic text-2xl sm:text-3xl leading-snug mt-1">
          but ours is just beginning.
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-['Pinyon_Script',_cursive] text-4xl sm:text-5xl leading-tight mt-8"
        >
          Save the date for our forever
        </motion.p>

        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#b58466]/60" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#ba8281]" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#b58466]/60" />
        </div>
      </motion.div>
    </section>
  );
};
