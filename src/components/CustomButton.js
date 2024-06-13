import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { Color, FontFamily } from "../theme";

const CustomButton = ({
  onPress,
  title,
  backgroundColor,
  borderWidth,
  borderColor,
  width,
  height,
  alignSelf,
  borderRadius,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  fontSize,
  color,
  fontWeight,
  ShowIcon,
  fontFamily,
  loading,
  disabled,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={disabled || !onPress}
      style={{
        backgroundColor: disabled ? "red" : backgroundColor || Color.primary,
        borderWidth: borderWidth || 1,
        borderColor: disabled ? "red" : borderColor || Color.primary,
        width: width || "100%",
        height: height || 56,
        alignSelf: alignSelf,
        marginRight: marginRight,
        marginTop: marginTop,
        marginLeft: marginLeft,
        marginBottom: marginBottom,
        borderRadius: borderRadius || 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {loading ? (
          <ActivityIndicator size={"small"} color={colors.white} />
        ) : (
          <Text
            style={{
              fontSize: fontSize || 17,
              color: color || Color?.yellowPrim,
              fontWeight: fontWeight,
              fontFamily: FontFamily.barlowBold || fontFamily,
            }}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
