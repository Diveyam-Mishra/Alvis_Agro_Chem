import React, { useState, useEffect } from 'react';

const ProductCard = ({ product, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Changed from true to false

  const productDetails = {
    1: {
      features: ['Fast-acting formula', 'Safe for crops', 'Long-lasting protection', 'Eco-friendly'],
      applications: 'Ideal for cotton, rice, wheat, and vegetable crops',
      usage: 'Apply 2-3ml per liter of water during pest infestation'
    },
    2: {
      features: ['Rich in NPK', 'Organic nutrients', 'Soil enhancer', 'Water-soluble'],
      applications: 'Suitable for all types of crops and soil conditions',
      usage: 'Mix 50g per plant every 15 days during growing season'
    },
    3: {
      features: ['Selective action', 'Root absorption', 'Weather resistant', 'Non-toxic to crops'],
      applications: 'Effective against broadleaf and grassy weeds',
      usage: 'Spray 1-2ml per liter when weeds are 2-4 inches tall'
    }
  };

  const details = productDetails[product.id];

  return (
    <div 
      className={`relative min-w-80 h-96 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${
        isHovered ? 'z-20' : 'z-10'
      }`}
      style={{ 
        perspective: '1000px',
        filter: isHovered ? 'brightness(1.05)' : 'brightness(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 cursor-pointer ${
          isFlipped ? 'transform' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div 
          className="absolute w-full h-full rounded-xl bg-white shadow-lg overflow-hidden border border-gray-200 hover:border-green-300 transition-colors"
          style={{
            backfaceVisibility: 'hidden'
          }}
        >
          <div
            className="w-full h-2/3 bg-center bg-no-repeat bg-cover transition-transform duration-300 hover:scale-110"
            style={{ backgroundImage: `url("${product.image}")` }}
          ></div>
          <div className="p-6 h-1/3 flex flex-col justify-between bg-gradient-to-t from-white to-gray-50">
            <div>
              <h3 className="text-gray-900 text-xl font-bold leading-normal mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm font-normal leading-relaxed">{product.description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-green-400 text-xs font-medium flex items-center">
                <span className="mr-2">🔄</span>
                Click to learn more
              </p>
              <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">→</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div 
          className="absolute w-full h-full rounded-xl bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-xl p-6 border border-green-500"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="h-full flex flex-col justify-between text-white">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                {product.title}
                <span className="ml-2 text-lg">✨</span>
              </h3>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-3 text-lg flex items-center">
                  <span className="mr-2">🌟</span>
                  Key Features:
                </h4>
                <ul className="text-sm space-y-2">
                  {details.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 opacity-80"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 flex items-center">
                  <span className="mr-2">🌱</span>
                  Applications:
                </h4>
                <p className="text-sm opacity-90 leading-relaxed">{details.applications}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <span className="mr-2">📋</span>
                  Usage:
                </h4>
                <p className="text-sm opacity-90 leading-relaxed">{details.usage}</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-white/20">
              <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105 shadow-md">
                Buy Now
              </button>
              <p className="text-xs opacity-70 flex items-center">
                <span className="mr-1">←</span>
                Click to flip back
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const section = document.getElementById('products');
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > 0;
        setSectionVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      title: 'Pesticides',
      description: 'Effective solutions for pest control.',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Fertilizers',
      description: 'Nutrient-rich fertilizers for healthy growth.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Herbicides',
      description: 'Powerful herbicides for weed management.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div>
    <section id="products" className="relative py-16 bg-gradient-to-br from-green-50 to-green-100">
      {/* Simplified parallax background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
        >
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-green-300 to-green-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-32 right-16 w-32 h-32 bg-gradient-to-tl from-green-600 to-green-700 rounded-full opacity-15"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-green-200 to-green-300 rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 text-5xl font-bold leading-tight mb-6">
            Our Premium Products
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of agricultural solutions designed to maximize your crop yield and productivity.
          </p>
        </div>

        <div className="flex justify-center items-center min-h-[600px]">
          <div className="flex flex-wrap justify-center gap-10 max-w-6xl">
            {products.map((product, index) => (
              <div
              key={product.id}
              className={`transition-all duration-700 transform ${
                sectionVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
              >
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
            </div>
  );
};

export default ProductsSection;