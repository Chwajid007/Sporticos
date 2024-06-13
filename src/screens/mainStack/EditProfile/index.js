import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Color, FontFamily, images } from "../../../theme";
import CustomHeader from "../../../components/CustomHeader";
import CustomInput from "../../../components/CustomInput";
import CustomDropdownPicker from "../../../components/CustomDropdown";
import CustomDate from "../../../components/CustomDate";
import CustomText from "../../../components/CustomText";
import DatePicker from "react-native-date-picker";
import moment from "moment";
import CustomButton from "../../../components/CustomButton";

const EditProfile = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [date, setDate] = useState(null);

  const [show, setShow] = useState(false);
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
        <CustomHeader
          marginBottom={30}
          onPress={() => navigation.goBack()}
          headerTitle={
            <CustomText
              label={"Profile"}
              color={Color.black10}
              fontSize={22}
              fontFamily={FontFamily.barlowSemiBold}
            />
          }
          rightIcon={<View />}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              height: 130,
              width: 130,
              alignSelf: "center",
              borderRadius: 100,
              justifyContent: "flex-end",
              marginBottom: 30,
              borderWidth: 3,
              borderColor: Color.white,
            }}
          >
            <Image source={images.editMen} style={styles.person} />
            <TouchableOpacity
              style={styles.upload}
              activeOpacity={0.8}
              onPress={() => setImageModal(true)}
            >
              <Image source={images.Upload} style={styles.uploadIcon} />
            </TouchableOpacity>
          </View>
          <CustomInput placeholder={"John"} HeaderLabel={"First Name"} />
          <CustomInput placeholder={"Welles"} HeaderLabel={"Last Name"} />
          <CustomInput placeholder={"Get fit with time"} HeaderLabel={"Bio"} />
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
            placeholder={"Loose weight"}
            HeaderLabel={"Career Goals"}
            height={120}
            multiline={true}
            continerStyle={{
              paddingTop: 10,
            }}
          />
          <CustomButton title={"Save"} color={Color.white} marginBottom={50} />
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

export default EditProfile;

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
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  upload: {
    height: 35,
    width: 35,
    backgroundColor: Color?.primary,
    position: "absolute",
    right: 0,
    borderRadius: 30,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: Color.white,
  },
  uploadIcon: {
    height: 15,
    width: 13,
    resizeMode: "contain",
  },
});
