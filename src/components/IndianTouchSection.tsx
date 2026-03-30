import { motion } from 'framer-motion';
import { Store, Globe, Zap, ArrowRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function IndianTouchSection() {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="relative overflow-hidden border border-border bg-gradient-to-br from-primary/5 via-background to-primary/5 p-10 md:p-16"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-3"
            >
              From Local Shops to Digital Brands
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="text-muted-foreground text-lg mb-10 max-w-xl"
            >
              Helping Indian businesses grow globally — one product at a time.
            </motion.p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                { icon: Store, title: 'Built for India', desc: 'We understand local businesses, their challenges, and what they need to grow.' },
                { icon: Globe, title: 'Global Standards', desc: 'World-class design and technology — at a price that makes sense for Indian businesses.' },
                { icon: Zap, title: 'Fast & Reliable', desc: 'From street-side startups to scaling brands, we ship products that just work.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Let's build something together <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
