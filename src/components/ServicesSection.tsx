import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Globe, Code, Zap, BarChart3, Smartphone, Cloud } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Web Development', desc: 'Launch a digital presence that converts visitors into customers.' },
  { icon: Code, title: 'Custom Software', desc: 'Purpose-built tools designed around your exact workflow.' },
  { icon: Zap, title: 'Business Automation', desc: 'Eliminate repetitive tasks and reclaim hours every week.' },
  { icon: BarChart3, title: 'Dashboards & Analytics', desc: 'Turn raw data into decisions with real-time visibility.' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Reach your customers wherever they are, on any device.' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'Scale infrastructure without scaling your overhead.' },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" ref={ref} className="py-20 md:py-32">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4">
          What We Build For You
        </h2>
        <p className="text-muted-foreground text-lg mb-14 max-w-xl">
          Six disciplines. One focus: making your business more capable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`bg-background p-8 md:p-10 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              <s.icon className="w-6 h-6 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
