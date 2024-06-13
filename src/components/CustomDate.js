import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { Color, FontFamily } from "../theme";

const CustomDate = ({ label, onPress }) => {
  return (
    <View style={[styles.dropdownMainContainer]}>
      <CustomText
        label={"Date of Birth"}
        marginBottom={5}
        fontSize={16}
        fontFamily={FontFamily.barlowMedium}
      />
      <TouchableOpacity
        style={styles.DateView}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <CustomText label={label} fontSize={14} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomDate;

const styles = StyleSheet.create({
  dropdownMainContainer: {
    marginBottom: 17,
  },
  DateView: {
    width: "100%",
    height: 58,
    borderWidth: 1,
    borderColor: Color.greyLight10,
    borderRadius: 10,
    backgroundColor: Color.white10,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
