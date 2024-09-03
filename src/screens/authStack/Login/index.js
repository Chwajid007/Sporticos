import { SafeAreaView, StyleSheet, Image, View, Keyboard } from "react-native";
import React, { useRef, useState } from "react";
import { Color, FontFamily, images } from "../../../theme";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import { validateFields } from "../../../utils/Validations/validateFields";
import { doLogin } from "../../../redux/reducer/authSlice";
import { setLoader } from "../../../redux/reducer/appSliceReducer";
import validator from "../../../utils/Validations/validator";

const Login = ({ navigation }) => {
  const userType = useSelector((state) => state.user.userType);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",

    emailError: "",
    passwordError: "",
  });

  const inputRefs = {
    email: useRef(null),
    password: useRef(null),
  };

  const changeHandler = (type, value) =>
    setInputs({ ...inputs, [type]: value });

  const doNext = async () => {
    Keyboard.dismiss();
    dispatch(setLoader(true));
    const emailError = await validator("email", inputs.email);
    const passwordError = await validator("password", inputs.password);
    if (!emailError && !passwordError) {
      const body = {
        role: userType,
        email: inputs.email,
        password: inputs.password,
      };
      console.log("body", body);
      dispatch(doLogin(body));
    } else {
      dispatch(setLoader(false));
      setInputs({ ...inputs, emailError, passwordError });
    }
  };

  return (
    <SafeAreaView style={styles.parent}>
      <KeyboardAwareScrollView style={styles.container}>
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
            inputRefs.password.current?.focusRef();
          }}
          errorMessage={inputs.emailError}
          ref={inputRefs.email}
          returnKeyType={"next"}
        />
        <CustomInput
          placeholder={"*******"}
          secureTextEntry={true}
          HeaderLabel={"Password"}
          isError={inputs.passwordError}
          onChangeText={(value) => {
            changeHandler("password", value);
          }}
          onFocus={() => setInputs({ ...inputs, passwordError: "" })}
          onBlur={() => {
            validateFields(inputs.password, "password", (error) => {
              setInputs({ ...inputs, passwordError: error });
            });
          }}
          onSubmitEditing={doNext}
          blurOnSubmit={false}
          errorMessage={inputs.passwordError}
        />
        <CustomText
          label={"Forgot Password?"}
          fontSize={14}
          fontFamily={FontFamily?.barlowSemiBold}
          alignSelf={"flex-end"}
          onPress={() => navigation.navigate("ForgetPassword")}
        />
        <CustomButton
          onPress={() => doNext()}
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
      </KeyboardAwareScrollView>
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
