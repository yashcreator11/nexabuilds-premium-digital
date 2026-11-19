import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'intro' | 'done'>('intro');

  useEffect(() => {
    const t = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 1400);

    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#120D0B] overflow-hidden"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        >
          {/* Subtle Warm Amber Glow */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(240,68,36,0.22)_0%,transparent_70%)] blur-2xl pointer-events-none" />

          {/* Halftone backdrop */}
          <div className="absolute inset-0 halftone-pattern opacity-30 pointer-events-none" />

          {/* Center Brand Reveal */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F04424] flex items-center justify-center text-white font-serif text-xl font-bold shadow-[0_0_30px_rgba(240,68,36,0.6)]">
                AS
              </div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Agile<span className="text-[#F04424] italic">Squad</span>
              </span>
            </motion.div>

            {/* Elegant Slim Loading Bar */}
            <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#F04424]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.2 }}
              className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground"
            >
              Initializing agile engineering squad...
            </motion.span>
          </div>

          {/* Skip Button */}
          <button
            onClick={() => {
              setPhase('done');
              onComplete();
            }}
            className="absolute bottom-8 text-xs font-semibold text-muted-foreground/60 hover:text-white transition-colors uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
