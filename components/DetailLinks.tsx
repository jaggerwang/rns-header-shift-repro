import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const LINKS = [
  { href: '/detail-a', label: 'A: options in layout, opaque header, headerRight' },
  { href: '/detail-b', label: 'B: options via <Stack.Screen> in the page, opaque header' },
  { href: '/detail-c', label: 'C: options via <Stack.Screen>, transparent header, unstable_headerRightItems' },
] as const;

/** Entry buttons for the detail screens, all pushed on the root native stack. */
export function DetailLinks({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {LINKS.map(({ href, label }) => (
        <Link key={href} href={href} asChild>
          <Pressable style={styles.link}>
            <Text style={styles.linkText}>{label}</Text>
          </Pressable>
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12, justifyContent: 'center' },
  title: { fontSize: 15, color: '#666', marginBottom: 8 },
  link: { padding: 16, borderRadius: 12, backgroundColor: '#eef2f7' },
  linkText: { fontSize: 15, color: '#0f766e' },
});
