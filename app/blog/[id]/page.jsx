import Header from '@/components/Header';
import BlogDetail from '@/components/blog/BlogDetail';
import FooterTop from '@/components/FooterTop';
import Footer from '@/components/Footer';

export default async function BlogDetailPage({ params }) {
  // In Next.js 16, params is a Promise, so we await it
  const resolvedParams = await params;
  const blogId = resolvedParams.id;
  
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <BlogDetail blogId={blogId} />
      <FooterTop />
      <Footer />
    </main>
  );
}

