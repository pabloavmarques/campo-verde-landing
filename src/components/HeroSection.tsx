import { ArrowDown, MapPin, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 animate-float opacity-20">
        <TreePine className="w-24 h-24 text-accent" />
      </div>

      <div className="container mx-auto relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">BR 163 • Santarém - Cuiabá</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in stagger-1">
              VIVA COM QUALIDADE,{' '}
              <span className="text-accent">RESPIRE NATUREZA:</span>{' '}
              A TRANQUILIDADE QUE VOCÊ MERECE!
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl animate-fade-in stagger-2">
              Lotes exclusivos em localização privilegiada no Ramal Santa Júlia. 
              O lugar perfeito para construir o lar dos seus sonhos cercado pela natureza.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-3">
              <Button
                size="lg"
                onClick={() => scrollToSection('#contato')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-strong text-lg px-8"
              >
                Quero Saber Mais
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#empreendimento')}
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
              >
                Conhecer o Residencial
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in stagger-4">
              <div>
                <p className="text-3xl font-bold text-accent">100+</p>
                <p className="text-sm text-primary-foreground/70">Lotes Disponíveis</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">360m²</p>
                <p className="text-sm text-primary-foreground/70">Área Mínima</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">100%</p>
                <p className="text-sm text-primary-foreground/70">Documentado</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:ml-auto animate-scale-in">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('#diferenciais')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/60 hover:text-primary-foreground transition-colors"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
