export type Category = 'All' | 'Breakfast' | 'Mains' | 'Sides' | 'Drinks';

export interface Dish {
  item_name: string;
  image_filename: string;
  ai_prompt: string;
  description?: string; // Short description for the card
  category: Category;
}

export interface RecipeData {
  introduction: string;
  ingredients: string[];
  instructions: string[];
  nutrition: string[];
  tips: string;
}

export interface ImageResponse {
  imageUrl: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}