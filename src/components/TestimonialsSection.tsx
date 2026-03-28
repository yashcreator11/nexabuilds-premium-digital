import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Star } from 'lucide-react';

const testimonials = [
  { quote: 'FuturaX Solutions transformed our operations. What used to take our team all week now runs automatically.', name: 'David Park', company: 'Meridian Logistics', rating: 5 },
  { quote: 'They built our e-commerce platform in 6 weeks. Sales are up 40% since launch. No fluff, just results.', name: 'Lisa Chen', company: 'Onyx Retail', rating: 5 },
  { quote: 'Finally, a dev team that actually listens. They understood our business before they started building.', name: 'James Okafor', company: 'Pulse Health', rating: 5 },
  { quote: 'The dashboard they built gives us visibility we never had. We make better decisions every single day.', name: 'Maria Santos', company: 'Vertex Analytics', rating: 5 },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  const t = testimonials[current];

  return (
    <section ref={ref} className="py-20 md:py-32 border-t border-border">
      <div className="container max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-14">
          What Our Clients Say
        </h2>

        <div
          className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8 min-h-[4rem]">
            "{t.quote}"
          </blockquote>
          <div className="text-sm font-bold text-foreground">{t.name}</div>
          <div className="text-xs text-muted-foreground mt-1">{t.company}</div>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 transition-colors ${
                i === current ? 'bg-primary' : 'bg-border'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
