import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icons from "./Icons";
import { Color } from "../theme";

const CustomHeader = ({ onPress, headerTitle, rightIcon, marginBottom }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: marginBottom,
      }}
    >
      <Icons
        name={"left"}
        family={"AntDesign"}
        size={20}
        color={Color.black10}
        onPress={onPress}
      />
      {headerTitle}
      {rightIcon}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
