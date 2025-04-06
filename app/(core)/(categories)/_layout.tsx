import { Stack } from "expo-router";

export default function MealsCategoriesStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="categories" options={{ title: "Meals Categories" }} />
      <Stack.Screen name="meals" options={{ headerShown: false }} />
    </Stack>
  );
}