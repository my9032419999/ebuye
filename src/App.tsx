import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Products } from './components/Products';
import { Reviews } from './components/Reviews';
import { OurStory } from './components/OurStory';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { Checkout, SuccessView } from './components/Checkout';
import { WhatsAppButton } from './components/WhatsAppButton';

const MainLayout: React.FC = () => {
  const { currentView } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero />
            <Features />
            <Products />
            <Reviews />
            <OurStory />
          </>
        )}
        
        {currentView === 'checkout' && <Checkout />}
        
        {currentView === 'success' && <SuccessView />}
      </main>

      {currentView === 'home' && <Footer />}
      
      <Cart />
      <WhatsAppButton />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainLayout />
    </CartProvider>
  );
}
