import { Star, CheckCircle2, ShieldCheck, Quote, Building2, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  role: string;
  company: string;
  tag: string;
  verifiedSprint: string;
  highlightMetric: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'We run two continuous shifts across multiple branches in India, so 24/7 system reliability was our top priority. AgileSquad delivered a rock-solid biometric and geofenced in-office QR attendance platform that our entire workforce uses every day. What impressed us most was their agile adaptability — when our shift requirements changed midway, they seamlessly incorporated the adjustments into the next sprint and delivered exactly on time as promised.',
    role: 'Head of Operations & IT [Identity Protected under NDA]',
    company: 'Pan-India Enterprise Organization (Branches Across India)',
    tag: 'Enterprise Biometric & Geofenced QR Attendance',
    verifiedSprint: '✓ Verified: 3 Sprints • 24/7 Production Deployment Across All Branches',
    highlightMetric: '24/7 Zero-Downtime Reliability across 2 Shifts',
  },
  {
    quote:
      'Building a two-sided platform where local service providers and consumers can connect without risking identity or contact number leakage was a critical engineering challenge. AgileSquad architected our marketplace ensuring strict privacy protection with zero identity leaks while keeping the onboarding and booking experience super smooth. They delivered milestone-by-milestone with total transparency and complete code handover.',
    role: 'Founder & Product Lead [Identity Protected under NDA]',
    company: 'LocalNest — Hyperlocal Service Marketplace Startup',
    tag: 'Two-Sided Marketplace & Privacy Engine',
    verifiedSprint: '✓ Verified: 2 Sprints • Zero Identity Leaks • Full Repo Handover',
    highlightMetric: '100% Identity Protection & Data Masking',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-36 border-t border-border/60 relative overflow-hidden">
      {/* Background warm radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle,rgba(240,68,36,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F04424]/10 border border-[#F04424]/20 text-[#F04424] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
            Real feedback from our <br />
            <span className="text-[#F04424] italic font-normal">delivered sprint engagements.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Real clients whose products we engineered and shipped on schedule. Client personal names are kept strictly confidential per our mutual Non-Disclosure Agreements (NDAs).
          </p>
        </div>

        {/* 2 Flagship Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 sm:p-9 md:p-10 rounded-3xl bg-card border border-border/80 hover:border-[#F04424]/40 hover:shadow-[0_20px_50px_rgba(240,68,36,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating + Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#F04424] text-[#F04424]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F04424] bg-[#F04424]/10 border border-[#F04424]/20 px-3 py-1 rounded-full">
                    {t.tag}
                  </span>
                </div>

                {/* Quote in Editorial Serif */}
                <blockquote className="font-editorial text-foreground text-lg sm:text-xl leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div>
                {/* Verified Sprint Badge */}
                <div className="p-3 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 mb-6 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
                      {t.verifiedSprint}
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">
                      Key Deliverable: {t.highlightMetric}
                    </div>
                  </div>
                </div>

                {/* Author Block with Confidential Badge */}
                <div className="pt-5 border-t border-border/60 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-muted/70 border border-border/80 flex items-center justify-center text-muted-foreground shrink-0 mt-0.5">
                    <Lock className="w-4 h-4 text-[#F04424]" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foreground flex items-center gap-1.5">
                      <span>{t.role}</span>
                    </div>
                    <div className="text-xs text-muted-foreground font-medium mt-0.5 flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-[#F04424]" />
                      <span>{t.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* NDA Assurance Banner */}
        <div className="p-5 rounded-2xl bg-muted/30 border border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-[#F04424] shrink-0" />
            <span>
              <strong className="text-foreground">NDA & Client Privacy:</strong> We strictly protect client proprietary code, staff identities, and internal metrics. Full architecture demos are available during sprint intro calls.
            </span>
          </div>
          <a
            href="#contact"
            className="w-full sm:w-auto text-center px-4 py-2 rounded-full bg-card border border-border text-foreground hover:border-[#F04424] hover:text-[#F04424] font-semibold shrink-0 transition-colors"
          >
            Schedule Intro Demo →
          </a>
        </div>
      </div>
    </section>
  );
}
