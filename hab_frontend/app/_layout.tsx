import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    //<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="home/roleSelection" options={{ headerShown: false, title: "Select Your Role" }} />
      <Stack.Screen name="home/home" options={{headerShown: false}}/>
      <Stack.Screen name="exercises/yourExercises" options={{headerShown: false}}/>
      <Stack.Screen name="exercises/setExercises" options={{headerShown: false}}/>
    </Stack>
    //</ThemeProvider>
  );
}
