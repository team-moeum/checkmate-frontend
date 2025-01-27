import React from "react";
import { SafeAreaView, Platform, KeyboardAvoidingView } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm, Controller } from "react-hook-form";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
export const Survey = ({ onInitPress }: { onInitPress: () => void }) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    watch
  } = useForm();
  const [step, setStep] = React.useState(1);

  const statusBarHeight = getStatusBarHeight();

  const handleNext = (data: any) => {
    if (step === 1 && data.name) {
      setStep(2);
    } else if (step === 2 && data.birthYear && data.birthMonth && data.birthDay && data.gender) {
      alert("정보가 저장되었습니다!");
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
        <StepOne control={control} setValue={setValue} errors={errors} />
      ) : (
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          enableAutomaticScroll={false}
          enableOnAndroid={true}
        >
          <StepTwo control={control} setValue={setValue} errors={errors} />
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
