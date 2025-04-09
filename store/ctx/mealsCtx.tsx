import { createContext, ReactNode, useState } from "react";
import { Category, Meal } from "../types";
import mealsDB from "../mealsDB";

export interface MealsCtxValueType {
  categories: Category[];
  meals: Meal[];
  toggleMealIsFavorite: (mealId: number) => void;
  addMeal?: (meal: Meal) => void;
  removeMeal?: (mealId: number) => void;
}

interface MealsCtxProviderProps {
  children: ReactNode;
}

const MealsCtxValue: MealsCtxValueType = {
  categories: [],
  meals: [],
  toggleMealIsFavorite: (mealId: number) => { }
};

export const MealsCtx = createContext<MealsCtxValueType>(MealsCtxValue);

export default function MealsCtxProvider({ children }: MealsCtxProviderProps) {

  const [categories, setCategories] = useState<Category[]>(mealsDB.categories);

  const [meals, setMeals] = useState<Meal[]>(() => mealsDB.meals.map(meal => {
    const category = categories.find(category => {
      return category.id === meal.category_id;
    });
    return {
      ...meal,
      category: category?.name || "",
      isFavorite: false
    };
  }));

  const toggleMealIsFavorite = (mealId: number) => {
    setMeals(meals => meals.map(meal => meal.id !== mealId ? meal : {
      ...meal, isFavorite: !meal.isFavorite
    }));
  };

  const addMeal = (meal: Meal) => {
    setMeals((prevMeals) => [...prevMeals, meal]);
  };

  const removeMeal = (mealId: number) => {
    setMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== mealId));
  };

  return (
    <MealsCtx.Provider value={{ meals, categories, toggleMealIsFavorite, addMeal, removeMeal }}>
      {children}
    </MealsCtx.Provider>
  );
}
