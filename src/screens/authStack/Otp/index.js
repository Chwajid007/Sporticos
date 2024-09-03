import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import CustomHeader from "../../../components/CustomHeader";
import { Color, FontFamily } from "../../../theme";
import CustomText from "../../../components/CustomText";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import CustomButton from "../../../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../../redux/reducer/appSliceReducer";
import { putRequest } from "../../../Api";
import { routes } from "../../../Api/routes";
import { BASE_URL } from "../../../Api/constants";
import SimpleToast from "react-native-simple-toast";

const Otp = ({ navigation, route }) => {
  const [fouces, setFouces] = useState(false);
  const dispatch = useDispatch();
  const { email, role } = route?.params;
  const [otp, setOtp] = useState("");
  console.log("otppppp", otp.length);
  useEffect(() => {
    setFouces(true);
  }, []);

  const onNext = async () => {
    dispatch(setLoader(true));
    const body = {
      role: role,
      email: email,
      otp: otp,
    };
    console.log("body", body);
    const onSuccess = (res) => {
      navigation.navigate("ResetPassword", { email: email, role: role });
      SimpleToast.show(res.message);
    };
    if (otp.length === 4) {
      await putRequest(body, routes.verifyOtp, BASE_URL, onSuccess);
    } else {
      dispatch(setLoader(false));
      SimpleToast.show("Please enter OTP");
    }
  };

  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomHeader onPress={() => navigation.goBack()} />
        <CustomText
          label={"Verify Account"}
          alignSelf={"center"}
          fontSize={30}
          fontFamily={FontFamily.barlowBold}
          marginTop={40}
          marginBottom={10}
        />
        <Text
          style={{
            alignSelf: "center",
            textAlign: "center",
            fontSize: 15,
            color: Color.black20,
            fontFamily: FontFamily.barlowRegular,
            marginBottom: 110,
          }}
        >
          Verify your account by entering verification code we sent to
          <Text
            style={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: 15,
              color: Color.black20,
              fontFamily: FontFamily.barlowBold,
            }}
          >
            {" "}
            {email}
          </Text>
        </Text>
        <OTPInputView
          style={styles.otpInputView}
          pinCount={4}
          autoFocusOnLoad={fouces}
          code={otp}
          placeholderCharacter="."
          placeholderTextColor={Color.black}
          codeInputFieldStyle={styles.otpInputStyle}
          onCodeChanged={(val) => {
            setOtp(val);
          }}
          onCodeFilled={() => {
            onNext();
          }}
        />
        <CustomText
          label={"Resend"}
          textAlign={"center"}
          alignSelf={"center"}
          marginTop={20}
          fontSize={15}
          color={Color?.black20}
          fontFamily={FontFamily.barlowBold}
          textDecorationLine={"underline"}
        />
        <CustomButton
          marginTop={55}
          title={"Reset Password"}
          color={Color?.white}
          onPress={() => onNext()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  otpInputView: {
    height: "12%",
    width: "80%",
    alignSelf: "center",
    marginVertical: 10,
  },
  otpInputStyle: {
    backgroundColor: Color.white10,
    height: 55,
    width: 55,
    borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: Color.black,

    color: Color.black,
    fontSize: 15,
  },
});
