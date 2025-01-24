import { StyleSheet, Text, View } from "react-native";
import { NavItem } from "./NavItem";
import { showNotification } from "@moeum/features/home/utils/showNotification";

const NAV_ITEMS = [
  {
    image: require("assets/images/nav/bronze.png"),
    label: "도전 등급",
    description: "브론즈"
  },
  {
    image: require("assets/images/nav/point.png"),
    label: "포인트",
    description: "12코인"
  },
  {
    image: require("assets/images/nav/calendar.png"),
    label: "출석부",
    description: "5일차"
  },
  {
    image: require("assets/images/nav/goal.png"),
    label: "도전 목록",
    description: ""
  },
  {
    image: require("assets/images/nav/shop.png"),
    label: "상점",
    description: ""
  },
  {
    image: require("assets/images/nav/alarm.png"),
    label: "알림",
    description: ""
  }
];

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
    backgroundColor: "white"
  }
});
