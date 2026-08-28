import React from 'react';
import { config } from '../config';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#2A1616] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-brand-maroon-dark font-serif text-xl font-bold">
                GR
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">
                {config.brand.name}
              </h2>
            </div>
            <p className="text-brand-cream-dark/70 text-sm leading-relaxed max-w-sm">
              {config.brand.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-gold tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              <li><button onClick={() => scrollTo('products')} className="text-brand-cream-dark/80 hover:text-white transition-colors">Our Pickles</button></li>
              <li><button onClick={() => scrollTo('story')} className="text-brand-cream-dark/80 hover:text-white transition-colors">Our Story</button></li>
              <li><button onClick={() => scrollTo('reviews')} className="text-brand-cream-dark/80 hover:text-white transition-colors">Reviews</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-gold tracking-wide">Contact Us</h3>
            <ul className="space-y-4 text-brand-cream-dark/80 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold">📍</span>
                {config.contact.address}
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-gold">📞</span>
                <a href={`tel:${config.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {config.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-gold">✉️</span>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-cream-dark/50">
          <p>© {new Date().getFullYear()} {config.brand.name}. All rights reserved.</p>
          <p>Made with ❤️ in Telangana</p>
        </div>
      </div>
    </footer>
  );
};
