import { View, Text, StyleSheet } from "react-native";
import { useCallback, useMemo, useState } from "react";
import { formatDate } from "@moeum/features/home/utils/date";
import { TAGS, TIMES } from "@moeum/features/home/constants";
import { showNotification } from "@moeum/features/home/utils/showNotification";
import { TodoItemType, TodoItem } from "./TodoItem";
import { RemainingTime } from "./RemainingTime";

export const SAMPLE_TODO_ITEMS: TodoItemType[] = [
  {
    id: "1",
    tag: TAGS.HEALTH,
    title: "아침운동가기",
    time: TIMES.EVERYDAY,
    isCompleted: false
  },
  {
    id: "2",
    tag: TAGS.INTELLECTUAL,
    title: "아침 독서(책10쪽)",
    time: TIMES.WEEKDAY,
    isCompleted: false
  },
  {
    id: "3",
    tag: TAGS.HABIT,
    title: "저녁 공부하기",
    time: TIMES.WEEKEND,
    isCompleted: false
  },
  {
    id: "4",
    tag: TAGS.FINANCE,
    title: "사고싶은거 1개씩만 사고 기록하기",
    time: TIMES.DAILY,
    isCompleted: false
  },
  {
    id: "5",
    tag: TAGS.FINANCE,
    title: "오늘의 경제 뉴스레터 읽어보기",
    time: TIMES.WEEKDAY,
    isCompleted: false
  }
];

export const TodoList = () => {
  const [todo, setTodo] = useState<TodoItemType[]>(SAMPLE_TODO_ITEMS);
  const currentTime = useMemo(() => formatDate(), []);
  const completedCount = useMemo(() => todo.filter(item => item.isCompleted).length, [todo]);

  const handlePress = useCallback((id: string) => {
    setTodo(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, isCompleted: !item.isCompleted } : item))
    );
  }, []);

  const handleMorePress = useCallback((id: string) => {
    showNotification("더보기");
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>오늘의 도전</Text>
          <Text style={styles.progress}>
            {completedCount}/{todo.length}
          </Text>
        </View>
        <Text style={styles.date}>{currentTime}</Text>
      </View>

      <View style={styles.content}>
        {todo.map(item => (
          <TodoItem
            key={item.id}
            {...item}
            onPress={() => handlePress(item.id)}
            onMorePress={() => handleMorePress(item.id)}
          />
        ))}
      </View>
      <View style={{ marginTop: 16 }}>
        <RemainingTime />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingVertical: 32,
    paddingHorizontal: 16,
    height: 588
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  progress: {
    fontSize: 16,
    color: "#00CC51",
    fontWeight: "500",
    lineHeight: 24
  },
  date: {
    color: "#A6ABAF",
    fontSize: 14
  },
  list: {
    marginTop: 16,
    flexDirection: "column",
    gap: 8
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#252525",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.08,
    shadowRadius: 8
  },
  itemCompleted: {
    opacity: 0.7
  },
  content: {
    gap: 8,
    marginTop: 16,
    minHeight: 422
  },
  tag: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4
  },
  tagText: {
    fontSize: 12,
    fontWeight: "500"
  },
  title: {
    fontSize: 18,
    color: "#19191B",
    fontWeight: "700",
    lineHeight: 24
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },
  time: {
    color: "#999",
    fontSize: 14
  },
  moreButton: {
    padding: 8
  }
});
