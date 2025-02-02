import { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@moeum/features/home/components/Header";
import { NavList } from "@moeum/features/home/components/Nav/NavList";
import { TodoList } from "@moeum/features/home/components/Todo/TodoList";
import { FAB } from "@moeum/features/home/components/FAB";
import { ProgressSection } from "@moeum/features/home/components/Progress/ProgressSection";
import { TodoItemType } from "@moeum/features/home/components/Todo/type";
import { StatusOverlay } from "@moeum/features/home/components/Status/StatusOverlay";
import { getBottomPadding } from "@moeum/features/home/utils/getBottomPadding";

interface HomeScreenProps {
  todo: TodoItemType[];
  progressCount: number;
  onUpdateTodo: (value: TodoItemType[]) => void;
  currentTime: string;
}

export const HomeScreen = ({ todo, onUpdateTodo, progressCount, currentTime }: HomeScreenProps) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const prevProgressRef = useRef(progressCount);

  const handleAnimationStart = () => {};

  const onAnimationEnd = () => {
    if (progressCount === todo.length) {
      scrollViewRef.current?.scrollTo({
        y: 0,
        animated: true
      });
    }

    setShowOverlay(false);
  };

  useEffect(() => {
    if (progressCount === todo.length && prevProgressRef.current !== progressCount) {
      setShowOverlay(true);
    }
    prevProgressRef.current = progressCount;
  }, [progressCount, todo.length]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header />
        <ScrollView
          ref={scrollViewRef}
          style={styles.body}
          contentContainerStyle={[styles.scrollContent]}
          showsVerticalScrollIndicator={false}
          bounces={false} // ios bounce 제거
          overScrollMode="never" // Android 오버스크롤 제거
        >
          <NavList />
          <ProgressSection progress={progressCount} total={todo.length} />
          <TodoList todo={todo} setter={onUpdateTodo} currentTime={currentTime} />
        </ScrollView>
        <FAB onPress={() => {}} />
      </View>
      <StatusOverlay
        type={progressCount === todo.length ? "done" : "help"}
        isVisible={showOverlay}
        onAnimationStart={handleAnimationStart}
        onAnimationEnd={onAnimationEnd}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F6F7",
    paddingBottom: getBottomPadding(88) // FAB height(56) + padding(32)
  },
  content: {},
  body: {},
  scrollContent: {
    flexGrow: 1
  }
});
