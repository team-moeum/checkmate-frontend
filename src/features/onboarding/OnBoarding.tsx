import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import CarouselComponent from "./components/Carousel";
import { Survey } from "./components/Survey/Survey";

const screenWidth = Dimensions.get("window").width;

export const OnBoarding = () => {
  const [showSurvey, setShowSurvey] = useState(false);

  const onPress = () => {
    setShowSurvey(true);
  };
  const onInitPress = () => {
    setShowSurvey(false);
  };

  const renderSurvey = () => {
    return <Survey onInitPress={onInitPress} />;
  };
  const items = [
    { title1: "버디와 함께", highlight1: "성장하며", highlight2: "나아가는", title2: "1" },
    { title1: "버디와 함께", highlight1: "성장하며", highlight2: "나아가는", title2: "2" },
    { title1: "버디와 함께", highlight1: "성장하며", highlight2: "나아가는", title2: "3" }
  ];
  return (
    <View style={styles.wrapper}>
      {showSurvey ? (
        renderSurvey()
      ) : (
        <>
          <View style={styles.container}>
            <CarouselComponent items={items} gap={20} pageWidth={screenWidth} />

            <Image
              source={require("assets/images/onboarding/onboarding-asset.png")}
              style={styles.image}
            />

            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.buttonText}>시작하기</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.privacyPolicy}>계속하면 CheckMate 서비스 약관에 동의하고</Text>
            <Text style={styles.privacyPolicy}>
              개인정보처리방침을 읽었음을 인정하는 것으로 간주됩니다
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff"
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 48
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 24
  },
  button: {
    backgroundColor: "#191B1C",
    paddingVertical: 18,
    width: screenWidth * 0.9,
    borderRadius: 12,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 20
  },
  footer: {
    alignItems: "center",
    marginBlock: 16
  },
  privacyPolicy: {
    fontSize: 16,
    color: "#494F54",
    textAlign: "center"
  }
});

export default OnBoarding;
