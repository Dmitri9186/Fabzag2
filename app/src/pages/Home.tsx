import Header from '../sections/Header';
import HeroSection from '../sections/HeroSection';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen texture-bg">
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
