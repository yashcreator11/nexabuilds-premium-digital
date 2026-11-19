import { motion } from 'framer-motion';
import { Globe, Code, Zap, BarChart3, Smartphone, Cloud, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'High-Converting Web Applications',
    tag: 'Web & E-Commerce',
    desc: 'Lightning-fast digital platforms built with Next.js, React, and Tailwind that convert casual visitors into paying customers.',
    deliverables: ['Custom Next.js UI', 'SEO & Core Web Vitals', 'Stripe / Payment Gateways'],
  },
  {
    icon: Code,
    title: 'Tailored Business Software',
    tag: 'Internal Tools',
    desc: 'Purpose-built operational platforms and CRMs designed around your exact team workflow, replacing spreadsheet chaos.',
    deliverables: ['Role-Based Dashboards', 'Multi-tenant Systems', 'REST / GraphQL APIs'],
  },
  {
    icon: Zap,
    title: 'Automated Workflows & AI',
    tag: 'Automation',
    desc: 'Eliminate manual data entry and repetitive operations with smart automation pipelines that work 24/7 without error.',
    deliverables: ['Lead-to-Invoice Automation', 'AI Document Processing', 'Webhook Integrations'],
  },
  {
    icon: BarChart3,
    title: 'Executive Analytics Dashboards',
    tag: 'Data & BI',
    desc: 'Turn messy, siloed database records into actionable real-time visualizations so leadership makes informed decisions daily.',
    deliverables: ['Real-Time Telemetry', 'Exportable Reports', 'Sub-second Query Speeds'],
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform Mobile Apps',
    tag: 'iOS & Android',
    desc: 'Fluid, native-feeling mobile applications built with React Native for seamless user experiences on any device.',
    deliverables: ['Offline-First Sync', 'Push Notifications', 'App Store / Play Store Deploy'],
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture & Hardening',
    tag: 'DevOps & Security',
    desc: 'Auto-scaling infrastructure on AWS, Vercel, or Docker with automated backups, monitoring, and bank-grade data security.',
    deliverables: ['Docker / Serverless', 'Zero-Downtime CI/CD', 'Automated Daily Backups'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-36 border-t border-border/60 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F04424] mb-3">
            Core Disciplines
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-5">
            Precision engineering for modern businesses.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Every product is planned, engineered, and battle-tested by our specialist squad to maximize ROI and operational velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-8 rounded-3xl bg-card border border-border/80 hover:border-[#F04424]/40 hover:shadow-[0_12px_35px_rgba(240,68,36,0.08)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#F04424]/10 border border-[#F04424]/20 flex items-center justify-center text-[#F04424] group-hover:scale-110 group-hover:bg-[#F04424] group-hover:text-white transition-all duration-300">
                    <s.icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70 border border-border/60 px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-xl text-foreground mb-3 leading-snug">
                  {s.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>

              <div className="pt-5 border-t border-border/50">
                <div className="text-[11px] font-semibold text-muted-foreground/70 uppercase tracking-wider mb-2.5">
                  Key Deliverables
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.deliverables.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-muted/60 text-foreground px-2.5 py-1 rounded-md border border-border/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
