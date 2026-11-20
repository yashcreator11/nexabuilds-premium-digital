import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GitBranch,
  ShieldCheck,
  FileCode2,
  Terminal,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Lock,
  Sparkles,
} from 'lucide-react';

interface Guarantee {
  icon: React.ElementType;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

const guarantees: Guarantee[] = [
  {
    icon: GitBranch,
    badge: 'Day-1 Access',
    title: 'Private GitHub Repository Handover',
    tagline: 'Zero hidden code. Live commits from Day 1.',
    description:
      'You are invited as an Owner/Admin to your dedicated private GitHub repository before the first sprint kickoff. Every commit, branch, and pull request is completely transparent and accessible in real time.',
    deliverables: [
      'Full GitHub Admin/Owner rights from Day 1',
      'Transparent commit messages & branch tracking',
      'Zero proprietary lock-in — export anytime',
    ],
  },
  {
    icon: ShieldCheck,
    badge: '100% IP Transfer',
    title: 'Legal Code & Intellectual Property Ownership',
    tagline: 'Full commercial rights. Zero recurring royalties.',
    description:
      'We execute a standard bilateral IP Assignment Agreement upfront under mutual NDA. You own 100% of all custom source code, databases, design tokens, and digital assets. No hidden software licensing fees.',
    deliverables: [
      'Signed mutual Non-Disclosure Agreement (NDA)',
      'Bilateral IP Assignment Agreement on Day 1',
      '100% client code, patent & database ownership',
    ],
  },
  {
    icon: FileCode2,
    badge: 'Zero Spaghetti',
    title: 'Production Code & Strict Architecture Standards',
    tagline: 'Typed, modular, and maintainable by any engineering team.',
    description:
      'Code written for enterprise maintainability. Built with strict TypeScript typing, ESLint formatting, modular component boundaries, and comprehensive unit tests so your future in-house team can easily scale it.',
    deliverables: [
      'Strict TypeScript types & end-to-end contracts',
      'Modular architecture following industry best practices',
      'Clean Git commit conventions & PR reviews',
    ],
  },
  {
    icon: Terminal,
    badge: 'Interactive Docs',
    title: 'Self-Documenting APIs & Postman Collections',
    tagline: 'Ready-to-test endpoints with schemas and environment presets.',
    description:
      'Every backend API comes with interactive Swagger / OpenAPI documentation and ready-to-import Postman collections with verified request/response schemas, sample payloads, and environment presets.',
    deliverables: [
      'OpenAPI 3.0 / Swagger interactive API playground',
      'Exportable Postman collection with test payloads',
      'Environment variable guides (.env.example)',
    ],
  },
  {
    icon: Cloud,
    badge: 'Direct Cloud',
    title: 'Automated CI/CD in Your Cloud Account',
    tagline: 'AWS, GCP, Vercel, or Docker running under your credentials.',
    description:
      'Your production and staging environments run directly inside your own cloud account (AWS, Vercel, GCP, or Docker VPS)—never locked inside our private servers. Includes automated GitHub Actions pipelines.',
    deliverables: [
      'Automated staging & production deployment workflows',
      'Dockerized container recipes & zero-downtime setup',
      'Zero markup on hosting — you pay raw cloud provider rates',
    ],
  },
  {
    icon: Lock,
    badge: 'Milestone Trust',
    title: 'Inspect Staging Demo Before Milestone Payment',
    tagline: 'Pay-per-sprint approval. Zero risky upfront lump sums.',
    description:
      'You only pay milestone-by-milestone after testing a live, working preview on staging at the end of each 2-week sprint. If something diverges from agreed sprint scope, it gets resolved before sign-off.',
    deliverables: [
      'Live staging URL demo at the end of every sprint',
      'Transparent timesheet breakdown with zero fluff',
      'Milestone payment only after client demonstration approval',
    ],
  },
];

export default function GuaranteesSection() {
  return (
    <section className="py-24 md:py-32 border-t border-border/60 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Subtle warm ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle,rgba(240,68,36,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F04424]/10 border border-[#F04424]/20 text-[#F04424] text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Contractual Delivery Standards</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-5">
            Engineering deliverables with <br />
            <span className="text-[#F04424] italic font-normal">zero agency lock-in.</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            We operate on absolute transparency. From Day 1 repository rights to signed IP assignments and live staging demo approvals, you maintain complete control over your codebase at all times.
          </p>
        </div>

        {/* 6 Guarantee Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guarantees.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-6 sm:p-7 rounded-3xl bg-card border border-border shadow-xs hover:border-[#F04424]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon + Micro Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#F04424]/10 border border-[#F04424]/20 flex items-center justify-center text-[#F04424] group-hover:scale-110 group-hover:bg-[#F04424] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-muted/60 border border-border/80 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      {g.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-xl font-bold text-foreground mb-1 leading-snug">
                    {g.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#F04424] mb-3">
                    {g.tagline}
                  </p>

                  {/* Body */}
                  <p className="text-muted-foreground text-xs leading-relaxed mb-6 font-sans">
                    {g.description}
                  </p>
                </div>

                {/* Deliverables checklist */}
                <div className="pt-4 border-t border-border/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2.5">
                    Included Deliverables
                  </span>
                  <ul className="space-y-2">
                    {g.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-foreground/90 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassuring Trust Bar Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="p-6 sm:p-8 rounded-3xl bg-card border-2 border-[#F04424]/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 hidden sm:flex">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-1">
                Need a signed mutual NDA before sharing your product brief?
              </h4>
              <p className="text-muted-foreground text-xs sm:text-sm">
                We countersign bilateral non-disclosure agreements within 4 business hours so your proprietary idea remains 100% confidential.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F04424] text-white hover:bg-[#d6391b] text-xs font-bold transition-all shadow-md hover:shadow-lg shrink-0 leading-none"
          >
            Request Mutual NDA & Scoping <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
