import { Stack } from "expo-router";

export default function AuthStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Auth's main screen" }} />
    </Stack>
  );
}