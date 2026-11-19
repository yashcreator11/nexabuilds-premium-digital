import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

const problems = [
  { problem: 'No online presence or outdated storefront', solution: 'A conversion-focused web app live in 3–4 weeks' },
  { problem: 'Manual, error-prone spreadsheet tracking', solution: 'Automated CRM & data pipelines running 24/7' },
  { problem: 'Agencies demanding 50% upfront deposit', solution: 'Pay-per-sprint only after you test working demos' },
  { problem: 'Poor analytics visibility across departments', solution: 'Executive real-time telemetry dashboards' },
  { problem: 'Solo freelancer bottlenecks & delays', solution: 'Dedicated 6-role multidisciplinary engineering squad' },
  { problem: 'Slow, brittle legacy architecture', solution: 'Scalable Next.js, React, and cloud serverless stack' },
];

export default function ProblemsSection() {
  return (
    <section className="py-24 md:py-36 border-t border-border/60 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F04424] mb-3">
            Bottlenecks We Solve
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
            Sound familiar? Here is how we fix it.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            These are the exact operational friction points our clients faced before partnering with AgileSquad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="p-6 rounded-3xl bg-card border border-border/80 flex flex-col justify-between hover:border-[#F04424]/40 transition-colors"
            >
              <div className="flex items-start gap-3 text-muted-foreground mb-4">
                <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{p.problem}</span>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-border/50 text-foreground font-semibold">
                <div className="w-6 h-6 rounded-full bg-[#F04424]/10 text-[#F04424] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-foreground">{p.solution}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
