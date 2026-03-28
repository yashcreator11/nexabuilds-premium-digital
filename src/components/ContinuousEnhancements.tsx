import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MessageSquare, Wrench, Plus } from 'lucide-react';

const points = [
  { icon: MessageSquare, text: 'We improve based on real user feedback' },
  { icon: Wrench, text: 'We fix issues quickly' },
  { icon: Plus, text: 'We add new features as your business grows' },
];

export default function ContinuousEnhancements() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 md:py-24 border-t border-border">
      <div className="container max-w-3xl text-center">
        <h2
          className={`text-3xl md:text-4xl font-black tracking-tight text-foreground mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Your Project Doesn't Stop After Launch
        </h2>
        <p
          className={`text-muted-foreground text-lg mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          We stay with you, making your product better every day.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {points.map((p, i) => (
            <div
              key={i}
              className={`p-6 border border-border bg-background hover:border-primary/30 transition-all duration-700 ease-out group ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.92]'
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 120}ms` : '0ms' }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <p.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <p
          className={`text-lg font-semibold text-foreground italic transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}
        >
          "We grow your product as your business grows."
        </p>
      </div>
    </section>
  );
}
