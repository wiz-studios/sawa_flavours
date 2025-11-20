import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-kenya-earth text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-kenya-gold rounded-full text-kenya-black">
             <UtensilsCrossed size={24} />
          </div>
          <h1 className="text-2xl font-serif font-bold tracking-wide">
            Sawa<span className="text-kenya-gold">Flavors</span>
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-6 text-sm font-medium text-gray-100">
            <li className="hover:text-kenya-gold transition-colors cursor-pointer">Menu</li>
            <li className="hover:text-kenya-gold transition-colors cursor-pointer">About</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
