import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Eye,
  CheckCircle2,
  Zap,
  Clock,
  ShieldCheck,
  FileCode2,
  Video,
  ExternalLink,
  Receipt,
  Layers,
  ArrowRight,
} from 'lucide-react';

const sprintPhases = [
  {
    days: 'Days 1–2',
    phase: 'Scoping & Architecture',
    desc: 'Linear ticket breakdown with hour caps. Figma design tokens and PostgreSQL schema finalized.',
    deliverable: 'Signed Sprint Backlog & API Contract',
  },
  {
    days: 'Days 3–8',
    phase: 'Concurrent Engineering',
    desc: 'Frontend (Next.js/React) & Backend (APIs/Workers) built simultaneously with CI/CD staging deploys.',
    deliverable: 'Feature branch merged to private staging',
  },
  {
    days: 'Days 9–11',
    phase: 'QA Testing & Security Audit',
    desc: 'Dedicated QA tester runs edge-case test suites. Security specialist audits JWTs, CORS, and RBAC.',
    deliverable: 'QA Pass Report (0 Critical Bugs)',
  },
  {
    days: 'Days 12–14',
    phase: 'Live Demo & Milestone Sign-Off',
    desc: 'You test the private staging URL on mobile/desktop, watch the 5-min Loom demo, and approve.',
    deliverable: 'GitHub Code Handover & Milestone Invoice',
  },
];

const tangibleDeliverables = [
  {
    icon: ExternalLink,
    title: 'Interactive Staging URL',
    desc: 'A live password-protected staging URL (e.g. preview-sprint2.yourbrand.dev) to click and test on your own phone.',
  },
  {
    icon: Video,
    title: '5-Minute Loom Walkthrough',
    desc: 'Direct screen recording from the lead engineer demonstrating every new feature and explaining how to test it.',
  },
  {
    icon: FileCode2,
    title: 'Direct GitHub Repository PR',
    desc: 'All clean, typed code pushed directly to your organization repository. Complete IP and commit history ownership.',
  },
  {
    icon: ShieldCheck,
    title: 'QA & Security Verification Log',
    desc: 'Documented test pass across Chromium, Safari, iOS, and Android with zero outstanding blocker bugs.',
  },
  {
    icon: Receipt,
    title: 'Itemized Timesheet Invoice',
    desc: 'Billed strictly upon approved demo sign-off at min ₹450/hour per specialist with zero hidden retainer fees.',
  },
];

const sprintOptions = [
  {
    id: '1week',
    title: '1-Week Focused Sprint',
    hours: '40 Total Hours',
    cost: '₹18,000',
    rateNote: 'At min ₹450/hour per specialist',
    bestFor: 'Rapid POC, MVP Auth & Database Setup, or Single Third-Party Integration',
    includes: [
      '1 Dedicated Full-Stack Specialist (40 hrs)',
      'Figma wireframe-to-code implementation',
      'PostgreSQL schema + REST/GraphQL API',
      'Private live staging deployment',
      'Zero upfront deposit — pay upon demo sign-off',
    ],
  },
  {
    id: '2week',
    title: '2-Week Standard Sprint',
    hours: '80 Total Hours',
    cost: '₹36,000',
    rateNote: 'At min ₹450/hour per specialist',
    badge: 'Most Popular',
    bestFor: 'Complete Functional Module (e.g. Payment Gateway + Merchant Dashboard + Webhook Pipeline)',
    includes: [
      '1 Lead Full-Stack Specialist + QA Tester (80 hrs)',
      'Complete end-to-end feature module with edge cases',
      'Automated background jobs / webhook listeners',
      'Cross-browser QA testing & bug resolution',
      'Interactive staging demo & 5-min Loom walkthrough',
      'Pay only after testing and approving staging demo',
    ],
  },
  {
    id: 'fullsquad',
    title: '2-Week Full Squad Sprint',
    hours: '160 Total Hours',
    cost: '₹72,000',
    rateNote: 'At min ₹450/hour across specialists',
    bestFor: 'High-Velocity MVP Launch with Parallel Frontend, Backend & DevOps Execution',
    includes: [
      '2 Engineers Working in Parallel (Frontend + Backend + Cloud CI/CD)',
      'Dedicated QA Tester & Cybersecurity Review',
      'High-concurrency load testing (10k+ requests)',
      'Production deployment on AWS / Vercel / Railway',
      'Complete repository, documentation, and IP handover',
      'Milestone payment released strictly upon sign-off',
    ],
  },
];

