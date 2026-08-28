import React from 'react';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-brand-maroon text-white relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-gold opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-gold opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-4 block">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              A Journey of Taste, Tradition & Love.
            </h2>
            <div className="space-y-6 text-brand-cream/80 text-lg">
              <p>
                At Grameena Ruchulu, we believe that the soul of Indian cuisine lies in its pickles. What started as a small kitchen endeavor in a sleepy Telangana village has blossomed into a passion project to bring authentic homemade flavors to every dining table.
              </p>
              <p>
                We strictly adhere to ancestral recipes passed down through generations. Our pickles are meticulously handcrafted in small batches using sun-dried premium spices, freshly plucked ingredients, and pure, cold-pressed sesame oil.
              </p>
              <p className="text-brand-gold font-serif italic text-2xl pt-4">
                "We don't just make pickles; we preserve memories."
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-4 border-brand-gold/30 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1605553952766-3d2315b819f6?auto=format&fit=crop&w=800&q=80" 
                alt="Traditional Indian Spices" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -left-6 bg-brand-gold text-brand-maroon-dark w-32 h-32 rounded-full flex flex-col items-center justify-center p-4 shadow-xl transform -rotate-12">
              <span className="font-serif font-bold text-3xl">100%</span>
              <span className="text-xs uppercase font-bold tracking-wider text-center">Homemade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
