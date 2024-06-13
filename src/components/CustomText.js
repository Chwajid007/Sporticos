import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Color, FontFamily } from "../theme";

const CustomText = ({
  color,
  label,
  fontSize,
  fontFamily,
  marginTop,
  textDecorationLine,
  onPress,
  alignSelf,
  paddingHorizontal,
  marginBottom,
  marginRight,
  marginLeft,
  textStyle,
  lineHeight,
  textAlign,
  width,
  numberOfLines,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={0.8}
      style={{ paddingHorizontal: paddingHorizontal }}
    >
      <Text
        style={[
          textStyle,
          {
            color: color || Color.black,
            fontSize: fontSize || 12,
            lineHeight: lineHeight,
            fontFamily: fontFamily || FontFamily.barlowRegular,
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            alignSelf: alignSelf,
            textDecorationLine: textDecorationLine,
            textAlign: textAlign,
            width: width,
          },
        ]}
        numberOfLines={numberOfLines}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomText;
