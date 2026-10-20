import React from 'react';
import { motion } from 'motion/react';
import { GOLD, GOLD_TEXT } from '../utils/gold';
import { Heart } from 'lucide-react';

const BROWN = '#4a2c1d';

const events = [
  { time: '10:00 AM', title: 'Guest Arrival', desc: 'Welcome and seating' },
  { time: '10:25 AM', title: 'Poruwa', desc: 'Traditional ceremony' },
  { time: '12:00 PM', title: 'Lunch', desc: 'Wedding feast' },
  { time: '04:00 PM', title: 'Grand Exit', desc: 'Send off the newlyweds' },
];

export const Timeline = () => {
  return (
    <section className="py-12 md:py-32 px-6 bg-brand-blush relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10" style={{ color: BROWN }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16 relative"
        >
          <span className="block font-['Cormorant_Garamond',_serif] uppercase tracking-[0.4em] text-xs sm:text-sm font-semibold mb-4">
            Agenda
          </span>
          <h2 className="relative z-10 font-['Pinyon_Script',_cursive] text-6xl md:text-7xl leading-none pb-2" style={GOLD_TEXT}>
            The Day
          </h2>
          <p className="relative z-10 mt-5 font-['Cormorant_Garamond',_serif] italic text-xl md:text-2xl leading-relaxed">
            A day to celebrate,<br />from the first hello to the last dance.
          </p>
        </motion.div>

        <div className="relative max-w-lg mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-px bg-[#8f6420]/40"></div>
          
          <div className="space-y-9 md:space-y-14">
            {events.map((event, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative grid grid-cols-[minmax(0,1fr)_12px_minmax(0,1fr)] items-center gap-x-4 md:gap-x-6"
              >
                {/* Time */}
                <div className="flex min-w-0 items-center justify-end">
                  <span className="shrink-0 font-['Cormorant_Garamond',_serif] text-2xl md:text-3xl leading-none font-medium">
                    {event.time}
                  </span>
                </div>
                
                {/* Heart Icon */}
                <Heart 
                  className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0 self-center text-[#8f6420] fill-current" 
                  strokeWidth={0} 
                />
                
                {/* Content */}
                <span className="leading-snug pt-1">
                  <span className="block font-sans text-sm tracking-[0.2em] uppercase font-semibold">
                    {event.title}
                  </span>
                  <span className="block mt-1.5 font-sans opacity-75 text-[12px] md:text-[13px] leading-relaxed">
                    {event.desc}
                  </span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
