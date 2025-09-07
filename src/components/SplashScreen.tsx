import React from 'react';
import shoppingCart from '../assets/shopping-cart.jpg';
import mobileShoppingImg from '../assets/mobile-shopping.jpg';
import packagesImg from '../assets/packages.jpg';
import shoppingBagsImg from '../assets/shopping-bags.jpg';
import priceTagsImg from '../assets/price-tags.jpg';
import priceComparisonImg from '../assets/price-comparison.jpg';

interface SplashScreenProps {
  isExiting: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isExiting }) => {
  const images = [
    { src: shoppingCart, alt: "Shopping cart", position: "top-20 left-16" },
    { src: mobileShoppingImg, alt: "Mobile shopping", position: "top-32 right-20" },
    { src: packagesImg, alt: "Packages", position: "bottom-40 left-20" },
    { src: shoppingBagsImg, alt: "Shopping bags", position: "bottom-20 right-16" },
    { src: priceTagsImg, alt: "Price tags", position: "top-64 left-1/2 transform -translate-x-1/2" },
    { src: priceComparisonImg, alt: "Price comparison", position: "bottom-60 right-40" }
  ];

  return (
    <div 
      className={`fixed inset-0 z-50 splash-bg flex items-center justify-center transition-transform duration-1000 ease-in-out ${
        isExiting ? 'splash-exit' : ''
      }`}
    >
      {/* Background Images Collage */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-48 h-32 opacity-20 rounded-lg overflow-hidden ${image.position}`}
            style={{
              animationDelay: `${index * 0.2}s`,
              animation: 'fadeInUp 1s ease-out'
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover filter blur-sm grayscale"
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 text-splash-text leading-tight animate-fade-in-up">
          Still shopping like it's{' '}
          <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            2015?
          </span>
        </h1>
        
        <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full animate-fade-in-up" 
             style={{ animationDelay: '0.5s' }} />
        
        <p className="text-splash-muted text-xl md:text-2xl mt-8 font-light animate-fade-in-up" 
           style={{ animationDelay: '0.7s' }}>
          It's time to shop smarter, not harder
        </p>
      </div>

      {/* Loading Indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;