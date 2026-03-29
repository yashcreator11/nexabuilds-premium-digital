import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/futurax_solutions_logo.svg';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'logo' | 'reveal' | 'done'>('logo');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('reveal'), 1800);
    const t2 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Glow ring */}
          <motion.div
            className="absolute w-40 h-40 rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(156 100% 45% / 0.3) 0%, transparent 70%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 2.5, 2], opacity: [0, 0.6, 0] }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />

          {/* Logo */}
          <motion.div
            className="relative flex flex-col items-center gap-6"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={
              phase === 'logo'
                ? { scale: 1, opacity: 1 }
                : { scale: 1.1, opacity: 0, y: -20 }
            }
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={logo}
              alt="FuturaX Solutions"
              className="h-20 md:h-28 w-auto object-contain brightness-0 dark:brightness-100 invert dark:invert-0"
            />

            {/* Loading bar */}
            <div className="w-48 h-[2px] bg-border overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
