import { motion } from 'motion/react';

export const ThankYouSection = () => {
  return (
    <section className="relative pt-4 md:pt-10 pb-10 md:pb-16 px-4 overflow-hidden z-20 bg-brand-blush">
      {/* Outer elegant container - Full Pill Shape */}
      <div className="relative w-full max-w-[600px] mx-auto bg-[#b58466] rounded-[10rem] sm:rounded-[15rem] overflow-hidden shadow-[0_30px_60px_rgba(181,132,102,0.25)] pb-6 border-[8px] border-[#b58466]/50 bg-clip-padding">
        
        {/* Subtle background ambient flowers (replacing cherubs) */}
        <img 
          src="/ChatGPT Image Sep 3, 2026, 03_34_18 AM - Copy.png" 
          alt="" 
          className="absolute -top-20 -left-20 w-80 opacity-10 pointer-events-none mix-blend-overlay rotate-45" 
        />
        <img 
          src="/ChatGPT Image Sep 3, 2026, 03_34_18 AM - Copy.png" 
          alt="" 
          className="absolute top-40 -right-20 w-80 opacity-10 pointer-events-none mix-blend-overlay -rotate-45" 
        />

        <section className="relative pt-12 md:pt-20 pb-8 px-6 text-center z-10">
          <div className="max-w-md mx-auto flex flex-col items-center">
            
            {/* Top Floral Ornament */}
            <div className="w-24 sm:w-32 mb-6">
              <img 
                src="/ChatGPT Image Sep 3, 2026, 03_34_18 AM.png" 
                alt="Floral Ornament" 
                className="w-full h-auto opacity-90 drop-shadow-sm mix-blend-screen"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            
            {/* Script Text matching the image */}
            <h2 className="font-['Pinyon_Script',_cursive] text-5xl md:text-6xl text-[#FDFBF7] leading-[1.2] mt-2 mb-8 px-2 drop-shadow-md">
              We're so happy to <br />
              celebrate this day <br />
              with you.
            </h2>

            <p className="font-['Cormorant_Garamond',_serif] text-sm md:text-base text-[#FDFBF7]/90 leading-relaxed tracking-wider font-semibold">
              Having you with us means the world.<br/>We can't wait to welcome you.
            </p>
          </div>
        </section>

      </div>
    </section>
  );
};
