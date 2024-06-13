import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import { Color, FontFamily } from "../../../theme";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import PasswordConfirmation from "./molecules/PasswordConfirmation";

const ChangePassword = ({ navigation }) => {
  const [model, setModel] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.insideContainer}>
        <CustomHeader
          onPress={() => navigation.goBack()}
          headerTitle={
            <CustomText
              label={"Change Password"}
              color={Color.black10}
              fontSize={22}
              fontFamily={FontFamily.barlowSemiBold}
            />
          }
          rightIcon={<View />}
        />
        <CustomInput
          placeholder="Current Password"
          secureTextEntry
          height={54}
          marginBottom={-8}
          continerStyle={{
            backgroundColor: Color.white,
            borderColor: Color.inputBorderColor,
          }}
        />
        <CustomInput
          placeholder="New Password"
          secureTextEntry
          height={54}
          marginBottom={-8}
          continerStyle={{
            backgroundColor: Color.white,
            borderColor: Color.inputBorderColor,
          }}
        />
        <CustomInput
          placeholder="Confirm Password"
          secureTextEntry
          height={54}
          continerStyle={{
            backgroundColor: Color.white,
            borderColor: Color.inputBorderColor,
          }}
        />
      </View>

      <View style={styles.flexEndContainer}>
        <CustomButton
          title={"Change Password"}
          width="90%"
          alignSelf={"center"}
          height={55}
          color={Color.white}
          fontSize={16}
          marginBottom={10}
          onPress={() => setModel(true)}
        />
        <CustomText label={"Version 1.0"} textAlign={"center"} />
        <PasswordConfirmation
          visible={model}
          CancelPress={() => setModel(false)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  insideContainer: {
    paddingHorizontal: 25,
  },
  flexEndContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
  },
});

export default ChangePassword;
