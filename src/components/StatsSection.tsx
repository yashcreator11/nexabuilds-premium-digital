import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { value: 100, suffix: '%', label: 'On-Time Milestone Rate', desc: 'Shipped on schedule with staging approval' },
  { value: 24, suffix: '/7', label: 'Enterprise Uptime Standard', desc: 'Engineered for continuous multi-shift operations' },
  { value: 100, suffix: '%', label: 'Code & IP Ownership', desc: 'Full GitHub repository & infrastructure handover' },
  { value: 0, suffix: '%', label: 'Upfront Risk', desc: 'Zero deposits — pay only after demo sign-off' },
];

function StatItem({ value, suffix, label, desc, isVisible }: { value: number; suffix: string; label: string; desc: string; isVisible: boolean }) {
  const count = useCountUp(value, isVisible);
  return (
    <div className="p-8 rounded-3xl bg-card border border-border/80 text-center flex flex-col justify-between hover:border-[#F04424]/40 transition-colors">
      <div>
        <div className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-[#F04424] tabular-nums tracking-tight">
          {count}{suffix}
        </div>
        <div className="mt-3 text-sm font-bold text-foreground">
          {label}
        </div>
      </div>
      <div className="mt-2 text-xs text-muted-foreground">
        {desc}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-36 border-t border-border/60 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F04424] mb-3">
            Proof in Numbers
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            Engineering results that drive growth.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} isVisible={isVisible} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
