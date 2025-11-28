import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { DishCard } from './components/DishCard';
import { RecipeModal } from './components/RecipeModal';
import { DISHES } from './constants';
import { Dish, Category } from './types';
import { Search } from 'lucide-react';

const CATEGORIES: Category[] = ['All', 'Breakfast', 'Mains', 'Sides', 'Drinks'];

const App: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleDishClick = (dish: Dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Small delay to allow animation to finish before clearing data if we added exit animations
    setTimeout(() => setSelectedDish(null), 300);
  };

  const filteredDishes = useMemo(() => {
    return DISHES.filter(dish => {
      const matchesCategory = activeCategory === 'All' || dish.category === activeCategory;
      const matchesSearch = 
        dish.item_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (dish.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-kenya-sand/30">
      <Header />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-kenya-black mb-4">
            Taste of the <span className="text-kenya-red">Savanna</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the vibrant, delicious world of Kenyan cuisine. 
            From hearty breakfast to nyama choma, experience it all with AI.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Search for a dish..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 bg-white focus:border-kenya-red focus:ring-4 focus:ring-red-50 outline-none transition-all shadow-sm group-hover:shadow-md text-gray-700 placeholder-gray-400"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-kenya-red transition-colors" size={20} />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 ${
                activeCategory === category
                  ? 'bg-kenya-red text-white shadow-md scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {filteredDishes.map((dish) => (
            <DishCard 
              key={dish.item_name} 
              dish={dish} 
              onClick={handleDishClick} 
            />
          ))}
        </div>

        {filteredDishes.length === 0 && (
          <div className="text-center py-20 flex flex-col items-center">
            <div className="bg-white p-6 rounded-full shadow-sm mb-4">
               <Search size={40} className="text-gray-300" />
            </div>
            <p className="text-gray-500 text-lg mb-4">No dishes found matching your search.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="text-kenya-red font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sawa Flavors. Powered by Google Gemini.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-gray-400">
            <span className="text-xs">Images generated by Imagen 4 | Recipes by Gemini 2.5 Flash</span>
          </div>
        </div>
      </footer>

      {selectedDish && (
        <RecipeModal 
          dish={selectedDish} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default App;