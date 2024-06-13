import { SafeAreaView, StyleSheet, Image, View } from "react-native";
import React from "react";
import { Color, FontFamily, images } from "../../../theme";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomHeader onPress={() => navigation.goBack()} />
        <Image source={images.Logo} style={styles.HeaderImage} />
        <CustomText
          label={"Sign In"}
          alignSelf={"center"}
          fontSize={30}
          fontFamily={FontFamily.barlowBold}
        />
        <CustomInput
          placeholder={"Enter Your Email"}
          iconName={true}
          HeaderLabel={"Email address"}
        />
        <CustomInput
          placeholder={"*******"}
          secureTextEntry={true}
          HeaderLabel={"Password"}
        />
        <CustomText
          label={"Forgot Password?"}
          fontSize={14}
          fontFamily={FontFamily?.barlowSemiBold}
          alignSelf={"flex-end"}
          onPress={() => navigation.navigate("ForgetPassword")}
        />
        <CustomButton
          onPress={() => navigation.navigate("Drawer")}
          marginTop={15}
          title={"Login"}
          color={Color?.white}
        />
        <CustomText
          label={"Or Login with"}
          fontSize={15}
          fontFamily={FontFamily?.barlowMedium}
          alignSelf={"center"}
          color={Color?.darkGrey}
          marginBottom={20}
          marginTop={20}
        />
        <Image
          source={images.Google}
          style={[
            styles?.SocialIcon,
            {
              marginBottom: 10,
            },
          ]}
        />
        <Image source={images.faceBook} style={styles?.SocialIcon} />
        <View style={styles.footer}>
          <CustomText
            label={"Don’t have an account"}
            fontSize={15}
            fontFamily={FontFamily.barlowMedium}
          />
          <CustomText
            onPress={() => navigation.navigate("SignUp")}
            label={" Register!"}
            fontSize={15}
            fontFamily={FontFamily.barlowBold}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  HeaderImage: {
    height: 47,
    width: 265,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 30,
  },
  SocialIcon: {
    height: 55,
    width: 318,
    alignSelf: "center",
    resizeMode: "contain",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 90,
  },
});
