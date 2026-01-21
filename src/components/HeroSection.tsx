import { ArrowDown, MapPin, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto relative z-10 px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-32">

          {/* Lado Esquerdo - "seu Lote" */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 text-center lg:text-right z-20"
          >
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-black text-white leading-none tracking-tighter">
                seu <span className="text-white/80">Lote</span>
              </h1>
            </div>

            <div className="mt-8 max-w-sm ml-auto hidden lg:block">
              <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed italic">
                Sua oportunidade em Nova Venécia
              </p>
            </div>
          </motion.div>

          {/* Lado Direito - "está Aqui" */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex-1 text-center lg:text-left z-20"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-black text-white leading-none tracking-tighter">
              está <span className="text-white/80">Aqui</span>
            </h1>

            <div className="mt-8 flex flex-col items-center lg:items-start">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-8 leading-tight max-w-sm">
                Sem entrada e em até 144x. Realize seu sonho hoje.
              </h2>

              <Button
                size="lg"
                onClick={() => scrollToSection('#contato')}
                className="bg-white hover:bg-white/90 text-primary font-black rounded-full px-12 py-8 text-xl shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-all hover:scale-110 active:scale-95 uppercase tracking-widest"
              >
                FALE CONOSCO
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('#diferenciais')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors z-20"
      >
        <ArrowDown className="w-10 h-10" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
