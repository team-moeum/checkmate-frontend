import { Suspense } from "react";
import ErrorBoundary from "react-native-error-boundary";
import { Header } from "@moeum/features/home/components/Header";
import { NavList } from "@moeum/features/home/components/Nav/NavList";
import { LinearProgress } from "@moeum/features/home/components/Progress/LinearProgress";
import { TodoList } from "@moeum/features/home/components/Todo/TodoList";
import { FAB } from "@moeum/features/home/components/FAB";
import { StyleSheet, View } from "react-native";
import { ProgressAsset } from "@moeum/features/home/components/ProgressAsset";

export const HomeScreen = () => {
  return (
    <ErrorBoundary>
      <View style={styles.container}>
        <Header />
        <NavList />
        <ProgressAsset start={3} end={5} />
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
