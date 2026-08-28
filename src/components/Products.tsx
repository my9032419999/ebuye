import React, { useState } from 'react';
import { config } from '../config';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

export const Products: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Veg' | 'Non-Veg'>('All');
  const { addToCart } = useCart();

  const filteredProducts = config.products.filter(p => 
    filter === 'All' ? true : p.category === filter
  );

  return (
    <section id="products" className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-maroon mb-4">Handpicked Pickles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From the fiery avakaya to soul-warming specials — every jar is made the way it was meant to be.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12">
          {['All', 'Veg', 'Non-Veg'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat 
                  ? 'bg-brand-maroon text-white shadow-md' 
                  : 'bg-brand-cream-dark text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border border-brand-cream-dark">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm text-white ${product.category === 'Veg' ? 'bg-green-600' : 'bg-red-600'}`}>
                    {product.category}
                  </span>
                  {product.isBestseller && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm bg-brand-gold text-brand-maroon-dark">
                      Bestseller
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold font-serif text-gray-900 leading-tight mb-1">{product.name}</h3>
                    <p className="text-brand-maroon font-medium text-sm">{product.teluguName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">₹{product.price}</p>
                    <p className="text-xs text-gray-500 font-medium">{product.weight}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
                
                <div className="flex items-center gap-1 mb-6">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-2">Spice Level:</span>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < product.spiceLevel ? 'text-red-500' : 'text-gray-200 grayscale opacity-40'}`}>🌶️</span>
                  ))}
                </div>

                <button 
                  onClick={() => addToCart(product)}
                  className="w-full py-3.5 bg-brand-cream-dark hover:bg-brand-maroon text-brand-maroon hover:text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors border border-brand-maroon/20 hover:border-transparent group/btn"
                >
                  Add +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
