import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919619036483"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-40 w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-500 hover:scale-105 shadow-[0_4px_20px_rgba(16,185,129,0.35)] transition-all border border-white/20 group"
      title="Chat on WhatsApp (+91 9619036483)"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:group-hover:inline-block absolute left-14 whitespace-nowrap bg-background text-foreground text-xs font-semibold px-3 py-1.5 rounded-full border border-border shadow-md">
        WhatsApp Us
      </span>
    </a>
  );
}
