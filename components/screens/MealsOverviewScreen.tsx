import { MealsCtx } from "@/store/ctx/mealsCtx";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import MealCard from "../cards/MealCard";

const CategoriesHomeScreen = () => {

  const { meals, categories } = useContext(MealsCtx);

  return (
    <View style={styles.container}>
      <View style={styles.mealsList}>
        {meals.map((meal, index) => {

          const category = categories.find(category => {
            return category.id === meal.category_id;
          });

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
                style={styles.meal}
                image_url={meal.image_url}
                category={category?.name || ""}
                nutritional_information={meal.nutritional_information}
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
  },
  meal: {

  },
});