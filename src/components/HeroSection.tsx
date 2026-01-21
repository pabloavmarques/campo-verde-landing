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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">

          {/* Lado Esquerdo - "seu Lote" */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left z-20"
          >
            <div className="relative inline-block mb-4">
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white/90 leading-none tracking-tighter">
                seu <span className="text-white">Lote</span>
              </h1>
            </div>

            <div className="mt-8 max-w-sm mx-auto lg:mx-0">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Seu Lote em Nova Venécia sem entrada e em até 144x
              </h2>

              <Button
                size="lg"
                onClick={() => scrollToSection('#contato')}
                className="bg-white hover:bg-white/90 text-primary font-bold rounded-full px-10 py-7 text-xl shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                FALE CONOSCO
              </Button>
            </div>
          </motion.div>

          {/* Centro - Faixa Branca com Logo Oficial */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex flex-col items-center justify-center bg-white/20 backdrop-blur-xl w-full max-w-[350px] py-16 rounded-[2.5rem] border border-white/30 shadow-2xl z-10"
          >
            <img src="/logo.png" alt="Campo Verde Logo" className="w-64 h-auto object-contain drop-shadow-2xl" />
          </motion.div>

          {/* Lado Direito - "está Aqui" */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 text-center lg:text-right z-20"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white/90 leading-none tracking-tighter">
              está <span className="text-white">Aqui</span>
            </h1>
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
