import { motion } from 'framer-motion';
import { MessageSquare, Wrench, Plus, ShieldCheck } from 'lucide-react';

const points = [
  { icon: MessageSquare, title: 'Iterative Feedback', text: 'We refine features based on real end-user usage and data telemetry.' },
  { icon: Wrench, title: 'Rapid Incident Response', text: '30-day post-launch warranty with instant patch releases for any bugs.' },
  { icon: Plus, title: 'Continuous Scaling', text: 'Add high-impact features sprint-by-sprint as your business grows.' },
];

export default function ContinuousEnhancements() {
  return (
    <section className="py-20 md:py-32 border-t border-border/60 relative">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-[#F04424] mb-3">
          Post-Launch Partnership
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Your software evolves as your business scales.
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-14 max-w-xl mx-auto">
          We don&apos;t abandon you after Day 1 deployment. We ensure long-term stability and continuous iteration.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-8 rounded-3xl border border-border/80 bg-card hover:border-[#F04424]/40 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F04424]/10 border border-[#F04424]/20 flex items-center justify-center mx-auto mb-5 text-[#F04424] group-hover:scale-110 transition-transform">
                <p.icon className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h3 className="font-bold text-foreground text-base mb-2">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
