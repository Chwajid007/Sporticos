import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import { Color, FontFamily } from "../../../theme";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

const ForgetPassword = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomHeader onPress={() => navigation.goBack()} />
        <CustomText
          label={"Forgot Password"}
          alignSelf={"center"}
          fontSize={30}
          fontFamily={FontFamily.barlowBold}
          marginTop={40}
          marginBottom={10}
        />
        <CustomText
          label={
            "Please enter your email below to receive your password reset code."
          }
          alignSelf={"center"}
          textAlign={"center"}
          fontSize={15}
          color={Color.black20}
          marginBottom={100}
        />
        <CustomInput
          placeholder={"Enter Your Email"}
          iconName={true}
          HeaderLabel={"Email address"}
        />
        <CustomButton
          marginTop={100}
          title={"Reset Password"}
          color={Color?.white}
          onPress={() => navigation.navigate("Otp")}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
