import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Color, FontFamily, images } from "../../../../theme";
import CustomText from "../../../../components/CustomText";

const MentorProfile = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.parent}>
      <View
        style={{
          height: "66%",
          borderTopRightRadius: 14,
          borderTopLeftRadius: 14,
        }}
      >
        <Image
          source={images.Girl2}
          style={{ height: "100%", width: "100%", resizeMode: "contain" }}
        />
      </View>
      <View style={{ alignItems: "center", paddingTop: 5 }}>
        <CustomText
          label={"Angela Yee"}
          fontSize={14}
          fontFamily={FontFamily.barlowSemiBold}
        />
        <CustomText label={"Mentor"} fontSize={14} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <Image
                source={images.star}
                style={{
                  height: 13,
                  width: 13,
                  resizeMode: "contain",
                  marginRight: 4,
                }}
              />
            );
          })}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MentorProfile;

const styles = StyleSheet.create({
  parent: {
    height: 202,
    width: 138,
    backgroundColor: Color.white,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginRight: 20,
  },
});
