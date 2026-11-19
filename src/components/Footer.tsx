import { Github, Linkedin, Twitter, MessageCircle, ArrowUp } from 'lucide-react';

const navigation = {
  services: [
    { name: 'Custom Web Apps', href: '#services' },
    { name: 'AI & Automation', href: '#services' },
    { name: 'Executive Dashboards', href: '#services' },
    { name: 'Mobile Development', href: '#services' },
  ],
  squad: [
    { name: 'UI/UX & Figma', href: '#about' },
    { name: 'Frontend Engineering', href: '#about' },
    { name: 'Cybersecurity Auditing', href: '#about' },
    { name: 'QA & Test Automation', href: '#about' },
  ],
  process: [
    { name: 'Pay-Per-Sprint Model', href: '#how-we-work' },
    { name: 'Case Studies', href: '#portfolio' },
    { name: 'Client Testimonials', href: '#testimonials' },
    { name: 'Book a Live Demo', href: '#contact' },
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
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#F04424] flex items-center justify-center text-white font-serif text-sm font-bold shadow-[0_0_15px_rgba(240,68,36,0.4)]">
                AS
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Agile<span className="text-[#F04424] italic">Squad</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed mb-6">
              Precision software engineering, workflow automation, and dedicated multidisciplinary squads for modern businesses worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919619036483"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#F04424] hover:border-[#F04424]/40 hover:bg-white/10 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#F04424] hover:border-[#F04424]/40 hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#F04424] hover:border-[#F04424]/40 hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F04424] mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
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
                  <a
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F04424] mb-4">
              Workflow
            </h4>
            <ul className="space-y-2.5">
              {navigation.process.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} AgileSquad. Built with precision and care.
          </div>

          <div className="flex items-center gap-6">
            <span>Pay-per-sprint guarantee</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-[#F04424] transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
