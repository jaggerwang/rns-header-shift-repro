import { Tabs } from 'expo-router/js-tabs';
import { Text } from 'react-native';

import { HeaderButtons } from './HeaderButtons';

/** JS Tabs with their own (JS) header, shared by `(drawer)/(tabs)` and `plain`. */
export function TabsNavigator() {
  return (
    <Tabs screenOptions={{ headerTitleAlign: 'center' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerRight: () => <HeaderButtons />,
          headerRightContainerStyle: { paddingRight: 16 },
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>⌂</Text>,
        }}
      />
      <Tabs.Screen
        name="other"
        options={{
          title: 'Other',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>○</Text>,
        }}
      />
    </Tabs>
  );
}
