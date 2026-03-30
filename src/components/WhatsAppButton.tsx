import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919619036483"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground flex items-center justify-center hover:brightness-110 transition-all"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute top-1 right-1 w-3 h-3 bg-foreground rounded-full animate-pulse" />
    </a>
  );
}
