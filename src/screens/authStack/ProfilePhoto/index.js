import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Color, FontFamily, images } from "../../../theme";
import CustomText from "../../../components/CustomText";
import CustomHeader from "../../../components/CustomHeader";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import UploadPhoto from "../../../components/UploadPhoto";
import { useSelector } from "react-redux";

const ProfilePhoto = ({ navigation }) => {
  const [imageModal, setImageModal] = useState(false);
  const { userType } = useSelector((state) => state.user);
  const isMentor = userType === "mentor";

  console.log("isMentor", isMentor);
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomHeader onPress={() => navigation.goBack()} />
        <CustomText
          label={"Add a profile picture"}
          alignSelf={"center"}
          fontSize={28}
          fontFamily={FontFamily.barlowBold}
          marginTop={25}
          marginBottom={10}
        />
        <CustomText
          label={"Upload a Picture of yourself to complete your profile"}
          alignSelf={"center"}
          textAlign={"center"}
          fontSize={15}
          color={Color.black20}
          marginBottom={20}
        />
        <View
          style={{
            height: 175,
            width: 175,
            backgroundColor: Color.yellowPrim,
            alignSelf: "center",
            borderRadius: 100,
            justifyContent: "flex-end",
            marginBottom: 30,
          }}
        >
          <Image source={images.Shape} style={styles.person} />
          <TouchableOpacity
            style={styles.upload}
            activeOpacity={0.8}
            onPress={() => setImageModal(true)}
          >
            <Image source={images.Upload} style={styles.uploadIcon} />
          </TouchableOpacity>
        </View>
        <CustomInput placeholder={"Write a short bio"} HeaderLabel={"Bio"} />
        <CustomInput
          placeholder={"Write a short bio"}
          HeaderLabel={"Career Goals"}
          height={90}
          multiline={true}
        />
        <CustomButton
          marginTop={20}
          title={"Done"}
          color={Color?.white}
          onPress={() => {
            if (isMentor) {
              navigation.navigate("MentorProfile");
            } else {
              navigation.navigate("SubscriptionPlan");
            }
          }}
        />
        <CustomText
          label={"Skip this step"}
          textAlign={"center"}
          alignSelf={"center"}
          marginTop={25}
          fontSize={15}
          color={Color?.black20}
          fontFamily={FontFamily.barlowBold}
          textDecorationLine={"underline"}
        />
      </View>
      <UploadPhoto visible={imageModal} setImageModal={setImageModal} />
    </SafeAreaView>
  );
};

export default ProfilePhoto;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  person: {
    height: 122,
    width: 106,
    resizeMode: "contain",
    alignSelf: "center",
  },
  upload: {
    height: 49,
    width: 49,
    backgroundColor: Color?.primary,
    position: "absolute",
    right: 0,
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
