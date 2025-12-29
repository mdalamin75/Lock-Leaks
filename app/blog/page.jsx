import Header from '@/components/Header';
import BlogSection from '@/components/blog/BlogSection';
import FooterTop from '@/components/FooterTop';
import Footer from '@/components/Footer';

export default function Blog() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <BlogSection />
      <FooterTop />
      <Footer />
    </main>
  );
}

