import { Modal, StyleSheet, Image, View } from "react-native";
import React from "react";
import { Color, FontFamily, images } from "../../../../theme";
import CustomText from "../../../../components/CustomText";
import CustomButton from "../../../../components/CustomButton";

const PaymentModel = ({ visible, onPress }) => {
  return (
    <Modal transparent visible={visible} animationType="slide">
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
      >
        <View
          style={{
            width: "85%",
            height: 370,
            borderRadius: 20,
            backgroundColor: Color?.white,
            paddingTop: 25,
            alignItems: "center",
          }}
        >
          <Image
            source={images.Verified}
            style={{ height: 131, width: 131, resizeMode: "contain" }}
          />
          <CustomText
            label={"Payment Successful!"}
            fontSize={20}
            fontFamily={FontFamily.barlowMedium}
            marginTop={20}
          />
          <CustomText
            label={"You have subscribed to the Tactical Plan"}
            fontSize={15}
            fontFamily={FontFamily.barlowMedium}
            marginTop={10}
            color={Color?.Grey10}
          />
          <CustomButton
            width={"50%"}
            marginTop={40}
            title={"Done"}
            color={Color?.white}
            borderRadius={10}
            onPress={onPress}
          />
        </View>
      </View>
    </Modal>
  );
};

export default PaymentModel;

const styles = StyleSheet.create({});
