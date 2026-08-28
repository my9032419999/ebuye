import React from 'react';
import { Leaf, Ban, BookOpen, Truck } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-brand-maroon" />,
      title: "Fresh Ingredients",
      desc: "Sourced locally for maximum flavor."
    },
    {
      icon: <Ban className="w-8 h-8 text-brand-maroon" />,
      title: "Zero Preservatives",
      desc: "Naturally preserved using pure oils."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-brand-maroon" />,
      title: "Traditional Recipes",
      desc: "Authentic inherited family secrets."
    },
    {
      icon: <Truck className="w-8 h-8 text-brand-maroon" />,
      title: "Pan-India Delivery",
      desc: "Delivered fresh to your doorstep."
    }
  ];

  return (
    <div className="py-16 bg-brand-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-brand-cream rounded-2xl shadow-sm border border-brand-gold/20 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h4 className="text-lg font-serif font-bold text-gray-900 mb-2">{f.title}</h4>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
