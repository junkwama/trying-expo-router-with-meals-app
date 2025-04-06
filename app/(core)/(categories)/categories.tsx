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

            const mp = sizes.gap / 2;
            let lystingStyle = {
              ...(catIndex % 2 === 0
                ? { paddingEnd: mp }
                : { paddingStart: mp }
              )
            }

            return (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                image_url={category.image_url}
                bg_color={category.bg_color}
                style={[styles.category, lystingStyle]}
                innerStyle={styles.innerCategory}
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
  },
  cateroriesList: {
    flex: 1,
    padding: sizes.gap,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  category: {
    width: "50%",
    paddingBottom: sizes.gap
  },
  innerCategory: {
    borderWidth: .2,
    borderColor: "gray"
  }
});