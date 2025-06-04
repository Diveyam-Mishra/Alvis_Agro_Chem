import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductsSection from './components/ProductsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f9fbf9] group/design-root overflow-x-hidden" style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <HeroSection />

        {/* Moved these sections out so they are scrollable in window */}
        <ProductsSection />
        <TestimonialsSection />
        <ContactSection />

        <Footer />
      </div>
    </div>
  );
}

export default App;
