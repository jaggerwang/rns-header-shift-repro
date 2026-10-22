import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { HeaderButtons } from '../components/HeaderButtons';

export const unstable_settings = {
  anchor: '(drawer)',
};

/**
 * Root native stack. Same structure as our app:
 * native Stack → Drawer (`expo-router/drawer`) → JS Tabs (`expo-router/js-tabs`).
 * The tab screens have no native navigation bar, so the bar appears for the first time when a
 * detail screen is pushed on this stack.
 *
 * `plain` is the same JS Tabs without the Drawer, to tell whether the Drawer matters.
 */
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerBackButtonDisplayMode: 'minimal', headerTransparent: false }}>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="plain" options={{ headerShown: false }} />
        {/* A: everything declared up front in the layout */}
        <Stack.Screen
          name="detail-a"
          options={{ title: 'Detail A', headerRight: () => <HeaderButtons /> }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
