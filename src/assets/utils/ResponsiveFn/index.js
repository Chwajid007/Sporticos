import React from 'react';
import {StatusBar, PixelRatio, Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
const {height, width} = Dimensions.get('window');
export function isIphoneX() {
  return Platform.OS === 'ios' && DeviceInfo.hasNotch();
}

export function getHeight(h) {
  const elemHeight = parseFloat(h);
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
}
export function getWidth(w) {
  const elemWidth = parseFloat(w);
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
}
export function getFontSize(font) {
  const deviceHeight = isIphoneX()
    ? height * 0.9
    : Platform.OS === 'android'
    ? height - StatusBar.currentHeight
    : height;
  const deviceHeightPercent = (font * deviceHeight) / 100;
  return Math.round(deviceHeightPercent);
}
export const useForceUpdate = () => {
  const [, updateState] = React.useState();
  return React.useCallback(() => updateState({}), []);
}

// Utility function to get the greeting based on the time of day
export const getTimeBasedGreeting = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "Good Afternoon";
  } else if (currentHour >= 17 && currentHour < 21) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
};
