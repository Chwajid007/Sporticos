import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CustomModal from "./CustomModal";
import CustomText from "./CustomText";
import { Color } from "../theme";

const CustomRadioButton = ({ onPress, borderColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.mainButtonContainer,
        { borderColor: borderColor || Color?.greyLight10 },
      ]}
    ></TouchableOpacity>
  );
};

export default CustomRadioButton;

const styles = StyleSheet.create({
  mainButtonContainer: {
    width: 20,
    height: 20,
    borderRadius: 1,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    backgroundColor: Color?.white10,
  },
  container: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});
