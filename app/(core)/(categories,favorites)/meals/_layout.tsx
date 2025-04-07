import { Stack, useSegments } from "expo-router";

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
        <Stack.Screen name="index" />
        <Stack.Screen name="[mealId]" options={{ presentation: "modal" }} />
      </Stack>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="[mealId]" options={{ presentation: "modal" }} />
    </Stack>
  );
} 