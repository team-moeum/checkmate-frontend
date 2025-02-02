import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions
} from "react-native";
import { CarouselComponent } from "./components/Carousel";
import { Survey } from "../survey/Survey";

const screenWidth = Dimensions.get("window").width;

interface OnBoardingProps {
  showSurvey: boolean;
  onPress: () => void;
  onInitPress: () => void;
}

export const OnBoarding = ({ showSurvey, onPress, onInitPress }: OnBoardingProps) => {
  return (
    <SafeAreaView style={{ flex: 1, gap: 20 }}>
      <View style={styles.wrapper}>
        {showSurvey ? (
          <Survey onInitPress={onInitPress} />
        ) : (
          <>
            <View style={styles.container}>
              <CarouselComponent />
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
    </SafeAreaView>
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
    fontSize: 18
  },
  footer: {
    alignItems: "center",
    marginBlock: 16
  },
  privacyPolicy: {
    fontSize: 12,
    color: "#494F54",
    textAlign: "center"
  }
});
