import { useEffect, useState } from 'react';

const ArrowBackIosIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowForwardIosIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const HeroSection = () => {
  const slides = [
    {
      backgroundImage: '/storage/82834eaf5f6b57c226cd2f3fd2900697a946fc8c.jpg',
      title: 'اختاري من تشكيلاتنا المتنوعة',
      subtitle: 'ما يكمل أناقتك',
      buttonText: 'تسوق الآن'
    },
    {
      backgroundImage: '/storage/attracrive-caucasian-woman-with-blonde-hair-black-suit-isolated-grey-background.jpg',
      title: 'اكتشفي أحدث الإطلالات',
      subtitle: 'أناقة لا تُقاوم',
      buttonText: 'استكشف الآن'
    },
    {
      backgroundImage: '/storage/jocund-brunette-woman-posing-with-calm-face-expression-joyful-white-girl-with-plant.jpg',
      title: 'تشكيلات مميزة لكل مناسبة',
      subtitle: 'أسلوبك الخاص',
      buttonText: 'ابدأ التسوق'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.backgroundImage})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Responsive Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 lg:space-y-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight max-w-4xl">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center max-w-2xl">
            {slides[currentSlide].subtitle}
          </p>
          <button className="bg-white text-black hover:bg-gray-200 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors mt-4">
            {slides[currentSlide].buttonText}
          </button>
        </div>
      </div>

      {/* Navigation Arrows - Responsive */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-4 lg:px-8 xl:px-16">
        <button
          onClick={nextSlide}
          className="flex flex-col w-8 h-8 sm:w-10 sm:h-10 lg:w-[38px] lg:h-[38px] bg-[#D15232] rounded-full lg:rounded-[24px] items-center justify-center transition-colors hover:bg-[#B5442A] shadow-lg"
        >
          <ArrowForwardIosIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={prevSlide}
          className="flex flex-col w-8 h-8 sm:w-10 sm:h-10 lg:w-[38px] lg:h-[38px] bg-[#D15232] rounded-full lg:rounded-[24px] items-center justify-center transition-colors hover:bg-[#B5442A] shadow-lg"
        >
          <ArrowBackIosIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
