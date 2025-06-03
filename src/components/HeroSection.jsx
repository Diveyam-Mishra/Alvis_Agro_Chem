import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/a-row-plowed-and-sown-with-potatoes-on-chernozem-soil-potato-seeds-in-the-soil.webp';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({ 
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };  return (
    <div className="@container w-full">
      <div className="min-h-screen w-full"><div
          className="hero-section flex min-h-screen flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 relative overflow-hidden"style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${backgroundImage})`,
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Enhanced animated background elements with parallax */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-parallax-float"></div>
            <div className="absolute bottom-20 right-16 w-16 h-16 bg-white/10 rounded-full animate-float-delayed"></div>
            <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-float-slow"></div>
            <div className="absolute top-20 right-32 w-8 h-8 bg-white/15 rounded-full animate-bounce delay-500"></div>
            <div className="absolute bottom-32 left-20 w-14 h-14 bg-white/8 rounded-full animate-pulse delay-1000"></div>
          </div>

          <div className="flex flex-col gap-2 text-center relative z-10">
            <h1
              className="text-[#FAFAD2] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] animate-fade-in-up"
            >
              Enhancing Crop Yields with Innovative Solutions
            </h1>
            <h2 className="text-[#FFF8DC] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal animate-fade-in-up delay-300">
              Alvis Agrochem provides high-quality agricultural chemicals to help farmers maximize their productivity and profitability.
            </h2>
          </div>
          <button
            onClick={scrollToProducts}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#b7e0b7] text-[#111811] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-[#a5d3a5] transition-all duration-300 hover:scale-105 animate-fade-in-up delay-500 relative z-10"
          >
            <span className="truncate">Explore Products</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
