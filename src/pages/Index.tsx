import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DiferenciaisSection from '@/components/DiferenciaisSection';
import EmpreendimentoSection from '@/components/EmpreendimentoSection';
import InfrastructureSection from '@/components/InfrastructureSection';
import LocalizacaoSection from '@/components/LocalizacaoSection';
import ContatoSection from '@/components/ContatoSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DiferenciaisSection />
      <EmpreendimentoSection />
      <InfrastructureSection />
      <LocalizacaoSection />
      <ContatoSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
