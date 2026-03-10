import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container text-center max-w-4xl">
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-foreground">
            Smart Software Solutions
            <br />
            for Growing Businesses
          </h1>
        </div>

        <div
          className={`transition-all duration-700 ease-out delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We build websites, automation tools, and custom software that help
            businesses grow faster and work smarter.
          </p>
        </div>

        <div
          className={`mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#contact"
            className="inline-flex items-center h-12 px-8 text-base font-semibold bg-primary text-primary-foreground hover:brightness-110 transition-all"
          >
            Get a Free Quote
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center h-12 px-8 text-base font-semibold border border-border text-foreground hover:bg-muted transition-all"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
