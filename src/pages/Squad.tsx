import { motion } from 'framer-motion';
import { ArrowRight, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import AboutSection from '@/components/AboutSection';
import WhyGoOnlineSection from '@/components/WhyGoOnlineSection';
import IndianTouchSection from '@/components/IndianTouchSection';
import StatsSection from '@/components/StatsSection';
import CTABanner from '@/components/CTABanner';

export default function SquadPage() {
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
              <Users className="w-3.5 h-3.5" /> Full 6-Role Engineering Squad
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Specialized multidisciplinary talent.
              <br />
              <span className="text-[#F04424] italic">Zero freelance bottlenecks.</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Solo developers cannot design, code, secure, deploy, and QA at an elite standard all at once. We assign a complete team of 6 specialized roles to every project, moving with agility and precision.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mx-auto mb-8">
              {[
                'UI/UX Designer',
                'Frontend Architect',
                'Backend & API Engineer',
                'DevOps & Cloud Architect',
                'Cybersecurity Specialist',
                'QA Tester',
              ].map((role) => (
                <span
                  key={role}
                  className="px-3.5 py-1.5 rounded-full bg-card border border-border text-xs font-bold text-foreground/90 shadow-xs flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F04424]" /> {role}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 text-xs sm:text-sm font-bold rounded-full bg-[#F04424] text-white hover:bg-[#d6391b] transition-all shadow-[0_4px_20px_rgba(240,68,36,0.35)]"
              >
                Hire The Squad for a Sprint <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 text-xs sm:text-sm font-semibold rounded-full border border-border bg-card text-foreground hover:bg-muted transition-all"
              >
                View Delivered Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The 6 Engineering Roles Breakdown */}
      <AboutSection />

      {/* Custom Software vs Generic SaaS */}
      <WhyGoOnlineSection />

      {/* Global Engineering Standards & Cost Efficiency */}
      <IndianTouchSection />

      {/* Verified Engineering Metrics */}
      <StatsSection />

      {/* Final Action Banner */}
      <CTABanner />
    </div>
  );
}
