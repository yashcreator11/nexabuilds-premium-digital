import { motion } from 'framer-motion';
import { Lightbulb, ClipboardList, Palette, Code, ShieldCheck, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  { icon: Lightbulb, title: 'Idea', desc: 'We understand your business and goals' },
  { icon: ClipboardList, title: 'Planning', desc: 'We create a clear plan to move forward' },
  { icon: Palette, title: 'Design', desc: 'We design how your product will look and feel' },
  { icon: Code, title: 'Development', desc: 'We build your solution step by step' },
  { icon: ShieldCheck, title: 'Testing', desc: 'We make sure everything works smoothly' },
  { icon: Rocket, title: 'Launch', desc: 'We take your product live' },
  { icon: TrendingUp, title: 'Improvement', desc: 'We keep improving it over time' },
];

export default function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            A simple, step-by-step process that turns your idea into a real product.
          </motion.p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line - centered on icons (icon top offset ~40px + half of 14 = 56px → top-[56px]) */}
          <div className="absolute top-[56px] left-[calc(100%/14)] right-[calc(100%/14)] h-[3px] rounded-full bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 shadow-[0_0_12px_hsl(var(--primary)/0.3)]" />

          <div className="grid grid-cols-7 gap-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest mb-3">
                  Step {i + 1}
                </div>

                {/* Icon circle */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/25 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary/60 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)] transition-all duration-300">
                  <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>

                <h3 className="text-sm font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[140px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet: vertical timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10 shadow-[0_0_10px_hsl(var(--primary)/0.2)]" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative flex items-start gap-5 group"
              >
                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/25 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-primary/60 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)] transition-all duration-300">
                  <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>

                <div className="pt-2">
                  <div className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest mb-1">
                    Step {i + 1}
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
