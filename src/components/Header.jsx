import React, { useState, useEffect } from 'react';
import alvisLogo from '../assets/alvis.png'; // Import the logo

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50); // Header considered "scrolled" after 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerElement = document.querySelector('header'); // Get the header element itself
      const headerHeight = headerElement ? headerElement.offsetHeight : 80; // Use its actual height
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({ 
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    // The <header> is now the root, sticky, and has z-index to ensure it's on top.
    // Glass effect classes are applied directly here.
    <header 
      className={`flex items-center justify-between whitespace-nowrap px-10 py-3 sticky top-0 z-50 transition-all duration-300
        ${isScrolled 
          // Scrolled state: slightly more opaque, stronger blur, subtle shadow and border
          ? 'bg-white/30 backdrop-blur-md shadow-lg border-b border-white/20' 
          // Initial state: more transparent, lighter blur, almost transparent border
          : 'bg-white/10 backdrop-blur-sm border-b border-transparent' // You can use border-white/5 for a very faint initial border
        }`}
      style={{
        transform: `translateY(${scrollY * -0.1}px)`, // Optional: header parallax
        // backgroundColor is now controlled by Tailwind classes above
      }}
    >
      <div className="flex items-center gap-4">
        <div className={`mt-2 w-auto h-auto relative z-10 transition-transform duration-300 ${isScrolled ? 'scale-110' : 'scale-100'}`}>
              <img src={alvisLogo} alt="logo" className="w-[128px] h-[64px]" />
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <button 
            onClick={() => scrollToSection('products')}
            className="text-[#111811] text-sm font-medium leading-normal hover:text-[#608560] transition-all duration-300 cursor-pointer border-none bg-transparent hover:scale-105 relative group"
            // Removed 'nav-link-glass' - style directly or ensure it's defined if needed
          >
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#b7e0b7] to-[#608560] transition-all duration-300 group-hover:w-full rounded-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} // Assuming 'testimonials' is the ID for "About Us"
            className="text-[#111811] text-sm font-medium leading-normal hover:text-[#608560] transition-all duration-300 cursor-pointer border-none bg-transparent hover:scale-105 relative group"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#b7e0b7] to-[#608560] transition-all duration-300 group-hover:w-full rounded-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-[#111811] text-sm font-medium leading-normal hover:text-[#608560] transition-all duration-300 cursor-pointer border-none bg-transparent hover:scale-105 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#b7e0b7] to-[#608560] transition-all duration-300 group-hover:w-full rounded-full"></span>
          </button>
        </div>
        <button
          onClick={() => scrollToSection('products')}
          className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 transform hover:scale-110 relative 
            ${isScrolled 
              ? 'bg-gradient-to-r from-[#608560]/90 to-[#4f7350]/90 text-white hover:from-[#4f7350] hover:to-[#3e5e3f] backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl' 
              : 'bg-gradient-to-r from-[#b7e0b7]/80 to-[#a5d3a5]/80 text-[#111811] hover:from-[#a5d3a5] hover:to-[#93c693] backdrop-blur-sm border border-white/30 shadow-md hover:shadow-lg'
            }`}
          // The 'glass-button' class functionality is integrated here.
          // Inline style for backdropFilter is kept if specific blur value is needed,
          // otherwise Tailwind's backdrop-blur-sm (4px) or backdrop-blur-md (12px) etc. can be used.
          style={{
            backdropFilter: 'blur(10px)', // Specific blur for this button
            WebkitBackdropFilter: 'blur(10px)', // For Safari
          }}
        >
          <span className="truncate">Shop Now</span>
        </button>
      </div>
    </header>
  );
};
export default Header;