import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Lightbulb, ClipboardList, Palette, Code, ShieldCheck, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  { icon: Lightbulb, title: 'Idea', desc: 'We understand your business and goals', color: 'from-primary/20 to-primary/5' },
  { icon: ClipboardList, title: 'Planning', desc: 'We create a clear plan to move forward', color: 'from-primary/20 to-primary/5' },
  { icon: Palette, title: 'Design', desc: 'We design how your product will look and feel', color: 'from-primary/20 to-primary/5' },
  { icon: Code, title: 'Development', desc: 'We build your solution step by step', color: 'from-primary/20 to-primary/5' },
  { icon: ShieldCheck, title: 'Testing', desc: 'We make sure everything works smoothly', color: 'from-primary/20 to-primary/5' },
  { icon: Rocket, title: 'Launch', desc: 'We take your product live', color: 'from-primary/20 to-primary/5' },
  { icon: TrendingUp, title: 'Improvement', desc: 'We keep improving it over time', color: 'from-primary/20 to-primary/5' },
];

export default function HowWeWorkSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="how-we-work" ref={ref} className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple, step-by-step process that turns your idea into a real product.
          </p>
        </div>

        {/* Flow Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-16 left-[calc(100%/14)] right-[calc(100%/14)] h-0.5 bg-gradient-to-r from-border via-primary/30 to-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`relative flex flex-col items-center text-center group transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.9]'
                }`}
                style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
              >
                {/* Step number */}
                <div className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest mb-3">
                  Step {i + 1}
                </div>

                {/* Icon circle */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                  <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>

                {/* Arrow between steps - mobile/tablet */}
                {i < steps.length - 1 && (
                  <div className="hidden sm:block lg:hidden absolute -right-3 top-[4.5rem] text-muted-foreground/30">
                    →
                  </div>
                )}

                <h3 className="text-sm font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[140px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
