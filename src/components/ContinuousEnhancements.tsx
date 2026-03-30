import { motion } from 'framer-motion';
import { MessageSquare, Wrench, Plus } from 'lucide-react';

const points = [
  { icon: MessageSquare, text: 'We improve based on real user feedback' },
  { icon: Wrench, text: 'We fix issues quickly' },
  { icon: Plus, text: 'We add new features as your business grows' },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ContinuousEnhancements() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-4"
        >
          Your Project Doesn't Stop After Launch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-muted-foreground text-lg mb-12"
        >
          We stay with you, making your product better every day.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease }}
              className="p-6 border border-border bg-background hover:border-primary/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <p.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg font-semibold text-foreground italic"
        >
          "We grow your product as your business grows."
        </motion.p>
      </div>
    </section>
  );
}
