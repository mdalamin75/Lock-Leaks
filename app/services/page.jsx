import Header from '@/components/Header';
import ServicesSection from '@/components/services/ServicesSection';
import FooterTop from '@/components/FooterTop';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ServicesSection />
      <FooterTop />
      <Footer />
    </main>
  );
}

