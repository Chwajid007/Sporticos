import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "../../../../components/CustomText";
import { Color, FontFamily } from "../../../../theme";
import Icons from "../../../../components/Icons";

const UploadDoc = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 289,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Color.white,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.39,
        shadowRadius: 2.3,
        elevation: 5,
      }}
    >
      <Icons
        name={"upload"}
        family={"MaterialCommunityIcons"}
        size={60}
        color={Color.greyLight50}
      />
      <CustomText
        label={"Upload Document"}
        fontSize={16}
        color={Color.greyLight50}
        fontFamily={FontFamily.barlowMedium}
      />
      <TouchableOpacity
        style={{
          height: 27,
          width: 126,
          backgroundColor: Color.primary,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
          borderRadius: 20,
        }}
        activeOpacity={0.9}
      >
        <CustomText
          label={"Upload +"}
          fontSize={16}
          color={Color.yellowPrim}
          fontFamily={FontFamily.barlowMedium}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UploadDoc;

const styles = StyleSheet.create({});
