import React from 'react';
import { Dish } from '../types';
import { ArrowRight } from 'lucide-react';

interface DishCardProps {
  dish: Dish;
  onClick: (dish: Dish) => void;
}

export const DishCard: React.FC<DishCardProps> = ({ dish, onClick }) => {
  // Deterministic placeholder based on name length for visual variety if needed, 
  // but here we use picsum seed for consistency.
  const placeholderUrl = `https://picsum.photos/seed/${dish.item_name.replace(/\s/g, '')}/600/400`;

  return (
    <div 
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1 flex flex-col h-full"
      onClick={() => onClick(dish)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={placeholderUrl} 
          alt={dish.item_name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-kenya-red transition-colors">
          {dish.item_name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          {dish.description}
        </p>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-kenya-green font-semibold text-sm uppercase tracking-wider">
          <span>View Details</span>
          <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
