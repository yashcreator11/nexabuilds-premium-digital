import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const COMPANY_NAME = 'FuturaX';
const COMPANY_SUFFIX = ' Solutions';

function TypewriterBrand() {
  const [displayedName, setDisplayedName] = useState('');
  const [displayedSuffix, setDisplayedSuffix] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState<'name' | 'suffix' | 'done'>('name');
  const hasAnimated = useRef(false);

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem('futurax_brand_typed');
    if (alreadyPlayed) {
      setDisplayedName(COMPANY_NAME);
      setDisplayedSuffix(COMPANY_SUFFIX);
      setPhase('done');
      setShowCursor(false);
      hasAnimated.current = true;
      return;
    }

    let i = 0;
    const nameInterval = setInterval(() => {
      i++;
      setDisplayedName(COMPANY_NAME.slice(0, i));
      if (i >= COMPANY_NAME.length) {
        clearInterval(nameInterval);
        setTimeout(() => {
          setPhase('suffix');
          let j = 0;
          const suffixInterval = setInterval(() => {
            j++;
            setDisplayedSuffix(COMPANY_SUFFIX.slice(0, j));
            if (j >= COMPANY_SUFFIX.length) {
              clearInterval(suffixInterval);
              setPhase('done');
              sessionStorage.setItem('futurax_brand_typed', '1');
              setTimeout(() => setShowCursor(false), 1200);
            }
          }, 60);
        }, 300);
      }
    }, 90);

    return () => clearInterval(nameInterval);
  }, []);

  return (
    <a href="#" className="flex items-baseline gap-0 shrink-0 select-none group">
      <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter text-foreground">
        {displayedName.split('').map((char, idx) => (
          <span
            key={idx}
            className={idx >= COMPANY_NAME.length - 1 ? 'text-primary' : ''}
          >
            {char}
          </span>
        ))}
      </span>
      <span className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-muted-foreground">
        {displayedSuffix}
      </span>
      {showCursor && (
        <span className="inline-block w-[2px] h-6 md:h-7 bg-primary ml-0.5 animate-pulse" />
      )}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <TypewriterBrand />

        <div className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#contact"
            className="inline-flex items-center h-10 px-6 text-sm font-semibold bg-primary text-primary-foreground hover:brightness-110 transition-all"
          >
            Start a Project
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40 flex flex-col items-center justify-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-bold text-foreground"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="w-12 h-12 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center h-12 px-8 text-base font-semibold bg-primary text-primary-foreground"
          >
            Start a Project
          </a>
        </div>
      )}
    </motion.nav>
  );
}
