import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TextSectionProps {
  title: string;
  plaintext: string;
  reverseOrder?: boolean;
}

export const TextSection = ({ title, plaintext, reverseOrder }: TextSectionProps) => {
  return (
    <View style={styles.textContainer}>
      {reverseOrder ? (
        <>
          <Text style={styles.plaintext}>{plaintext}</Text>
          <Text style={styles.title}>{title}</Text>
        </>
      ) : (
        <>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.plaintext}>{plaintext}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    width: "90%",
    justifyContent: "flex-start",
    gap: 5
  },
  title: {
    fontSize: 28,
    fontWeight: "bold"
  },
  plaintext: {
    fontSize: 16,
    color: "#494F54"
  }
});
