import { Stack } from "expo-router";

export default function MealsCategoriesStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="favorites" options={{ title: "Favorites Meals" }} />
      <Stack.Screen name="meals" options={{ headerShown: false }} />
    </Stack>
  );
}