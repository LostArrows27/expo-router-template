import { Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import { useCallback } from "react";

import * as SpashScreen from "expo-splash-screen";
import { Text, View } from "react-native";

// NOTE: make load screen visiable while loading
SpashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SpashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return undefined;

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
