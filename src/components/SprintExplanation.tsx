import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Hammer, Eye, Sparkles, RefreshCw } from 'lucide-react';

const cycle = [
  { icon: Hammer, label: 'Build' },
  { icon: Eye, label: 'Show' },
  { icon: Sparkles, label: 'Improve' },
  { icon: RefreshCw, label: 'Repeat' },
];

export default function SprintExplanation() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 md:py-24 border-t border-border">
      <div className="container max-w-4xl">
        <div
          className={`bg-muted/30 border border-border p-8 md:p-12 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text side */}
            <div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-foreground mb-4">
                We Build in Small Steps
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We don't build everything at once.<br />
                We work in small steps called <span className="text-foreground font-semibold">sprints</span>.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  Each sprint lasts <span className="text-foreground font-medium">1–2 weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  After each sprint, <span className="text-foreground font-medium">you see progress</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  You give feedback, <span className="text-foreground font-medium">we improve it</span>
                </li>
              </ul>
            </div>

            {/* Cycle visual */}
            <div className="flex justify-center">
              <div className="relative w-56 h-56">
                {/* Circle connector */}
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-border" />

                {cycle.map((item, i) => {
                  const positions = [
                    'top-0 left-1/2 -translate-x-1/2',
                    'top-1/2 right-0 -translate-y-1/2',
                    'bottom-0 left-1/2 -translate-x-1/2',
                    'top-1/2 left-0 -translate-y-1/2',
                  ];
                  return (
                    <div
                      key={item.label}
                      className={`absolute ${positions[i]} flex flex-col items-center gap-1.5 transition-all duration-700 ease-out ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}
                      style={{ transitionDelay: isVisible ? `${400 + i * 150}ms` : '0ms' }}
                    >
                      <div className="w-12 h-12 rounded-full bg-background border border-primary/30 flex items-center justify-center hover:scale-110 hover:border-primary transition-all duration-300">
                        <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs font-bold text-foreground">{item.label}</span>
                    </div>
                  );
                })}

                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Sprint</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
