import { useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { MealsCtx } from "@/store/ctx/mealsCtx";
import MealsOverviewScreen from "@/components/screens/MealsOverviewScreen";
import Meal404Screen from "@/components/screens/Meal404Screen";
import TopRoundedDesign from "@/components/TopRoundedDesign";
import sizes from "@/constants/sizes";

const FavoritesMealsRoute = () => {

  const { meals, toggleMealIsFavorite } = useContext(MealsCtx);
  const favoriteMeals = meals.filter(meal => meal.isFavorite);

  return (
    <View style={styles.container}>
      <TopRoundedDesign />
      {!favoriteMeals.length
        ? <Meal404Screen />
        : <ScrollView style={styles.innerContainer}>
          <MealsOverviewScreen
            meals={favoriteMeals}
            toggleMealIsFavorite={toggleMealIsFavorite}
          />
        </ScrollView>
      }
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