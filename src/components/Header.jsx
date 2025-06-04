import React, { useState, useEffect } from 'react';
import alvisLogo from '../assets/alvis.png';

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
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full px-8 py-4 transition-all duration-300
        ${isScrolled
          ? 'bg-white/70 backdrop-blur-lg shadow-md border-b border-green-200'
          : 'bg-white/30 backdrop-blur-md border-b border-transparent'
        }`}
      style={{
        transform: `translateY(${scrollY * -0.1}px)`,
      }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={alvisLogo}
            alt="Alvis Agro Chem"
            className="w-[120px] h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-10">
          {[
            { label: 'Products', id: 'products' },
            { label: 'About Us', id: 'testimonials' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-[#1d3a2f] font-medium text-sm tracking-wide hover:text-green-700 transition duration-300 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('products')}
          className="bg-gradient-to-r from-green-500 to-lime-500 text-green-800 font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          Shop Now
        </button>
      </div>
    </header>
  );
};

export default Header;
