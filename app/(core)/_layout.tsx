import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="(categories)" options={{ title: "Categories" }} />
      <Tabs.Screen name="(favorites)" options={{ title: "Favorites" }} />
    </Tabs>
  );
};
