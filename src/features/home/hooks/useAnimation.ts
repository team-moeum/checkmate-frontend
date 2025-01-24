import { useRef } from "react";
import { Animated } from "react-native";

export const useAnimation = (duration: number = 400) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const animate = (isVisible: boolean, onEnd?: () => void) => {
    if (!isVisible) return;

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      useNativeDriver: true
    }).start();

    return setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration,
        useNativeDriver: true
      }).start(onEnd);
    }, 3000);
  };

  return { fadeAnim, animate };
};
