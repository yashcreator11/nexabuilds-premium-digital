import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Preloader from '@/components/Preloader';
import HeroSection from '@/components/HeroSection';
import TrustedBy from '@/components/TrustedBy';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ProblemsSection from '@/components/ProblemsSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import SprintExplanation from '@/components/SprintExplanation';
import ContinuousEnhancements from '@/components/ContinuousEnhancements';
import WhyGoOnlineSection from '@/components/WhyGoOnlineSection';
import IndianTouchSection from '@/components/IndianTouchSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProcessSection from '@/components/ProcessSection';
import AboutSection from '@/components/AboutSection';
import CTABanner from '@/components/CTABanner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ChatbotWidget from '@/components/ChatbotWidget';

const Index = () => {
  const isFirstVisit = !sessionStorage.getItem('agilesquad_visited');
  const [showPreloader, setShowPreloader] = useState(isFirstVisit);

  const handlePreloaderComplete = useCallback(() => {
    sessionStorage.setItem('agilesquad_visited', '1');
    setShowPreloader(false);
  }, []);

  if (showPreloader) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="grain-overlay">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBy />
        <ServicesSection />
        <PortfolioSection />
        <ProblemsSection />
        <HowWeWorkSection />
        <SprintExplanation />
        <ContinuousEnhancements />
        <ProcessSection />
        <WhyGoOnlineSection />
        <IndianTouchSection />
        <StatsSection />
        <TestimonialsSection />
        <AboutSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatbotWidget />
    </div>
  );
};

export default Index;
