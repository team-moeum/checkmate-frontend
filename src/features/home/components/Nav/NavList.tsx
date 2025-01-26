import { StyleSheet, View } from "react-native";
import { NavItem } from "./NavItem";
import { NAV_ITEMS } from "./constants";
import { showNotification } from "@moeum/features/home/utils/showNotification";

export const NavList = () => {
  return (
    <View style={styles.container}>
      {NAV_ITEMS.map((item, index) => (
        <NavItem
          key={index}
          image={item.image}
          label={item.label}
          description={item.description}
          onPress={() => {
            showNotification(`${item.label}입니다`);
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 108,
    backgroundColor: "white",
    justifyContent: "space-between"
  }
});
