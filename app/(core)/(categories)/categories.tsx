import CategoryCard from "@/components/cards/CategoryCard";
import sizes from "@/constants/sizes";
import { MealsCtx } from "@/store/ctx/mealsCtx";
import { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const CategoriesHomeScreen = () => {

  const categories = useContext(MealsCtx);

  return (
    <View style={styles.container}>
      <Text>Meals Categories Route</Text>
      <ScrollView>
        <View style={styles.cateroriesList}>
          {categories.categories.map((category, catIndex) => {

            return (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                image_url={category.image_url}
                bg_color={category.bg_color}
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