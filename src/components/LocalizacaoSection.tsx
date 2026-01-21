import { MapPin, Navigation, Clock, Car } from 'lucide-react';

const LocalizacaoSection = () => {
  return (
    <section id="localizacao" className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Como Chegar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Localização{' '}
            <span className="text-primary">Privilegiada</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fácil acesso pela BR 163 (Santarém-Cuiabá), em região de grande valorização.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="rounded-2xl overflow-hidden shadow-strong bg-card">
            <div className="aspect-[4/3] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127461.11127747882!2d-54.78!3d-2.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c068889f36c63%3A0xfc6d239c3a8a7c88!2sSantar%C3%A9m%2C%20PA!5e0!3m2!1spt-BR!2sbr!4v1699000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Endereço</h3>
                <p className="text-muted-foreground">
                  Rua das Mangueiras<br />
                  Comunidade do Tabocal<br />
                  Santarém - PA
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                <Navigation className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Referência</h3>
                <p className="text-muted-foreground">
                  BR 163 (Santarém-Cuiabá)<br />
                  Ramal Santa Júlia
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                <Car className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Distância</h3>
                <p className="text-muted-foreground">
                  Aproximadamente 20 minutos do<br />
                  centro de Santarém
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Horário de Visitas</h3>
                <p className="text-muted-foreground">
                  Segunda a Sábado<br />
                  08h às 18h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalizacaoSection;
