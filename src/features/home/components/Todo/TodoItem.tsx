import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TAGS, TIMES } from "@moeum/features/home/constants";
import OnIcon from "assets/icons/on.svg";
import OffIcon from "assets/icons/off.svg";
import DotsVerticalIcon from "assets/icons/dots-vertical.svg";
import ClockIcon from "assets/icons/clock.svg";

export type TagType = (typeof TAGS)[keyof typeof TAGS]["type"];
export type TimeType = (typeof TIMES)[keyof typeof TIMES]["type"];

export type Tag = {
  type: TagType;
  label: string;
};

export type Time = {
  type: TimeType;
  label: string;
};

export type TodoItemType = {
  id: string;
  tag: Tag;
  title: string;
  time: Time;
  isCompleted: boolean;
};

interface TodoItemProps extends TodoItemType {
  onPress?: () => void;
  onMorePress?: () => void;
}

const getTagStyle = (tag: TagType) => {
  const styles = {
    health: { backgroundColor: "#E8F3FF", color: "#0080FF" },
    intellectual: { backgroundColor: "#FFF3E8", color: "#FF8000" },
    habit: { backgroundColor: "#E8FFE9", color: "#00B906" },
    finance: { backgroundColor: "#FFE8E8", color: "#FF0000" }
  };
  return styles[tag] || styles.habit;
};

export const TodoItem = ({
  tag,
  title,
  time,
  isCompleted,
  onPress,
  onMorePress
}: TodoItemProps) => {
  const tagStyle = getTagStyle(tag.type);

  return (
    <TouchableOpacity style={[styles.item, isCompleted && styles.itemCompleted]} onPress={onPress}>
      <View style={styles.contentContainer}>
        {isCompleted ? (
          <OnIcon width={28} height={28} color="#E0E5EA" />
        ) : (
          <OffIcon width={28} height={28} color="#E0E5EA" />
        )}
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <View style={[styles.tag, { backgroundColor: tagStyle.backgroundColor }]}>
              <Text style={[styles.tagText, { color: tagStyle.color }]}>{tag.label}</Text>
            </View>
            <Text
              style={[styles.title, isCompleted && styles.titleCompleted]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {title}
            </Text>
          </View>
          <View style={styles.timeContainer}>
            <ClockIcon width={20} height={20} color="#A6ABAF" />
            <Text style={styles.time}>{time.label}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.moreButton} onPress={onMorePress}>
        <DotsVerticalIcon width={24} height={24} color="#494F54" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 78,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 12,
    justifyContent: "space-between",
    // iOS shadow
    shadowColor: "#252525",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.08,
    shadowRadius: 8
    // Android shadow
  },
  itemCompleted: {
    opacity: 0.5
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    flex: 1
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    flex: 1
  },
  content: {
    flexDirection: "column",
    flex: 1
  },
  tag: {
    borderRadius: 4,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 22
  },
  tagText: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 22
  },
  title: {
    fontSize: 14,
    color: "#191B1C",
    fontWeight: "500",
    lineHeight: 20,
    flex: 1
  },
  titleCompleted: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#191B1C"
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4
  },
  time: {
    color: "#A6ABAF",
    fontSize: 14,
    lineHeight: 20
  },
  moreButton: {
    padding: 8
  }
});
