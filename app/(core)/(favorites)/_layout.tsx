import Colors from "@/constants/Colors";
import { Stack } from "expo-router";

export default function MealsCategoriesStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="favorites" options={{
        headerStyle: { backgroundColor: Colors.primary },
        title: "Favorite meals",
        headerShadowVisible: false
      }} />
      <Stack.Screen name="meals" options={{ headerShown: false }} />
    </Stack>
  );
}