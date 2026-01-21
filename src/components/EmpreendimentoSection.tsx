import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  'Lotes a partir de 360m²',
  'Infraestrutura completa',
  'Área verde preservada',
  'Documentação 100% regular',
  'Facilidade de pagamento',
  'Próximo à BR 163',
];

const EmpreendimentoSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="empreendimento" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-medium aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=450&fit=crop"
                  alt="Vista do residencial"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-medium aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=400&h=400&fit=crop"
                  alt="Natureza preservada"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-medium aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=400&fit=crop"
                  alt="Casa no campo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-medium aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=450&fit=crop"
                  alt="Vista aérea"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Sobre o empreendimento
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              O Lugar Ideal Para{' '}
              <span className="text-primary">Construir Seu Futuro</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              O Residencial Campo Verde é um empreendimento planejado para oferecer 
              o equilíbrio perfeito entre conforto urbano e vida no campo. Localizado 
              em uma das regiões mais valorizadas de Santarém, oferece lotes amplos 
              com toda infraestrutura necessária.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Desenvolvido pela Monte Verde Incorporadora, o residencial conta com 
              projeto urbanístico moderno, respeitando o meio ambiente e garantindo 
              qualidade de vida para toda a família.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 shadow-medium"
            >
              Agende Uma Visita
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpreendimentoSection;
