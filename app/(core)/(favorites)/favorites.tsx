import sizes from "@/constants/sizes";
import { router } from "expo-router";
import { useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { MealsCtx } from "@/store/ctx/mealsCtx";
import MealsOverviewScreen from "@/components/screens/MealsOverviewScreen";
import TopRoundedDesign from "@/components/TopRoundedDesign";
import FallBackScreeen from "@/components/screens/FallbackScreen";

const FavoritesMealsRoute = () => {

  const { meals, toggleMealIsFavorite } = useContext(MealsCtx);
  const favoriteMeals = meals.filter(meal => meal.isFavorite);

  if (!favoriteMeals.length) {
    return (
      <FallBackScreeen
        title="No meals found"
        btnTitle="Explore meals"
        onBtnPress={() => { router.replace("/categories"); }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TopRoundedDesign />
      <ScrollView style={styles.innerContainer}>
        <MealsOverviewScreen
          meals={favoriteMeals}
          toggleMealIsFavorite={toggleMealIsFavorite}
        />
      </ScrollView>
    </View>
  );
};

export default FavoritesMealsRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
    padding: sizes.padding
  }
});