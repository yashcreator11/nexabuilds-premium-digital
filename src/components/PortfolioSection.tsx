import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Clock, Layers, ChevronDown, Check, ArrowRight, Building, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  client: string;
  clientType: string;
  category: string;
  sprintCount: string;
  timeline: string;
  challenge: string;
  solution: string;
  tags: string[];
  primaryMetric: string;
  primaryLabel: string;
  impactMetric: string;
  impactLabel: string;
  verifiedDeliverable: string;
  architectureDetails: string[];
}

const realProjects: Project[] = [
  {
    title: 'Pan-India Biometric & Geofenced Mobile QR Attendance System',
    client: 'Enterprise Organization • Branches Across India (Confidential)',
    clientType: 'Pan-India Enterprise',
    category: 'Enterprise Platform',
    sprintCount: '3 Sprints',
    timeline: 'Delivered On Schedule',
    challenge:
      'The organization operates branches across multiple states in India with two continuous shifts running around the clock. They required a resilient attendance platform with guaranteed 24/7 uptime, zero punch-in failures, and strict fraud prevention to stop proxy attendance when employees check in using their phones.',
    solution:
      'Engineered a high-availability centralized attendance system syncing hardware biometric devices with an in-office mobile QR scanner (geofenced strictly within the office perimeter). Accommodated mid-sprint operational shift requirement changes cleanly in consecutive sprints without delaying the promised production release.',
    tags: ['React / Next.js', 'Python FastAPI', 'PostgreSQL', 'Biometric Hardware API', 'Geofenced QR Engine', 'Docker'],
    primaryMetric: '24/7 Uptime',
    primaryLabel: 'Zero-Downtime Across 2 Continuous Shifts',
    impactMetric: 'Zero Proxy Check-Ins',
    impactLabel: 'Geofenced in-office QR verification',
    verifiedDeliverable: 'Active in Production Across All India Branches • Delivered On Schedule',
    architectureDetails: [
      'Sprint 1: Multi-branch database schema, biometric device hardware API ingestion, and 24/7 dual-shift failover architecture.',
      'Sprint 2: Geofenced mobile QR scanning engine (restricted strictly to branch GPS boundaries) with employee check-in verification.',
      'Sprint 3: Handled mid-sprint client shift rule adaptations, automated branch management reports, and final production handover.',
    ],
  },
  {
    title: 'LocalNest — Hyperlocal Service Marketplace & Provider Platform',
    client: 'Growing Startup • Consumer & Provider Network (Confidential)',
    clientType: 'Hyperlocal Startup',
    category: 'Marketplace Platform',
    sprintCount: '2 Sprints',
    timeline: 'Delivered On Schedule',
    challenge:
      'The startup needed to bring local service providers and consumers onto one unified booking platform. The critical challenge was absolute privacy and data protection: ensuring zero personal identity or contact number leakage between customers and providers before a confirmed booking.',
    solution:
      'Built a complete two-sided marketplace application connecting consumers with verified local service providers. Implemented an identity-masking security layer that prevents data scraping and contact leakage, paired with an intuitive booking and provider matching interface.',
    tags: ['Next.js 14', 'Tailwind CSS', 'Node.js / Express', 'PostgreSQL', 'Identity Masking Gateway', 'Cloudflare'],
    primaryMetric: '100% Privacy',
    primaryLabel: 'Zero Consumer & Provider Identity Leakage',
    impactMetric: 'Two-Sided Platform',
    impactLabel: 'Seamless consumer-provider matchmaking',
    verifiedDeliverable: 'Staging Demo Approved • Full Repository & Documentation Transferred',
    architectureDetails: [
      'Sprint 1: Two-sided onboarding architecture (service providers & consumers), category catalogs, and responsive Figma UI implementation.',
      'Sprint 2: Privacy-first identity protection gateway, masked communication channels, and secure service booking workflow.',
    ],
  },
];

