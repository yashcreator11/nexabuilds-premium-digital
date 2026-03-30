import { motion } from 'framer-motion';

const logos = ['Acme Corp', 'Vertex AI', 'Solaris', 'Meridian', 'Onyx Group', 'Pulse Labs'];

const ease = [0.16, 1, 0.3, 1] as const;

export default function TrustedBy() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease }}
          className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10"
        >
          Trusted by 50+ businesses
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease }}
              className="flex items-center justify-center h-12 text-muted-foreground font-semibold text-sm tracking-wide"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
