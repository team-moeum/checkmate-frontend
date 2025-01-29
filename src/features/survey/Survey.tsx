import React, { useState } from "react";
import { SafeAreaView, Platform, KeyboardAvoidingView } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm } from "react-hook-form";
import { StepOne } from "./components/StepOne/StepOne";
import { StepTwo } from "./components/StepTwo/StepTwo";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Survey = ({ onInitPress }: { onInitPress: () => void }) => {
  const { control, handleSubmit, setValue, getValues, watch } = useForm();
  const [step, setStep] = useState(1);

  const statusBarHeight = getStatusBarHeight();

  const handleNext = async (data: any) => {
    if (step === 1 && data.name) {
      setStep(2);
    } else if (step === 2 && data.birthYear && data.birthMonth && data.birthDay && data.gender) {
      alert("온보딩 끝!");
      try {
        await AsyncStorage.setItem("isOnboardingComplete", "true");
      } catch (error) {
        console.error("온보딩 상태 저장 중 오류 발생:", error);
      }
    } else {
      alert("모든 정보를 입력해주세요.");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prevStep => prevStep - 1);
    } else {
      onInitPress();
    }
  };

  const name = watch("name");
  const birthYear = watch("birthYear");
  const birthMonth = watch("birthMonth");
  const birthDay = watch("birthDay");
  const gender = watch("gender");

  return (
    <SafeAreaView style={{ flex: 1, gap: 20 }}>
      <Header onBackPress={handleBack} />
      {step === 1 ? (
        <StepOne control={control} setValue={setValue} getValues={getValues} />
      ) : (
        <KeyboardAwareScrollView enableAutomaticScroll={false} enableOnAndroid={true}>
          <StepTwo control={control} />
        </KeyboardAwareScrollView>
      )}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={statusBarHeight}
      >
        <Footer
          step={step}
          name={name}
          birthYear={birthYear}
          birthMonth={birthMonth}
          birthDay={birthDay}
          gender={gender}
          onInitPress={onInitPress}
          onNextPress={handleSubmit(handleNext)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
