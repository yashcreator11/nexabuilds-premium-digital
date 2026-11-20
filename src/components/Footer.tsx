import { Link } from 'react-router-dom';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import BrandLogo from './BrandLogo';

const navigation = {
  navigation: [
    { name: 'Overview', href: '/' },
    { name: 'Sprints & Rates', href: '/sprints' },
    { name: 'Delivered Work', href: '/work' },
    { name: 'Our Squad', href: '/squad' },
    { name: 'Start a Project', href: '/contact' },
  ],
  squad: [
    { name: 'UI/UX & Figma Design', href: '/squad' },
    { name: 'Frontend Architecture', href: '/squad' },
    { name: 'Backend & APIs', href: '/squad' },
    { name: 'DevOps & Cloud Infra', href: '/squad' },
    { name: 'Cybersecurity & OWASP', href: '/squad' },
    { name: 'QA & Staging Tests', href: '/squad' },
  ],
  process: [
    { name: 'Pay-Per-Sprint Model', href: '/sprints' },
    { name: '14-Day Sprint Calendar', href: '/sprints' },
    { name: 'Rate Calculator (₹450/hr)', href: '/sprints' },
    { name: 'Delivered Case Studies', href: '/work' },
    { name: 'Client Testimonials', href: '/work' },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/70 bg-[#120D0B] text-white py-16 md:py-24 relative overflow-hidden">
      {/* Halftone footer glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 halftone-pattern opacity-20 pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4 group select-none">
              <BrandLogo size="md" className="[&_span]:text-white" />
            </Link>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed mb-6">
              Precision software engineering, workflow automation, and dedicated multidisciplinary squads for modern businesses worldwide.
            </p>
            <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-zinc-300 font-medium">Currently Booking 2-Week Sprints</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F04424] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {navigation.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F04424] mb-4">
              Your Squad
            </h4>
            <ul className="space-y-2.5">
              {navigation.squad.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F04424] mb-4">
              Workflow & Sprints
            </h4>
            <ul className="space-y-2.5">
              {navigation.process.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} AgileSquad. All rights reserved.</span>
            <span>&bull;</span>
            <span className="text-zinc-400 font-medium">Confidential Client Work Protected under NDA</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-zinc-300 transition-colors">
              Request a Sprint Quote
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              Back to top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
