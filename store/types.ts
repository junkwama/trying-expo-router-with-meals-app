// Interface for Category
export interface Category {
  id: number;
  name: string;
  description: string;
  image_url: string;
}

export interface NutritionalInformation {
  calories: number | string;
  protein: string;
  fat: string;
  carbohydrates: string;
}

// Interface for Meal
export interface Meal {
  id: number;
  name: string;
  description: string;
  category_id: number;
  image_url: string;
  nutritional_information: NutritionalInformation;
  recipe_source: {
    name: string;
    url: string;
  };
  cooking_instructions: Array<{
    stepId: number;
    description: string;
  }>;
}
