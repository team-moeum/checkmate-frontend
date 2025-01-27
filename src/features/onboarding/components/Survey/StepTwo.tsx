import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Controller } from "react-hook-form";

export const StepTwo = ({ control, setValue, errors }: any) => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>생년월일과 성별을 알려주세요</Text>
        <Text style={styles.plaintext}>
          나와 비슷한 친구들이 많이 실천한 {"\n"}도전과제를 알려드릴게요!
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 20, color: "#494F54" }}>생년월일</Text>
        <View style={styles.inputContainerRow}>
          <Controller
            name="birthYear"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                editable
                maxLength={4}
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
                placeholder="출생년도"
                style={[
                  styles.textInput2,
                  {
                    borderColor:
                      focusedField === "birthYear"
                        ? "#00CC51"
                        : errors.birthYear
                          ? "#FF6B6B"
                          : "#E0E5EA"
                  }
                ]}
                onFocus={() => handleFocus("birthYear")}
                onBlur={handleBlur}
              />
            )}
          />
          <Controller
            name="birthMonth"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                editable
                maxLength={2}
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
                placeholder="월"
                style={[
                  styles.textInput2,
                  {
                    borderColor:
                      focusedField === "birthMonth"
                        ? "#00CC51"
                        : errors.birthMonth
                          ? "#FF6B6B"
                          : "#E0E5EA"
                  }
                ]}
                onFocus={() => handleFocus("birthMonth")}
                onBlur={handleBlur}
              />
            )}
          />
          <Controller
            name="birthDay"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                editable
                maxLength={2}
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
                placeholder="일"
                style={[
                  styles.textInput2,
                  {
                    borderColor:
                      focusedField === "birthDay"
                        ? "#00CC51"
                        : errors.birthDay
                          ? "#FF6B6B"
                          : "#E0E5EA"
                  }
                ]}
                onFocus={() => handleFocus("birthDay")}
                onBlur={handleBlur}
              />
            )}
          />
        </View>
        <Text style={{ fontSize: 20, color: "#494F54" }}>성별</Text>
        <View style={styles.genderContainer}>
          <Controller
            name="gender"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <TouchableOpacity style={styles.genderButton} onPress={() => onChange("male")}>
                  <Image source={require("assets/images/onboarding/gender-male.png")} />
                  <Text
                    style={[styles.genderText, value === "male" && styles.genderButtonSelected]}
                  >
                    남성
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.genderButton} onPress={() => onChange("female")}>
                  <Image source={require("assets/images/onboarding/gender-female.png")} />
                  <Text
                    style={[styles.genderText, value === "female" && styles.genderButtonSelected]}
                  >
                    여성
                  </Text>
                </TouchableOpacity>
              </>
            )}
          />
        </View>
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
  textContainer: {
    width: "90%",
    justifyContent: "flex-start",
    gap: 5
  },
  title: {
    fontSize: 32,
    fontWeight: "bold"
  },
  plaintext: {
    fontSize: 20,
    color: "#494F54"
  },
  inputContainer: {
    position: "relative",
    width: "90%",
    gap: 20
  },
  textInput2: {
    flex: 4,
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#E0E5EA",
    borderRadius: 8,
    fontSize: 20
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
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
    fontSize: 20
  },
  inputContainerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 2
  },
  errorText: {
    color: "#FF6B6B",
    fontSize: 14,
    marginTop: 4
  }
});
