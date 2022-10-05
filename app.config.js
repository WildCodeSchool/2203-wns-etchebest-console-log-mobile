import * as dotenv from 'dotenv';

dotenv.config();

export default {
  "expo": {
    "name": "console-log-app",
    "slug": "console-log-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "dev.wilders.etchebest30422",
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "dev.wilders.etchebest30422",
      "versionCode": 1
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "API_URL": process.env.API_URL,
      "eas": {
        "projectId": "ecb9f3c7-9d33-43c8-9e6d-940ff24a2c91"
      }
    },
  }
}
