import { TreePine, Heart, MapPin, Building2, Shield, Leaf } from 'lucide-react';

const diferenciais = [
  {
    icon: TreePine,
    title: 'Natureza Preservada',
    description: 'Área verde exuberante com vegetação nativa preservada para seu bem-estar.',
  },
  {
    icon: Heart,
    title: 'Qualidade de Vida',
    description: 'Ambiente tranquilo, seguro e ideal para famílias que buscam paz.',
  },
  {
    icon: MapPin,
    title: 'Localização Estratégica',
    description: 'Acesso privilegiado pela BR 163, próximo a Santarém e infraestrutura.',
  },
  {
    icon: Building2,
    title: 'Infraestrutura Completa',
    description: 'Ruas planejadas, rede elétrica e água encanada em todos os lotes.',
  },
  {
    icon: Shield,
    title: 'Documentação Regular',
    description: 'Todos os lotes com documentação 100% regularizada e pronta para construir.',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Projeto pensado para harmonia entre moradia e meio ambiente.',
  },
];

const DiferenciaisSection = () => {
  return (
    <section id="diferenciais" className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Por que escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Diferenciais do{' '}
            <span className="text-primary">Residencial Campo Verde</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um empreendimento pensado para quem valoriza qualidade de vida, 
            segurança e contato com a natureza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => (
            <div
              key={item.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
