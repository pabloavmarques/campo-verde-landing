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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Mask/Overlay directly on the image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Máscara global para reduzir a nitidez da imagem e destacar o texto */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px]" />
      </div>

      <div className="container mx-auto relative z-10 px-4 py-20 flex flex-col items-center text-center">
        {/* Badge de Escassez */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-10 flex items-center gap-3"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-white text-xs font-black uppercase tracking-[0.3em]">
            87% dos Lotes Vendidos - Últimas Unidades de Janeiro
          </span>
        </motion.div>

        {/* Headline em uma linha - 60px no desktop */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-[60px] font-black text-white leading-tight tracking-tighter drop-shadow-2xl mb-8 uppercase"
        >
          Seu lote está aqui
        </motion.h1>

        {/* Bloco de Copy Centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-6 mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight drop-shadow-lg">
            <span className="text-emerald-400">ZERO ENTRADA</span> e parcelas em até 144x. <br className="hidden md:block" />
            Obras aceleradas e valorização real em Nova Venécia.
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-md">
            Realize o sonho de viver com segurança e infraestrutura completa. <br className="hidden md:block" />
            Reserve sua unidade antes que a tabela vire.
          </p>
        </motion.div>

        {/* CTAs Centralizados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-4xl mx-auto"
        >
          <div className="relative group w-full sm:w-auto">
            {/* Efeito Glow Pulsante */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-primary rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>

            <Button
              size="lg"
              onClick={() => scrollToSection('#contato')}
              className="relative w-full bg-white hover:bg-emerald-50 text-primary font-black rounded-full px-12 py-9 text-xl shadow-2xl transition-all hover:scale-105 active:scale-95 uppercase tracking-tighter flex items-center justify-center gap-4"
            >
              <span>GARANTIR MEU LOTE AGORA</span>
              <ArrowDown className="w-6 h-6 rotate-[-135deg]" />
            </Button>
          </div>

          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open('https://wa.me/5593999999999', '_blank')}
            className="w-full sm:w-auto border-2 border-white/30 hover:border-white bg-white/5 hover:bg-white/10 text-white font-black rounded-full px-12 py-9 text-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 uppercase tracking-tighter flex items-center justify-center gap-4"
          >
            <span>FALAR COM CORRETOR</span>
          </Button>
        </motion.div>

        {/* Badge Inferior com Micro-Animação */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="w-1 h-10 bg-gradient-to-b from-emerald-500 to-transparent rounded-full" />
          <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] flex items-center gap-3">
            <TreePine className="w-4 h-4 text-emerald-500/50" />
            Condições exclusivas de Janeiro • Monte Verde Inc.
          </p>
        </motion.div>
      </div>

      {/* Indicador de Scroll Dinâmico */}
      <motion.button
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => scrollToSection('#diferenciais')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-all z-20 hover:scale-125"
      >
        <ArrowDown className="w-10 h-10" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
