import React from "react";
import { Platform, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

interface FooterProps {
  step: number;
  name: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  gender: "male" | "female" | null;
  onInitPress: () => void;
  onNextPress: () => void;
}

export const Footer = ({
  step,
  name,
  birthYear,
  birthMonth,
  birthDay,
  gender,
  onInitPress,
  onNextPress
}: FooterProps) => {
  const statusBarHeight = getStatusBarHeight();

  const isNextEnabled =
    (step === 1 && name) || (step === 2 && birthYear && birthMonth && birthDay && gender);

  return (
    <View
      style={[
        styles.footerContainer,
        {
          paddingBottom: Platform.OS === "ios" ? statusBarHeight : 20
        }
      ]}
    >
      <TouchableOpacity
        onPress={onInitPress}
        style={{ alignItems: "center", paddingVertical: 18, flex: 3 }}
      >
        <Text style={{ color: "#494F54", fontSize: 20 }}>다음에</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: isNextEnabled ? "#191B1C" : "#E0E5EA" }]}
        onPress={onNextPress}
        disabled={!isNextEnabled}
      >
        <Text style={[styles.buttonText, { color: isNextEnabled ? "#fff" : "#C6CCD1" }]}>
          입력완료
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    width: "95%",
    backgroundColor: "white",
    marginBottom: -20
  },
  button: {
    flex: 7,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: "center"
  },
  buttonText: {
    fontSize: 20
  }
});
