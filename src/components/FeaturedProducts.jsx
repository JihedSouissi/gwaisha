import ProductCarousel from './ProductCarousel';

const FeaturedProducts = () => {
  const products = [
    { id: 1, title: "بريق الأنوثة الذهبية", price: "500 د.ك", image: "/storage/4a45d666e1ef236972d9ef25ac229e4a1f832e03.png" },
    { id: 2, title: "بريق الأنوثة الذهبية", price: "300 د.ك", image: "/storage/1264a634bb60a826e5e4fa0c9f7538c2ab3ab27f.png" },
    { id: 3, title: "أقراط سحر الذهب", price: "400 د.ك", image: "/storage/e545cbf7145ac0bd0b2c47eae25c758d4764de40.png" },
    { id: 4, title: "سوار لمسة ناعمة", price: "600 د.ك", image: "/storage/babc1df376cd99a99b42714f7f3c50bc5559cabd.png" },
    { id: 5, title: "بريق الأنوثة الذهبية", price: "500 د.ك", image: "/storage/4a45d666e1ef236972d9ef25ac229e4a1f832e03.png" },
    { id: 6, title: "بريق الأنوثة الذهبية", price: "300 د.ك", image: "/storage/1264a634bb60a826e5e4fa0c9f7538c2ab3ab27f.png" },
    { id: 7, title: "أقراط سحر الذهب", price: "400 د.ك", image: "/storage/e545cbf7145ac0bd0b2c47eae25c758d4764de40.png" },
    { id: 8, title: "سوار لمسة ناعمة", price: "600 د.ك", image: "/storage/babc1df376cd99a99b42714f7f3c50bc5559cabd.png" },
    { id: 9, title: "بريق الأنوثة الذهبية", price: "500 د.ك", image: "/storage/4a45d666e1ef236972d9ef25ac229e4a1f832e03.png" },
    { id: 10, title: "بريق الأنوثة الذهبية", price: "300 د.ك", image: "/storage/1264a634bb60a826e5e4fa0c9f7538c2ab3ab27f.png" },
    { id: 11, title: "أقراط سحر الذهب", price: "400 د.ك", image: "/storage/e545cbf7145ac0bd0b2c47eae25c758d4764de40.png" },
    { id: 12, title: "سوار لمسة ناعمة", price: "600 د.ك", image: "/storage/babc1df376cd99a99b42714f7f3c50bc5559cabd.png" },
  ];

  // Responsive visible per slide based on screen size
  const getVisiblePerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4; // xl screens
      if (window.innerWidth >= 1024) return 3; // lg screens
      if (window.innerWidth >= 768) return 2;  // md screens
    }
    return 1; // mobile screens
  };


  return (
    <section className="py-8 bg-white-bg text-center mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-graphik-arabic text-3xl sm:text-4xl font-bold mb-2">
          الأكثر مبيعا
        </h2>
        <p className="font-graphik-arabic text-subtext-black mb-6 sm:mb-8 text-sm sm:text-base">
          اختاري من تشكيلاتنا المتنوعة ما يكمل أناقتك
        </p>
        <button className="bg-black-bg text-white hover:bg-gray-800 font-graphik-arabic text-sm sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full mb-8 sm:mb-12 transition-colors">
          اكتشف الجميع
        </button>

        <ProductCarousel products={products} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
