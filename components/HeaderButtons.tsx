import { Pressable, StyleSheet, Text, View } from 'react-native';

/**
 * Two icon-like buttons in a row, the same shape as the header right items in our app
 * (share + more menu, 24pt icons with 4pt padding, 12pt gap).
 */
export function HeaderButtons({ overImage = false }: { overImage?: boolean }) {
  return (
    <View style={styles.row}>
      {['↗', '⋯'].map((glyph) => (
        <Pressable
          key={glyph}
          hitSlop={8}
          style={[styles.button, overImage && styles.buttonOverImage]}
          onPress={() => {}}
        >
          <Text style={[styles.glyph, overImage && styles.glyphOverImage]}>{glyph}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  button: { width: 32, height: 32, padding: 4, alignItems: 'center', justifyContent: 'center' },
  buttonOverImage: { borderRadius: 8, backgroundColor: 'rgba(0,0,0,0.3)' },
  glyph: { fontSize: 20, lineHeight: 24, color: '#111' },
  glyphOverImage: { color: 'white' },
});
