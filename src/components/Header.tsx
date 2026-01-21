import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Inicio', href: '#' },
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
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
        : 'bg-white/80 backdrop-blur-sm py-4'
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo Oficial */}
        <a href="#" className="flex items-center group transition-transform hover:scale-105">
          <img
            src="/logo.png"
            alt="Residencial Campo Verde"
            className={`transition-all duration-500 ${isScrolled ? 'h-12' : 'h-16'} w-auto object-contain`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-bold text-[#1a4a31] hover:text-primary transition-colors relative group uppercase tracking-wider"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            onClick={() => window.open('https://wa.me/5593999999999', '_blank')}
            className="bg-[#0b2b1a] hover:bg-[#15462c] text-white rounded-full px-8 py-6 flex items-center gap-3 shadow-xl transform transition-all hover:scale-105 active:scale-95"
          >
            <div className="bg-white rounded-full p-1.5">
              <Phone className="w-4 h-4 text-[#0b2b1a] fill-current" />
            </div>
            <span className="font-bold tracking-widest uppercase text-xs">Corretor online</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-2 text-[#1a4a31]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-2xl animate-fade-in border-t border-gray-100">
          <nav className="container mx-auto py-8 px-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-lg font-bold text-[#1a4a31] hover:text-primary transition-colors text-left border-b border-gray-50 pb-3"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => window.open('https://wa.me/5593999999999', '_blank')}
              className="bg-[#0b2b1a] hover:bg-[#15462c] text-white rounded-full py-8 gap-4 mt-4 text-xl shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span className="font-bold">Corretor online</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
