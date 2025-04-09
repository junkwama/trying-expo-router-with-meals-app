import { Stack } from "expo-router";

export default function MenuLayout() {
  return (
    <Stack screenOptions={{ presentation: "modal" }}>
      <Stack.Screen name="index" options={{ title: "Menu" }} />
      <Stack.Screen name="about" options={{ title: "About Us" }} />
      <Stack.Screen name="users/[userId]" options={{ title: "Profile" }} />
      <Stack.Screen name="feedback" options={{ title: "Feedback" }} />
      <Stack.Screen name="help" options={{ title: "Help" }} />
      <Stack.Screen name="settings" options={{ title: "Settings" }} />
    </Stack>
  );
}