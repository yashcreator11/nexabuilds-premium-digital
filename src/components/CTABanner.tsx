import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

export default function CTABanner() {
  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="container text-center max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="text-3xl md:text-5xl font-black tracking-tight text-primary-foreground mb-4"
        >
          Ready to Turn Your Idea Into Reality?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-primary-foreground/70 text-lg mb-10"
        >
          Let's build something amazing together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center h-12 px-8 text-base font-semibold bg-primary-foreground text-primary hover:opacity-90 transition-all"
          >
            Start a Project
          </a>
          <a
            href="#contact"
            className="inline-flex items-center h-12 px-8 text-base font-semibold border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all"
          >
            Book a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
