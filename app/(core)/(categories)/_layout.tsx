import Colors from "@/constants/Colors";
import { Stack } from "expo-router";

export default function MealsCategoriesStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="categories" options={{
        title: "Categories Of Meals",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: Colors.primary
        }
      }} />
      <Stack.Screen name="meals" options={{ headerShown: false }} />
    </Stack>
  );
}