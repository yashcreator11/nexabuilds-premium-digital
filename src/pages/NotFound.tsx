import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Clock, Briefcase, Users, Mail } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24 sm:py-32 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(240,68,36,0.12)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute inset-0 halftone-pattern opacity-15 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-lg w-full text-center relative z-10 p-8 sm:p-10 rounded-3xl bg-card border border-border/80 shadow-xl"
      >
        <div className="flex justify-center mb-6">
          <BrandLogo size="lg" showWordmark={false} />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#F04424] block mb-2">
          Error 404 • Milestone Not Found
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
          This sprint doesn&apos;t exist.
        </h1>

        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          The page or route you are looking for may have moved, been renamed, or was never planned in the sprint scope.
        </p>

        <div className="flex flex-col gap-2.5 mb-8 text-left">
          <Link
            to="/"
            className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-[#F04424]/10 hover:border-[#F04424]/40 border border-border text-foreground transition-all group"
          >
            <Home className="w-4 h-4 text-[#F04424]" />
            <div className="flex-1">
              <span className="text-xs font-bold block group-hover:text-[#F04424] transition-colors">Overview Home</span>
              <span className="text-[10px] text-muted-foreground">High-level sprint summary & highlights</span>
            </div>
          </Link>

          <Link
            to="/sprints"
            className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-[#F04424]/10 hover:border-[#F04424]/40 border border-border text-foreground transition-all group"
          >
            <Clock className="w-4 h-4 text-[#F04424]" />
            <div className="flex-1">
              <span className="text-xs font-bold block group-hover:text-[#F04424] transition-colors">Sprints & Rates</span>
              <span className="text-[10px] text-muted-foreground">14-day calendar & ₹450/hr calculator</span>
            </div>
          </Link>

          <Link
            to="/work"
            className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-[#F04424]/10 hover:border-[#F04424]/40 border border-border text-foreground transition-all group"
          >
            <Briefcase className="w-4 h-4 text-[#F04424]" />
            <div className="flex-1">
              <span className="text-xs font-bold block group-hover:text-[#F04424] transition-colors">Delivered Work</span>
              <span className="text-[10px] text-muted-foreground">Biometric & LocalNest case studies</span>
            </div>
          </Link>

          <Link
            to="/squad"
            className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-[#F04424]/10 hover:border-[#F04424]/40 border border-border text-foreground transition-all group"
          >
            <Users className="w-4 h-4 text-[#F04424]" />
            <div className="flex-1">
              <span className="text-xs font-bold block group-hover:text-[#F04424] transition-colors">Our Squad</span>
              <span className="text-[10px] text-muted-foreground">Full 6-role engineering team</span>
            </div>
          </Link>
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#F04424] text-white text-xs font-bold hover:bg-[#d6391b] transition-all shadow-md w-full"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Homepage
        </Link>
      </motion.div>
    </div>
  );
}
