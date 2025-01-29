import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";

interface InputFieldProps {
  name: string;
  control: any;
  placeholder: string;
  maxLength: number;
  keyboardType: "numeric" | "default";
  focusedField: string | null;
  handleFocus: (field: string) => void;
  handleBlur: () => void;
}

export const InputField = ({
  name,
  control,
  placeholder,
  maxLength,
  keyboardType,
  focusedField,
  handleFocus,
  handleBlur
}: InputFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextInput
          editable
          maxLength={maxLength}
          keyboardType={keyboardType}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          style={[
            styles.textInput2,
            {
              borderColor: focusedField === name ? "#00CC51" : "#E0E5EA"
            }
          ]}
          onFocus={() => handleFocus(name)}
          onBlur={handleBlur}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  textInput2: {
    flex: 4,
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#E0E5EA",
    borderRadius: 8,
    fontSize: 20
  }
});
