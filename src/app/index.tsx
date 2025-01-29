import { useState, useEffect } from "react";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OnBoarding } from "@moeum/features/onboarding/OnBoarding";

export default function Home() {
  const [isOnBoardingDone, setIsOnBoardingDone] = useState<boolean>(false);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const value = await AsyncStorage.getItem("isOnboardingComplete");
        setIsOnBoardingDone(value === "true");
      } catch (error) {
        console.error("온보딩 상태 불러오기 오류:", error);
      }
    };

    checkOnboardingStatus();
  }, []);

  return isOnBoardingDone ? <Text>home</Text> : <OnBoarding />;
}
