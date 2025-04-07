import LikeShareBtns from "@/components/LikeShareBtns";
import { MealsCtx } from "@/store/ctx/mealsCtx";
import { Stack, useSegments } from "expo-router";
import { useContext } from "react";

export const unstable_settings = {
  initialRouteName: "categories",
  favorites: {
    initialRouteName: "favorites",
  },
};

export default function MealsStackLayout() {

  const segments = useSegments();
  const isInCategoriesTab = segments.some(seg => seg === "(categories)");

  if (isInCategoriesTab) {

    return (
      <Stack>
        <Stack.Screen
          name="index"
          options={({ route }) => ({
            headerTransparent: true,
            headerRight: () => <LikeShareBtns size={24} />
          })}
        />
        <Stack.Screen name="[mealId]" options={{ presentation: "modal", title: "Meal Details" }} />
      </Stack>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="[mealId]" options={{ presentation: "modal", title: "Meal Details" }} />
    </Stack>
  );
} 