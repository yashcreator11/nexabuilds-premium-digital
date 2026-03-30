import { motion } from 'framer-motion';
import { Shield, TrendingUp, Users } from 'lucide-react';

const values = [
  { icon: Shield, title: 'Reliability', desc: 'We ship on time and stand behind our work.' },
  { icon: TrendingUp, title: 'Scalability', desc: 'Every solution is built to grow with your business.' },
  { icon: Users, title: 'Client Focus', desc: 'Your success is the only metric that matters.' },
];

const team = [
  { name: 'Alex Chen', role: 'Founder & Lead Engineer' },
  { name: 'Sarah Kim', role: 'Design Director' },
  { name: 'Marcus Rivera', role: 'Full-Stack Developer' },
  { name: 'Priya Patel', role: 'Project Manager' },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease }}
              className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-6"
            >
              Built by Builders
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-muted-foreground leading-relaxed mb-4"
            >
              FuturaX Solutions was founded on a simple observation: small businesses deserve the same quality software that enterprises take for granted. We bridge that gap.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="text-muted-foreground leading-relaxed mb-10"
            >
              We are a lean, senior team. No account managers, no handoffs, no bloat. The people you meet are the people who build your product.
            </motion.p>

            <div className="space-y-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease }}
                  className="flex items-start gap-4"
                >
                  <v.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{v.title}</h4>
                    <p className="text-muted-foreground text-sm">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
              The Team
            </h3>
            <div className="grid grid-cols-2 gap-px bg-border">
              {team.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease }}
                  className="bg-background p-6"
                >
                  <div className="w-12 h-12 bg-muted mb-4 flex items-center justify-center text-muted-foreground font-bold text-lg">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="font-bold text-foreground text-sm">{t.name}</h4>
                  <p className="text-muted-foreground text-xs mt-1">{t.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
