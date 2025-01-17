import { useState, useEffect } from "react";
import { Platform } from "react-native";
import Application from "expo-application";

export const useDevicedId = (): string | null => {
  const [devicedId, setDevicedId] = useState<string | null>(null);
  useEffect(() => {
    const fetchDevicedId = async () => {
      const id =
        Platform.OS === "android"
          ? Application.getAndroidId()
          : await Application.getIosIdForVendorAsync();

      setDevicedId(id);
    };
    fetchDevicedId();
  }, []);
  return devicedId;
};
