import React, { useState } from "react";
import { OnBoarding } from "../OnBoarding";

export const OnBoardingContainer = () => {
  const [showSurvey, setShowSurvey] = useState(false);

  const onPress = () => {
    setShowSurvey(true);
  };

  const onInitPress = () => {
    setShowSurvey(false);
  };

  return <OnBoarding showSurvey={showSurvey} onPress={onPress} onInitPress={onInitPress} />;
};
