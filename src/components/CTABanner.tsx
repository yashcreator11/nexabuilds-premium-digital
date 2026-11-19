import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden bg-gradient-to-br from-[#1C120F] via-[#2D1610] to-[#120D0B] text-white">
      {/* Halftone backdrop */}
      <div className="absolute inset-0 halftone-pattern opacity-25 pointer-events-none" />

      {/* Warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(240,68,36,0.3)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="container max-w-4xl mx-auto text-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#F04424] bg-[#F04424]/15 border border-[#F04424]/30 px-4 py-1.5 rounded-full mb-6">
            Risk-Free Execution • Pay-Per-Sprint
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Ready to build high-velocity software?
          </h2>

          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Let our dedicated 6-role engineering squad take your product from napkin sketch to production-grade deployment in focused agile sprints.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-13 px-8 text-sm font-bold rounded-full bg-[#F04424] text-white hover:bg-[#d6391b] transition-all shadow-[0_6px_25px_rgba(240,68,36,0.5)] hover:-translate-y-0.5"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919619036483?text=Hi%20AgileSquad,%20I%20would%20like%20to%20book%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-13 px-8 text-sm font-semibold rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Quick WhatsApp Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
