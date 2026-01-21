import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '5593999999999';
  const message = encodeURIComponent('Olá! Gostaria de mais informações sobre o Residencial Campo Verde.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-strong hover:scale-110 transition-transform pulse-glow group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-primary-foreground" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-4 py-2 bg-card text-foreground text-sm font-medium rounded-lg shadow-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale conosco!
      </span>
    </a>
  );
};

export default WhatsAppButton;
