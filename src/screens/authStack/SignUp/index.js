import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Keyboard,
} from "react-native";
import React, { useRef, useState } from "react";
import CustomHeader from "../../../components/CustomHeader";
import { Color, FontFamily, images } from "../../../theme";
import CustomText from "../../../components/CustomText";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import CustomRadioButton from "../../../components/CustomRadioButton";
import CustomDropdownPicker from "../../../components/CustomDropdown";
import CustomDate from "../../../components/CustomDate";
import DatePicker from "react-native-date-picker";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getFontSize } from "../../../assets/utils/ResponsiveFn";
import { validateFields } from "../../../utils/Validations/validateFields";
import { setLoader } from "../../../redux/reducer/appSliceReducer";
import validator from "../../../utils/Validations/validator";
import { doSignUp } from "../../../redux/reducer/authSlice";

const SignUp = ({ navigation }) => {

  const userType = useSelector((state) => state.user.userType);
  const dispatch = useDispatch();

  const [selectedValue, setSelectedValue] = useState('male');
  const [date, setDate] = useState(null);
  const [datePicker, setDatePicker] = useState(false);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    password: "",

    firstNameError: "",
    lastNameError: "",
    dateOfBirthError: "",
    phoneNumberError: "",
    emailError: "",
    passwordError: "",
  });
  const inputRefs = {
    firstName: useRef(null),
    lastName: useRef(null),
    dateOfBirth: useRef(null),
    phoneNumber: useRef(null),
    email: useRef(null),
    password: useRef(null),
  };

  const onDateSelected = (value) => {
    setDate(value);
    setInputs({
      ...inputs,
      dateOfBirth: value,
      dateOfBirthError: "",
    });
    setDatePicker(false);
  };

  // changeHandler for text input
  const changeHandler = (type, value) => {
    setInputs({ ...inputs, [type]: value });
  };

  const genderData = [
    {
      id: 0,
      label: "male",
      value: "male",
    },
    {
      id: 1,
      label: "female",
      value: "female",
    },
  ];

  const doNext = async () => {
    Keyboard.dismiss();
    dispatch(setLoader(true));
    const emailError = await validator("email", inputs.email);
    const passwordError = await validator("password", inputs.password);
    const firstNameError = await validator("firstName", inputs.firstName);
    const lastNameError = await validator("lastName", inputs.lastName);
    const dateOfBirthError = await validator("dateOfBirth", inputs.dateOfBirth);
    const phoneNumberError = await validator("phoneNumber", inputs.phoneNumber);

    if (!emailError && !firstNameError && !passwordError && !lastNameError && !dateOfBirthError && !phoneNumberError) {
      const body = {
        role: userType,
        email: inputs.email,
        password: inputs.password,
        first_name: inputs.firstName,
        last_name: inputs.lastName,
        date_of_birth: moment(inputs.dateOfBirth).format("YYYY-MM-DD"),
        phone_no: inputs.phoneNumber,
        gender: selectedValue,
      };
      console.log("body", body);
      dispatch(doSignUp(body));
    } else {
      dispatch(setLoader(false));
      setInputs({ ...inputs, emailError, passwordError , firstNameError, lastNameError, dateOfBirthError, phoneNumberError });
    }
  };

  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomHeader onPress={() => navigation.goBack()} />
        <Image source={images.Logo} style={styles.HeaderImage} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomText
            label={"Create Account"}
            alignSelf={"center"}
            fontSize={30}
            fontFamily={FontFamily.barlowBold}
            marginBottom={getFontSize(5)}
          />
          <CustomInput
            placeholder={"First Name"}
            HeaderLabel={"First Name"}
            onChangeText={(value) => {
              changeHandler("firstName", value);
            }}
            onFocus={() => setInputs({ ...inputs, firstNameError: "" })}
            isError={inputs.firstNameError}
            onBlur={() => {
              validateFields(inputs.firstName, "firstName", (error) => {
                setInputs({ ...inputs, firstNameError: error });
              });
            }}
            onSubmitEditing={() => {
              inputRefs.lastName.current?.focusRef();
            }}
            errorMessage={inputs.firstNameError}
            ref={inputRefs.firstName}
            returnKeyType={"next"}
          />
          <CustomInput
            placeholder={"Last Name"}
            HeaderLabel={"Last Name"}
            onChangeText={(value) => {
              changeHandler("lastName", value);
            }}
            onFocus={() => setInputs({ ...inputs, lastNameError: "" })}
            isError={inputs.lastNameError}
            onBlur={() => {
              validateFields(inputs.lastName, "lastName", (error) => {
                setInputs({ ...inputs, lastNameError: error });
              });
            }}
            errorMessage={inputs.lastNameError}
            ref={inputRefs.lastName}
          />
          <CustomDropdownPicker
            HeaderLabel={"Gender"}
            data={genderData}
            label={"male"}
            value={selectedValue}
            setValue={setSelectedValue}
          />

          <CustomInput
            editable={false}
            placeholder={
              date ? moment(date).format("DD/MM/YYYY") : "DD/MM/YYYY"
            }
            HeaderLabel={"Date of Birth"}
            onPressIn={() => setDatePicker(true)}
            onChangeText={(value) => {
              changeHandler("dateOfBirth", value);
            }}
            onFocus={() => setInputs({ ...inputs, dateOfBirthError: "" })}
            isError={inputs.dateOfBirthError}
            onBlur={() => {
              validateFields(inputs.dateOfBirth, "dateOfBirth", (error) => {
                setInputs({ ...inputs, dateOfBirthError: error });
              });
            }}
            onSubmitEditing={() => {
              inputRefs.phoneNumber.current?.focusRef();
            }}
            errorMessage={inputs.dateOfBirthError}
            ref={inputRefs.dateOfBirth}
          />

          <CustomInput
            placeholder={"+44 3224095946"}
            HeaderLabel={"Phone Number"}
            onChangeText={(value) => {
              changeHandler("phoneNumber", value);
            }}
            onFocus={() => setInputs({ ...inputs, phoneNumberError: "" })}
            isError={inputs.phoneNumberError}
            onBlur={() => {
              validateFields(inputs.phoneNumber, "phoneNumber", (error) => {
                setInputs({ ...inputs, phoneNumberError: error });
              });
            }}
            onSubmitEditing={() => {
              inputRefs.email.current?.focusRef();
            }}
            errorMessage={inputs.phoneNumberError}
            ref={inputRefs.phoneNumber}
          />
          <CustomInput
            placeholder={"email@gmail.com"}
            HeaderLabel={"Email address"}
            iconName={true}
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
          />
          <CustomInput
            placeholder={"******"}
            HeaderLabel={"Password"}
            secureTextEntry={true}
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <CustomRadioButton />
            <CustomText
              label={
                "I Have read the private policy and Terms of Use, I Agree to it"
              }
              fontSize={11}
              color={Color?.black20}
            />
          </View>
          <CustomButton
            marginTop={15}
            title={"Next"}
            color={Color?.white}
            onPress={() => {
             // navigation.navigate("ProfilePhoto");
             doNext()
            }}
          />
          <CustomText
            label={"Or Register with"}
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
              onPress={() => navigation.navigate("Login")}
              label={" Login!"}
              fontSize={15}
              fontFamily={FontFamily.barlowBold}
            />
          </View>
          <View style={{ marginBottom: 150 }} />
        </ScrollView>
      </View>

      {datePicker && (
        <DatePicker
          modal
          mode={"date"}
          open={datePicker}
          date={date || new Date()}
          maximumDate={new Date()}
          onConfirm={(value) => {
            onDateSelected(value);
            // setShow(false);
            // setDate(date);
          }}
          onCancel={() => {
            setDatePicker(false);
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default SignUp;
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
    width: 400,
    alignSelf: "center",
    resizeMode: "contain",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  errorMessage: {
    marginLeft: 10,
    fontSize: 12,
    color: "red",
  },
});
