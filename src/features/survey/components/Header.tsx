import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import BackButtonIcon from "assets/icons/back-botton.svg";
interface HeaderProps {
  onBackPress: () => void;
}

export const Header = ({ onBackPress }: HeaderProps) => {
  return (
    <TouchableOpacity style={styles.header} onPress={onBackPress}>
      <BackButtonIcon width={44} height={28} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    alignItems: "center",
    backgroundColor: "white"
  }
});
