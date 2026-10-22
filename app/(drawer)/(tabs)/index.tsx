import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { DetailLinks } from '../../../components/DetailLinks';

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <DetailLinks title="Stack → Drawer → JS Tabs (same as our app)" />
      <Link href="/plain" asChild>
        <Pressable style={{ padding: 24 }}>
          <Text style={{ color: '#0f766e' }}>Open Stack → JS Tabs (no Drawer)</Text>
        </Pressable>
      </Link>
    </View>
  );
}
