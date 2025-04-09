import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useContext, useEffect } from "react";
import { MealsCtx } from "@/store/ctx/mealsCtx";
import Colors from "@/constants/Colors";
import MyIcon from "@/components/ui/MyIcon";
import StepCard from "@/components/cards/StepCard";
import WrapperCard from "@/components/cards/WrapperCard";
import LikeShareBtns from "@/components/LikeShareBtns";
import MyButton from "@/components/ui/MyButton";

const MealDeatailsRoute = () => {

  const { meals, categories } = useContext(MealsCtx);
  const { mealId } = useLocalSearchParams();
  const meal = meals.find(m => m.id.toString() === mealId);
  const category = categories.find(cat => cat.id === meal?.category_id);

  if (!meal || !category) return <Text>Opps! Failed to load data</Text>;
  const nitInfos = meal.nutritional_information;

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: meal.name,
      headerRight: () => <LikeShareBtns
        style={{ marginEnd: 8 }}
        size={24}
      />
    });
  }, []);

  return (
    <View style={styles.container}>

      <ScrollView style={styles.innerContainer}>
        <ImageBackground
          source={{ uri: meal.image_url }}
          style={styles.image}
          imageStyle={{ borderRadius: 24 }}
          resizeMode="cover"
        >
          <Text style={styles.category}>{category.name}</Text>
        </ImageBackground>

        <View style={styles.nameBlock}>
          <Text style={styles.name}>{meal.name}</Text>
          <Text style={styles.calDetails}>
            <MyIcon size={16} name="bonfire-outline" style={{ marginEnd: 4 }} />
            <Text> {nitInfos.calories} Kcal.</Text>
          </Text>
        </View>

        <Text>{meal?.description}</Text>

        <WrapperCard title="Nutritional Info">
          {Object.entries(nitInfos).map((nitInfoFact, i) => {
            return (
              <View key={i} style={styles.nitInfo}>
                <Text>{nitInfoFact[0]}</Text>
                <Text style={{ fontWeight: "500" }}>{nitInfoFact[1]}</Text>
              </View>
            );
          })}
        </WrapperCard>

        <WrapperCard title="Cooking Steps">
          {meal.cooking_instructions.map(step => (
            <StepCard
              description={step.description}
              stepId={step.stepId}
              key={step.stepId}
            />
          ))}
        </WrapperCard>
      </ScrollView>

      <View style={styles.likeBtnWrapper}>
        <MyButton
          style={styles.likeBtn}
          lableStyle={styles.likeBtnText}
          iconName="heart-outline"
          title="Ma favorite"
        />
      </View>

    </View>
  );
};

export default MealDeatailsRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
    padding: 24
  },
  image: {
    height: 240,
    padding: 12,
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  category: {
    backgroundColor: Colors.primary,
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 16
  },
  nameBlock: {
    marginVertical: 24
  },
  name: {
    fontSize: 22,
    fontWeight: "500"
  },
  calDetails: {
    color: Colors.primary,
    display: "flex",
    justifyContent: "flex-end",
    marginVertical: 8
  },
  nitInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12
  },
  likeBtnWrapper: {
    padding: 24,
    paddingTop: 16
  },
  likeBtn: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20
  },
  likeBtnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500"
  }
});