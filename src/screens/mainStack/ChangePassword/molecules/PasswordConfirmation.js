import { StyleSheet, Text, View, Modal } from "react-native";
import React from "react";
import { Color, FontFamily } from "../../../../theme";
import CustomText from "../../../../components/CustomText";

const PasswordConfirmation = ({ visible, CancelPress, okPress }) => {
  return (
    <Modal transparent visible={visible} animationType="slide">
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            width: "85%",
            height: 130,
            borderRadius: 20,
            backgroundColor: Color.white,
            padding: 25,
            justifyContent: "space-between",
          }}
        >
          <CustomText
            label={"Password Changed!"}
            fontSize={20}
            fontFamily={FontFamily.barlowBold}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <CustomText
              label={"Cancel"}
              fontSize={16}
              marginRight={20}
              color={Color.primary}
              onPress={CancelPress}
            />

            <CustomText
              label={"Ok"}
              fontSize={16}
              color={Color.primary}
              onPress={okPress}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PasswordConfirmation;

const styles = StyleSheet.create({});
