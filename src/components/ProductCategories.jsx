const dummyCategories = [
  {
    id: 1,
    image: '/storage/b1952d604f155cbf5d727db329898750a6fea03d.png',
    title: 'مجوهرات الزفاف',
    description: 'مجوهرات تخلد لحظاتك الأجمل',
  },
  {
    id: 2,
    image: '/storage/1c517356c26fd3d6f170fc4a0b3e6a1947ac6cf2.png',
    title: 'مجوهرات ناعمة',
    description: 'مجوهرات تخلد لحظاتك الأجمل',
  },
  {
    id: 3,
    image: '/storage/516b3df0815ba9c6fc1f94d703e5738b2df8700a.png',
    title: 'مجوهرات الزفاف',
    description: 'مجوهرات تخلد لحظاتك الأجمل',
  },
];

const ProductCategories = () => {
  return (
    <section className="py-12 sm:py-16 bg-white-bg text-center">
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
            <div 
              key={category.id} 
              className="relative w-full h-64 sm:h-80 lg:h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300 flex flex-col justify-end items-center p-4 sm:p-6 text-white">
                <h3 className="font-graphik-arabic text-xl sm:text-2xl font-bold mb-2 text-center">
                  {category.title}
                </h3>
                <p className="font-graphik-arabic text-xs sm:text-sm mb-3 sm:mb-4 text-center">
                  {category.description}
                </p>
                <button className="bg-white text-black hover:bg-gray-200 font-graphik-arabic text-sm sm:text-base px-4 sm:px-6 py-2 rounded-full transition-colors">
                  اكتشف
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
