import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight } from 'lucide-react';

const problems = [
  { problem: 'No online presence', solution: 'A conversion-focused website live in weeks' },
  { problem: 'Manual, error-prone workflows', solution: 'Automated systems that run while you sleep' },
  { problem: 'No CRM or client tracking', solution: 'A centralized hub for every relationship' },
  { problem: 'Poor data visibility', solution: 'Real-time dashboards with actionable metrics' },
  { problem: 'No automation in place', solution: 'Integrated pipelines from lead to invoice' },
  { problem: 'Slow, outdated legacy systems', solution: 'Modern architecture built for scale' },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProblemsSection() {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4"
        >
          Sound Familiar?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-muted-foreground text-lg mb-14 max-w-xl"
        >
          These are the exact problems our clients had before they called us.
        </motion.p>

        <div className="space-y-0 divide-y divide-border">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 md:py-8"
            >
              <div className="flex items-center gap-3 text-muted-foreground">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span className="text-base">{p.problem}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground font-medium">
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                <span className="text-base">{p.solution}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
