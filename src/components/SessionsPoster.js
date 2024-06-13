import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Color, FontFamily, images } from "../theme";
import CustomText from "./CustomText";

const SessionsPoster = ({ height, marginBottom, width,onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          height: height || 175,
          width: width || 280,
          marginBottom: marginBottom || 10,
        },
      ]}
      onPress={onPress}
    >
      <ImageBackground
        source={images.Poster}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.topContainer}>
          <View style={styles.mentorInfo}>
            <Image source={images.girl} style={styles.mentorImage} />
            <View style={styles.mentorTextContainer}>
              <CustomText
                label={"Helena Mill"}
                fontSize={12}
                color={Color?.white}
              />
              <CustomText
                label={"Mentor"}
                fontSize={15}
                color={Color?.white}
                fontFamily={FontFamily.barlowMedium}
              />
            </View>
          </View>
          <View style={styles.dateContainer}>
            <CustomText label={"Dec 23 | 02:20 PM"} fontSize={10} />
          </View>
        </View>
        <View>
          <View style={styles.freeContainer}>
            <CustomText
              label={"Free"}
              fontSize={10}
              color={Color.yellowPrim}
              fontFamily={FontFamily.barlowMedium}
            />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.sessionInfo}>
              <View style={styles.sessionTextContainer}>
                <CustomText
                  label={"Training Session #1"}
                  fontSize={16}
                  fontFamily={FontFamily.barlowSemiBold}
                  color={Color?.white}
                />
                <CustomText
                  label={"Large Group | Movements"}
                  fontSize={12}
                  color={Color?.white}
                />
              </View>
            </View>
            <View style={styles.bookButton}>
              <CustomText
                label={"Book"}
                fontSize={10}
                fontFamily={FontFamily.barlowSemiBold}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default SessionsPoster;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 20,
  },
  imageBackground: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mentorInfo: {
    flexDirection: "row",
  },
  mentorImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  mentorTextContainer: {
    marginLeft: 10,
  },
  dateContainer: {
    width: 100,
    height: 27,
    backgroundColor: "#FFFFFFCC",
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  freeContainer: {
    width: 29,
    height: 17,
    backgroundColor: "#212A38CC",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sessionInfo: {
    flexDirection: "row",
  },
  sessionTextContainer: {
    marginLeft: 10,
  },
  bookButton: {
    width: 55,
    height: 30,
    backgroundColor: Color.yellowPrim,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
});
