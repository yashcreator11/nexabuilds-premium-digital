import { motion } from 'framer-motion';
import { Users, ShieldCheck, Clock, DollarSign } from 'lucide-react';

const comparisons = [
  { icon: Users, offline: 'Limited to local walk-ins', online: 'Reach customers anywhere globally', label: 'Reach More Customers' },
  { icon: ShieldCheck, offline: 'Word-of-mouth only', online: 'Authoritative, branded digital presence', label: 'Build Instant Trust' },
  { icon: Clock, offline: 'Restricted to business hours', online: 'Automated 24/7 lead & payment capture', label: 'Continuous Availability' },
  { icon: DollarSign, offline: 'Revenue capped by location', online: 'Scalable multi-channel sales pipeline', label: 'Accelerate Revenue' },
];

export default function WhyGoOnlineSection() {
  return (
    <section className="py-24 md:py-36 border-t border-border/60 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F04424] mb-3">
            Digital Transformation
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
            Why modern businesses go digital with AgileSquad.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Transitioning manual processes into bespoke software is the highest-ROI investment you can make for your company.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {comparisons.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-8 rounded-3xl bg-card border border-border/80 hover:border-[#F04424]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F04424]/10 border border-[#F04424]/20 flex items-center justify-center text-[#F04424] shrink-0">
                  <c.icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-foreground mb-3">{c.label}</h3>
                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground line-through">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                      <span>{c.offline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F04424] shrink-0" />
                      <span>{c.online}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
