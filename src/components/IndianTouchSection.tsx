import { motion } from 'framer-motion';
import { Store, Globe, Zap, ArrowRight } from 'lucide-react';

export default function IndianTouchSection() {
  return (
    <section className="py-20 md:py-32 border-t border-border/60 relative">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-[#F04424]/10 via-card to-card p-8 sm:p-12 md:p-16 shadow-xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F04424]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="relative z-10">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F04424] mb-3">
              Global Standards • Local Execution
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              From Indian enterprises to global scale.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-10 max-w-2xl leading-relaxed">
              World-class engineering, Silicon-Valley-caliber design, and transparent sprint pricing tailored for ambitious Indian businesses and international partners.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                { icon: Store, title: 'Built for High Volume', desc: 'Optimized for mobile-first user bases, low bandwidths, and instant UPI / payment flows.' },
                { icon: Globe, title: 'International Caliber', desc: 'Top-tier Next.js and React architecture matching global SaaS and tech benchmarks.' },
                { icon: Zap, title: 'Rapid Sprint Delivery', desc: 'Clear deliverables every 2 weeks. Pay milestone-by-milestone with zero hidden costs.' },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-background/60 border border-border/60"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F04424]/10 border border-[#F04424]/20 flex items-center justify-center mb-4 text-[#F04424]">
                    <item.icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#F04424] hover:text-[#d6391b] transition-all group"
            >
              <span>Schedule a sprint consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
