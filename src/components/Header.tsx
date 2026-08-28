import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { config } from '../config';

export const Header: React.FC = () => {
  const { cartCount, setIsCartOpen, currentView, setCurrentView } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-brand-cream/95 backdrop-blur-sm border-b border-brand-cream-dark shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setCurrentView('home')}
        >
          <div className="w-12 h-12 bg-brand-maroon rounded-full flex items-center justify-center text-brand-gold font-serif text-2xl font-bold shadow-sm group-hover:scale-105 transition-transform">
            GR
          </div>
          <div className="flex flex-col">
            <h1 className="font-serif text-xl sm:text-2xl font-bold text-brand-maroon leading-tight">
              {config.brand.name}
            </h1>
            <p className="text-[10px] sm:text-xs text-brand-gold-light tracking-[0.2em] font-semibold">
              {config.brand.tagline}
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => handleNavClick('products')} className="text-sm font-medium text-gray-700 hover:text-brand-maroon transition-colors">Our Pickles</button>
          <button onClick={() => handleNavClick('story')} className="text-sm font-medium text-gray-700 hover:text-brand-maroon transition-colors">Our Story</button>
          <button onClick={() => handleNavClick('footer')} className="text-sm font-medium text-gray-700 hover:text-brand-maroon transition-colors">Contact</button>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button 
            className="relative p-2 text-gray-800 hover:text-brand-maroon transition-colors"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Cart"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand-maroon text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center translate-x-1 -translate-y-1 shadow-sm">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            className="md:hidden p-2 text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-brand-cream border-b border-brand-cream-dark shadow-lg py-4 px-4 flex flex-col gap-4">
          <button onClick={() => handleNavClick('products')} className="text-left text-base font-medium text-gray-800 py-2 border-b border-gray-200">Our Pickles</button>
          <button onClick={() => handleNavClick('story')} className="text-left text-base font-medium text-gray-800 py-2 border-b border-gray-200">Our Story</button>
          <button onClick={() => handleNavClick('footer')} className="text-left text-base font-medium text-gray-800 py-2">Contact</button>
        </div>
      )}
    </header>
  );
};
