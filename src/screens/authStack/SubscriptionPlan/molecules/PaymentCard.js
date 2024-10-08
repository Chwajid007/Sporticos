import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Color, FontFamily, FontSize, images } from "../../../../theme";
import CustomText from "../../../../components/CustomText";

const PaymentCard = ({ headerLabel, Price, selected, onPress }) => {
  return (
    <TouchableOpacity style={styles?.parent} onPress={onPress}>
      <View
        style={{
          height: 30,
          width: "100%",
          backgroundColor: Color?.yellowPrim20,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomText
          label={headerLabel}
          fontSize={12}
          fontFamily={FontFamily.barlowSemiBold}
        />
      </View>
      <View
        style={{
          height: 105,
          width: "100%",
          backgroundColor: Color?.white,
          justifyContent: "center",
          alignItems: "center",
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}
      >
        <CustomText label={"Monthly"} fontSize={14} />
        <CustomText
          label={Price}
          fontSize={16}
          fontFamily={FontFamily?.barlowSemiBold}
          marginTop={3}
          color={Color?.grey}
        />
        {selected &&
        <Image
          source={images.Check}
          style={{
            height: 20,
            width: 20,
            resizeMode: "contain",
            marginTop: 10,
          }}
        />
        }
      </View>
    </TouchableOpacity>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  parent: {
    width: 110,
    height: 135,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginRight: 10,
  },
});
