import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Color, FontFamily } from "../../../../theme";
import CustomText from "../../../../components/CustomText";

const CategoryButton = ({ label, color, backgroundColor, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.parent, { backgroundColor: backgroundColor }]}
    >
      <CustomText
        label={label}
        fontSize={14}
        color={color}
        fontFamily={FontFamily?.barlowMedium}
      />
    </TouchableOpacity>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  parent: {
    height: 30,

    borderRadius: 14,
    borderWidth: 1.4,
    borderColor: Color.black20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    paddingHorizontal: 10,
  },
});
