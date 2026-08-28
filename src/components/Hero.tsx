import React from 'react';

export const Hero: React.FC = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStory = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1596649281313-2bd134316979?q=80&w=2070&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-10">
        <span className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-4 drop-shadow-md">
          Tradition in Every Bite
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight mb-6 drop-shadow-lg">
          The Taste of Home, <br className="hidden sm:block" /> in Every Jar
        </h2>
        <p className="text-gray-200 text-base md:text-lg lg:text-xl mb-10 max-w-2xl font-medium drop-shadow-md leading-relaxed">
          Authentic homemade Telangana & Andhra pickles, handcrafted in small batches with traditional recipes, fresh ingredients and pure sesame oil.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            onClick={scrollToProducts}
            className="px-8 py-3.5 bg-brand-maroon hover:bg-brand-maroon-dark text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Shop Pickles
          </button>
          <button 
            onClick={scrollToStory}
            className="px-8 py-3.5 bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-maroon rounded-full font-semibold transition-all shadow-lg backdrop-blur-sm"
          >
            Our Story
          </button>
        </div>
      </div>

      {/* Stats overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent pt-12 pb-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center divide-x divide-white/20">
          <div className="px-2">
            <p className="text-brand-gold font-serif text-2xl sm:text-3xl font-bold mb-1">25+</p>
            <p className="text-white/90 text-xs sm:text-sm font-medium uppercase tracking-wider">Pickle Varieties</p>
          </div>
          <div className="px-2">
            <p className="text-brand-gold font-serif text-2xl sm:text-3xl font-bold mb-1">10k+</p>
            <p className="text-white/90 text-xs sm:text-sm font-medium uppercase tracking-wider">Happy Families</p>
          </div>
          <div className="px-2">
            <p className="text-brand-gold font-serif text-2xl sm:text-3xl font-bold mb-1">100%</p>
            <p className="text-white/90 text-xs sm:text-sm font-medium uppercase tracking-wider">Homemade</p>
          </div>
        </div>
      </div>
    </div>
  );
};
