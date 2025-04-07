import { createContext, ReactNode, useState } from "react";
import mealsDB from "../mealsDB";
import { Category, Meal } from "../types";

export interface MealsCtxValueType {
  categories: Category[];
  meals: Meal[];
  toggleMealIsFav?: (mealId: number) => void;
  addMeal?: (meal: Meal) => void;
  removeMeal?: (mealId: number) => void;
}

interface MealsCtxProviderProps {
  children: ReactNode;
}

const MealsCtxValue: MealsCtxValueType = {
  categories: [],
  meals: []
};

export const MealsCtx = createContext<MealsCtxValueType>(MealsCtxValue);

export default function MealsCtxProvider({ children }: MealsCtxProviderProps) {

  const [meals, setMeals] = useState<Meal[]>(mealsDB.meals);
  const [categories, setCategories] = useState<Category[]>(mealsDB.categories);

  const toggleMealIsFav = (mealId: number) => {
    // toggle favorite logic
    console.log(`Toggling favorite for meal ${mealId}`);
  };

  const addMeal = (meal: Meal) => {
    setMeals((prevMeals) => [...prevMeals, meal]);
  };

  const removeMeal = (mealId: number) => {
    setMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== mealId));
  };

  return (
    <MealsCtx.Provider value={{ meals, categories, toggleMealIsFav, addMeal, removeMeal }}>
      {children}
    </MealsCtx.Provider>
  );
}
