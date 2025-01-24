import { Alert, Platform, ToastAndroid } from "react-native";

export const showNotification = (message: string) => {
  if (Platform.OS === "android") {
    return ToastAndroid.show(message, ToastAndroid.SHORT);
  }

  return Alert.alert("알림", message);
};
