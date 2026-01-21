import { useState } from 'react';
import { Send, User, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { PatternFormat } from 'react-number-format';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `Olá! Tenho interesse no Residencial Campo Verde.\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nE-mail: ${formData.email}`
    );

    window.open(`https://wa.me/5593999999999?text=${message}`, '_blank');

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Em breve um consultor entrará em contato!",
    });
  };

  return (
    <div className="bg-card rounded-2xl shadow-strong p-8 max-w-md w-full">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Receba Informações
        </h3>
        <p className="text-muted-foreground">
          Preencha seus dados e receba condições exclusivas
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="pl-11 h-12 bg-secondary border-0"
            required
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <PatternFormat
            format="(##) #####-####"
            mask="_"
            customInput={Input}
            type="tel"
            placeholder="(00) 00000-0000"
            value={formData.phone}
            onValueChange={(values) => setFormData({ ...formData, phone: values.formattedValue })}
            className="pl-11 h-12 bg-secondary border-0"
            required
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="pl-11 h-12 bg-secondary border-0"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 shadow-medium"
        >
          <Send className="w-5 h-5" />
          Enviar e Falar com Consultor
        </Button>
      </form>

      <p className="text-xs text-muted-foreground text-center mt-4">
        Seus dados estão protegidos. Não compartilhamos informações.
      </p>
    </div>
  );
};

export default ContactForm;
