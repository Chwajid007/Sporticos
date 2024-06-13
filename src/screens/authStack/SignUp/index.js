import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
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

const SignUp = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [date, setDate] = useState(null);

  const [show, setShow] = useState(false);
  console.log("show", show);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const genderData = [
    {
      id: 0,
      label: "Male",
      value: "Male",
    },
    {
      id: 1,
      label: "Female",
      value: "Female",
    },
  ];
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
          />
          <CustomInput placeholder={"John"} HeaderLabel={"First Name"} />
          <CustomInput placeholder={"Welles"} HeaderLabel={"Last Name"} />
          <CustomDropdownPicker
            HeaderLabel={"Gender"}
            data={genderData}
            label={"Male"}
            value={selectedValue}
            setValue={setSelectedValue}
          />
          <CustomDate
            label={date ? moment(date).format("DD/MM/YYYY") : "DD/MM/YYYY"}
            onPress={() => setShow(true)}
          />
          <CustomInput
            placeholder={"+44 3224095946"}
            HeaderLabel={"Phone Number"}
          />
          <CustomInput
            placeholder={"johnwelles@gmail.com"}
            HeaderLabel={"Email address"}
            iconName={true}
          />
          <CustomInput
            placeholder={"******"}
            HeaderLabel={"Password"}
            secureTextEntry={true}
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
              navigation.navigate("ProfilePhoto");
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

      <DatePicker
        modal
        open={show}
        date={date || new Date()}
        onConfirm={(date) => {
          setShow(false);
          setDate(date);
        }}
        onCancel={() => {
          setShow(false);
        }}
      />
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
});
