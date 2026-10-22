import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: false, swipeEnabled: false, drawerType: 'front' }}>
      <Drawer.Screen name="(tabs)" />
    </Drawer>
  );
}
