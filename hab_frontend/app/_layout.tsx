import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    //<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="role-selection" options={{ title: "Select Your Role" }} />
    </Stack>
    //</ThemeProvider>
  );
}
