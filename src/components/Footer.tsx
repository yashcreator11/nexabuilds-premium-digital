import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, MessageCircle, ArrowUp } from 'lucide-react';

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
            <Link to="/" className="flex items-center gap-2 mb-4 group select-none">
              <div className="w-8 h-8 rounded-lg bg-[#F04424] flex items-center justify-center text-white font-serif text-sm font-bold shadow-[0_0_15px_rgba(240,68,36,0.4)] group-hover:scale-105 transition-transform">
                AS
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Agile<span className="text-[#F04424] italic">Squad</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed mb-6">
              Precision software engineering, workflow automation, and dedicated multidisciplinary squads for modern businesses worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/yashcreator11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#F04424] hover:border-[#F04424]/40 hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="text-xs font-semibold px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white/90 hover:text-white transition-all"
              >
                Intake Portal
              </Link>
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
