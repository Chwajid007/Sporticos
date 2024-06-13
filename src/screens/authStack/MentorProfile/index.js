import {
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Steps from "./molecules/Steps";
import { Color, FontFamily, images } from "../../../theme";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import Icons from "../../../components/Icons";
import UploadDoc from "./molecules/UploadDoc";
import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";

const MentorProfile = ({ navigation }) => {
  const [activeStep, setActiveStep] = useState(1);
  const screenHeight = Dimensions.get("window").height;

  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomHeader
          marginBottom={30}
          onPress={() => navigation.goBack()}
          headerTitle={
            <CustomText
              label={"KYC"}
              color={Color.black10}
              fontSize={22}
              fontFamily={FontFamily.barlowSemiBold}
            />
          }
          rightIcon={<View />}
        />
        <Steps activeStep={activeStep} setActiveStep={setActiveStep} />
        <View
          style={{
            paddingTop: 30,
            justifyContent: "space-between",
            height: screenHeight - 200,
          }}
        >
          <View>
            <CustomText
              label={
                activeStep === 1
                  ? "CV"
                  : activeStep === 2
                  ? "Qualifications"
                  : activeStep === 3
                  ? "Bank Account Details"
                  : "Upload Profile Picture"
              }
              fontSize={18}
              fontFamily={FontFamily.barlowSemiBold}
            />
            <CustomText
              label={
                activeStep === 1
                  ? "Please upload your Document 1 below for completing your first step of KYC."
                  : activeStep === 2
                  ? "Please upload your Document 1 below for completing your first step of KYC."
                  : activeStep === 3
                  ? "Enter your bank info and upload bank document"
                  : "Upload a picture of yours with good lightning"
              }
              fontSize={13}
              width={"90%"}
              marginTop={6}
              marginBottom={30}
            />
            {activeStep === 1 ? (
              <UploadDoc />
            ) : activeStep === 2 ? (
              <UploadDoc />
            ) : activeStep === 3 ? (
              <View
                style={{
                  width: "100%",
                  height: 380,
                  padding: 15,
                  backgroundColor: Color.white,
                  borderRadius: 20,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.39,
                  shadowRadius: 2.3,
                  elevation: 5,
                }}
              >
                <CustomInput
                  height={35}
                  borderRadius={1}
                  width={"75%"}
                  HeaderLabel={"Account number"}
                  HeaderLabelSize={11}
                  HeaderLabelColor={Color.grey50}
                />
                <CustomInput
                  height={35}
                  borderRadius={1}
                  width={"75%"}
                  HeaderLabel={"Confirm Account Number"}
                  HeaderLabelSize={11}
                  HeaderLabelColor={Color.grey50}
                />
                <CustomInput
                  height={35}
                  borderRadius={1}
                  width={"75%"}
                  HeaderLabel={"Bank Name"}
                  HeaderLabelSize={11}
                  HeaderLabelColor={Color.grey50}
                />
                <CustomInput
                  height={35}
                  borderRadius={1}
                  width={"75%"}
                  HeaderLabel={"IBAN#"}
                  HeaderLabelSize={11}
                  HeaderLabelColor={Color.grey50}
                />
                <CustomInput
                  height={35}
                  borderRadius={1}
                  width={"75%"}
                  HeaderLabel={"Account type"}
                  HeaderLabelSize={11}
                  HeaderLabelColor={Color.grey50}
                />
              </View>
            ) : (
              <View
                style={{
                  width: "100%",
                  height: 380,
                  paddingTop: 40,
                  backgroundColor: Color.white,
                  borderRadius: 20,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.39,
                  shadowRadius: 2.3,
                  elevation: 5,
                }}
              >
                <View
                  style={{
                    height: 175,
                    width: 175,
                    backgroundColor: Color.yellowPrim,
                    alignItems: "center",
                    borderRadius: 100,
                    justifyContent: "center",
                    marginBottom: 30,
                    alignSelf: "center",
                  }}
                >
                  <Image source={images.userModel} style={styles.person} />
                  <TouchableOpacity
                    style={styles.upload}
                    activeOpacity={0.8}
                    onPress={() => setImageModal(true)}
                  >
                    <Image source={images.Upload} style={styles.uploadIcon} />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 50,
                    paddingHorizontal: 20,
                  }}
                >
                  <CustomButton
                    width={"47%"}
                    height={35}
                    borderRadius={20}
                    title={"Upload +"}
                  />
                  <CustomButton
                    width={"47%"}
                    height={35}
                    borderRadius={20}
                    title={"Open Camera"}
                  />
                </View>
              </View>
            )}
          </View>
          <CustomButton
            title={activeStep === 4 ? "Complete" : "Next"}
            color={Color.white}
            onPress={() => {
              if (activeStep === 4) {
                navigation.navigate("Drawer");
              } else {
                setActiveStep(activeStep + 1);
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MentorProfile;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  person: {
    height: 122,
    width: 106,
    resizeMode: "contain",
  },
  upload: {
    height: 49,
    width: 49,
    backgroundColor: Color?.primary,
    position: "absolute",
    right: -10,
    borderRadius: 30,
    bottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  uploadIcon: {
    height: 18,
    width: 15,
    resizeMode: "contain",
  },
});
