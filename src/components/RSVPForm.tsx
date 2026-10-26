import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Loader2, Heart } from 'lucide-react';
import { toast } from 'sonner';
import { sendRsvp } from '../utils/rsvp';

interface RSVPFormProps {
  inviteeName?: string;
  eventName?: string;
  eventParam?: string;
}

export const RSVPForm: React.FC<RSVPFormProps> = ({ inviteeName = '', eventName = 'the celebration', eventParam = 'both' }) => {
  const searchParams = new URLSearchParams(window.location.search);
  const guestsParam = searchParams.get('guests') || '1';

  const [formData, setFormData] = useState<{ fullName: string; attendance: 'yes' | 'no'; guests: string }>({
    fullName: inviteeName,
    attendance: 'yes',
    guests: guestsParam,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (inviteeName) {
      setFormData(prev => ({ ...prev, fullName: inviteeName }));
    }
  }, [inviteeName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await sendRsvp({ ...formData, invitedAs: inviteeName });

      setStatus('success');
      toast.success('Your RSVP has been warmly received!');
    } catch (error) {
      console.error('Error sending RSVP: ', error);
      setStatus('error');
      toast.error('Could not submit RSVP. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 relative py-0 sm:py-20 flex flex-col items-center">
      

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg bg-[#fffdf9]/95 backdrop-blur-xl p-10 sm:p-14 rounded-t-[10rem] border-x-[1.5px] border-t-[1.5px] border-[#b58466]/30 shadow-2xl text-center mt-4 sm:mt-20"
      >
        {/* Lace decoration inside */}
        <div className="absolute inset-0 border border-[#b58466]/15 rounded-t-[10rem] m-2 pointer-events-none" />

        <div className="inline-flex items-center justify-center gap-3 mb-6 relative z-10">
          <div className="w-8 h-[1px] bg-[#b58466]/40" />
          <span className="text-brand-ink uppercase tracking-[0.4em] text-[10px] sm:text-[11px] font-bold">
            Kindly Respond
          </span>
          <div className="w-8 h-[1px] bg-[#b58466]/40" />
        </div>

        <h2 className="text-5xl sm:text-6xl font-['Cormorant_Garamond',_serif] text-brand-ink leading-none mb-4 relative z-10">
          RSVP
        </h2>

        <p className="text-brand-ink/70 font-sans text-sm sm:text-base leading-relaxed mb-10 relative z-10">
          {inviteeName
            ? `Dear ${inviteeName}, please let us know if you will join us.`
            : `Please let us know if you will join our celebration.`
          }
        </p>

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-8"
              >
                <div className="w-16 h-16 bg-[#b58466]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-brand-ink" />
                </div>
                <h3 className="text-3xl font-['Cormorant_Garamond',_serif] text-brand-ink mb-3">Thank You</h3>
                <p className="text-brand-ink/70 font-sans text-sm mb-8">
                  Your response has been warmly received.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 rounded-full border border-[#b58466]/30 text-brand-ink font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-[#b58466]/10 transition-all duration-300"
                >
                  Update Response
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div>
                  <input
                    required
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full bg-transparent border-b border-[#b58466]/30 pb-3 outline-none transition-all duration-300 font-['Cormorant_Garamond',_serif] text-2xl text-center text-brand-ink placeholder:text-brand-ink/40 focus:border-[#b58466]"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.3em] text-brand-ink/70 mb-4 font-semibold">Will you attend?</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'yes' })}
                      className={`flex-1 py-3.5 rounded-full border transition-all duration-300 font-sans text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2 ${
                        formData.attendance === 'yes'
                          ? 'bg-[#b58466] border-[#b58466] text-[#FDFBF7] shadow-md'
                          : 'bg-transparent border-[#b58466]/30 text-brand-ink/70 hover:border-[#b58466]/60 hover:bg-[#b58466]/5'
                      }`}
                    >
                      {formData.attendance === 'yes' && <Heart className="w-3.5 h-3.5 fill-current" />}
                      Joyfully Accept
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'no' })}
                      className={`flex-1 py-3.5 rounded-full border transition-all duration-300 font-sans text-xs tracking-[0.15em] uppercase ${
                        formData.attendance === 'no'
                          ? 'bg-[#b58466] border-[#b58466] text-[#FDFBF7] shadow-md'
                          : 'bg-transparent border-[#b58466]/30 text-brand-ink/70 hover:border-[#b58466]/60 hover:bg-[#b58466]/5'
                      }`}
                    >
                      Regretfully Decline
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {formData.attendance === 'yes' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <label className="block text-[10px] uppercase tracking-[0.3em] text-brand-ink/70 mb-3 mt-4 font-semibold">Number of Guests</label>
                      <input
                        type="number"
                        min="1"
                        className="w-24 mx-auto bg-transparent border-b border-[#b58466]/30 pb-2 outline-none transition-all duration-300 font-['Cormorant_Garamond',_serif] text-3xl text-center text-brand-ink focus:border-[#b58466]"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-6">
                  <button
                    disabled={status === 'loading'}
                    type="submit"
                    className="w-full bg-[#b58466] text-[#FDFBF7] py-5 rounded-full font-sans tracking-[0.3em] font-bold text-[11px] uppercase hover:bg-[#ba8281] transition-all duration-300 shadow-xl active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      'Send RSVP'
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
