import { Stack } from "expo-router";

export default function MealsCategoriesStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="categories" />
      <Stack.Screen name="meals" />
    </Stack>
  );
}