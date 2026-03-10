import { useScrollReveal } from '@/hooks/useScrollReveal';

const logos = ['Acme Corp', 'Vertex AI', 'Solaris', 'Meridian', 'Onyx Group', 'Pulse Labs'];

export default function TrustedBy() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 md:py-24 border-t border-border">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">
          Trusted by 50+ businesses
        </p>
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {logos.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center h-12 text-muted-foreground font-semibold text-sm tracking-wide"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
