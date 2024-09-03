import { Keyboard, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import { Color, FontFamily } from "../../../theme";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { validateFields } from "../../../utils/Validations/validateFields";
import { setLoader } from "../../../redux/reducer/appSliceReducer";
import { putRequest } from "../../../Api";
import { routes } from "../../../Api/routes";
import { BASE_URL } from "../../../Api/constants";
import validator from "../../../utils/Validations/validator";
import SimpleToast from "react-native-simple-toast";

const ForgetPassword = ({ navigation }) => {
  const userType = useSelector((state) => state.user.userType);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",

    emailError: "",
  });

  const inputRefs = {
    email: useRef(null),
  };

  const changeHandler = (type, value) =>
    setInputs({ ...inputs, [type]: value });

  const doNext = async () => {
    Keyboard.dismiss();
    dispatch(setLoader(true));
    const emailError = await validator("email", inputs.email);
    if (!emailError) {
      const body = {
        role: userType,
        email: inputs.email,
      };
      const onSuccess = (res) => {
        navigation.navigate("Otp", { email: inputs.email, role: userType });
        SimpleToast.show(res.message);
      };
      console.log("body", body);
      await putRequest(body, routes.forgetPassword, BASE_URL, onSuccess);
    } else {
      dispatch(setLoader(false));
      setInputs({ ...inputs, emailError });
    }
  };

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
          keyboardType="email-address"
          onChangeText={(value) => {
            changeHandler("email", value);
          }}
          onFocus={() => setInputs({ ...inputs, emailError: "" })}
          isError={inputs.emailError}
          onBlur={() => {
            validateFields(inputs.email, "email", (error) => {
              setInputs({ ...inputs, emailError: error });
            });
          }}
          onSubmitEditing={() => {
            doNext();
          }}
          errorMessage={inputs.emailError}
          ref={inputRefs.email}
        />
        <CustomButton
          marginTop={100}
          title={"Reset Password"}
          color={Color?.white}
          onPress={() => doNext()}
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
