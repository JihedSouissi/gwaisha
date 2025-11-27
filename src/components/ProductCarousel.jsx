import { useCallback, useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';

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

const ProductCarousel = ({ products }) => {
  const getVisiblePerSlide = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4;
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  }, []);

  const [visiblePerSlide, setVisiblePerSlide] = useState(getVisiblePerSlide);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setVisiblePerSlide(getVisiblePerSlide());
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getVisiblePerSlide]);

  const maxIndex = products.length > visiblePerSlide ? products.length - visiblePerSlide : 0;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };
  
  useEffect(() => {
    if (maxIndex > 0) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, maxIndex, nextSlide]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visiblePerSlide)}%)`,
            minHeight: '400px',
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{ flex: `0 0 ${100 / visiblePerSlide}%` }}
              className="p-2 sm:p-4"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {maxIndex > 0 && (
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-4 pointer-events-none">
          <button 
            onClick={prevSlide} 
            className="pointer-events-auto flex flex-col w-8 h-8 sm:w-10 sm:h-10 bg-[#D15232] rounded-full items-center justify-center transition-colors hover:bg-[#B5442A] text-white shadow-lg"
            aria-label="Previous products"
          >
            <ArrowBackIosIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button 
            onClick={nextSlide} 
            className="pointer-events-auto flex flex-col w-8 h-8 sm:w-10 sm:h-10 bg-[#D15232] rounded-full items-center justify-center transition-colors hover:bg-[#B5442A] text-white shadow-lg"
            aria-label="Next products"
          >
            <ArrowForwardIosIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
