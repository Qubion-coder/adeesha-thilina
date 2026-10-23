import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GOLD, GOLD_TEXT } from '../utils/gold';

// White background image for the families section (falls back to soft white)
const FAMILIES_BG = '/families-bg.jpg';
const BROWN = '#4a2c1d';

export const FamiliesMessage: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col">
      {/* Top Message Section */}
      <div
        className="w-full py-12 sm:py-28 flex flex-col items-center justify-center px-6 relative z-10 overflow-hidden bg-[#faf6f1] bg-cover bg-center"
        style={{ backgroundImage: `url("${FAMILIES_BG}")` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto text-center flex flex-col items-center"
          style={{ color: BROWN }}
        >
          <p className="font-['Cormorant_Garamond',_serif] uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold">
            Together with their families
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col items-center leading-none">
            <h2 className="font-['Pinyon_Script',_cursive] text-6xl sm:text-7xl md:text-8xl pb-2" style={GOLD_TEXT}>Adeesha</h2>
            <span className="font-['Pinyon_Script',_cursive] text-6xl sm:text-7xl -my-1" style={GOLD_TEXT}>&amp;</span>
            <h2 className="font-['Pinyon_Script',_cursive] text-6xl sm:text-7xl md:text-8xl pb-2" style={GOLD_TEXT}>Thilina</h2>
          </div>

          <p className="mt-6 sm:mt-8 font-['Cormorant_Garamond',_serif] italic text-xl sm:text-2xl leading-relaxed max-w-sm">
            invite you to celebrate<br />the beginning of their forever.
          </p>

          {/* Wavy divider */}
          <svg viewBox="0 0 240 16" className="w-48 sm:w-60 h-4 mt-7 sm:mt-10" aria-hidden="true">
            <path
              d="M2 8 Q 17 0 32 8 T 62 8 T 92 8 T 122 8 T 152 8 T 182 8 T 212 8 T 238 8"
              fill="none"
              stroke={GOLD}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <div className="mt-7 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4 font-['Cormorant_Garamond',_serif]">
            <p className="text-2xl sm:text-3xl font-medium tracking-wide">10 December, 2026</p>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
            <p className="text-2xl sm:text-3xl font-medium tracking-wide">10.00 AM</p>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
            <div className="flex flex-col items-center gap-1">
              <p className="text-xl sm:text-2xl uppercase tracking-[0.2em] font-semibold">Grand Ballroom</p>
              <p className="text-lg sm:text-xl uppercase tracking-[0.2em]">Raffles, Nugegoda</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface CountdownProps {
  targetDate: Date;
}

export const WeddingCountdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)));
      const hours = Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24));
      const minutes = Math.max(0, Math.floor((difference / 1000 / 60) % 60));
      const seconds = Math.max(0, Math.floor((difference / 1000) % 60));

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section id="countdown" className="relative py-10 md:py-32 px-1 bg-[#f3ebe2]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative aspect-[1627/1513] w-[92%] max-w-[560px] mx-auto text-center"
      >
        {/* White ornamental frame */}
        <svg
          viewBox="0 0 400 372"
          className="absolute inset-0 h-full w-full pointer-events-none select-none"
          fill="none"
          stroke={GOLD}
          aria-hidden="true"
        >
          <path d="M20 70 Q20 30 60 30 H155 M245 30 H340 Q380 30 380 70 V302 Q380 342 340 342 H245 M155 342 H60 Q20 342 20 302 V70" strokeWidth="1.5" strokeOpacity="0.9" />
          <rect x="34" y="44" width="332" height="284" rx="28" strokeWidth="0.75" strokeOpacity="0.55" />
          {/* Top flourish */}
          <path d="M155 30 C170 30 175 18 188 18 C196 18 200 24 200 30 C200 24 204 18 212 18 C225 18 230 30 245 30" strokeWidth="1.5" strokeOpacity="0.9" />
          <path d="M200 26 C196 20 188 22 190 28 C192 33 200 38 200 38 C200 38 208 33 210 28 C212 22 204 20 200 26 Z" fill={GOLD} fillOpacity="0.9" stroke="none" />
          {/* Bottom flourish */}
          <path d="M155 342 C170 342 178 352 190 352 M245 342 C230 342 222 352 210 352" strokeWidth="1.5" strokeOpacity="0.9" />
          <rect x="195" y="347" width="10" height="10" transform="rotate(45 200 352)" fill={GOLD} fillOpacity="0.9" stroke="none" />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 md:gap-4 px-[14%]" style={{ color: BROWN }}>
          <h2 className="font-['Pinyon_Script',_cursive] text-4xl md:text-6xl leading-tight mt-4 pb-1" style={GOLD_TEXT}>
            Countdown
          </h2>
          <div className="grid grid-cols-4 w-full items-center">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="flex min-w-0 flex-col items-center">
                <span className="font-['Cormorant_Garamond',_serif] text-3xl md:text-5xl leading-none tabular-nums font-medium">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="mt-2 md:mt-3 text-[9px] md:text-xs uppercase tracking-[0.15em] font-semibold font-['Cormorant_Garamond',_serif]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
