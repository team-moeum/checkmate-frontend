import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

interface GenderButtonProps {
  value: string | null;
  onChange: (gender: string) => void;
  gender: string;
  imageSource: any;
}

export const GenderButton = ({ value, onChange, gender, imageSource }: GenderButtonProps) => {
  return (
    <TouchableOpacity style={styles.genderButton} onPress={() => onChange(gender)}>
      <Image source={imageSource} />
      <Text style={[styles.genderText, value === gender && styles.genderButtonSelected]}>
        {gender === "male" ? "남성" : "여성"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  genderButton: {
    flexDirection: "column",
    alignItems: "center",
    gap: 16
  },
  genderButtonSelected: {
    color: "#00CC51",
    fontWeight: "bold"
  },
  genderText: {
    color: "#494F54",
    fontSize: 18
  }
});
