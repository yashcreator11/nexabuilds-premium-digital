import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Store, Globe, Zap, ArrowRight } from 'lucide-react';

export default function IndianTouchSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-32 border-t border-border">
      <div className="container max-w-4xl">
        <div
          className={`relative overflow-hidden border border-border bg-gradient-to-br from-primary/5 via-background to-primary/5 p-10 md:p-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-3">
              From Local Shops to Digital Brands
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl">
              Helping Indian businesses grow globally — one product at a time.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                { icon: Store, title: 'Built for India', desc: 'We understand local businesses, their challenges, and what they need to grow.' },
                { icon: Globe, title: 'Global Standards', desc: 'World-class design and technology — at a price that makes sense for Indian businesses.' },
                { icon: Zap, title: 'Fast & Reliable', desc: 'From street-side startups to scaling brands, we ship products that just work.' },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: isVisible ? `${300 + i * 150}ms` : '0ms' }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Let's build something together <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
