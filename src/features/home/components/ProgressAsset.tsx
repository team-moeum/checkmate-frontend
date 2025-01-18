import { StyleSheet, Text, View } from "react-native";
import { CircleProgress } from "@moeum/features/home/components/Progress/CircleProgress";
import { StatusAsset } from "@moeum/features/home/components/StatusAsset";

export const ProgressAsset = ({ start = 0, end = 100 }: { start?: number; end?: number }) => {
  return (
    <View style={styles.container}>
      <View style={styles.progresContainer}>
        <CircleProgress start={start} end={end} size={200}>
          <Text style={styles.progressLabel}>오늘의 도전</Text>
          <Text style={styles.progressDescription}>
            {start}/{end}
          </Text>
        </CircleProgress>
      </View>
      <StatusAsset status="done" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: 360
  },
  progresContainer: {
    position: "absolute",
    top: 40
  },
  progressLabel: {
    fontSize: 11,
    textAlign: "center",
    color: "#494F54"
  },
  progressDescription: {
    fontSize: 30,
    textAlign: "center",
    color: "#191B1C",
    marginTop: 3,
    fontWeight: "700"
  }
});
