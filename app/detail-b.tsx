import { Stack } from 'expo-router';
import { ScrollView, Text } from 'react-native';

import { HeaderButtons } from '../components/HeaderButtons';

/** B: same as A, but the options are set from inside the page after it renders. */
export default function DetailB() {
  return (
    <>
      <Stack.Screen options={{ title: 'Detail B', headerRight: () => <HeaderButtons /> }} />
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text>Options set via {'<Stack.Screen>'} inside the page.</Text>
      </ScrollView>
    </>
  );
}
