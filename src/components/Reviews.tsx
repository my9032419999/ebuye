import React from 'react';
import { Star } from 'lucide-react';

export const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, MH",
      rating: 5,
      text: "The Avakaya pickle tastes exactly like my grandmother used to make. The quality of oil and spices is premium. Absolutely loved it!",
    },
    {
      id: 2,
      name: "Rahul Reddy",
      location: "Hyderabad, TG",
      rating: 5,
      text: "I've tried many store-bought non-veg pickles, but the Chicken pickle from Grameena Ruchulu is on another level. Perfectly spiced and fresh.",
    },
    {
      id: 3,
      name: "Sneha Desai",
      location: "Bangalore, KA",
      rating: 5,
      text: "Zero preservatives and authentic taste. The Gongura pickle is a staple in my house now. Highly recommend to anyone missing home food.",
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-brand-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-maroon font-bold tracking-widest text-sm uppercase mb-4 block">Social Proof</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Customer Reviews</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear what our happy family of pickle lovers has to say about our homemade delicacies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-gold/20 flex flex-col relative hover:shadow-md transition-shadow">
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-6 text-brand-gold opacity-20 font-serif text-6xl leading-none">"</div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 flex-grow relative z-10 italic">
                "{review.text}"
              </p>
              
              <div className="mt-auto border-t border-brand-cream-dark pt-4">
                <p className="font-bold font-serif text-gray-900 text-lg">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
