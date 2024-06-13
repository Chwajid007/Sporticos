import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { Color, FontFamily, images } from "../../../theme";
import Icons from "../../../components/Icons";
import CustomText from "../../../components/CustomText";
import IconsButton from "./moleucles/IconsButton";
import TextView from "./moleucles/TextView";
import CustomButton from "../../../components/CustomButton";

const SessionDetails = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 280,
          borderRadius: 40,
        }}
      >
        <ImageBackground
          source={images.banner}
          style={{
            width: "100%",
            height: "100%",
            paddingTop: 50,
          }}
          resizeMode="cover"
        >
          <View style={{ paddingHorizontal: 10 }}>
            <Icons
              name={"left"}
              family={"AntDesign"}
              size={22}
              color={Color.white}
              onPress={() => navigation.goBack()}
            />
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                paddingLeft: 10,
              }}
            >
              <Image
                source={images.Men}
                style={{ height: 30, width: 30, resizeMode: "contain" }}
              />
              <View style={{ marginLeft: 10 }}>
                <CustomText
                  label={"Carl James"}
                  fontSize={14}
                  fontFamily={FontFamily.barlowSemiBold}
                  color={Color.white}
                />
                <CustomText
                  label={"Mentor"}
                  fontSize={10}
                  color={Color.white}
                  marginTop={2}
                />
              </View>
            </View>
            <CustomText
              label={"Sports Ted Talk"}
              fontSize={30}
              fontFamily={FontFamily.barlowBold}
              color={Color.white}
              marginLeft={14}
              marginTop={10}
            />
            <CustomText
              label={"Large Group | Mindset"}
              fontSize={12}
              color={Color.white}
              marginLeft={14}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                paddingHorizontal: 15,
                justifyContent: "space-between",
              }}
            >
              <IconsButton />
              <IconsButton
                width={187}
                image={images.Calender2}
                label={"23rd December 2023"}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <TextView headerText={"Type"} buttonLabel={"Group Session"} />
          <TextView headerText={"Price"} buttonLabel={"FREE"} />
          <TextView headerText={"Category"} buttonLabel={"Movements"} />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: "100%",
          paddingHorizontal: 20,
        }}
      >
        <CustomText
          label={"Session Duration"}
          fontSize={16}
          fontFamily={FontFamily.barlowSemiBold}
        />
        <CustomText
          label={"60 Minutes"}
          fontSize={12}
          marginTop={6}
          marginBottom={20}
        />
        <CustomText
          label={"Session Description:"}
          fontSize={16}
          fontFamily={FontFamily.barlowSemiBold}
        />
        <CustomText
          label={
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered  alteration in some form, by injected humour, There are many variations of passages of Lorem Ipsum available, but the majority have suffered  alteration in some form, by injected humour, There are many variations of passages of Lorem Ipsum available, but the majority have suffered  alteration in some form, by injected humour, There are many variations of passages of Lorem Ipsum available, but the majority have suffered  alteration in some form, by injected humour, by injected humour, There are many variations of passages of Lorem Ipsum available, but the majority have suffered  alteration in some form, by injected humour,by injected humour, There are many variations of passages of Lorem Ipsum available, but the majority have suffered  alteration in some form, by injected humour,"
          }
          fontSize={14}
          marginTop={6}
          marginBottom={20}
        />
        <CustomButton
          title={"Book Session"}
          onPress={() => navigation.navigate("SessionBooking")}
        />
      </ScrollView>
    </View>
  );
};

export default SessionDetails;

const styles = StyleSheet.create({});
