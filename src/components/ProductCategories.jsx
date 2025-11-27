const dummyCategories = [
  {
    id: 1,
    image: '/storage/b1952d604f155cbf5d727db329898750a6fea03d.png',
    title: 'الأقراط',
  },
  {
    id: 2,
    image: '/storage/Gw2.jpg',
    title: 'أطقم كاملة',
  },
  {
    id: 3,
    image: '/storage/GW.jpg',
    title: ' سلاسل ناعمة',
  },
];

const ProductCategories = () => {
  return (
    <section className="py-4 sm:py-4 bg-white-bg text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-graphik-arabic text-3xl sm:text-4xl font-bold mb-2">
          اكتشف تشكيلاتنا المتنوعة
        </h2>
        <p className="font-graphik-arabic text-subtext-black mb-8 sm:mb-12 text-sm sm:text-base">
          اختاري من تشكيلاتنا المتنوعة ما يكمل أناقتك
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {dummyCategories.map((category) => (
            <a
              key={category.id}
              href={`/category/${category.id}`}
              className="block relative w-full h-[70vh] sm:h-[75vh] lg:h-[80vh] bg-cover bg-center rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300 flex flex-col justify-end items-center p-4 sm:p-6 text-white">
                <h3 className="font-graphik-arabic text-xl sm:text-2xl font-bold mb-2 text-center group-hover:text-primary-red transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full group-hover:bg-primary-red group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
