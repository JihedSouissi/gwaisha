const PromotionalBanner = () => {
  return (
    <section
      className="relative h-96 sm:h-[500px] lg:h-[600px] bg-cover bg-center flex items-center justify-end text-white px-4 sm:px-8 lg:px-16"
      style={{ backgroundImage: "url('/storage/b1952d604f155cbf5d727db329898750a6fea03d.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 text-right max-w-sm sm:max-w-md lg:max-w-lg">
        <h2 className="font-graphik-arabic text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
          فخامة كويتية بتصاميم عالمية تجمع بين الذوق، الأناقة، والتميز
        </h2>
        <button className="bg-white text-black hover:bg-gray-200 font-graphik-arabic text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors">
          اكتشف
        </button>
      </div>
    </section>
  );
};

export default PromotionalBanner;
