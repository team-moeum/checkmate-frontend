import { Platform, Dimensions } from "react-native";

export const getBottomPadding = (padding = 0) => {
  const screenHeight = Dimensions.get("window").height;
  const fullHeight = Dimensions.get("screen").height;
  const navigationBarHeight = fullHeight > screenHeight ? fullHeight - screenHeight : 0;

  return Platform.select({
    android: navigationBarHeight + padding,
    ios: padding,
    default: padding
  });
};
