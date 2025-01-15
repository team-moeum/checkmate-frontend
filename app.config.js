import "dotenv/config";

export default {
  expo: {
    name: "RNBoilerplate",
    slug: "RNBoilerplate",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    runtimeVersion: {
      policy: "sdkVersion"
    },
    updates: {
      url: `https://u.expo.dev/${process.env.EAS_PROJECT_ID}`
    },
    ios: {
      bundleIdentifier: process.env.IOS_BUNDLE_ID,
      buildNumber: "1",
      supportsTablet: true,
      entitlements: {
        "com.apple.developer.networking.wifi-info": true
      }
    },
    android: {
      package: process.env.ANDROID_PACKAGE_NAME,
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff"
        }
      ]
    ],
    experiments: {
      typedRoutes: true
    },
    extra: {
      router: {
        origin: false
      },
      eas: {
        projectId: process.env.EAS_PROJECT_ID
      }
    },
    owner: "moeum"
  }
};
