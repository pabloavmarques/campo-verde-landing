import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'O Empreendimento', href: '#empreendimento' },
  { label: 'Infraestrutura', href: '#infraestrutura' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out ${isScrolled
        ? 'bg-[#05150d] py-3 shadow-2xl border-b border-white/5'
        : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-8'
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* Logo - Tamanho ajustado para Impacto */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center group"
        >
          <img
            src="/logo.png"
            alt="Residencial Campo Verde"
            className={`transition-all duration-700 ${isScrolled ? 'h-10' : 'h-20'} w-auto object-contain brightness-0 invert`}
          />
        </button>

        {/* Desktop Navigation - Minimalista e Legível */}
        <nav className="hidden xl:flex items-center gap-14">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-[13px] font-semibold text-white/90 hover:text-white transition-all relative group uppercase tracking-[0.15em]"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-emerald-500 transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Desktop CTA - Exclusividade */}
        <div className="hidden lg:flex items-center">
          <Button
            onClick={() => scrollToSection('#contato')}
            className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-none border border-emerald-400/30 px-10 py-8 flex items-center gap-3 shadow-[0_15px_35px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95 group"
          >
            <Calendar className="w-5 h-5 transition-transform group-hover:rotate-12 text-emerald-200" />
            <span className="font-bold tracking-[0.2em] uppercase text-[12px]">Agendar Visita</span>
          </Button>
        </div>

        {/* Mobile Menu Button - Elegante */}
        <button
          className="xl:hidden p-3 text-white flex items-center gap-3 group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="flex flex-col gap-2 items-end">
            <div className="w-8 h-[2px] bg-white group-hover:w-10 transition-all shadow-lg" />
            <div className="w-5 h-[2px] bg-white group-hover:w-10 transition-all shadow-lg" />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay - Fullscreen Imersivo */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 bg-[#05150d] z-[90] flex flex-col items-center justify-center animate-in fade-in duration-500">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 text-white/50 hover:text-white"
          >
            <X className="w-10 h-10" />
          </button>

          <nav className="flex flex-col gap-10 text-center">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-3xl font-light text-white/60 hover:text-emerald-400 transition-colors uppercase tracking-[0.3em]"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-10">
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection('#contato');
                }}
                className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-none px-12 py-10 text-xl font-bold uppercase tracking-[0.3em] shadow-2xl"
              >
                Agendar Visita
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
