import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../../../../components/CustomText";
import { Color, FontFamily } from "../../../../theme";

const Row = ({ heading, heading2, marginTop }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: marginTop || 20,
        marginBottom: 15,
      }}
    >
      <CustomText
        label={heading}
        fontSize={18}
        color={Color?.black30}
        fontFamily={FontFamily.barlowSemiBold}
      />
      <CustomText label={heading2} fontSize={13} color={Color?.black20} />
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({});
