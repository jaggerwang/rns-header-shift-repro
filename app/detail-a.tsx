import { ScrollView, Text } from 'react-native';

/** A: options declared in the root layout (the shape of the maintainer's repro). */
export default function DetailA() {
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      <Text>Options declared in app/_layout.tsx.</Text>
    </ScrollView>
  );
}
