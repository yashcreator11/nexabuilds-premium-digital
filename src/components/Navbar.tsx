import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#how-we-work' },
  { label: 'Squad', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 dark:bg-background/85 backdrop-blur-md border-b border-border shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo - Redpanda Style Editorial Serif */}
        <a href="#" className="flex items-center gap-2 group select-none">
          <div className="w-8 h-8 rounded-lg bg-[#F04424] flex items-center justify-center text-white font-serif text-sm font-bold shadow-[0_0_15px_rgba(240,68,36,0.4)] group-hover:scale-105 transition-transform">
            AS
          </div>
          <div className="flex items-baseline">
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
              Agile<span className="text-[#F04424] italic">Squad</span>
            </span>
          </div>
        </a>

        {/* Center Links */}
        <div className="hidden lg:flex items-center gap-1 bg-card/90 dark:bg-muted/30 border border-border rounded-full px-4 py-1.5 shadow-sm dark:shadow-none backdrop-blur-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold text-foreground/80 hover:text-[#F04424] hover:bg-muted px-3.5 py-1 rounded-full transition-all duration-150"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <a
            href="#contact"
            className="text-xs font-bold px-4 py-2 rounded-full border border-border bg-card text-foreground hover:bg-muted shadow-sm transition-all"
          >
            Get a Quote
          </a>

          <a
            href="https://wa.me/919619036483?text=Hi%20AgileSquad,%20I%20would%20like%20to%20book%20a%20demo%20for%20my%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-5 py-2.5 rounded-full bg-[#F04424] text-white hover:bg-[#d6391b] transition-all shadow-[0_4px_16px_rgba(240,68,36,0.35)] hover:shadow-[0_6px_22px_rgba(240,68,36,0.45)]"
          >
            Book Demo <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold text-foreground hover:text-[#F04424] transition-colors py-1"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="w-full text-center text-sm font-semibold py-2.5 rounded-full border border-border text-foreground"
                >
                  Get a Quote
                </a>
                <a
                  href="https://wa.me/919619036483?text=Hi%20AgileSquad,%20I%20would%20like%20to%20book%20a%20demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center text-sm font-bold py-2.5 rounded-full bg-[#F04424] text-white shadow-md"
                >
                  Book Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
