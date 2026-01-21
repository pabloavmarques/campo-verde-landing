import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="font-bold text-lg text-accent-foreground">MV</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Monte Verde</h3>
                <p className="text-sm text-primary-foreground/70">Incorporadora e Construtora</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Há anos no mercado imobiliário, a Monte Verde é referência em 
              empreendimentos de qualidade, oferecendo as melhores oportunidades 
              para você realizar o sonho da casa própria.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#empreendimento" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  O Empreendimento
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#localizacao" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Rua das Mangueiras,<br />
                  Comunidade do Tabocal,<br />
                  Santarém - PA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+5593999999999" className="text-primary-foreground/80 text-sm hover:text-accent transition-colors">
                  (93) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:contato@monteverde.com.br" className="text-primary-foreground/80 text-sm hover:text-accent transition-colors">
                  contato@monteverde.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {currentYear} Monte Verde Incorporadora e Construtora. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Desenvolvido com ❤️ para você
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
