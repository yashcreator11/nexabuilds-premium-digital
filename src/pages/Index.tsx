import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import HeroSection from '@/components/HeroSection';
import TrustedBy from '@/components/TrustedBy';
import ServicesSection from '@/components/ServicesSection';
import ProblemsSection from '@/components/ProblemsSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import SprintExplanation from '@/components/SprintExplanation';
import ContinuousEnhancements from '@/components/ContinuousEnhancements';
import WhyGoOnlineSection from '@/components/WhyGoOnlineSection';
import IndianTouchSection from '@/components/IndianTouchSection';
import StatsSection from '@/components/StatsSection';
import ProcessSection from '@/components/ProcessSection';
import AboutSection from '@/components/AboutSection';
import CTABanner from '@/components/CTABanner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="grain-overlay">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBy />
        <ServicesSection />
        <ProblemsSection />
        <HowWeWorkSection />
        <SprintExplanation />
        <ContinuousEnhancements />
        <ProcessSection />
        <WhyGoOnlineSection />
        <IndianTouchSection />
        <StatsSection />
        <AboutSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
