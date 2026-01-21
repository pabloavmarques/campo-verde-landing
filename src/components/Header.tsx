import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Loteamento', href: '#empreendimento' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Infraestrutura', href: '#infraestrutura' },
  { label: 'Contato', href: '#contato' },
  { label: 'Cadastre-se', href: '#cadastro' },
  { label: 'Sou Corretor', href: '#corretor' },
  { label: 'Book', href: '#book' },
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
    if (href === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
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
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xl py-3'
          : 'bg-white/80 backdrop-blur-sm py-5'
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo Oficial */}
        <button
          onClick={() => scrollToSection('#inicio')}
          className="flex items-center group transition-transform hover:scale-105 active:scale-95"
        >
          <img
            src="/logo.png"
            alt="Residencial Campo Verde"
            className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-14'} w-auto object-contain`}
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-[11px] font-black text-[#1a4a31] hover:text-primary transition-colors relative group uppercase tracking-[0.15em]"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Button
            onClick={() => window.open('https://wa.me/5593999999999', '_blank')}
            className="bg-[#0b2b1a] hover:bg-[#15462c] text-white rounded-full px-6 py-5 flex items-center gap-3 shadow-[0_10px_30px_rgba(11,43,26,0.3)] transition-all hover:scale-105 active:scale-95"
          >
            <div className="bg-white/20 rounded-full p-1">
              <Phone className="w-3 h-3 text-white fill-current" />
            </div>
            <span className="font-black tracking-[0.1em] uppercase text-[10px]">Falar com Corretor</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-2 text-[#1a4a31] flex items-center gap-2 hover:bg-black/5 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">Menu</span>
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[72px] bg-white z-[90] animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="container mx-auto py-10 px-6 flex flex-col gap-6 h-full overflow-y-auto">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-2xl font-black text-[#1a4a31] hover:text-primary transition-colors text-left border-b border-gray-100 pb-5 uppercase tracking-tighter"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-auto pb-10">
              <Button
                onClick={() => window.open('https://wa.me/5593999999999', '_blank')}
                className="w-full bg-[#0b2b1a] hover:bg-[#15462c] text-white rounded-full py-10 gap-4 text-xl font-black shadow-2xl uppercase tracking-widest"
              >
                <Phone className="w-6 h-6" />
                <span>Atendimento WhatsApp</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
