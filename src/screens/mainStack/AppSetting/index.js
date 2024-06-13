import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import { Color, FontFamily, icons } from "../../../theme";

const AppSetting = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.insideContainer}>
        <CustomHeader
          onPress={() => navigation.goBack()}
          headerTitle={
            <CustomText
              label={"App Setting"}
              color={Color.black10}
              fontSize={22}
              fontFamily={FontFamily.barlowSemiBold}
            />
          }
          rightIcon={<View />}
        />
        <View style={styles.row}>
          <Image source={icons.lock} style={styles.icon} />
          <CustomText
            label={"Change Password"}
            fontSize={14}
            fontFamily={FontFamily.barlowMedium}
            marginLeft={5}
            onPress={() => navigation.navigate("ChangePassword")}
          />
        </View>
        <View style={styles.justifySpaceBetween}>
          <View style={styles.languageContainer}>
            <Image source={icons.language} style={styles.icon} />
            <CustomText
              label={"Language"}
              fontSize={14}
              fontFamily={FontFamily.barlowMedium}
              marginLeft={5}
            />
          </View>
          <CustomText
            label={"English"}
            fontSize={10}
            fontFamily={FontFamily.barlowMedium}
          />
        </View>
      </View>
      <View style={styles.flexEndContainer}>
        <CustomText label={"Version 1.0"} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  insideContainer: {
    paddingHorizontal: 25,
  },
  icon: {
    width: 14,
    height: 14,
    resizeMode: "contain",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    borderBottomWidth: 1,
    borderColor: Color.borderColorWhite,
    paddingBottom: 15,
  },
  justifySpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: Color.borderColorWhite,
    paddingBottom: 15,
  },
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  flexEndContainer: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
  },
});

export default AppSetting;
