import MealsCtxProvider from '@/store/ctx/mealsCtx';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <MealsCtxProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(core)" />
        <Stack.Screen name="auth" />
      </Stack>
    </MealsCtxProvider>
  );
}