export default function PortfolioSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="portfolio" className="py-24 md:py-36 border-t border-border/60 relative">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F04424]/10 border border-[#F04424]/20 text-[#F04424] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Real Delivered Work</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
            Our authentic delivered projects. <br />
            <span className="text-[#F04424] italic font-normal">Real systems active in production.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            No manufactured mockups or fake portfolio padding. Below are the actual platforms we engineered, delivered on time, and deployed for our clients.
          </p>
        </div>

        {/* 2 Flagship Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {realProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 sm:p-8 md:p-9 rounded-3xl bg-card border border-border/80 hover:border-[#F04424]/40 hover:shadow-[0_20px_50px_rgba(240,68,36,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Pills: Category + Sprint Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F04424] bg-[#F04424]/10 border border-[#F04424]/20 px-3.5 py-1 rounded-full">
                    {p.category}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5 bg-muted/60 px-3 py-1 rounded-full border border-border/60">
                    <Clock className="w-3.5 h-3.5 text-[#F04424]" /> {p.sprintCount} • {p.timeline}
                  </span>
                </div>

                {/* Client Profile Subhead */}
                <div className="text-xs font-medium text-muted-foreground mb-3 flex items-center gap-2">
                  <Building className="w-3.5 h-3.5 text-[#F04424]" />
                  <span>{p.client}</span>
                </div>

                <h3 className="font-sans font-bold text-xl sm:text-2xl text-foreground mb-4 leading-snug">
                  {p.title}
                </h3>

                {/* Challenge & Solution Breakdown */}
                <div className="space-y-3 mb-6 text-sm text-muted-foreground leading-relaxed">
                  <div className="p-3.5 rounded-2xl bg-muted/20 border border-border/50">
                    <strong className="text-foreground block text-xs uppercase font-bold tracking-wider mb-1 text-[#F04424]">
                      The Operational Challenge
                    </strong>
                    <p className="text-xs sm:text-sm">{p.challenge}</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-muted/20 border border-border/50">
                    <strong className="text-foreground block text-xs uppercase font-bold tracking-wider mb-1 text-emerald-600 dark:text-emerald-400">
                      What We Engineered & Delivered
                    </strong>
                    <p className="text-xs sm:text-sm">{p.solution}</p>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-muted/50 text-muted-foreground px-2.5 py-1 rounded-md border border-border/40 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                {/* Metrics Box */}
                <div className="p-4 rounded-2xl bg-muted/30 border border-border/60 grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/70">
                      {p.primaryLabel}
                    </div>
                    <div className="text-base font-black text-[#F04424] mt-1">
                      {p.primaryMetric}
                    </div>
                  </div>

                  <div className="border-l border-border/50 pl-3">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/70">
                      {p.impactLabel}
                    </div>
                    <div className="text-xs font-bold text-foreground mt-1">
                      {p.impactMetric}
                    </div>
                  </div>
                </div>

                {/* Verified Milestone Sign-Off Badge */}
                <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-4">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{p.verifiedDeliverable}</span>
                </div>

                {/* Expandable Architecture Blueprint */}
                <button
                  type="button"
                  onClick={() => toggleExpand(i)}
                  className="w-full text-left text-xs font-bold text-foreground/80 hover:text-[#F04424] flex items-center justify-between py-2 px-3 rounded-xl bg-muted/30 hover:bg-muted/60 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#F04424]" />
                    <span>{expandedIndex === i ? 'Hide Sprint Roadmap' : 'View Sprint Roadmap & Deliverables'}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      expandedIndex === i ? 'rotate-180 text-[#F04424]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pt-2 border-t border-border/50 mt-2"
                    >
                      <div className="space-y-2 text-xs text-muted-foreground bg-muted/20 p-3.5 rounded-xl border border-border/40">
                        {p.architectureDetails.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-[#F04424] font-bold text-sm leading-none mt-0.5">›</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
