import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'O Empreendimento', href: '#empreendimento' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Diferenciais', href: '#diferenciais' },
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect shadow-medium py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">CV</span>
          </div>
          <div className="hidden sm:block">
            <span className={`font-bold text-lg ${isScrolled ? 'text-primary' : 'text-primary-foreground'}`}>
              Campo Verde
            </span>
            <p className={`text-xs ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
              Residencial
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={() => scrollToSection('#contato')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-medium"
          >
            <Phone className="w-4 h-4" />
            Falar com Consultor
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-effect shadow-strong animate-fade-in">
          <nav className="container mx-auto py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground font-medium py-2 hover:text-primary transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contato')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 mt-2"
            >
              <Phone className="w-4 h-4" />
              Falar com Consultor
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
