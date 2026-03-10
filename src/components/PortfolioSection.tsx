import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = ['All', 'Web', 'Mobile', 'Automation'];

const projects = [
  { title: 'Meridian Dashboard', category: 'Web', tags: ['React', 'Node.js', 'PostgreSQL'], desc: 'Real-time analytics platform for a logistics company, reducing reporting time by 70%.', result: '70% faster reporting' },
  { title: 'Pulse Fitness App', category: 'Mobile', tags: ['React Native', 'Firebase'], desc: 'Cross-platform fitness tracking app with 10k+ monthly active users.', result: '10k+ MAU' },
  { title: 'Vertex Invoice Automation', category: 'Automation', tags: ['Python', 'Zapier', 'QuickBooks'], desc: 'End-to-end invoice processing pipeline saving 15 hours per week.', result: '15 hrs/week saved' },
  { title: 'Onyx E-Commerce', category: 'Web', tags: ['Next.js', 'Stripe', 'Tailwind'], desc: 'High-conversion storefront with 40% increase in online sales.', result: '40% sales increase' },
  { title: 'Solaris CRM', category: 'Web', tags: ['Vue.js', 'Supabase'], desc: 'Custom CRM replacing spreadsheet chaos with structured pipeline management.', result: '3x pipeline velocity' },
  { title: 'Acme Workflow Engine', category: 'Automation', tags: ['Node.js', 'AWS Lambda'], desc: 'Serverless automation handling 50k+ tasks monthly without intervention.', result: '50k+ tasks/month' },
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState('All');
  const { ref, isVisible } = useScrollReveal();
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" ref={ref} className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4">
          Our Work Speaks for Itself
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl">
          A selection of projects that delivered measurable results.
        </p>

        <div className="flex gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                filter === c
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {filtered.map((p, i) => (
            <div
              key={p.title}
              className={`bg-background p-8 group transition-all duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              <div className="text-xs font-medium text-primary mb-3 uppercase tracking-widest">
                {p.category}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs text-muted-foreground border border-border px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
              <div className="text-sm font-semibold text-primary">{p.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
