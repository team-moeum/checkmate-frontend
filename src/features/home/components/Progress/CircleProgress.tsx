import { ReactNode, useMemo } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const CircleProgress = ({
  start = 0,
  end = 100,
  delay = 100,
  size = 180,
  children
}: {
  start?: number;
  end?: number;
  delay?: number;
  size?: number;
  children: ReactNode;
}) => {
  const progress = start / end;
  const fillHeight = size * progress;

  const progressContainerStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      width: size,
      height: size,
      borderRadius: size / 2,
      position: "absolute",
      overflow: "hidden"
    }),
    [size]
  );

  const progressStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      width: size,
      height: fillHeight,
      position: "absolute",
      bottom: 0,
      overflow: "hidden"
    }),
    [size, fillHeight]
  );

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View
        style={[
          styles.circle,
          {
            width: size,
            height: size,
            borderRadius: size / 2
          }
        ]}
      />

      <View style={progressContainerStyle}>
        <View style={progressStyle}>
          <LinearGradient
            colors={["rgba(255, 255, 255, 1)", "rgba(1, 248, 99, 1)", "rgba(2, 159, 64, 1)"]}
            style={[styles.gradient, { width: size, height: size }]}
          />
        </View>
      </View>

      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative"
  },
  circle: {
    position: "absolute"
  },
  gradient: {
    position: "absolute"
  },
  childrenContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});
