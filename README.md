# rns-header-shift-repro

Minimal reproduction for [software-mansion/react-native-screens#5000](https://github.com/software-mansion/react-native-screens/issues/5000):
on iOS 26+, the header bar items shift horizontally right after a stack screen with a native header
is pushed above a screen that has no native navigation bar.

## Structure

Same navigator structure as the app where we hit the issue:

```
native Stack (root, headerTransparent: false)
├── (drawer)  headerShown: false
│   └── Drawer (expo-router/drawer)
│       └── JS Tabs (expo-router/js-tabs), JS header with headerRight
├── plain     headerShown: false — same JS Tabs, no Drawer
└── detail-a / detail-b / detail-c — pushed on the root stack
```

The detail screens differ only in how the header is configured:

| Screen | Options set in | Header | Right items |
| --- | --- | --- | --- |
| A | `app/_layout.tsx` | opaque | `headerRight` |
| B | `<Stack.Screen>` inside the page | opaque | `headerRight` |
| C | `<Stack.Screen>` inside the page | transparent over a cover, white tint | `headerRight` + `unstable_headerRightItems` (`custom`, `hidesSharedBackground`) |

C is what our real detail screens do.

**Result: all of A, B and C shift, both with and without the Drawer.** So neither the Drawer, the
transparent header, nor setting options from inside the page is needed — A is the simplest case.

## Run

```bash
npm install
npx expo run:ios --device --configuration Release
```

Then, from the Home tab, tap A / B / C and watch the back button and the right items during and
right after the push transition. Repeat from `Open Stack → JS Tabs (no Drawer)` to compare.

## Environment

- expo 58.0.17, expo-router 58.0.25
- react-native 0.88.0, react-native-screens 4.30.0
- New Architecture
- Physical iPhone, iOS 27
