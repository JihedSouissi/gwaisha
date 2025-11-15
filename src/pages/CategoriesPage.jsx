import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductCarousel from '../components/ProductCarousel';

export default function CategoriesPage() {
  const goldRings = [
    { id: 1, title: "خاتم ذهب عيار 18", price: "250 د.ك", image: "/storage/products/4a45d666e1ef236972d9ef25ac229e4a1f832e03.png" },
    { id: 2, title: "خاتم ذهب أبيض", price: "350 د.ك", image: "/storage/products/1253ed2ff53413044568feb3b3253c4903e81187.png" },
    { id: 3, title: "خاتم سوليتير", price: "450 د.ك", image: "/storage/products/1264a634bb60a826e5e4fa0c9f7538c2ab3ab27f.png" },
    { id: 4, title: "خاتم ذهب وردي", price: "300 د.ك", image: "/storage/products/a93e25ba794a4a98bfe892a8abff157eceb2d5af.png" },
    { id: 5, title: "خاتم ذهب عيار 18", price: "250 د.ك", image: "/storage/products/4a45d666e1ef236972d9ef25ac229e4a1f832e03.png" },
    { id: 6, title: "خاتم ذهب أبيض", price: "350 د.ك", image: "/storage/products/1253ed2ff53413044568feb3b3253c4903e81187.png" },
    { id: 7, title: "خاتم سوليتير", price: "450 د.ك", image: "/storage/products/1264a634bb60a826e5e4fa0c9f7538c2ab3ab27f.png" },
    { id: 8, title: "خاتم ذهب وردي", price: "300 د.ك", image: "/storage/products/a93e25ba794a4a98bfe892a8abff157eceb2d5af.png" },
  ];

  const luxuryBracelets = [
    { id: 1, title: "سوار تنس ذهب", price: "500 د.ك", image: "/storage/products/babc1df376cd99a99b42714f7f3c50bc5559cabd.png" },
    { id: 2, title: "سوار ذهب عيار 21", price: "600 د.ك", image: "/storage/products/dd189ebd41bdf06ac5ac5a693165b4d826c99593.png" },
    { id: 3, title: "سوار مرصع بالألماس", price: "750 د.ك", image: "/storage/products/e545cbf7145ac0bd0b2c47eae25c758d4764de40.png" },
    { id: 4, title: "سوار ذهب أبيض", price: "550 د.ك", image: "/storage/products/babc1df376cd99a99b42714f7f3c50bc5559cabd.png" },
    { id: 5, title: "سوار تنس ذهب", price: "500 د.ك", image: "/storage/products/babc1df376cd99a99b42714f7f3c50bc5559cabd.png" },
    { id: 6, title: "سوار ذهب عيار 21", price: "600 د.ك", image: "/storage/products/dd189ebd41bdf06ac5ac5a693165b4d826c99593.png" },
    { id: 7, title: "سوار مرصع بالألماس", price: "750 د.ك", image: "/storage/products/e545cbf7145ac0bd0b2c47eae25c758d4764de40.png" },
    { id: 8, title: "سوار ذهب أبيض", price: "550 د.ك", image: "/storage/products/babc1df376cd99a99b42714f7f3c50bc5559cabd.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        {/* خواتم ذهب section */}
        <section className="py-8 bg-white-bg text-center mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-graphik-arabic text-3xl sm:text-4xl font-bold mb-2">
              خواتم ذهب
            </h2>
            <p className="font-graphik-arabic text-subtext-black mb-6 sm:mb-8 text-sm sm:text-base">
              اختاري من تشكيلاتنا المتنوعة ما يكمل أناقتك
            </p>
            <ProductCarousel products={goldRings} />
          </div>
        </section>
        {/* أساور فاخرة section */}
        <section className="py-8 bg-white-bg text-center mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-graphik-arabic text-3xl sm:text-4xl font-bold mb-2">
              أساور فاخرة
            </h2>
            <p className="font-graphik-arabic text-subtext-black mb-6 sm:mb-8 text-sm sm:text-base">
              اختاري من تشكيلاتنا المتنوعة ما يكمل أناقتك
            </p>
            <ProductCarousel products={luxuryBracelets} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
