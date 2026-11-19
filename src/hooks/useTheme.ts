import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const explicitPref = localStorage.getItem('agilesquad_theme_mode');
      if (explicitPref === 'dark' || explicitPref === 'light') {
        return explicitPref;
      }
      // Clean legacy theme key if present so default is strictly light mode
      localStorage.removeItem('theme');
      return 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.classList.toggle('light', theme === 'light');
    localStorage.setItem('agilesquad_theme_mode', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
