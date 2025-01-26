import { SplashScreen, Stack } from "expo-router";
import { useSystemFont } from "@moeum/common/hooks/useSystemFont";
import { StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useSystemFont();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{
            title: "Home"
          }}
        />
      </Stack>
    </>
  );
}
