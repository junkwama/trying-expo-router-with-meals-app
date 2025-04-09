import CategoryCard from "@/components/cards/CategoryCard";
import TopRoundedDesign from "@/components/TopRoundedDesign";
import sizes from "@/constants/sizes";
import { MealsCtx } from "@/store/ctx/mealsCtx";
import { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

const CategoriesHomeScreen = () => {

  const categories = useContext(MealsCtx);

  return (
    <View style={styles.outerContainer}>
      <TopRoundedDesign />
      <ScrollView style={styles.container}>
        <View style={styles.cateroriesList}>
          {categories.categories.map(category => {
            return (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                image_url={category.image_url}
                style={styles.category}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoriesHomeScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: sizes.padding
  },
  cateroriesList: {
    flex: 1,
  },
  category: {
    paddingBottom: 12
  }
});