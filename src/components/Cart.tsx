import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

export const Cart: React.FC = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    cartTotal,
    setCurrentView
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentView('checkout');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Cart Panel */}
      <div className="fixed inset-y-0 right-0 z-50 w-full md:w-[400px] bg-brand-cream shadow-2xl flex flex-col transform transition-transform duration-300">
        
        {/* Header */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-brand-cream-dark bg-white">
          <div className="flex items-center gap-2 text-brand-maroon">
            <ShoppingBag size={20} />
            <h2 className="text-lg font-serif font-bold">Your Cart</h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gray-500 hover:text-brand-maroon transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500">
              <ShoppingBag size={48} className="mb-4 opacity-20" />
              <p className="text-lg font-medium">Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-6 px-6 py-2 bg-brand-maroon text-white rounded-full font-medium"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex gap-4 bg-white p-3 rounded-2xl shadow-sm border border-brand-cream-dark">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-sm text-gray-900 font-serif leading-tight">{item.product.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-red-500 p-1"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{item.product.weight}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center bg-brand-cream-dark rounded-lg">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-brand-maroon hover:bg-gray-200 rounded-l-lg transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-brand-maroon hover:bg-gray-200 rounded-r-lg transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-bold text-brand-maroon">₹{item.product.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-brand-cream-dark p-6 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-2xl font-bold font-serif text-gray-900">₹{cartTotal}</span>
            </div>
            <p className="text-xs text-gray-500 mb-4 text-center">Shipping & taxes calculated at checkout.</p>
            <button 
              onClick={handleCheckout}
              className="w-full py-4 bg-brand-maroon hover:bg-brand-maroon-dark text-white rounded-xl font-bold text-lg transition-colors shadow-md transform hover:-translate-y-0.5"
            >
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </>
  );
};
