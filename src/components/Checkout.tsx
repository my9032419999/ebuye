import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const Checkout: React.FC = () => {
  const { cartItems, cartTotal, setCurrentView, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setCurrentView('success');
  };

  if (cartItems.length === 0 && currentView === 'checkout') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <p className="text-xl mb-4 font-serif">Your cart is empty.</p>
        <button 
          onClick={() => setCurrentView('home')}
          className="text-brand-maroon font-bold underline"
        >
          Go back to shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => setCurrentView('home')}
          className="flex items-center gap-2 text-gray-600 hover:text-brand-maroon font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>

        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-brand-cream-dark">
              <h2 className="text-xl font-bold font-serif mb-6 text-brand-maroon border-b border-gray-100 pb-2">Delivery Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-maroon focus:border-transparent transition-shadow" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                  <input required type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-maroon focus:border-transparent transition-shadow" placeholder="+91" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-maroon focus:border-transparent transition-shadow" placeholder="jane@example.com" />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Complete Address</label>
                <textarea required name="address" value={formData.address} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-maroon focus:border-transparent transition-shadow" placeholder="House No, Street, Landmark" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-maroon focus:border-transparent transition-shadow" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                  <input required type="text" name="state" value={formData.state} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-maroon focus:border-transparent transition-shadow" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                  <input required type="text" name="pincode" value={formData.pincode} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-maroon focus:border-transparent transition-shadow" />
                </div>
              </div>

              <button type="submit" className="w-full py-4 bg-brand-maroon hover:bg-brand-maroon-dark text-white rounded-xl font-bold text-lg transition-colors shadow-md">
                Place Order (COD)
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-brand-cream-dark sticky top-24">
              <h2 className="text-xl font-bold font-serif mb-6 text-brand-maroon border-b border-gray-100 pb-2">Order Summary</h2>
              
              <div className="flex flex-col gap-4 mb-6 max-h-80 overflow-y-auto">
                {cartItems.map(item => (
                  <div key={item.product.id} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{item.product.name}</p>
                        <p className="text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-bold text-gray-900">₹{item.product.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-xl font-bold font-serif text-gray-900 pt-4 border-t border-gray-100">
                  <span>Total</span>
                  <span>₹{cartTotal}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export const SuccessView: React.FC = () => {
  const { setCurrentView } = useCart();
  
  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-lg w-full text-center border border-brand-cream-dark">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Thank You!</h1>
        <p className="text-gray-600 text-lg mb-8">
          Your order has been received successfully. We will contact you shortly to confirm the delivery details.
        </p>
        <button 
          onClick={() => setCurrentView('home')}
          className="px-8 py-4 bg-brand-maroon hover:bg-brand-maroon-dark text-white rounded-xl font-bold transition-colors shadow-md w-full"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};
