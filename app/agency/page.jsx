import Header from '@/components/Header';
import AgencyHero from '@/components/agency/AgencyHero';
import AgencyPromoSection from '@/components/agency/AgencyPromoSection';
import FooterTop from '@/components/FooterTop';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';

export default function Agency() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AgencyHero />
      <AgencyPromoSection />
      <FAQSection />
      <FooterTop />
      <Footer />
    </main>
  );
}

