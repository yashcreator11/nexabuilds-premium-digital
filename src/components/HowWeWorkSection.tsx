import { motion } from 'framer-motion';
import { Lightbulb, ClipboardList, Palette, Code, ShieldCheck, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  { icon: Lightbulb, title: 'Discovery', desc: 'Aligning on business goals & MVP scope' },
  { icon: ClipboardList, title: 'Roadmap', desc: '1–2 week sprint breakdown & milestones' },
  { icon: Palette, title: 'Figma UX', desc: 'Clickable interactive prototype' },
  { icon: Code, title: 'Sprint Build', desc: 'Clean, type-safe full-stack code' },
  { icon: ShieldCheck, title: 'QA & Security', desc: 'Automated tests & vulnerability audit' },
  { icon: Rocket, title: 'Staging Demo', desc: 'Live client demo on staging' },
  { icon: TrendingUp, title: 'Launch & Iterate', desc: 'Production release & milestone payout' },
];

export default function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="py-24 md:py-36 border-t border-border/60 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F04424] mb-3">
            Execution Blueprint
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
            A clear, transparent roadmap from day one.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            No guessing games or disappearing acts. Every phase is structured around measurable progress and client review.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative pt-6 pb-4">
          {/* Connecting line */}
          <div className="absolute top-[66px] left-[4%] right-[4%] h-[2px] rounded-full bg-gradient-to-r from-[#F04424]/20 via-[#F04424] to-[#F04424]/20 shadow-[0_0_10px_rgba(240,68,36,0.3)]" />

          <div className="grid grid-cols-7 gap-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase tracking-widest mb-3">
                  Step 0{i + 1}
                </div>

                {/* Icon circle */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-card border border-border/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#F04424] group-hover:shadow-[0_0_20px_rgba(240,68,36,0.3)] transition-all duration-300">
                  <step.icon className="w-6 h-6 text-[#F04424]" strokeWidth={1.75} />
                </div>

                <h3 className="text-sm font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[130px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet: vertical timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-[27px] top-4 bottom-4 w-[2px] rounded-full bg-gradient-to-b from-[#F04424]/30 via-[#F04424] to-[#F04424]/30" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="relative flex items-start gap-5 group"
              >
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-card border border-border/80 flex items-center justify-center shrink-0 group-hover:border-[#F04424] transition-colors">
                  <step.icon className="w-6 h-6 text-[#F04424]" strokeWidth={1.75} />
                </div>

                <div className="pt-1.5">
                  <div className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase tracking-widest mb-1">
                    Step 0{i + 1}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
