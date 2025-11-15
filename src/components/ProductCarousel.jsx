import { useEffect, useState } from 'react';
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
  // Responsive visible per slide based on screen size
  const getVisiblePerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4; // xl screens
      if (window.innerWidth >= 1024) return 3; // lg screens
      if (window.innerWidth >= 768) return 2;  // md screens
    }
    return 1; // mobile screens
  };

  const [visiblePerSlide, setVisiblePerSlide] = useState(getVisiblePerSlide);
  const totalSlides = Math.ceil(products.length / visiblePerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Update visiblePerSlide on window resize
  useEffect(() => {
    const handleResize = () => {
      setVisiblePerSlide(getVisiblePerSlide());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Recalculate totalSlides when visiblePerSlide changes
  useEffect(() => {
    setCurrentSlide(0); // Reset to first slide when changing layout
  }, [visiblePerSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [visiblePerSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <div className="relative">
      <div className="rounded-lg overflow-hidden relative">
        <div
          className="relative transition-transform duration-500 ease-in-out"
          style={{ 
            height: 'auto',
            minHeight: '400px'
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="absolute top-0 w-full transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${(slideIndex - currentSlide) * 100}%)`
              }}
            >
              <div className={`grid gap-4 sm:gap-6 p-4 sm:p-6 ${
                visiblePerSlide === 1 ? 'grid-cols-1' :
                visiblePerSlide === 2 ? 'grid-cols-2' :
                visiblePerSlide === 3 ? 'grid-cols-3' :
                'grid-cols-4'
              }`}>
                {products.slice(slideIndex * visiblePerSlide, (slideIndex + 1) * visiblePerSlide).map((product) => (
                  <div key={product.id} className="w-full">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Responsive */}
        {totalSlides > 1 && (
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-4 pointer-events-none">
            <button 
              onClick={nextSlide} 
              className="pointer-events-auto flex flex-col w-8 h-8 sm:w-10 sm:h-10 bg-[#D15232] rounded-full items-center justify-center transition-colors hover:bg-[#B5442A] text-white shadow-lg"
              aria-label="Previous products"
            >
              <ArrowForwardIosIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button 
              onClick={prevSlide} 
              className="pointer-events-auto flex flex-col w-8 h-8 sm:w-10 sm:h-10 bg-[#D15232] rounded-full items-center justify-center transition-colors hover:bg-[#B5442A] text-white shadow-lg"
              aria-label="Next products"
            >
              <ArrowBackIosIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCarousel;
