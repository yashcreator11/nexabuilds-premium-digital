import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock, Users, ShieldCheck, Award, Zap, Code2, Sparkles } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import TrustedBy from '@/components/TrustedBy';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABanner from '@/components/CTABanner';

const Index = () => {
  return (
    <div>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Enterprise Industry Badges */}
      <TrustedBy />

      {/* 3. Sprints Teaser Section */}
      <section className="py-20 md:py-28 border-t border-border/60 bg-muted/20 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F04424]/10 border border-[#F04424]/20 text-[#F04424] text-xs font-bold uppercase tracking-wider mb-4">
              <Clock className="w-3.5 h-3.5" /> Predictable Pay-Per-Sprint Model
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
              Transparent agile sprints.
              <br />
              <span className="text-[#F04424] italic">Starting at min ₹450/hour.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              No locked-in annual retainers or risky upfront estimates. Test your working software on staging at every milestone before releasing payment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Tier 1 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-xs hover:border-[#F04424]/40 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                  Sprint Speed
                </span>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">1-Week Sprint</h3>
                <div className="text-[#F04424] font-bold text-lg mb-4">40 Hours / Developer</div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                  Ideal for rapid proof-of-concept builds, UI prototype validations, or urgent feature additions.
                </p>
                <ul className="space-y-2.5 text-xs text-foreground/85 font-medium mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Starts at ₹18,000 / dev</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Live staging demonstration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Full timesheet tracking</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/sprints"
                className="w-full text-center py-2.5 rounded-full border border-border bg-muted/40 hover:bg-[#F04424] hover:text-white hover:border-[#F04424] text-xs font-bold text-foreground transition-all"
              >
                View 1-Week Scope
              </Link>
            </div>

            {/* Tier 2 - Recommended */}
            <div className="p-6 sm:p-8 rounded-3xl bg-card border-2 border-[#F04424] shadow-lg relative flex flex-col justify-between">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#F04424] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                Most Popular
              </span>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                  Standard Velocity
                </span>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">2-Week Sprint</h3>
                <div className="text-[#F04424] font-bold text-lg mb-4">80 Hours / Developer</div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                  The industry standard agile cycle. Complete functional modules, API integrations, and database schemas.
                </p>
                <ul className="space-y-2.5 text-xs text-foreground/85 font-medium mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Starts at ₹36,000 / dev</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Comprehensive QA & security check</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Production staging deployment</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/sprints"
                className="w-full text-center py-2.5 rounded-full bg-[#F04424] text-white hover:bg-[#d6391b] text-xs font-bold transition-all shadow-md"
              >
                View 2-Week Scope & Calculator
              </Link>
            </div>

            {/* Tier 3 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-xs hover:border-[#F04424]/40 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                  Full Multidisciplinary
                </span>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">Squad Sprint</h3>
                <div className="text-[#F04424] font-bold text-lg mb-4">160 Hours / Multidisciplinary</div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                  High-velocity execution across UI/UX, Frontend, Backend, DevOps, Cyber, and QA working simultaneously.
                </p>
                <ul className="space-y-2.5 text-xs text-foreground/85 font-medium mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Full 6-role squad coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Automated CI/CD deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Zero vendor lock-in</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/sprints"
                className="w-full text-center py-2.5 rounded-full border border-border bg-muted/40 hover:bg-[#F04424] hover:text-white hover:border-[#F04424] text-xs font-bold text-foreground transition-all"
              >
                Explore Squad Model
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/sprints"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border hover:border-[#F04424]/60 hover:text-[#F04424] text-xs font-bold text-foreground transition-all shadow-xs"
            >
              See 14-Day Calendar, Deliverables & Interactive Calculator <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Delivered Case Studies Teaser */}
      <section className="py-20 md:py-28 border-t border-border/60 relative">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" /> Confidential Client Case Studies
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Authentic delivered software.
                <br />
                <span className="text-[#F04424] italic">Zero mockups or placeholder templates.</span>
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F04424] text-white text-xs font-bold hover:bg-[#d6391b] transition-all shadow-md shrink-0 w-fit"
            >
              View Full Technical Breakdown <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Case Study 1 */}
            <div className="p-8 rounded-3xl bg-card border border-border shadow-xs hover:border-[#F04424]/40 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#F04424]/10 text-[#F04424] text-[10px] font-bold uppercase tracking-wider">
                    Enterprise SaaS • 24/7 Production
                  </span>
                  <span className="text-[11px] text-muted-foreground font-semibold">Under Mutual NDA</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Pan-India Biometric & Geofenced Mobile QR Attendance System
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Engineered for a nationwide multi-branch enterprise operating continuous double shifts. Replaced flawed manual punch-ins with tamper-proof GPS boundary verification and biometric verification.
                </p>
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-muted/40 border border-border mb-6 text-center">
                  <div>
                    <div className="font-serif text-xl font-bold text-foreground">24/7</div>
                    <div className="text-[10px] text-muted-foreground uppercase font-semibold">Uptime Standard</div>
                  </div>
                  <div>
                    <div className="font-serif text-xl font-bold text-emerald-600 dark:text-emerald-400">0%</div>
                    <div className="text-[10px] text-muted-foreground uppercase font-semibold">Proxy Check-ins</div>
                  </div>
                  <div>
                    <div className="font-serif text-xl font-bold text-[#F04424]">2 Shifts</div>
                    <div className="text-[10px] text-muted-foreground uppercase font-semibold">Daily Continuous</div>
                  </div>
                </div>
              </div>
              <Link
                to="/work"
                className="text-xs font-bold text-[#F04424] hover:underline flex items-center gap-1.5"
              >
                Read Architectural Case Study <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Case Study 2 */}
            <div className="p-8 rounded-3xl bg-card border border-border shadow-xs hover:border-[#F04424]/40 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#F04424]/10 text-[#F04424] text-[10px] font-bold uppercase tracking-wider">
                    Two-Sided Marketplace • Startup MVP
                  </span>
                  <span className="text-[11px] text-muted-foreground font-semibold">Under Mutual NDA</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  LocalNest — Hyperlocal Marketplace with Complete Identity Masking
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  A high-trust service marketplace designed to protect client privacy. Masked customer phone numbers and addresses until an in-person service appointment is confirmed.
                </p>
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-muted/40 border border-border mb-6 text-center">
                  <div>
                    <div className="font-serif text-xl font-bold text-foreground">100%</div>
                    <div className="text-[10px] text-muted-foreground uppercase font-semibold">Identity Masking</div>
                  </div>
                  <div>
                    <div className="font-serif text-xl font-bold text-emerald-600 dark:text-emerald-400">&lt; 300ms</div>
                    <div className="text-[10px] text-muted-foreground uppercase font-semibold">Search Latency</div>
                  </div>
                  <div>
                    <div className="font-serif text-xl font-bold text-[#F04424]">3 Weeks</div>
                    <div className="text-[10px] text-muted-foreground uppercase font-semibold">Napkin to MVP</div>
                  </div>
                </div>
              </div>
              <Link
                to="/work"
                className="text-xs font-bold text-[#F04424] hover:underline flex items-center gap-1.5"
              >
                Read Architectural Case Study <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Squad Teaser */}
      <section className="py-20 md:py-28 border-t border-border/60 bg-muted/20 relative">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F04424]/10 border border-[#F04424]/20 text-[#F04424] text-xs font-bold uppercase tracking-wider mb-4">
                <Users className="w-3.5 h-3.5" /> Complete Multidisciplinary Unit
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight mb-6">
                6 specialized roles.
                <br />
                <span className="text-[#F04424] italic">Zero freelance bottlenecks.</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
                Most software projects fail because a solo freelancer is asked to design, develop backend APIs, configure cloud servers, audit cybersecurity, and test all at once. In our squad, every sprint is powered by dedicated specialists.
              </p>
              <Link
                to="/squad"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F04424] text-white text-xs font-bold hover:bg-[#d6391b] transition-all shadow-md"
              >
                Explore All 6 Squad Roles & Standards <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { title: 'UI/UX Designer', desc: 'Figma design tokens & design systems' },
                { title: 'Frontend Engineer', desc: 'React, Next.js & responsive UI' },
                { title: 'Backend Architect', desc: 'Fast APIs, PostgreSQL & DB schemas' },
                { title: 'DevOps & Cloud', desc: 'Docker, AWS & automated CI/CD' },
                { title: 'Cybersecurity', desc: 'OWASP auditing & RBAC auth' },
                { title: 'QA Tester', desc: 'Staging verification & bug tracking' },
              ].map((role) => (
                <div key={role.title} className="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-[#F04424] mb-3" />
                  <h4 className="font-serif text-sm sm:text-base font-bold text-foreground mb-1">{role.title}</h4>
                  <p className="text-muted-foreground text-[11px] leading-snug">{role.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Client Testimonials */}
      <TestimonialsSection />

      {/* 7. CTA Banner */}
      <CTABanner />
    </div>
  );
};

export default Index;
