import MyIcon from "@/components/ui/MyIcon";
import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => <MyIcon
            name={focused ? "home" : "home-outline"}
            color={color}
          />
        }}
      />
      <Tabs.Screen
        name="(categories)"
        options={{
          title: "Meals",
          tabBarIcon: ({ focused, color }) => <MyIcon
            name={focused ? "fast-food" : "fast-food-outline"}
            color={color}
          />
        }}
      />
      <Tabs.Screen
        name="(favorites)"
        options={{
          title: "Favorites",
          tabBarIcon: ({ focused, color }) => <MyIcon
            name={focused ? "heart" : "heart-outline"}
            color={color}
          />
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Other",
          tabBarIcon: ({ focused, color }) => <MyIcon
            name={focused ? "menu" : "menu-outline"}
            color={color}
          />
        }}
      />
    </Tabs>
  );
};
