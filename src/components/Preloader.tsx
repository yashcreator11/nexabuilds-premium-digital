import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COMPANY = 'FuturaX';
const SUFFIX = ' Solutions';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'intro' | 'reveal' | 'done'>('intro');
  const [typedText, setTypedText] = useState('');
  const fullText = COMPANY + SUFFIX;

  useEffect(() => {
    // Typing effect
    let i = 0;
    const typeInterval = setInterval(() => {
      i++;
      setTypedText(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(typeInterval);
    }, 80);

    const t1 = setTimeout(() => setPhase('reveal'), 2800);
    const t2 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 3500);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete, fullText]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Rotating outer ring */}
          <motion.div
            className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-primary/20"
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 360 }}
            transition={{ duration: 3, ease: 'linear', rotate: { repeat: Infinity, duration: 8, ease: 'linear' } }}
          />

          {/* Inner rotating ring (opposite direction) */}
          <motion.div
            className="absolute w-52 h-52 md:w-72 md:h-72 rounded-full border border-dashed border-primary/15"
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{ scale: 1, opacity: 0.6, rotate: -360 }}
            transition={{ duration: 2.5, ease: 'easeOut', rotate: { repeat: Infinity, duration: 12, ease: 'linear' } }}
          />

          {/* Glow pulse */}
          <motion.div
            className="absolute w-40 h-40 md:w-56 md:h-56 rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 70%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 2, 1.6], opacity: [0, 0.8, 0.3] }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
          />

          {/* Center content */}
          <motion.div
            className="relative flex flex-col items-center gap-8 z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              phase === 'intro'
                ? { scale: 1, opacity: 1 }
                : { scale: 1.05, opacity: 0, y: -30 }
            }
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {/* Company name with typing */}
            <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
              {typedText.split('').map((char, i) => (
                <span
                  key={i}
                  className={
                    i < COMPANY.length
                      ? i === COMPANY.length - 1
                        ? 'text-primary'
                        : 'text-foreground'
                      : 'font-light text-muted-foreground'
                  }
                >
                  {char}
                </span>
              ))}
              <motion.span
                className="inline-block w-[3px] h-8 md:h-10 bg-primary ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
              />
            </div>

            {/* Progress bar */}
            <div className="w-56 md:w-72 h-[3px] bg-border/50 overflow-hidden rounded-full">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--primary) / 0.5), hsl(var(--primary)), hsl(var(--primary) / 0.5))',
                }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.5, ease: 'easeInOut' }}
              />
            </div>

            <motion.span
              className="text-xs text-muted-foreground/60 uppercase tracking-[0.3em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Building the future
            </motion.span>
          </motion.div>

          {/* Corner accents */}
          {['-top-1 -left-1 border-t border-l', '-top-1 -right-1 border-t border-r', '-bottom-1 -left-1 border-b border-l', '-bottom-1 -right-1 border-b border-r'].map((pos, i) => (
            <motion.div
              key={i}
              className={`absolute ${pos} w-8 h-8 border-primary/20`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
