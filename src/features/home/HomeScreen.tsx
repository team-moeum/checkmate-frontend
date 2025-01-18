import { Suspense } from "react";
import ErrorBoundary from "react-native-error-boundary";
import { Header } from "@moeum/features/home/components/Header";
import { Nav } from "@moeum/features/home/components/Nav";
import { CircleProgress } from "@moeum/features/home/components/Progress/CircleProgress";
import { Asset } from "@moeum/features/home/components/Asset";
import { LinearProgress } from "@moeum/features/home/components/Progress/LinearProgress";
import { TodoList } from "@moeum/features/home/components/Todo/TodoList";
import { FAB } from "@moeum/features/home/components/FAB";
import { StyleSheet, View } from "react-native";

export const HomeScreen = () => {
  return (
    <ErrorBoundary>
      <View style={styles.container}>
        <Header />
        <Nav />
        <CircleProgress start={1} end={5} />
        <Asset />
        <LinearProgress start={1} end={100} />
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