export default function SprintExplanation() {
  const [selectedSprint, setSelectedSprint] = useState('2week');

  const currentPlan = sprintOptions.find((o) => o.id === selectedSprint) || sprintOptions[1];

  return (
    <section id="how-we-work" className="py-24 md:py-36 border-t border-border/60 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F04424]/10 border border-[#F04424]/20 text-[#F04424] text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>The Pay-Per-Sprint Reality</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-5 leading-tight">
            How a real 14-day sprint runs. <br />
            <span className="text-[#F04424] italic font-normal">Test on staging before you pay.</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            No 6-month black boxes. No 50% upfront deposits. We break your product roadmap into predictable 1–2 week sprints billed at a transparent rate starting at <strong className="text-foreground">min ₹450/hour</strong>.
          </p>
        </div>

        {/* 14-Day Sprint Calendar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16">
          {sprintPhases.map((phase, idx) => (
            <motion.div
              key={phase.days}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 sm:p-6 rounded-3xl bg-card border border-border/80 hover:border-[#F04424]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#F04424] bg-[#F04424]/10 border border-[#F04424]/20 px-3 py-1 rounded-full">
                    {phase.days}
                  </span>
                  <span className="text-xs font-bold text-muted-foreground/60">Phase 0{idx + 1}</span>
                </div>

                <h3 className="font-sans font-bold text-lg text-foreground mb-2">{phase.phase}</h3>

                <p className="text-xs text-muted-foreground leading-relaxed mb-6">{phase.desc}</p>
              </div>

              <div className="pt-4 border-t border-border/60">
                <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/70 mb-1">
                  Sprint Milestone Artifact
                </div>
                <div className="text-xs font-semibold text-foreground flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{phase.deliverable}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tangible Deliverables + Sprint Budget Calculator */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: What You Receive at Every Sprint End */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F04424] mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Tangible Sprint Deliverables</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                What you receive before paying.
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                You never pay for promises. You only release milestone payment after inspecting these 5 tangible artifacts:
              </p>

              <div className="space-y-4">
                {tangibleDeliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-3 rounded-2xl bg-muted/30 border border-border/50">
                    <div className="w-9 h-9 rounded-xl bg-[#F04424]/10 border border-[#F04424]/20 flex items-center justify-center text-[#F04424] shrink-0 font-bold mt-0.5">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Transparent Sprint Budget Calculator */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#F04424] mb-1">
                    Transparent Rate Card
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">Sample Sprint Breakdown</h3>
                </div>
                <div className="w-fit px-3 py-1 rounded-full bg-[#F04424]/10 border border-[#F04424]/20 text-[#F04424] text-xs font-bold">
                  At min ₹450/hour
                </div>
              </div>

              {/* Sprint Model Selector Tabs */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-muted/50 border border-border/60 mb-6">
                {sprintOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedSprint(opt.id)}
                    className={`py-2 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all text-center ${
                      selectedSprint === opt.id
                        ? 'bg-[#F04424] text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span className="hidden sm:inline">
                      {opt.id === '1week' ? '1-Week (40h)' : opt.id === '2week' ? '2-Week (80h)' : 'Full Squad (160h)'}
                    </span>
                    <span className="sm:hidden">
                      {opt.id === '1week' ? '1-Wk (40h)' : opt.id === '2week' ? '2-Wk (80h)' : 'Squad (160h)'}
                    </span>
                  </button>
                ))}
              </div>

              {/* Selected Plan Details Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPlan.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#F04424]/5 via-muted/30 to-card border border-[#F04424]/20 mb-6"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-lg text-foreground">{currentPlan.title}</h4>
                      <p className="text-xs text-muted-foreground">{currentPlan.hours} • {currentPlan.rateNote}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-serif text-3xl font-bold text-[#F04424]">{currentPlan.cost}</div>
                      <div className="text-[10px] text-muted-foreground uppercase font-semibold">Per Sprint Milestone</div>
                    </div>
                  </div>

                  <p className="text-xs font-medium text-foreground/80 mb-4 pt-3 border-t border-border/50">
                    <strong className="text-[#F04424]">Best For:</strong> {currentPlan.bestFor}
                  </p>

                  <div className="space-y-2">
                    {currentPlan.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Milestone Assurance Callout */}
              <div className="p-4 rounded-2xl bg-muted/40 border border-border/60 flex items-center justify-between gap-4">
                <div className="text-xs text-muted-foreground leading-snug">
                  <strong className="text-foreground font-semibold">100% Milestone Assurance:</strong> You test live staging before approving the invoice.
                </div>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-full bg-[#F04424] hover:bg-[#d6391b] text-white text-xs font-bold shrink-0 transition-colors shadow-sm"
                >
                  Scope a Sprint →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
