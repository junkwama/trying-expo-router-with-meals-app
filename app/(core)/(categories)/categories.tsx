import CategoryCard from "@/components/cards/CategoryCard";
import Colors from "@/constants/Colors";
import sizes from "@/constants/sizes";
import { MealsCtx } from "@/store/ctx/mealsCtx";
import { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

const CategoriesHomeScreen = () => {

  const categories = useContext(MealsCtx);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.designBlock}>
        <View style={styles.designInnerBlock}></View>
      </View>
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

  designBlock: {
    backgroundColor: Colors.primary,
    justifyContent: "flex-end",
    height: 25,
  },

  designInnerBlock: {
    backgroundColor: "#f2f2f2",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    height: 25
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