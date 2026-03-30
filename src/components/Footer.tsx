import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const columns = [
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Press'] },
  { title: 'Services', links: ['Web Development', 'Custom Software', 'Automation', 'Mobile Apps'] },
  { title: 'Projects', links: ['Case Studies', 'Portfolio', 'Open Source'] },
  { title: 'Contact', links: ['yashkhandagale9619@gmail.com', '+91 9619036483', 'India'] },
];

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'X' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-border">
          <div className="flex items-center gap-6">
            <span className="text-lg font-extrabold text-foreground">FuturaX Solutions</span>
            <span className="text-xs text-muted-foreground">Building the future, one product at a time.</span>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-xs text-muted-foreground gap-2">
          <span>© {new Date().getFullYear()} FuturaX Solutions. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
