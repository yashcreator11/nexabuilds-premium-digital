import { motion } from 'framer-motion';
import { Globe, Code, Zap, BarChart3, Smartphone, Cloud } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Web Development', desc: 'Launch a digital presence that converts visitors into customers.' },
  { icon: Code, title: 'Custom Software', desc: 'Purpose-built tools designed around your exact workflow.' },
  { icon: Zap, title: 'Business Automation', desc: 'Eliminate repetitive tasks and reclaim hours every week.' },
  { icon: BarChart3, title: 'Dashboards & Analytics', desc: 'Turn raw data into decisions with real-time visibility.' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Reach your customers wherever they are, on any device.' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'Scale infrastructure without scaling your overhead.' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4"
        >
          What We Build For You
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-muted-foreground text-lg mb-14 max-w-xl"
        >
          Six disciplines. One focus: making your business more capable.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              className="bg-background p-8 md:p-10 group hover:bg-muted/50 transition-colors"
            >
              <s.icon className="w-6 h-6 text-primary mb-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
