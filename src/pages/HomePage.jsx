import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';
import Header from '../components/header/Header.jsx';
import HeroSection from '../components/HeroSection';
import ProductCategories from '../components/ProductCategories';
import PromotionalBanner from '../components/PromotionalBanner';
import StarDivider from '../components/StarDivider';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <StarDivider />
        <ProductCategories />
        <StarDivider />
        <FeaturedProducts />
        <StarDivider />
        <PromotionalBanner />
      </main>
      <Footer />
    </div>
  );
}
