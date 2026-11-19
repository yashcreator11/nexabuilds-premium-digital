import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Users, Sparkles } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#F7F2EB] via-background to-background dark:from-[#18110E] dark:via-background dark:to-background">
      {/* Background Halftone Dot Matrix (Redpanda style on sides) */}
      <div className="absolute top-0 left-0 w-80 h-96 halftone-pattern opacity-25 dark:opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]" />
      <div className="absolute top-0 right-0 w-80 h-96 halftone-pattern opacity-25 dark:opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_75%)]" />

      {/* Ambient Radial Warm Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(240,68,36,0.12)_0%,rgba(240,150,80,0.04)_50%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(240,68,36,0.18)_0%,rgba(140,40,15,0.08)_50%,transparent_80%)] pointer-events-none blur-3xl" />

      {/* Subtle particle canvas */}
      <ParticleBackground />

      <div className="container relative z-10 max-w-5xl mx-auto text-center flex-1 flex flex-col justify-center items-center px-4">
        <motion.div variants={container} initial="hidden" animate="show" className="w-full">
          {/* Eyebrow Pill */}
          <motion.div variants={fadeUp} className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#F04424]/10 border border-[#F04424]/25 text-[#F04424] text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-6 sm:mb-8 text-center max-w-full">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate sm:whitespace-normal">Dedicated 6-Role Squad • At min ₹450/hour • Pay-Per-Sprint</span>
          </motion.div>

          {/* Editorial Serif Main Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[5.2rem] font-bold tracking-tight text-foreground leading-[1.1] sm:leading-[1.08] max-w-4xl mx-auto"
          >
            Smart software built for <span className="italic font-normal text-[#F04424]">visionary</span> businesses.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans"
          >
            We engineer high-converting web apps, automated workflows, and custom digital platforms in 2-week agile sprints. You only pay milestone-by-milestone after approving each live demo.
          </motion.p>

          {/* Action Pills */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/919619036483?text=Hi%20AgileSquad,%20I%20want%20to%20discuss%20a%20project%20and%20get%20a%20free%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-13 px-8 text-sm font-bold rounded-full bg-[#F04424] text-white hover:bg-[#d6391b] transition-all duration-200 shadow-[0_6px_25px_rgba(240,68,36,0.4)] hover:shadow-[0_8px_30px_rgba(240,68,36,0.5)] hover:-translate-y-0.5"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center h-13 px-8 text-sm font-bold rounded-full bg-card border-2 border-border text-foreground hover:bg-muted shadow-sm transition-all duration-200"
            >
              View Our Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom 3 Feature Ticker Cards (Direct Redpanda Reference Style) */}
      <div className="container relative z-10 max-w-6xl mx-auto mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: 'Pay-Per-Sprint Milestone Model',
              desc: 'Zero risky upfront lump sums. You inspect and test the working demo every 2 weeks before paying for the milestone.',
              cta: 'How sprints work',
              href: '#how-we-work',
              icon: Zap,
            },
            {
              title: 'Dedicated 6-in-1 Project Squad',
              desc: 'Every essential role on your build: Figma UX, Frontend, Backend & APIs, DevOps Cloud, Cybersecurity & QA.',
              cta: 'Meet all 6 roles',
              href: '#about',
              icon: Users,
            },
            {
              title: '100% Code & IP Ownership',
              desc: 'You hold full intellectual property, clean GitHub repos, and infrastructure access from Day 1. No vendor lock-in.',
              cta: 'View deliverables',
              href: '#services',
              icon: ShieldCheck,
            },
          ].map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              className="group p-5 md:p-6 rounded-2xl bg-card border border-border shadow-md dark:shadow-none hover:border-[#F04424]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F04424]/10 border border-[#F04424]/20 flex items-center justify-center text-[#F04424]">
                    <card.icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">
                    Feature 0{i + 1}
                  </span>
                </div>
                <h3 className="font-sans font-bold text-base text-foreground mb-2 group-hover:text-[#F04424] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-border/50 flex items-center gap-1.5 text-xs font-semibold text-[#F04424]">
                <span>{card.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
