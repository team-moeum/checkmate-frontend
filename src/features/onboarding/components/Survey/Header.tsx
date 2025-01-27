import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface HeaderProps {
  onBackPress: () => void;
}

export const Header = ({ onBackPress }: HeaderProps) => {
  return (
    <TouchableOpacity onPress={onBackPress}>
      <Text style={styles.header}>이전</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 32,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    fontSize: 18,
    color: "#494F54"
  }
});
