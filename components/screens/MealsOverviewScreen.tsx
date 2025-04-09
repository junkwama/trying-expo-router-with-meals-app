import { View, StyleSheet } from "react-native";
import { Meal } from "@/store/types";
import MealCard from "../cards/MealCard";

const CategoriesHomeScreen = (
  { meals, toggleMealIsFavorite }:
    { meals: Meal[], toggleMealIsFavorite: (mealId: number) => void }
) => {
  return (
    <View style={styles.container}>
      <View style={styles.mealsList}>
        {meals.map((meal, index) => {
          return (
            <View
              key={meal.id}
              style={[styles.mealWrapper, {
                paddingEnd: index % 2 === 0 ? 6 : undefined,
                paddingStart: index % 2 === 1 ? 6 : undefined
              }]}
            >
              <MealCard
                id={meal.id}
                name={meal.name}
                image_url={meal.image_url}
                category={meal.category}
                isFavorite={meal.isFavorite}
                nutritional_information={meal.nutritional_information}
                toggleMealIsFavorite={toggleMealIsFavorite}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default CategoriesHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mealsList: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  mealWrapper: {
    marginBottom: 12,
    width: "50%"
  }
});