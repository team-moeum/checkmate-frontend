import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { showNotification } from "@moeum/features/home/utils/showNotification";
import { user } from "@moeum/features/home/mocks/user";
import { LinearProgress } from "./LinearProgress";
import { StatusAsset } from "./StatusAsset";
import { CircleProgress } from "./CircleProgress";
import ArrowRightIcon from "assets/icons/arrow-right.svg";
import SwitchIcon from "assets/icons/switch.svg";

interface ProgressSectionProps {
  progress: number;
  total: number;
}

export const ProgressSection = ({ progress, total }: ProgressSectionProps) => {
  return (
    <View style={styles.container}>
      {/* Circle Progress Circle and Asset */}
      <View style={styles.progresWrapper}>
        <View style={styles.progresContainer}>
          <CircleProgress start={progress} end={total} size={200}>
            <Text style={styles.progressLabel}>오늘의 도전</Text>
            <Text style={styles.progressDescription}>
              {progress}/{total}
            </Text>
          </CircleProgress>
        </View>
        <StatusAsset status={progress === total ? "done" : "help"} />
      </View>

      <View style={styles.subProgressWrapper}>
        {/* Linear Progress Bar */}
        <View style={styles.subProgressContainer}>
          <Text style={styles.subProgressLabel}>age {user.age}</Text>
          <LinearProgress start={0} end={user.point} />
          <Text style={styles.subProgressLabelDescription}>
            {user.point}
            <Text style={{ color: "#A6ABAF" }}>/100</Text>
          </Text>
        </View>

        {/* Link */}
        <TouchableOpacity
          style={styles.titleLink}
          onPress={() => {
            showNotification(user.title);
          }}
        >
          <Text style={styles.titleLabel}>{user.title}</Text>
          <ArrowRightIcon width={20} height={20} color="#191B1C" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.subTitleLink}
          onPress={() => {
            showNotification(user.subTitle);
          }}
        >
          <Text style={styles.subTitleLabel}>{user.subTitle}</Text>
          <SwitchIcon width={20} height={20} color="#494F54" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  progresWrapper: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: 360,
    backgroundColor: "white"
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
  },
  subProgressWrapper: {
    height: 146,
    paddingTop: 20,
    paddingBottom: 32,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    backgroundColor: "white"
  },
  subProgressContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(245, 246, 247, 1)",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.08,
        shadowRadius: 8
      },
      android: {}
    })
  },
  subProgressLabel: {
    color: "rgba(0, 204, 81, 1)",
    fontSize: 14,
    fontWeight: 700
  },
  subProgressLabelDescription: {
    fontSize: 14,
    color: "#191B1C"
  },
  titleLink: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  titleLabel: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    color: "#191B1C",
    lineHeight: 20
  },
  subTitleLink: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EDF0F3",
    borderRadius: 16,
    height: 28,
    paddingHorizontal: 12,
    gap: 8
  },
  subTitleLabel: {
    fontSize: 14,
    color: "#494F54",
    lineHeight: 20
  }
});
