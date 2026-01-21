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
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-8 flex items-center gap-3"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-white text-xs font-black uppercase tracking-[0.3em]">
              87% dos Lotes Vendidos - Últimas Unidades
            </span>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-32">

          {/* Lado Esquerdo - "seu Lote" */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 text-center lg:text-right z-20"
          >
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl lg:text-[11.5rem] font-black text-white leading-none tracking-tighter drop-shadow-2xl">
                seu <span className="text-white/80">Lote</span>
              </h1>
            </div>

            <div className="mt-8 max-w-sm ml-auto hidden lg:block">
              <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed italic drop-shadow-md">
                Obras aceleradas e valorização garantida em <span className="font-bold border-b border-primary">Nova Venécia</span>.
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
            <h1 className="text-6xl md:text-8xl lg:text-[11.5rem] font-black text-white leading-none tracking-tighter drop-shadow-2xl">
              está <span className="text-white/80">Aqui</span>
            </h1>

            <div className="mt-8 flex flex-col items-center lg:items-start">
              <h2 className="text-xl md:text-3xl font-black text-white mb-8 leading-tight max-w-md drop-shadow-lg">
                <span className="text-emerald-300">ZERO ENTRADA</span> e parcelas em até 144x direto com a incorporadora.
              </h2>

              <div className="relative group">
                {/* Efeito Glow Pulsante */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-primary rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                <Button
                  size="lg"
                  onClick={() => scrollToSection('#contato')}
                  className="relative bg-white hover:bg-emerald-50 text-primary font-black rounded-full px-14 py-9 text-2xl shadow-2xl transition-all hover:scale-110 active:scale-95 uppercase tracking-tighter flex items-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10">GARANTIR MEU LOTE AGORA</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowDown className="w-6 h-6 rotate-[-135deg]" />
                  </motion.div>
                </Button>
              </div>

              <p className="mt-4 text-white/60 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <TreePine className="w-3 h-3 text-emerald-400" />
                Vagas Limitadas para Condições de Janeiro
              </p>
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
