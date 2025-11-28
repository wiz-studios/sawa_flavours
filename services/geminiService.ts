import { GoogleGenAI, Type } from "@google/genai";
import { RecipeData } from '../types';

// Initialize the client with the environment variable.
// IMPORTANT: Ensure process.env.API_KEY is available in the runtime.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateRecipe = async (dishName: string): Promise<RecipeData | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a master Kenyan chef. Create a detailed, authentic recipe for "${dishName}".
      
      Provide the response in JSON format with the following fields:
      - introduction: A brief cultural history or significance of the dish.
      - ingredients: A list of ingredients with metric measurements.
      - instructions: Step-by-step cooking or serving guide.
      - nutrition: A list of estimated nutritional values per serving (e.g., "Calories: 300kcal", "Protein: 15g").
      - tips: Chef's advice for the best flavor or pairing suggestions.
      
      Ensure all fields are populated with rich detail.`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            introduction: { type: Type.STRING },
            ingredients: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            instructions: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            nutrition: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            tips: { type: Type.STRING }
          },
          // CRITICAL: Enforce that these fields are required so the model doesn't return empty objects
          required: ["introduction", "ingredients", "instructions", "nutrition", "tips"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    
    const parsed = JSON.parse(text);

    // Defensive coding: Ensure arrays exist to prevent "Cannot read properties of undefined (reading 'map')"
    return {
      introduction: parsed.introduction || "",
      ingredients: Array.isArray(parsed.ingredients) ? parsed.ingredients : [],
      instructions: Array.isArray(parsed.instructions) ? parsed.instructions : [],
      nutrition: Array.isArray(parsed.nutrition) ? parsed.nutrition : [],
      tips: parsed.tips || ""
    } as RecipeData;
    
  } catch (error) {
    console.error("Error generating recipe:", error);
    throw new Error("Failed to generate recipe. Please check your API key or try again later.");
  }
};

export const generateDishImage = async (prompt: string, category: string): Promise<string> => {
  try {
    let categoryNuances = "";

    switch (category) {
      case 'Breakfast':
        categoryNuances = "Soft morning sunlight, steam rising from hot beverages, golden-brown pastry textures, cozy and inviting upscale cafe breakfast setting, ceramic cups, inviting atmosphere";
        break;
      case 'Mains':
        categoryNuances = "Hearty main course, rich thick sauces, steam rising suggesting spicy aroma, elegant dinnerware, potentially accompanied by staples like Ugali or Chapati in the background, savory and filling presentation";
        break;
      case 'Sides':
        categoryNuances = "Appetizer portion, vibrant fresh colors (greens, tomatoes), crispy textures for fried items, small elegant plates, detailed garnish, shallow depth of field";
        break;
      case 'Drinks':
        categoryNuances = "Beverage photography, condensation on glass for cold drinks, swirling steam for hot drinks, liquid refraction, refreshing thirst-quenching look, glassware details";
        break;
      default:
        categoryNuances = "Gourmet Kenyan cuisine presentation, professional food photography";
    }

    // Enhance the prompt for professional food photography results
    const enhancedPrompt = `Professional food photography of ${prompt}. ${categoryNuances}. High resolution, 4k, cinematic lighting, shallow depth of field, vibrant colors, appetizing plating, photorealistic.`;

    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: enhancedPrompt,
      config: {
        numberOfImages: 1,
        aspectRatio: '4:3',
        outputMimeType: 'image/jpeg'
      }
    });

    const imageBytes = response.generatedImages?.[0]?.image?.imageBytes;
    if (!imageBytes) {
      throw new Error("No image data received");
    }

    return `data:image/jpeg;base64,${imageBytes}`;
  } catch (error) {
    console.error("Error generating image:", error);
    // Fallback or re-throw
    throw new Error("Failed to generate image. The Imagen model might not be enabled for this API key.");
  }
};