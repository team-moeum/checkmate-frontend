import { Suspense } from "react";
import { StyleSheet, View } from "react-native";
import ErrorBoundary from "react-native-error-boundary";
import { Header } from "@moeum/features/home/components/Header";
import { NavList } from "@moeum/features/home/components/Nav/NavList";
import { TodoList } from "@moeum/features/home/components/Todo/TodoList";
import { FAB } from "@moeum/features/home/components/FAB";
import { ProgressSection } from "@moeum/features/home/components/Progress/ProgressSection";

export const HomeScreen = () => {
  return (
    <ErrorBoundary>
      <View style={styles.container}>
        <Header />
        <NavList />
        <ProgressSection />
        <Suspense>
          <TodoList />
        </Suspense>
        <FAB onPress={() => {}} />
      </View>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    position: "relative"
  }
});
