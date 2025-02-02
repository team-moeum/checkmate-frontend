import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OnBoardingContainer } from "@moeum/features/onboarding/containers/OnBoardingContainer";
import { HomeContainer } from "@moeum/features/home/containers/HomeContainer";

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
  return isOnBoardingDone ? <HomeContainer /> : <OnBoardingContainer />;
}
