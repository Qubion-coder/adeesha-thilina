import { motion } from 'motion/react';
import { Music, VolumeX, Heart } from 'lucide-react';
import { Hero } from './Hero';
import { Location } from './Location';
import { Timeline } from './Timeline';
import { FamiliesMessage, WeddingCountdown } from './MessageAndCountdown';
import { RSVPForm } from './RSVPForm';
import { ThankYouSection } from './ThankYouSection';
import { GoodbyeVideo } from './GoodbyeVideo';
import { FloatingPetals } from './FloatingPetals';
import { LoveQuote } from './LoveQuote';
import { OurBeginning } from './OurBeginning';

import { InviteeBanner } from './InviteeBanner';
import { DeferredMount } from './DeferredMount';

interface InvitationContentProps {
  active: boolean;
  eventParam: string;
  fullInviteeName: string;
  eventLabel: string;
  weddingDate: Date;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}

export function InvitationContent({
  active,
  eventParam,
  fullInviteeName,
  eventLabel,
  weddingDate,
  isMusicPlaying,
  onToggleMusic,
}: InvitationContentProps) {
  if (!active) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="font-sans text-stone-800 bg-brand-blush selection:bg-brand-plum/20"
    >
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        onClick={onToggleMusic}
        data-music-toggle
        aria-label={isMusicPlaying ? 'Pause music' : 'Play music'}
        className="fixed top-6 right-6 z-50 w-12 sm:w-14 h-12 sm:h-14 bg-[#faf6f1]/85 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgba(176,137,104,0.15)] flex items-center justify-center border border-brand-lavender/50 text-brand-ink hover:scale-105 transition-all duration-300"
      >
        {isMusicPlaying ? (
          <Music className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </motion.button>

      <FloatingPetals />

      <Hero event={eventParam} inviteeName={fullInviteeName} />

      <LoveQuote />

      {fullInviteeName && (
        <DeferredMount active={active} delay={80}>
          <InviteeBanner inviteeName={fullInviteeName} eventLabel={eventLabel} />
        </DeferredMount>
      )}

      <DeferredMount active={active} delay={100} minHeight="40vh">
        <FamiliesMessage />
      </DeferredMount>

      <DeferredMount active={active} delay={140} minHeight="30vh">
        <OurBeginning />
      </DeferredMount>

      <DeferredMount active={active} delay={150} minHeight="40vh">
        <WeddingCountdown targetDate={weddingDate} />
      </DeferredMount>

      <DeferredMount active={active} delay={160} minHeight="40vh">
        <Timeline />
      </DeferredMount>

      <DeferredMount active={active} delay={240} minHeight="40vh">
        <div className="sm:py-32 bg-brand-blush relative overflow-hidden">
          <Location event={eventParam} />
        </div>
      </DeferredMount>


      <DeferredMount active={active} delay={420} minHeight="30vh">
        <div className="py-12 sm:py-32 bg-brand-blush relative overflow-hidden">
          <RSVPForm inviteeName={fullInviteeName} eventName={eventLabel} eventParam={eventParam} />
        </div>
      </DeferredMount>

      <DeferredMount active={active} delay={480} minHeight="30vh">
        <ThankYouSection />
      </DeferredMount>

      <DeferredMount active={active} delay={500} minHeight="40vh">
        <GoodbyeVideo />
      </DeferredMount>

      <DeferredMount active={active} delay={520}>
        <footer className="py-12 bg-brand-blush border-t border-brand-lavender/20 text-center relative overflow-hidden mt-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-lavender/10 blur-[80px] rounded-full pointer-events-none" />
          <Heart className="w-6 h-6 mx-auto mb-6 text-brand-ink fill-brand-lavender/20" />
          <p className="font-names text-4xl sm:text-5xl text-stone-800 mb-2">Adeesha & Thilina</p>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] font-sans text-stone-400 font-semibold block mb-4">
            December 10, 2026
          </span>
          
          <div className="w-12 h-[1px] bg-brand-lavender/30 mx-auto my-6" />

          <p className="text-[9px] sm:text-[10px] font-sans tracking-[0.2em] text-stone-400 uppercase">
            Want a beautiful wedding website like this? <br className="sm:hidden" />Create yours with{' '}
            <a 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#b58466] hover:text-brand-ink font-bold underline decoration-[#b58466]/40 hover:decoration-brand-plum/40 underline-offset-4 transition-colors" 
              href="https://wa.me/94707819074"
            >
              Invitemint
            </a>
          </p>
        </footer>
      </DeferredMount>
    </motion.div>
  );
}
