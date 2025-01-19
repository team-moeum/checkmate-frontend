import { memo, useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { getRemainingTimeUntilMidnight } from "@moeum/features/home/utils/date";

const RemainingTimeComponent = () => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTimeUntilMidnight());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(getRemainingTimeUntilMidnight());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <Text style={styles.remainingTime}>도전 마감까지 {remainingTime}</Text>;
};

export const RemainingTime = memo(RemainingTimeComponent);

const styles = StyleSheet.create({
  remainingTime: {
    textAlign: "center",
    color: "#A6ABAF",
    fontSize: 14
  }
});
