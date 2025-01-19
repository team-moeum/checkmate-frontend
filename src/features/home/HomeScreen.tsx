import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@moeum/features/home/components/Header";
import { NavList } from "@moeum/features/home/components/Nav/NavList";
import { TodoList } from "@moeum/features/home/components/Todo/TodoList";
import { FAB } from "@moeum/features/home/components/FAB";
import { ProgressSection } from "@moeum/features/home/components/Progress/ProgressSection";
import { getBottomPadding } from "./utils/getBottomPadding";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header />
        <ScrollView
          style={styles.body}
          contentContainerStyle={[styles.scrollContent]}
          showsVerticalScrollIndicator={false}
          bounces={false} // ios bounce 제거
          overScrollMode="never" // Android 오버스크롤 제거
        >
          <NavList />
          <ProgressSection />
          <TodoList />
        </ScrollView>
        <FAB onPress={() => {}} />
      </View>
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
