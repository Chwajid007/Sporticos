import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { FontFamily, images } from "../../../../theme";
import CustomText from "../../../../components/CustomText";

const RowText = ({ label }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
      <Image
        source={images.Check}
        style={{ height: 20, width: 20, resizeMode: "contain" }}
      />
      <View style={{ width: "78%" }}>
        <CustomText
          label={label}
          fontSize={14}
          marginLeft={10}
          fontFamily={FontFamily.barlowMedium}
        />
      </View>
    </View>
  );
};

export default RowText;

const styles = StyleSheet.create({});
