import React, { useState, useEffect } from 'react';

const CustomerShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const showcaseImages = [
    '/assets/customershowcase1.png',
    '/assets/customershowcase2.png',
    '/assets/customershowcase3.png'
  ];
  
  const totalSlides = showcaseImages.length;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [totalSlides]);
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Customer Showcase
          </h2>
          <p className="text-gray-600 text-lg">
            Check out some well-made websites that are{' '}
            <span className="font-semibold text-gray-900">built with Listeo</span>
            <span className="text-yellow-500 ml-1">😊</span>
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Images Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${totalSlides * 100}%`
              }}
            >
              {showcaseImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative flex-shrink-0"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-2xl">
                    <img 
                      src={image} 
                      alt={`Customer showcase ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Linear gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/20"></div>
                    
                    {/* White gradient from bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/60 to-transparent"></div>
                    
                    {/* Side gradients */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white/40 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white/40 to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {showcaseImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gray-900 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerShowcase;
