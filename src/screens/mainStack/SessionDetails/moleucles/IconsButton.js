import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Color, FontFamily, images } from "../../../../theme";
import CustomText from "../../../../components/CustomText";

const IconsButton = ({ width, image, label }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Color.primary,
        paddingHorizontal: 10,
        height: 50,
        width: width || 120,
        borderRadius: 8,
      }}
    >
      <Image source={image || images.clock} style={{ height: 22, width: 22 }} />
      <CustomText
        label={label || "02:20 PM"}
        fontSize={15}
        fontFamily={FontFamily.barlowSemiBold}
        color={Color.yellowPrim}
        marginLeft={10}
      />
    </View>
  );
};

export default IconsButton;

const styles = StyleSheet.create({});
