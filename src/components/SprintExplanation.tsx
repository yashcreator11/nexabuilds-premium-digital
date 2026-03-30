import { motion } from 'framer-motion';
import { Hammer, Eye, Sparkles, RefreshCw } from 'lucide-react';

const cycle = [
  { icon: Hammer, label: 'Build' },
  { icon: Eye, label: 'Show' },
  { icon: Sparkles, label: 'Improve' },
  { icon: RefreshCw, label: 'Repeat' },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function SprintExplanation() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="bg-muted/30 border border-border p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                className="text-2xl md:text-3xl font-black tracking-tight text-foreground mb-4"
              >
                We Build in Small Steps
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15, ease }}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                We don't build everything at once.<br />
                We work in small steps called <span className="text-foreground font-semibold">sprints</span>.
              </motion.p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  <>Each sprint lasts <span className="text-foreground font-medium">1–2 weeks</span></>,
                  <>After each sprint, <span className="text-foreground font-medium">you see progress</span></>,
                  <>You give feedback, <span className="text-foreground font-medium">we improve it</span></>,
                ].map((text, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {text}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Cycle visual */}
            <div className="flex justify-center">
              <div className="relative w-56 h-56">
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-border" />

                {cycle.map((item, i) => {
                  const positions = [
                    'top-0 left-1/2 -translate-x-1/2',
                    'top-1/2 right-0 -translate-y-1/2',
                    'bottom-0 left-1/2 -translate-x-1/2',
                    'top-1/2 left-0 -translate-y-1/2',
                  ];
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease }}
                      className={`absolute ${positions[i]} flex flex-col items-center gap-1.5`}
                    >
                      <div className="w-12 h-12 rounded-full bg-background border border-primary/30 flex items-center justify-center hover:scale-110 hover:border-primary transition-all duration-300">
                        <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs font-bold text-foreground">{item.label}</span>
                    </motion.div>
                  );
                })}

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Sprint</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
