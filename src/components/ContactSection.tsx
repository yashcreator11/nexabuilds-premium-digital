import { useState, FormEvent } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {};
    const name = (form.get('name') as string)?.trim();
    const email = (form.get('email') as string)?.trim();
    const description = (form.get('description') as string)?.trim();
    if (!name) errs.name = 'Name is required';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Valid email is required';
    if (!description) errs.description = 'Tell us about your project';
    return errs;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4">
              Let's Talk
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="border border-primary p-8">
                <h3 className="text-lg font-bold text-foreground mb-2">Message sent.</h3>
                <p className="text-muted-foreground text-sm">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    name="name"
                    placeholder="Name"
                    maxLength={100}
                    className="w-full h-12 px-4 bg-transparent border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    maxLength={255}
                    className="w-full h-12 px-4 bg-transparent border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    name="business"
                    placeholder="Business Name (optional)"
                    maxLength={100}
                    className="w-full h-12 px-4 bg-transparent border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <select
                    name="budget"
                    className="w-full h-12 px-4 bg-transparent border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-muted-foreground">Budget Range</option>
                    <option value="5k-10k">$5,000 – $10,000</option>
                    <option value="10k-25k">$10,000 – $25,000</option>
                    <option value="25k-50k">$25,000 – $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="description"
                    placeholder="Tell us about your project"
                    rows={4}
                    maxLength={1000}
                    className="w-full px-4 py-3 bg-transparent border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                  {errors.description && <p className="text-xs text-destructive mt-1">{errors.description}</p>}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center h-12 px-8 text-sm font-semibold bg-primary text-primary-foreground hover:brightness-110 transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
                <span className="text-foreground text-sm">hello@futurax.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
                <span className="text-foreground text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <MessageCircle className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground text-sm hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
                <span className="text-foreground text-sm">San Francisco, CA</span>
              </div>
            </div>

            <div className="border border-border h-48 bg-muted flex items-center justify-center text-muted-foreground text-sm">
              Map Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
