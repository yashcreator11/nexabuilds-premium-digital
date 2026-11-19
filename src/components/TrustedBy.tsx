import { motion } from 'framer-motion';

const logos = [
  'Pan-India Enterprise Network',
  'LocalNest Marketplace',
  'Multi-Branch Operations',
  'Dual-Shift Attendance',
  'Hyperlocal Tech Platforms',
  'Growing Indian Startups',
];

export default function TrustedBy() {
  return (
    <section className="py-14 md:py-20 border-t border-border/60 bg-muted/20">
      <div className="container max-w-6xl mx-auto px-4">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">
          Delivering Mission-Critical Platforms For Growing Startups & Pan-India Enterprises
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 items-center">
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center justify-center h-11 px-3 rounded-xl bg-card border border-border/60 text-foreground/80 font-bold text-xs tracking-wider shadow-sm"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
