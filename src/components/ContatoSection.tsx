import { Phone, Mail, MessageCircle } from 'lucide-react';
import ContactForm from './ContactForm';

const ContatoSection = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Entre em Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto Para Realizar{' '}
              <span className="text-primary">Seu Sonho?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nossa equipe está pronta para atendê-lo e apresentar as melhores 
              condições para você adquirir seu lote no Residencial Campo Verde.
            </p>

            <div className="space-y-6">
              <a
                href="tel:+5593999999999"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="text-lg font-semibold text-foreground">(93) 99999-9999</p>
                </div>
              </a>

              <a
                href="https://wa.me/5593999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <MessageCircle className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="text-lg font-semibold text-foreground">(93) 99999-9999</p>
                </div>
              </a>

              <a
                href="mailto:contato@monteverde.com.br"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="text-lg font-semibold text-foreground">contato@monteverde.com.br</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="flex justify-center lg:justify-end">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
