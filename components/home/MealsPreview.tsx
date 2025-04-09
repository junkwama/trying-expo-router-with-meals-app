import { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MealsCtx } from "@/store/ctx/mealsCtx";
import { Link } from "expo-router";
import MealCard from "../cards/MealCard";
import Colors from "@/constants/Colors";

export default function MealsPreview() {

  const { meals, toggleMealIsFavorite } = useContext(MealsCtx);

  return (
    <View>
      <View style={styles.textBlock}>
        <Text style={styles.title}>Today's top meals</Text>
        <Link style={styles.seeAllBtn} href="/categories">See all</Link>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.mealsContainer}
      >
        {meals.slice(0, 5).map(meal => {
          return (
            <MealCard
              id={meal.id}
              key={meal.id}
              name={meal.name}
              image_url={meal.image_url}
              category={meal.category}
              isFavorite={meal.isFavorite}
              nutritional_information={meal.nutritional_information}
              toggleMealIsFavorite={toggleMealIsFavorite}
              style={styles.mealCard}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  mealsContainer: {
    marginVertical: 24
  },
  textBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontWeight: "500",
    fontSize: 20
  },
  seeAllBtn: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: "500",
    backgroundColor: "black",
    color: Colors.secondary
  },
  mealCard: {
    width: 200,
    marginEnd: 12
  }
});