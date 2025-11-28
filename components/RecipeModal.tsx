import React, { useState, useEffect } from 'react';
import { Dish, LoadingState, RecipeData } from '../types';
import { generateRecipe, generateDishImage } from '../services/geminiService';
import { X, ChefHat, Image as ImageIcon, Sparkles, Loader2, Download, Copy, Check, Share2, Activity, Flame } from 'lucide-react';

interface RecipeModalProps {
  dish: Dish;
  isOpen: boolean;
  onClose: () => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ dish, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'recipe' | 'image'>('recipe');
  
  // Recipe State
  const [recipeData, setRecipeData] = useState<RecipeData | null>(null);
  const [recipeStatus, setRecipeStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [isCopied, setIsCopied] = useState(false);
  
  // Image State
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [imageStatus, setImageStatus] = useState<LoadingState>(LoadingState.IDLE);

  // Reset state when dish changes
  useEffect(() => {
    if (isOpen) {
      setRecipeData(null);
      setRecipeStatus(LoadingState.IDLE);
      setGeneratedImage(null);
      setImageStatus(LoadingState.IDLE);
      setActiveTab('recipe');
      setIsCopied(false);
    }
  }, [dish, isOpen]);

  if (!isOpen) return null;

  const handleGenerateRecipe = async () => {
    setRecipeStatus(LoadingState.LOADING);
    try {
      const data = await generateRecipe(dish.item_name);
      setRecipeData(data);
      setRecipeStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setRecipeStatus(LoadingState.ERROR);
    }
  };

  const formatRecipeText = (data: RecipeData) => {
    const ingredients = data.ingredients || [];
    const instructions = data.instructions || [];
    const nutrition = data.nutrition || [];
    
    return `${dish.item_name}\n\n${data.introduction}\n\nIngredients:\n${ingredients.join('\n- ')}\n\nInstructions:\n${instructions.map((step, i) => `${i+1}. ${step}`).join('\n')}\n\nNutrition:\n${nutrition.join('\n')}\n\nChef's Tips: ${data.tips}`;
  };

  const handleCopyRecipe = async () => {
    if (!recipeData) return;
    try {
      await navigator.clipboard.writeText(formatRecipeText(recipeData));
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleShareRecipe = async () => {
    if (!recipeData) return;
    
    // Check if native sharing is supported
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Recipe for ${dish.item_name}`,
          text: `Check out this authentic Kenyan recipe for ${dish.item_name}:\n\n${recipeData.introduction}\n\nRead more on Sawa Flavors.`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      handleCopyRecipe();
      alert('Sharing is not supported on this device. Recipe copied to clipboard instead!');
    }
  };

  const handleGenerateImage = async () => {
    setImageStatus(LoadingState.LOADING);
    try {
      const imageUrl = await generateDishImage(dish.ai_prompt, dish.category);
      setGeneratedImage(imageUrl);
      setImageStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setImageStatus(LoadingState.ERROR);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white shrink-0">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900">{dish.item_name}</h2>
            <p className="text-sm text-gray-500 mt-1">Authentic Kenyan Cuisine</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-100 px-6 shrink-0 bg-gray-50/50">
          <button
            onClick={() => setActiveTab('recipe')}
            className={`flex items-center gap-2 py-4 px-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'recipe' 
                ? 'border-kenya-red text-kenya-red' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <ChefHat size={18} />
            Recipe & Guide
          </button>
          <button
            onClick={() => setActiveTab('image')}
            className={`flex items-center gap-2 py-4 px-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'image' 
                ? 'border-kenya-red text-kenya-red' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <ImageIcon size={18} />
            AI Visualization
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-grow overflow-y-auto p-6 bg-gray-50/30">
          
          {/* RECIPE TAB */}
          {activeTab === 'recipe' && (
            <div className="space-y-6">
              {recipeStatus === LoadingState.IDLE && (
                <div className="text-center py-12">
                  <ChefHat size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 mb-6">Discover how to cook this authentic dish.</p>
                  <button 
                    onClick={handleGenerateRecipe}
                    className="bg-kenya-red hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Sparkles size={18} />
                    Generate Recipe
                  </button>
                </div>
              )}

              {recipeStatus === LoadingState.LOADING && (
                <div className="flex flex-col items-center justify-center py-20 space-y-4">
                  <Loader2 size={40} className="animate-spin text-kenya-gold" />
                  <p className="text-gray-500 font-medium animate-pulse">Consulting the AI Chef...</p>
                </div>
              )}

              {recipeStatus === LoadingState.SUCCESS && recipeData && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                  {/* Action Bar */}
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={handleShareRecipe}
                      className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-kenya-black transition-colors bg-white px-3 py-1.5 rounded-full border border-gray-200 hover:border-kenya-black shadow-sm"
                    >
                      <Share2 size={14} />
                      Share
                    </button>
                    <button
                      onClick={handleCopyRecipe}
                      className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-kenya-green transition-colors bg-white px-3 py-1.5 rounded-full border border-gray-200 hover:border-kenya-green shadow-sm"
                    >
                      {isCopied ? <Check size={14} /> : <Copy size={14} />}
                      {isCopied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Introduction */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold font-serif text-kenya-black mb-3">About this Dish</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {recipeData.introduction || "No description available."}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Ingredients */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-lg font-bold text-kenya-red mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-kenya-red rounded-full"></span>
                        Ingredients
                      </h3>
                      {recipeData.ingredients && recipeData.ingredients.length > 0 ? (
                        <ul className="space-y-2">
                          {recipeData.ingredients.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-kenya-gold shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-400 italic text-sm">No ingredients listed.</p>
                      )}
                    </div>

                    {/* Nutritional Information */}
                    <div className="bg-green-50/50 p-6 rounded-xl shadow-sm border border-green-100">
                      <h3 className="text-lg font-bold text-kenya-green mb-4 flex items-center gap-2">
                        <Activity size={20} className="text-kenya-green" />
                        Nutrition (Est.)
                      </h3>
                      {recipeData.nutrition && recipeData.nutrition.length > 0 ? (
                        <div className="grid grid-cols-2 gap-3">
                          {recipeData.nutrition.map((item, idx) => (
                            <div key={idx} className="bg-white px-3 py-2 rounded-lg border border-green-100 text-sm font-medium text-gray-700 shadow-sm">
                              {item}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-400 italic text-sm">Nutritional info not available.</p>
                      )}
                      <p className="text-[10px] text-gray-400 mt-4 italic">
                        * Values are AI estimates based on standard ingredients.
                      </p>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-kenya-black mb-4 flex items-center gap-2">
                      <Flame size={20} className="text-kenya-gold" />
                      Instructions
                    </h3>
                    <div className="space-y-4">
                      {recipeData.instructions && recipeData.instructions.length > 0 ? (
                        recipeData.instructions.map((step, idx) => (
                          <div key={idx} className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-orange-50 text-kenya-red font-bold text-sm">
                              {idx + 1}
                            </span>
                            <p className="text-gray-700 leading-relaxed mt-1">{step}</p>
                          </div>
                        ))
                      ) : (
                         <p className="text-gray-400 italic text-sm">No instructions provided.</p>
                      )}
                    </div>
                  </div>

                  {/* Chef's Tips */}
                  {recipeData.tips && (
                    <div className="bg-kenya-sand/20 p-6 rounded-xl border border-dashed border-kenya-earth/30">
                      <h3 className="text-base font-bold text-kenya-earth mb-2">Chef's Tips</h3>
                      <p className="text-gray-700 italic text-sm">{recipeData.tips}</p>
                    </div>
                  )}
                </div>
              )}

              {recipeStatus === LoadingState.ERROR && (
                <div className="text-center py-12 text-red-500">
                  <p>Failed to generate recipe. Please try again.</p>
                </div>
              )}
            </div>
          )}

          {/* IMAGE TAB */}
          {activeTab === 'image' && (
            <div className="h-full flex flex-col">
              {imageStatus === LoadingState.IDLE && (
                <div className="text-center py-12 m-auto">
                  <ImageIcon size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 mb-6">Visualize this dish in a high-end setting.</p>
                  <button 
                    onClick={handleGenerateImage}
                    className="bg-kenya-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Sparkles size={18} />
                    Generate Image
                  </button>
                </div>
              )}

              {imageStatus === LoadingState.LOADING && (
                <div className="flex flex-col items-center justify-center h-full py-16 space-y-8 m-auto w-full max-w-md animate-in fade-in duration-500">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-kenya-gold/10 rounded-full animate-pulse"></div>
                    <div className="absolute -inset-4 bg-kenya-gold/20 rounded-full animate-pulse delay-150"></div>
                    <div className="relative bg-white p-6 rounded-full shadow-xl border border-gray-50">
                       <Loader2 size={48} className="animate-spin text-kenya-gold" />
                    </div>
                  </div>
                  
                  <div className="text-center space-y-3 px-4">
                    <h3 className="text-2xl font-serif font-bold text-gray-900">
                      Creating Masterpiece
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      Our AI chef is plating your <span className="font-semibold text-kenya-black">{dish.item_name}</span> in a photorealistic setting.
                    </p>
                  </div>

                  <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-kenya-gold animate-[pulse_1s_ease-in-out_infinite] rounded-full"></div>
                  </div>
                </div>
              )}

              {imageStatus === LoadingState.SUCCESS && generatedImage && (
                <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500 h-full">
                  <div className="relative w-full rounded-xl overflow-hidden shadow-lg group">
                    <img 
                      src={generatedImage} 
                      alt={dish.item_name} 
                      className="w-full h-auto object-cover max-h-[500px]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                  </div>
                  
                  <div className="mt-6">
                    <a 
                      href={generatedImage} 
                      download={`${dish.image_filename}`}
                      className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg"
                    >
                      <Download size={18} />
                      Download Image
                    </a>
                  </div>
                </div>
              )}

              {imageStatus === LoadingState.ERROR && (
                <div className="text-center py-12 text-red-500 m-auto">
                  <p>Failed to generate image. Please try again.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};