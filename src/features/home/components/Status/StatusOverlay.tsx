import { Text, StyleSheet, Animated, View } from "react-native";
import { useEffect } from "react";
import { BlurView } from "expo-blur";
import { useAnimation } from "@moeum/features/home/hooks/useAnimation";
import { STATUS_MESSAGES } from "./constants";

interface StatusOverlayProps {
  type: "help" | "done";
  isVisible: boolean;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  duration?: number;
}

export const StatusOverlay = ({
  type,
  isVisible,
  duration = 400,
  onAnimationStart,
  onAnimationEnd
}: StatusOverlayProps) => {
  const messages = STATUS_MESSAGES[type];
  const { fadeAnim, animate } = useAnimation(duration);

  useEffect(() => {
    const timer = animate(isVisible, onAnimationEnd);
    return () => clearTimeout(timer);
  }, [animate, isVisible, onAnimationEnd]);

  if (!isVisible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim
        }
      ]}
    >
      <BlurView intensity={50} tint="dark" style={[StyleSheet.absoluteFill, styles.blur]} />
      <View style={styles.content}>
        <Text style={styles.title}>{messages.title}</Text>
        <Text style={styles.subtitle}>{messages.subtitle}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99
  },
  blur: {
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  },
  content: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 80,
    fontWeight: "900",
    color: "#ffffff",
    lineHeight: 105,
    textAlign: "center",
    fontStyle: "italic"
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "300",
    color: "#ffffff",
    lineHeight: 24,
    textAlign: "center"
  }
});
