import { GoogleGenAI } from "@google/genai";

// Initialize the client with the environment variable.
// IMPORTANT: Ensure process.env.API_KEY is available in the runtime.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateRecipe = async (dishName: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a master Kenyan chef. Write a detailed, authentic recipe or preparation guide for "${dishName}". 
      
      Structure the response clearly with the following sections in Markdown:
      1. **Introduction**: A brief cultural history or significance of the dish.
      2. **Ingredients**: List with metric measurements.
      3. **Instructions**: Step-by-step cooking or serving guide.
      4. **Chef's Tips**: Advice for the best flavor (e.g., pairing suggestions).
      
      Keep the tone warm and inviting. If the item is a simple commercial drink (like Soda), focus on how it is best served in Kenya.`,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "No recipe content generated.";
  } catch (error) {
    console.error("Error generating recipe:", error);
    throw new Error("Failed to generate recipe. Please check your API key or try again later.");
  }
};

export const generateDishImage = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: prompt,
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