import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { showNotification } from "@moeum/features/home/utils/showNotification";
export const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require("assets/images/logo.png")} style={styles.logo} />
      <TouchableOpacity
        onPress={() => {
          showNotification("마이페이지입니다");
        }}
      >
        <Text style={styles.buttonText}>마이</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    paddingHorizontal: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white"
  },
  logo: {
    width: 100,
    height: 14,
    resizeMode: "contain"
  },
  buttonText: {
    fontSize: 16,
    color: "#494F54"
  }
});
