import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PromotionalSection from '@/components/PromotionalSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import ComparisonSection from '@/components/ComparisonSection';
import TrustedSection from '@/components/TrustedSection';
import ProtectionSection from '@/components/ProtectionSection';
import AutomaticScanSection from '@/components/AutomaticScanSection';
import FooterTop from '@/components/FooterTop';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PromotionalSection />
      <BeforeAfterSection />
      <TrustedSection />
      <ProtectionSection />
      <AutomaticScanSection />
      <ComparisonSection />
      <FooterTop />
      <Footer />
    </main>
  );
}

