import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CTABanner() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-32 bg-primary">
      <div
        className={`container text-center max-w-3xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary-foreground mb-4">
          Ready to Turn Your Idea Into Reality?
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-10">
          Let's build something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center h-12 px-8 text-base font-semibold bg-primary-foreground text-primary hover:opacity-90 transition-all"
          >
            Start a Project
          </a>
          <a
            href="#contact"
            className="inline-flex items-center h-12 px-8 text-base font-semibold border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
