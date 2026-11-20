import { motion } from 'framer-motion';
import { ArrowRight, Clock, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SprintExplanation from '@/components/SprintExplanation';
import ProcessSection from '@/components/ProcessSection';
import ContinuousEnhancements from '@/components/ContinuousEnhancements';
import CTABanner from '@/components/CTABanner';

export default function SprintsPage() {
  return (
    <div className="pt-24 sm:pt-28">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/40 via-background to-background border-b border-border/60 relative overflow-hidden">
        {/* Halftone backdrop */}
        <div className="absolute top-0 right-0 w-80 h-80 halftone-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(240,68,36,0.12)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="container max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F04424]/10 border border-[#F04424]/20 text-[#F04424] text-xs font-bold uppercase tracking-wider mb-5">
              <Clock className="w-3.5 h-3.5" /> Agile Pay-Per-Sprint Model
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Predictable, transparent engineering.
              <br />
              <span className="text-[#F04424] italic">Starting at min ₹450/hour.</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              No bloated upfront lumpsums or ambiguous hourly bills. We operate in structured 1–2 week agile sprints with committed deliverables. You only pay milestone-by-milestone after approving working staging demos.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-foreground/80 mb-8">
              <div className="flex items-center gap-1.5 bg-card px-3 py-1.5 rounded-full border border-border shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 14-Day Delivery Sprints
              </div>
              <div className="flex items-center gap-1.5 bg-card px-3 py-1.5 rounded-full border border-border shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero Upfront Lock-in
              </div>
              <div className="flex items-center gap-1.5 bg-card px-3 py-1.5 rounded-full border border-border shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% Code & IP Ownership
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 min-h-[50px] text-xs sm:text-sm font-bold rounded-full bg-[#F04424] text-white hover:bg-[#d6391b] transition-all shadow-[0_4px_20px_rgba(240,68,36,0.35)] leading-none"
              >
                Plan Your First Sprint <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 min-h-[50px] text-xs sm:text-sm font-semibold rounded-full border border-border bg-card text-foreground hover:bg-muted transition-all leading-none"
              >
                View Delivered Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Sprint Breakdown & Calculator */}
      <SprintExplanation />

      {/* 4-Step Agile Delivery Workflow */}
      <ProcessSection />

      {/* Retainer & Continuous Enhancements */}
      <ContinuousEnhancements />

      {/* Final Action Banner */}
      <CTABanner />
    </div>
  );
}
