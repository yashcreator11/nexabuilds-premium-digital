import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ChatbotWidget from './ChatbotWidget';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative selection:bg-[#F04424] selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <WhatsAppButton />
      <ChatbotWidget />
    </div>
  );
}
