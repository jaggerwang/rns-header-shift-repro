import { Stack } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

import { HeaderButtons } from '../components/HeaderButtons';

/**
 * C: what our detail screens actually do. Transparent header over a cover image, white tint,
 * options set via `<Stack.Screen>` in the page, right items passed both as `headerRight` and as a
 * custom `unstable_headerRightItems` entry with `hidesSharedBackground`.
 */
export default function DetailC() {
  const right = <HeaderButtons overImage />;

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerStyle: { backgroundColor: 'transparent' },
          headerShadowVisible: false,
          headerTintColor: 'white',
          headerRight: () => right,
          unstable_headerRightItems: () => [
            { type: 'custom', element: right, hidesSharedBackground: true },
          ],
        }}
      />
      <ScrollView contentInsetAdjustmentBehavior="never">
        {/* stands in for the cover image */}
        <View style={{ height: 280, backgroundColor: '#0f766e' }} />
        <Text style={{ padding: 24 }}>Transparent header over a cover.</Text>
      </ScrollView>
    </>
  );
}
