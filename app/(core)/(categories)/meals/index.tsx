import { useLocalSearchParams, useNavigation } from "expo-router";
import { useContext, useEffect } from "react";
import { MealsCtx } from "@/store/ctx/mealsCtx";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import MealsOverviewScreen from "@/components/screens/MealsOverviewScreen";
import LikeShareBtns from "@/components/LikeShareBtns";
import sizes from "@/constants/sizes";

const MealsOverviewRoute = () => {

  const navigation = useNavigation();

  const { categoryId } = useLocalSearchParams();
  const { meals, categories, toggleMealIsFavorite } = useContext(MealsCtx);
  const category = categories.find(cat => cat.id.toString() === categoryId);
  const categoryMeals = meals.filter(meal => meal.category_id === category?.id);

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerRight: () => <LikeShareBtns size={24} />,
      headerTitle: () => <Text style={{
        backgroundColor: "rgba(256, 256, 256, 0.7)",
        paddingVertical: 6,
        paddingHorizontal: 32,
        fontSize: 18,
        borderRadius: 18
      }}>{category?.name}</Text>
    });
  }, [categoryId]);

  return (
    <ScrollView style={styles.container}>

      <View>
        <Image
          source={{ uri: category?.image_url }}
          resizeMode="cover"
          style={styles.catImg}
        />
        <View style={styles.catTxt}>
          <Text style={styles.catTxtName}>{category?.name}</Text>
          <Text>{category?.description}</Text>
        </View>
      </View>

      <View style={styles.mealsBlock}>
        <MealsOverviewScreen
          meals={categoryMeals}
          toggleMealIsFavorite={toggleMealIsFavorite}
        />
      </View>
    </ScrollView>
  );
};

export default MealsOverviewRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  catImg: {
    height: 220
  },
  catTxt: {
    padding: sizes.padding
  },
  catTxtName: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 12
  },
  mealsBlock: {
    padding: sizes.padding
  },

});