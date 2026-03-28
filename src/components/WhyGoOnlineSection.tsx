import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Users, ShieldCheck, Clock, DollarSign } from 'lucide-react';

const comparisons = [
  { icon: Users, offline: 'Limited to walk-ins', online: 'Reach customers everywhere', label: 'Reach More Customers' },
  { icon: ShieldCheck, offline: 'Word-of-mouth only', online: 'Professional digital presence', label: 'Build Trust' },
  { icon: Clock, offline: 'Open during business hours', online: 'Available 24/7, even while you sleep', label: '24/7 Availability' },
  { icon: DollarSign, offline: 'Revenue capped by location', online: 'Unlimited growth potential', label: 'Increase Revenue' },
];

export default function WhyGoOnlineSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            Why Your Business Should Go Online
          </h2>
          <p className="text-muted-foreground text-lg">
            The digital shift isn't optional anymore — it's your biggest growth lever.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {comparisons.map((c, i) => (
            <div
              key={c.label}
              className={`border border-border bg-background p-6 md:p-8 group hover:border-primary/30 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.92]'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : '0ms' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <c.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-3">{c.label}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                      <span className="text-muted-foreground line-through decoration-muted-foreground/30">{c.offline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-foreground font-medium">{c.online}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
