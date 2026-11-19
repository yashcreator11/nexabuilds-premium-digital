import { motion } from 'framer-motion';
import { Mail, MessageCircle, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28">
      {/* Page Header */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-muted/40 via-background to-background border-b border-border/60 relative overflow-hidden">
        {/* Halftone backdrop */}
        <div className="absolute top-0 right-0 w-80 h-80 halftone-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(240,68,36,0.12)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F04424]/10 border border-[#F04424]/20 text-[#F04424] text-xs font-bold uppercase tracking-wider mb-5">
              <Mail className="w-3.5 h-3.5" /> Project Inquiries & Sprint Scoping
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Let&apos;s build something
              <br />
              <span className="text-[#F04424] italic">exceptional together.</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6">
              Share your software requirements, tech stack preferences, or MVP roadmap. Our engineering leads will review your specs, draft a sprint plan, and respond within 24 hours.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-foreground/80">
              <div className="flex items-center gap-1.5 bg-card px-3 py-1.5 rounded-full border border-border shadow-xs">
                <Clock className="w-3.5 h-3.5 text-[#F04424]" /> 24-Hour Response SLA
              </div>
              <div className="flex items-center gap-1.5 bg-card px-3 py-1.5 rounded-full border border-border shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Mutual NDA Covered
              </div>
              <div className="flex items-center gap-1.5 bg-card px-3 py-1.5 rounded-full border border-border shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Transparent Rates from ₹450/hr
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <ContactSection />
    </div>
  );
}
