import { motion } from 'framer-motion';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  { icon: Search, num: '01', title: 'Discovery & Sprint Estimation', desc: 'We dissect your business model, define strict MVP scope, and provide clear hour-by-hour sprint estimates at min ₹450/hour.' },
  { icon: Palette, num: '02', title: 'Interactive Figma Prototyping', desc: 'Our dedicated UI/UX designer wireframes every screen so you click through and approve the user experience before code is written.' },
  { icon: Code, num: '03', title: 'Type-Safe Full-Stack Build', desc: 'Frontend, backend, devops, and security engineers collaborate in focused 2-week sprints with staging links you can test.' },
  { icon: Rocket, num: '04', title: 'Demo Sign-off, Launch & Support', desc: 'You inspect the working demo, release milestone payment upon approval, and we deploy with 30 days of continuous warranty.' },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-36 border-t border-border/60 relative">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F04424] mb-3">
            Predictable Delivery
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
            From idea to production in 4 structured phases.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            A battle-tested agile methodology that removes uncertainty, budget creep, and timeline delays.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 md:p-10 hover:border-[#F04424]/40 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="font-mono text-2xl sm:text-3xl font-black text-[#F04424]/40 shrink-0 mt-0.5">
                  {s.num}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#F04424]/10 border border-[#F04424]/20 flex items-center justify-center text-[#F04424] shrink-0">
                      <s.icon className="w-4 h-4" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
