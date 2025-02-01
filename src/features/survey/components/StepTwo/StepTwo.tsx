import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import { TextSection } from "../TextSection";
import { InputField } from "./InputField";
import { GenderButton } from "./GenderButton";

export const StepTwo = ({ control }: any) => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <View style={styles.container}>
      <TextSection
        title="생년월일과 성별을 알려주세요"
        plaintext={"나와 비슷한 친구들이 많이 실천한 \n도전과제를 알려드릴게요!"}
        reverseOrder={false}
      />

      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 18, color: "#494F54" }}>생년월일</Text>
        <View style={styles.inputContainerRow}>
          <InputField
            name="birthYear"
            control={control}
            placeholder="출생년도"
            maxLength={4}
            keyboardType="numeric"
            focusedField={focusedField}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
          />
          <InputField
            name="birthMonth"
            control={control}
            placeholder="월"
            maxLength={2}
            keyboardType="numeric"
            focusedField={focusedField}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
          />
          <InputField
            name="birthDay"
            control={control}
            placeholder="일"
            maxLength={2}
            keyboardType="numeric"
            focusedField={focusedField}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
          />
        </View>

        <Text style={{ fontSize: 18, color: "#494F54" }}>성별</Text>
        <View style={styles.genderContainer}>
          <Controller
            name="gender"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <GenderButton
                  value={value}
                  onChange={onChange}
                  gender="male"
                  imageSource={require("assets/images/onboarding/gender-male.png")}
                />
                <GenderButton
                  value={value}
                  onChange={onChange}
                  gender="female"
                  imageSource={require("assets/images/onboarding/gender-female.png")}
                />
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
  inputContainer: {
    position: "relative",
    width: "90%",
    gap: 20
  },
  inputContainerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 2
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
