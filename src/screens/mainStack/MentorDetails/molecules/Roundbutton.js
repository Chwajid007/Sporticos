import { StyleSheet, Image, View } from "react-native";
import React from "react";
import CustomText from "../../../../components/CustomText";
import { Color, FontFamily, images } from "../../../../theme";
import CustomButton from "../../../../components/CustomButton";

const Roundbutton = ({ source, heading, Subheading }) => {
  return (
    <View style={{ width: 64 }}>
      <View
        style={{
          width: 58,
          height: 58,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Color.white20,
        }}
      >
        <Image
          source={source}
          style={{
            height: 30,
            width: 30,
            resizeMode: "contain",
            tintColor: "#B7F82D",
          }}
        />
      </View>
      <CustomText
        label={heading}
        fontSize={14}
        fontFamily={FontFamily.barlowBold}
        alignSelf={"center"}
        marginTop={4}
      />
      <CustomText
        label={Subheading}
        fontSize={13}
        alignSelf={"center"}
        marginTop={4}
      />
    </View>
  );
};

export default Roundbutton;

const styles = StyleSheet.create({});
