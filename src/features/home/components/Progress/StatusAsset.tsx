import { useMemo } from "react";
import { Image, StyleSheet, View } from "react-native";

export const StatusAsset = ({ status }: { status: "help" | "done" }) => {
  const isCompleted = useMemo(() => status === "done", [status]);

  return (
    <View style={styles.container}>
      <Image
        source={isCompleted ? require("assets/images/done.png") : require("assets/images/help.png")}
        style={styles.statusText}
        resizeMode="contain"
      />
      <Image
        source={
          isCompleted
            ? require("assets/images/done-asset.png")
            : require("assets/images/help-asset.png")
        }
        style={styles.assetImage}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  statusText: {
    position: "absolute",
    height: 120,
    bottom: 90,
    opacity: 0.5
  },
  assetImage: {
    width: 210,
    height: 182,
    position: "absolute",
    bottom: 32
  }
});
