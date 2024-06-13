import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color, FontFamily } from "../../../../theme";
import CustomText from "../../../../components/CustomText";

const TextView = ({ headerText, buttonLabel }) => {
  return (
    <View style={{ width: 97 }}>
      <CustomText
        label={headerText}
        fontSize={10}
        marginBottom={7}
        alignSelf={"center"}
      />
      <View
        style={{
          height: 40,
          width: 97,
          backgroundColor: Color.primary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomText
          label={buttonLabel}
          fontSize={12}
          color={Color.yellowPrim}
          fontFamily={FontFamily.barlowSemiBold}
        />
      </View>
    </View>
  );
};

export default TextView;

const styles = StyleSheet.create({});
