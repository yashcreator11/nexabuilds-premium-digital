import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

const navLinks = [
  { label: 'Overview', path: '/' },
  { label: 'Sprints & Rates', path: '/sprints' },
  { label: 'Delivered Work', path: '/work' },
  { label: 'Our Squad', path: '/squad' },
  { label: 'Start Project', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
          ? 'bg-background/95 dark:bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-3'
          : 'bg-background/80 dark:bg-background/70 backdrop-blur-xs py-4'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group select-none">
          <div className="w-8 h-8 rounded-lg bg-[#F04424] flex items-center justify-center text-white font-serif text-sm font-bold shadow-[0_0_15px_rgba(240,68,36,0.4)] group-hover:scale-105 transition-transform">
            AS
          </div>
          <div className="flex items-baseline">
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
              Agile<span className="text-[#F04424] italic">Squad</span>
            </span>
          </div>
        </Link>

        {/* Center Navigation Tabs */}
        <div className="hidden lg:flex items-center gap-1 bg-card/90 dark:bg-muted/30 border border-border rounded-full p-1 shadow-sm backdrop-blur-sm">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-200 select-none ${
                  isActive
                    ? 'bg-[#F04424] text-white shadow-sm font-bold'
                    : 'text-foreground/80 hover:text-[#F04424] hover:bg-muted/70'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <Link
            to="/contact"
            className="text-xs font-bold px-4 py-2 rounded-full border border-border bg-card text-foreground hover:bg-muted shadow-xs transition-all"
          >
            Get a Quote
          </Link>

          <a
            href="https://wa.me/919619036483?text=Hi%20AgileSquad,%20I%20would%20like%20to%20book%20a%20demo%20for%20my%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-[#F04424] text-white hover:bg-[#d6391b] transition-all shadow-[0_4px_16px_rgba(240,68,36,0.35)] hover:shadow-[0_6px_22px_rgba(240,68,36,0.45)]"
          >
            Book Demo <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="flex lg:hidden items-center gap-1.5">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-foreground/80 hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            className="p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
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
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden px-6 py-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-semibold px-4 py-2.5 rounded-xl transition-all ${
                      isActive
                        ? 'bg-[#F04424] text-white font-bold shadow-xs'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-border flex flex-col gap-2.5">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full text-center text-xs font-semibold py-2.5 rounded-full border border-border text-foreground hover:bg-muted transition-all"
                >
                  Get a Quote
                </Link>
                <a
                  href="https://wa.me/919619036483?text=Hi%20AgileSquad,%20I%20would%20like%20to%20book%20a%20demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center text-xs font-bold py-2.5 rounded-full bg-[#F04424] text-white shadow-md hover:bg-[#d6391b] transition-all"
                >
                  Book Demo via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
