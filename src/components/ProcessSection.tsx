import { motion } from 'framer-motion';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  { icon: Search, num: '01', title: 'Discovery', desc: 'We learn your business, goals, and constraints before writing a single line of code.' },
  { icon: Palette, num: '02', title: 'Design', desc: 'We prototype and validate the user experience so there are no surprises at launch.' },
  { icon: Code, num: '03', title: 'Development', desc: 'We build in focused sprints with weekly demos so you see progress, not promises.' },
  { icon: Rocket, num: '04', title: 'Launch & Support', desc: 'We deploy, monitor, and iterate. Your software improves long after day one.' },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-32 border-t border-border">
      <div className="container max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4"
        >
          From Idea to Launch in 4 Steps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-lg mb-14 max-w-xl"
        >
          A methodical process that removes uncertainty.
        </motion.p>

        <div className="space-y-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const }}
              className="border border-border bg-background p-8 md:p-10 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="text-3xl font-black text-muted-foreground/30 shrink-0">{s.num}</div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <s.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
