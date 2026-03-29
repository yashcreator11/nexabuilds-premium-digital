import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <motion.div
        className="container text-center max-w-4xl relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-foreground"
        >
          Smart Software Solutions
          <br />
          <span className="text-primary">for Growing Businesses</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          We build websites, automation tools, and custom software that help
          businesses grow faster and work smarter.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center h-12 px-8 text-base font-semibold bg-primary text-primary-foreground hover:brightness-110 transition-all hover:shadow-[0_0_30px_hsl(156_100%_45%/0.3)]"
          >
            Get a Free Quote
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center h-12 px-8 text-base font-semibold border border-border text-foreground hover:bg-muted transition-all"
          >
            View Our Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
