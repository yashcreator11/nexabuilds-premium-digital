import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatbotWidget from './ChatbotWidget';

const ROUTE_TITLES: Record<string, string> = {
  '/': 'AgileSquad — Dedicated 6-Role Engineering Squads • Pay-Per-Sprint',
  '/sprints': 'Sprints & Rates (From min ₹450/hr) • AgileSquad',
  '/work': 'Delivered Production Case Studies • AgileSquad',
  '/squad': 'Meet The 6-Role Squad & Standards • AgileSquad',
  '/contact': 'Start a Project & Sprint Quote • AgileSquad',
};

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top on page switch
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Dynamic browser tab title
    const pageTitle = ROUTE_TITLES[pathname] || 'AgileSquad — Dedicated Engineering Squads';
    document.title = pageTitle;
  }, [pathname]);

  return null;
}

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative selection:bg-[#F04424] selection:text-white">
      <RouteEffects />
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
