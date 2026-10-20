import React from 'react';
import { motion } from 'motion/react';

interface LocationProps {
  event?: string | null;
}

export const Location: React.FC<LocationProps> = ({ event = 'both' }) => {
  const venues = [
    {
      id: 'ceremony',
      name: "Raffles",
      city: "Nugegoda",
      liveLocationUrl: "https://share.google/Njhd8xVJRSZuXxl4t",
      imageUrl: "/Screenshot 2026-10-18 035242.png",
      label: "Location"
    }
  ];

  return (
    <>
      {venues.map((venue) => (
        <section key={venue.id} className="py-12 md:pt-20 md:pb-28 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto text-center"
          >
            <h2 className="font-['Cormorant_Garamond',_serif] text-5xl md:text-7xl text-brand-ink leading-none mb-6">
              {venue.label}
            </h2>
            <p className="font-['Pinyon_Script',_cursive] text-[38px] md:text-[50px] text-brand-ink mt-6 leading-none">
              {venue.name}
            </p>
            <p className="font-['Cormorant_Garamond',_serif] text-brand-ink/70 text-base md:text-lg mt-4 uppercase tracking-[0.15em]">
              {venue.city}
            </p>
            
            
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="relative mx-auto mt-10 sm:mt-14 w-[92%] max-w-[440px]"
            >
              {/* Offset outline */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-t-[50%_32%] rounded-b-2xl border border-[#b58466]/45 pointer-events-none" />

              {/* Framed photo */}
              <div className="relative rounded-t-[50%_32%] rounded-b-xl bg-[#fffdf9] p-1.5 shadow-[0_25px_50px_-12px_rgba(110,70,54,0.45)]">
                <div className="relative overflow-hidden rounded-t-[50%_32%] rounded-b-lg aspect-[3/2]">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={venue.imageUrl}
                    alt={`${venue.name}, ${venue.city}`}
                    className="absolute inset-0 w-full h-full object-cover object-[center_60%] select-none pointer-events-none"
                    draggable="false"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#e4c1ae]/40 rounded-t-[50%_32%] rounded-b-lg pointer-events-none" />
                </div>
              </div>

              {/* Ornament */}
              <div className="flex items-center justify-center gap-3 mt-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#b58466]/60" />
                <div className="w-1.5 h-1.5 rotate-45 bg-[#ba8281]" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#b58466]/60" />
              </div>
            </motion.div>
            
            <a 
              href={venue.liveLocationUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block mt-8 rounded-full border border-[#b58466]/35 px-14 py-4 text-brand-ink/80 hover:text-brand-ink hover:bg-[#b58466]/10 transition-colors"
            >
              <span className="block font-sans text-xs tracking-[0.18em] uppercase">Get Directions</span>
            </a>
          </motion.div>
        </section>
      ))}
    </>
  );
};
