import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 40, suffix: '+', label: 'Happy Clients' },
  { value: 15, suffix: '+', label: 'Technologies' },
  { value: 3, suffix: '+', label: 'Years Experience' },
];

function StatItem({ value, suffix, label, isVisible }: { value: number; suffix: string; label: string; isVisible: boolean }) {
  const count = useCountUp(value, isVisible);
  return (
    <div className="text-center py-10">
      <div className="text-4xl md:text-6xl font-black text-foreground tabular-nums">
        {count}{suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground font-medium uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-background">
              <StatItem {...s} isVisible={isVisible} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
