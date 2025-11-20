import React, { useState, useEffect } from 'react';
import { Dish, LoadingState } from '../types';
import { generateRecipe, generateDishImage } from '../services/geminiService';
import { X, ChefHat, Image as ImageIcon, Sparkles, Loader2, Download } from 'lucide-react';

interface RecipeModalProps {
  dish: Dish;
  isOpen: boolean;
  onClose: () => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ dish, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'recipe' | 'image'>('recipe');
  
  // Recipe State
  const [recipeContent, setRecipeContent] = useState<string | null>(null);
  const [recipeStatus, setRecipeStatus] = useState<LoadingState>(LoadingState.IDLE);
  
  // Image State
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [imageStatus, setImageStatus] = useState<LoadingState>(LoadingState.IDLE);

  // Reset state when dish changes
  useEffect(() => {
    if (isOpen) {
      setRecipeContent(null);
      setRecipeStatus(LoadingState.IDLE);
      setGeneratedImage(null);
      setImageStatus(LoadingState.IDLE);
      setActiveTab('recipe');
    }
  }, [dish, isOpen]);

  if (!isOpen) return null;

  const handleGenerateRecipe = async () => {
    setRecipeStatus(LoadingState.LOADING);
    try {
      const content = await generateRecipe(dish.item_name);
      setRecipeContent(content);
      setRecipeStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setRecipeStatus(LoadingState.ERROR);
    }
  };

  const handleGenerateImage = async () => {
    setImageStatus(LoadingState.LOADING);
    try {
      const imageUrl = await generateDishImage(dish.ai_prompt);
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
                <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ChefHat size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Cook?</h3>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    Generate a complete, authentic recipe for {dish.item_name} powered by Google's Gemini 2.5 Flash model.
                  </p>
                  <button 
                    onClick={handleGenerateRecipe}
                    className="inline-flex items-center px-6 py-3 bg-kenya-red text-white text-sm font-semibold rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                  >
                    <Sparkles size={18} className="mr-2" />
                    Generate Recipe
                  </button>
                </div>
              )}

              {recipeStatus === LoadingState.LOADING && (
                <div className="flex flex-col items-center justify-center py-20">
                  <Loader2 size={40} className="text-kenya-red animate-spin mb-4" />
                  <p className="text-gray-600 font-medium animate-pulse">Consulting the digital chef...</p>
                </div>
              )}

              {recipeStatus === LoadingState.SUCCESS && recipeContent && (
                <div className="prose prose-stone max-w-none bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
                    {/* Simple markdown-like rendering for header levels */}
                    {recipeContent.split('\n').map((line, i) => {
                      if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-bold mt-6 mb-3 text-kenya-green">{line.replace('## ', '')}</h2>;
                      if (line.startsWith('### ')) return <h3 key={i} className="text-lg font-bold mt-4 mb-2 text-gray-900">{line.replace('### ', '')}</h3>;
                      if (line.startsWith('**')) return <strong key={i} className="block mt-2">{line.replace(/\*\*/g, '')}</strong>;
                      if (line.startsWith('- ')) return <li key={i} className="ml-4 list-disc marker:text-kenya-gold pl-1 my-1">{line.replace('- ', '')}</li>;
                      if (line.startsWith('1. ')) return <div key={i} className="flex gap-3 my-2"><span className="font-bold text-kenya-red shrink-0">{line.split('. ')[0]}.</span><span>{line.substring(3)}</span></div>;
                      return <p key={i} className="mb-2">{line}</p>;
                    })}
                  </div>
                </div>
              )}

              {recipeStatus === LoadingState.ERROR && (
                <div className="text-center py-10 bg-red-50 rounded-xl border border-red-100">
                  <p className="text-red-600 font-medium">Oops! The chef dropped the cookbook.</p>
                  <button 
                    onClick={handleGenerateRecipe} 
                    className="mt-4 text-sm text-red-700 underline hover:text-red-900"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          )}

          {/* IMAGE TAB */}
          {activeTab === 'image' && (
            <div className="space-y-6 h-full flex flex-col">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 items-start">
                <Sparkles className="text-blue-600 shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="text-sm font-bold text-blue-900">AI Prompt</h4>
                  <p className="text-sm text-blue-800 italic">"{dish.ai_prompt}"</p>
                </div>
              </div>

              <div className="flex-grow flex flex-col items-center justify-center min-h-[300px] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 relative group">
                {imageStatus === LoadingState.IDLE && (
                  <div className="text-center p-8">
                     <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                       <ImageIcon size={32} />
                     </div>
                    <p className="text-gray-500 mb-6 max-w-xs mx-auto">
                      Visualize this dish using Google's Imagen model.
                    </p>
                    <button 
                      onClick={handleGenerateImage}
                      className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                    >
                      <Sparkles size={18} className="mr-2" />
                      Generate Image
                    </button>
                  </div>
                )}

                {imageStatus === LoadingState.LOADING && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-10">
                    <Loader2 size={48} className="text-indigo-600 animate-spin mb-4" />
                    <p className="text-gray-600 font-medium">Creating culinary art...</p>
                  </div>
                )}

                {imageStatus === LoadingState.SUCCESS && generatedImage && (
                  <div className="relative w-full h-full flex items-center justify-center bg-black">
                     <img 
                        src={generatedImage} 
                        alt="AI Generated Dish" 
                        className="max-w-full max-h-full object-contain shadow-2xl"
                      />
                      <a 
                        href={generatedImage} 
                        download={dish.image_filename}
                        className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-full shadow-lg transition-all flex items-center gap-2 font-medium text-sm"
                        title={`Download ${dish.image_filename}`}
                      >
                        <Download size={18} />
                        <span>Download</span>
                      </a>
                  </div>
                )}
                
                {imageStatus === LoadingState.ERROR && (
                  <div className="text-center p-8">
                    <p className="text-red-500 mb-4">Failed to generate image.</p>
                     <button 
                      onClick={handleGenerateImage}
                      className="text-sm text-indigo-600 hover:underline"
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};