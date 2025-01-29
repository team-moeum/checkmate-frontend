import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import { TextSection } from "../TextSection";

export const StepOne = ({ control, setValue, getValues }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const [name, setName] = useState(getValues("name") || "");

  return (
    <View style={styles.container}>
      <TextSection
        title={"버디의 새 친구를 뭐라고 \n부르면 될까요?"}
        plaintext="안녕하세요!"
        reverseOrder={true}
      />

      <View style={styles.inputContainer}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                editable
                maxLength={40}
                onChangeText={text => {
                  onChange(text);
                  setName(text);
                }}
                value={name}
                placeholder="당신의 이름을 알려주세요"
                style={[styles.textInput, { borderColor: isFocused ? "#00CC51" : "#E0E5EA" }]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </>
          )}
        />
        {name.length > 0 && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => {
              setName("");
              setValue("name", "");
            }}
          >
            <Text style={styles.clearButtonText}>×</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    alignItems: "center"
  },
  inputContainer: {
    position: "relative",
    width: "90%",
    gap: 20
  },
  textInput: {
    width: "100%",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#E0E5EA",
    borderRadius: 8,
    fontSize: 20
  },
  clearButton: {
    position: "absolute",
    right: 10,
    top: 12,
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#E0E5EA"
  },
  clearButtonText: {
    color: "#A6ABAF",
    fontWeight: "bold",
    fontSize: 16,
    bottom: 0.5
  }
});
