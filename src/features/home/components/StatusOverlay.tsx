import { Text, StyleSheet, Animated, View } from "react-native";
import { useRef, useEffect } from "react";
import { BlurView } from "expo-blur";

type StatusType = "help" | "done";

interface StatusOverlayProps {
  type: StatusType;
  isVisible: boolean;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  duration?: number;
}

const STATUS_MESSAGES = {
  help: {
    title: "Help!",
    subtitle: "오늘의 도전을 완료해\n힘들어하는 버디를 도와주세요!"
  },
  done: {
    title: "Done!",
    subtitle: "대단해요!\n오늘의 도전을 모두 완료했어요."
  }
};

export const StatusOverlay = ({
  type,
  isVisible,
  duration = 400,
  onAnimationStart,
  onAnimationEnd
}: StatusOverlayProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isVisible) {
      onAnimationStart?.();

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration,
        useNativeDriver: true
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration,
          useNativeDriver: true
        }).start(() => {
          onAnimationEnd?.();
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [duration, fadeAnim, isVisible, onAnimationEnd, onAnimationStart]);

  if (!isVisible) return null;

  const messages = STATUS_MESSAGES[type];

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
