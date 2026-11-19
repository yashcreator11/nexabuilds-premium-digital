import { motion } from 'framer-motion';
import { Shield, TrendingUp, Users, ShieldCheck, Palette, Code2, CheckCircle2, Database, Cloud, Clock, Check } from 'lucide-react';

const values = [
  { icon: Shield, title: 'Total Reliability', desc: 'We ship on time, protect your IP, and stand behind every line of code.' },
  { icon: TrendingUp, title: 'Infinite Scalability', desc: 'Architecture planned to scale seamlessly from 100 to 100,000+ users.' },
  { icon: Users, title: 'Zero Middlemen', desc: 'Direct access to the senior engineers and designers actively building your system.' },
];

const teamRoles = [
  {
    role: 'UI/UX & Figma Designer',
    focus: 'User Journeys & Interactive Prototypes',
    desc: 'Crafts intuitive user journeys, wireframes, design systems, and high-fidelity clickable Figma prototypes before writing any code.',
    icon: Palette,
    badge: 'Design & UX',
  },
  {
    role: 'Frontend Developer',
    focus: 'Interactive UI & Performance',
    desc: 'Builds pixel-perfect, responsive web applications with smooth 60fps animations and sub-second load times across mobile and desktop.',
    icon: Code2,
    badge: 'Frontend Engineering',
  },
  {
    role: 'Backend & API Engineer',
    focus: 'Data Architecture & Business Logic',
    desc: 'Engineers robust REST/GraphQL APIs, microservices, database schemas (PostgreSQL, Supabase, Redis), and high-throughput query caching.',
    icon: Database,
    badge: 'Backend & APIs',
  },
  {
    role: 'DevOps & Cloud Architect',
    focus: 'CI/CD & High-Availability Hosting',
    desc: 'Sets up automated GitHub CI/CD pipelines, Docker containers, serverless scaling, and cloud infrastructure on AWS/Vercel with 99.9% uptime.',
    icon: Cloud,
    badge: 'Cloud & Infrastructure',
  },
  {
    role: 'Cybersecurity Specialist',
    focus: 'Data Protection & Vulnerability Auditing',
    desc: 'Hardens authentication flows, implements RBAC, encrypts sensitive records at rest and in transit, and defends against OWASP threats.',
    icon: ShieldCheck,
    badge: 'Security & Compliance',
  },
  {
    role: 'QA & Automation Tester',
    focus: 'Cross-Device & Regression Testing',
    desc: 'Conducts rigorous cross-browser testing, edge-case validation, automated regression test suites, and load testing for zero-glitch releases.',
    icon: CheckCircle2,
    badge: 'Quality Assurance',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-36 border-t border-border/60 relative">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F04424] mb-3">
              Full Multidisciplinary Team
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
              All essential roles assigned to your project.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              You never get an overwhelmed solo developer. Every build is backed by specialists in design, frontend, backend, devops, security, and quality assurance.
            </p>
          </div>

          {/* Pricing Highlight Pill - At min ₹450/hour */}
          <div className="w-full sm:w-auto p-4 sm:p-5 rounded-2xl bg-card border border-[#F04424]/30 shadow-lg flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F04424]/10 border border-[#F04424]/20 flex items-center justify-center text-[#F04424] shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Flexible Engineering
              </div>
              <div className="text-xl font-black text-foreground">
                At min ₹450/hour
              </div>
              <div className="text-[11px] text-[#F04424] font-semibold mt-0.5">
                Exact sprint timesheet • No hidden fees
              </div>
            </div>
          </div>
        </div>

        {/* 6 Specialized Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16">
          {teamRoles.map((t, i) => (
            <motion.div
              key={t.role}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-card border border-border/80 p-7 rounded-3xl hover:border-[#F04424]/40 hover:shadow-[0_16px_40px_rgba(240,68,36,0.08)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#F04424]/10 border border-[#F04424]/20 flex items-center justify-center text-[#F04424] group-hover:scale-110 group-hover:bg-[#F04424] group-hover:text-white transition-all duration-300">
                    <t.icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 border border-border/60 px-3 py-1 rounded-full">
                    {t.badge}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-lg text-foreground mb-1">
                  {t.role}
                </h3>
                <div className="text-xs font-semibold text-[#F04424] mb-3">
                  {t.focus}
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {t.desc}
                </p>
              </div>

                <div className="mt-5 pt-4 border-t border-border/50 flex items-center gap-1.5 text-[11px] font-medium text-foreground/80">
                  <Check className="w-3.5 h-3.5 text-[#F04424]" /> Active in Project Sprints
                </div>
            </motion.div>
          ))}
        </div>

        {/* Studio Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 border-t border-border/60">
          {values.map((v) => (
            <div
              key={v.title}
              className="p-5 rounded-2xl bg-card/60 border border-border/60 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F04424]/10 border border-[#F04424]/20 flex items-center justify-center text-[#F04424] shrink-0 mt-0.5">
                <v.icon className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">{v.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed mt-0.5">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
