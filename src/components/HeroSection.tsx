import { ArrowDown, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

      <div className="container mx-auto relative z-10 px-4 py-20 flex flex-col items-center">
        {/* Badge de Escassez */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-12 flex items-center gap-3"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-white text-xs font-black uppercase tracking-[0.3em]">
            87% dos Lotes Vendidos - Últimas Unidades de Janeiro
          </span>
        </motion.div>

        {/* Bloco Central com Máscara */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-black/10 backdrop-blur-xl border border-white/5 p-8 md:p-16 rounded-[3rem] text-center max-w-6xl w-full"
        >
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.9] tracking-tighter drop-shadow-2xl mb-8">
              seu <span className="text-white/80">Lote</span> <br className="hidden md:block" />
              está <span className="text-white/80">Aqui</span>
            </h1>

            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-xl md:text-3xl font-black text-white leading-tight drop-shadow-lg">
                <span className="text-emerald-400">ZERO ENTRADA</span> e parcelas em até 144x. <br />
                Obras aceleradas e valorização real em Nova Venécia.
              </h2>

              <div className="flex flex-col items-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-primary rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>

                  <Button
                    size="lg"
                    onClick={() => scrollToSection('#contato')}
                    className="relative bg-white hover:bg-emerald-50 text-primary font-black rounded-full px-16 py-10 text-2xl shadow-2xl transition-all hover:scale-105 active:scale-95 uppercase tracking-tighter flex items-center gap-4"
                  >
                    <span>GARANTIR MEU LOTE AGORA</span>
                    <ArrowDown className="w-6 h-6 rotate-[-135deg]" />
                  </Button>
                </div>

                <p className="mt-6 text-white/50 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                  <TreePine className="w-4 h-4 text-emerald-400" />
                  Reserve sua unidade antes que a tabela vire
                </p>
              </div>
            </div>
          </div>
        </motion.div>
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
