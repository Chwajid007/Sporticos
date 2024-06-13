import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { Color } from "../../Theme";

const Button = ({
  text,
  leftIcon,
  RightIcon,
  btnTextStyle,
  btnStyle,
  onPress,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={btnStyle}
      onPress={() => (onPress ? onPress() : console.log("null"))}
    >
      {leftIcon}
      {isLoading ? (
        <ActivityIndicator color={Color.white} />
      ) : (
        <Text style={[btnTextStyle]}>{text}</Text>
      )}
      {RightIcon}
    </TouchableOpacity>
  );
};
export default Button;
