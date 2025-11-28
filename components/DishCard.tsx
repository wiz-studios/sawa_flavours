import React from 'react';
import { Dish } from '../types';
import { ArrowRight } from 'lucide-react';

interface DishCardProps {
  dish: Dish;
  onClick: (dish: Dish) => void;
}

const getImageKeywords = (dish: Dish): string => {
  const name = dish.item_name.toLowerCase();
  const cat = dish.category;

  // Drinks logic
  if (cat === 'Drinks') {
    if (name.includes('beer') || name.includes('lager') || name.includes('tusker') || name.includes('pilsner') || name.includes('guinness') || name.includes('white cap') || name.includes('senator') || name.includes('heineken') || name.includes('corona') || name.includes('budweiser') || name.includes('bell')) return 'beer,bottle';
    if (name.includes('cider')) return 'cider,drink';
    if (name.includes('juice')) return 'juice,fruit';
    if (name.includes('tea') || name.includes('chai')) return 'tea,cup';
    if (name.includes('coffee')) return 'coffee,mug';
    if (name.includes('soda') || name.includes('coke') || name.includes('sprite') || name.includes('fanta') || name.includes('stoney') || name.includes('krest')) return 'soda,bottle';
    if (name.includes('milk') || name.includes('mursik')) return 'milk,yogurt';
    if (name.includes('smirnoff')) return 'cocktail,bottle';
    return 'drink,beverage';
  }

  // Specific food mapping to generic keywords that look similar
  if (name.includes('eggs')) return 'boiled_eggs,breakfast';
  if (name.includes('mandazi')) return 'doughnut,beignet';
  if (name.includes('chapati')) return 'roti,tortilla,flatbread';
  if (name.includes('samosa') || name.includes('sambusa')) return 'samosa,dumpling';
  if (name.includes('rice') || name.includes('pilau')) return 'rice,curry';
  if (name.includes('ugali')) return 'mashed_potato,polenta'; // Visual proxy for white maize meal
  if (name.includes('githeri') || name.includes('maharagwe') || name.includes('beans') || name.includes('mbaazi')) return 'beans,stew';
  if (name.includes('fish') || name.includes('tilapia')) return 'fried_fish,fish';
  if (name.includes('beef') || name.includes('stew')) return 'beef_stew,meat';
  if (name.includes('goat') || name.includes('chops')) return 'grilled_meat,bbq,steak';
  if (name.includes('chicken')) return 'roast_chicken,food';
  if (name.includes('soup')) return 'soup,bowl';
  if (name.includes('chips') || name.includes('fries')) return 'french_fries,chips';
  if (name.includes('kachumbari') || name.includes('salad')) return 'salad,vegetables';
  if (name.includes('mukimo') || name.includes('kienyeji')) return 'mashed_vegetables,greens';
  
  // Fallbacks based on category
  if (cat === 'Breakfast') return 'breakfast,pancakes';
  if (cat === 'Mains') return 'dinner,meal,meat';
  if (cat === 'Sides') return 'appetizer,snack';
  
  return 'cooked,meal';
};

export const DishCard: React.FC<DishCardProps> = ({ dish, onClick }) => {
  // Generate a deterministic seed based on the dish name to ensure the same image 
  // loads for the same dish, but different images for different dishes.
  const seed = dish.item_name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  const keywords = getImageKeywords(dish);
  // We use the keywords to fetch a relevant image. 
  const placeholderUrl = `https://loremflickr.com/600/400/${keywords}?lock=${seed}`;

  return (
    <div 
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1 flex flex-col h-full"
      onClick={() => onClick(dish)}
    >
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img 
          src={placeholderUrl} 
          alt={dish.item_name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
             // Fallback to generic food image if specific keywords return nothing/error
             const target = e.target as HTMLImageElement;
             target.src = `https://loremflickr.com/600/400/food,dinner?lock=${seed}`;
          }}
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
