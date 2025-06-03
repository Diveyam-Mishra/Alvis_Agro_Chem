import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    console.log(`Scrolling to section: ${sectionId}`, element);
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
  };

  return (
    <div style={{ backgroundColor: '#D0C0B5' }}>
      <header 
        className={`flex items-center justify-between whitespace-nowrap border-b border-solid px-10 py-3 sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-header-scrolled' 
            : 'glass-header'
        }`}
        style={{
          transform: `translateY(${scrollY * -0.1}px)`,
          backgroundColor: '#D0C0B5'
        }}
      >
        <div className="flex items-center gap-4 text-[#111811]">
          <div className={`mt-2 w-auto h-auto relative z-10 transition-transform duration-300 ${isScrolled ? 'scale-110' : 'scale-100'}`}>
                <img src="src/assets/alvis.png" alt="logo" className="w-[128px] h-[64px]" />
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <button 
              onClick={() => scrollToSection('products')}
              className="text-[#111811] text-sm font-medium leading-normal hover:text-[#608560] transition-all duration-300 cursor-pointer border-none bg-transparent hover:scale-105 relative group nav-link-glass"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#b7e0b7] to-[#608560] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-[#111811] text-sm font-medium leading-normal hover:text-[#608560] transition-all duration-300 cursor-pointer border-none bg-transparent hover:scale-105 relative group nav-link-glass"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#b7e0b7] to-[#608560] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#111811] text-sm font-medium leading-normal hover:text-[#608560] transition-all duration-300 cursor-pointer border-none bg-transparent hover:scale-105 relative group nav-link-glass"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#b7e0b7] to-[#608560] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
          </div>
          <button
            onClick={() => scrollToSection('products')}
            className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 transform hover:scale-110 relative glass-button ${
              isScrolled 
                ? 'bg-gradient-to-r from-[#608560]/90 to-[#4f7350]/90 text-white hover:from-[#4f7350] hover:to-[#3e5e3f] backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl' 
                : 'bg-gradient-to-r from-[#b7e0b7]/80 to-[#a5d3a5]/80 text-[#111811] hover:from-[#a5d3a5] hover:to-[#93c693] backdrop-blur-sm border border-white/30 shadow-md hover:shadow-lg'
            }`}
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <span className="truncate">Shop Now</span>
          </button>
        </div>
      </header>
    </div>
  );
};
export default Header;
