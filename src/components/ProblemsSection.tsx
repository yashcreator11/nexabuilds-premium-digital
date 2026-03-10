import { useScrollReveal } from '@/hooks/useScrollReveal';
import { AlertCircle, ArrowRight } from 'lucide-react';

const problems = [
  { problem: 'No online presence', solution: 'A conversion-focused website live in weeks' },
  { problem: 'Manual, error-prone workflows', solution: 'Automated systems that run while you sleep' },
  { problem: 'No CRM or client tracking', solution: 'A centralized hub for every relationship' },
  { problem: 'Poor data visibility', solution: 'Real-time dashboards with actionable metrics' },
  { problem: 'No automation in place', solution: 'Integrated pipelines from lead to invoice' },
  { problem: 'Slow, outdated legacy systems', solution: 'Modern architecture built for scale' },
];

export default function ProblemsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4">
          Sound Familiar?
        </h2>
        <p className="text-muted-foreground text-lg mb-14 max-w-xl">
          These are the exact problems our clients had before they called us.
        </p>

        <div className="space-y-0 divide-y divide-border">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 py-6 md:py-8 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              <div className="flex items-center gap-3 text-muted-foreground">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span className="text-base">{p.problem}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground font-medium">
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                <span className="text-base">{p.solution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
