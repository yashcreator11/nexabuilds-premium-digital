import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  { icon: Search, num: '01', title: 'Discovery', desc: 'We learn your business, goals, and constraints before writing a single line of code.' },
  { icon: Palette, num: '02', title: 'Design', desc: 'We prototype and validate the user experience so there are no surprises at launch.' },
  { icon: Code, num: '03', title: 'Development', desc: 'We build in focused sprints with weekly demos so you see progress, not promises.' },
  { icon: Rocket, num: '04', title: 'Launch & Support', desc: 'We deploy, monitor, and iterate. Your software improves long after day one.' },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="process" ref={ref} className="py-20 md:py-32 border-t border-border">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4">
          From Idea to Launch in 4 Steps
        </h2>
        <p className="text-muted-foreground text-lg mb-14 max-w-xl">
          A methodical process that removes uncertainty.
        </p>

        <div className="space-y-4">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`border border-border bg-background p-8 md:p-10 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.92]'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : '0ms' }}
            >
              <div className="flex items-start gap-6">
                <div className="text-3xl font-black text-muted-foreground/30 shrink-0">{s.num}</div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <s.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
