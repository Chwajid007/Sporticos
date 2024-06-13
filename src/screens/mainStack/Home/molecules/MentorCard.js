import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color, FontFamily, images } from "../../../../theme";
import Icons from "../../../../components/Icons";
import CustomText from "../../../../components/CustomText";

const MentorCard = ({ Name, HeartIcon }) => {
  return (
    <View style={styles.parent}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Icons
          name={HeartIcon}
          family={"AntDesign"}
          size={20}
          color={Color.red}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icons
            name={"star"}
            family={"FontAwesome"}
            size={20}
            color={Color.yellowPrim}
          />
          <CustomText
            label={"3.7"}
            fontSize={13}
            fontFamily={FontFamily.barlowSemiBold}
            marginLeft={4}
          />
        </View>
      </View>
      <Image
        source={images.Men}
        style={{
          height: 70,
          width: 70,
          resizeMode: "contain",
          alignSelf: "center",
          borderRadius: 40,
        }}
      />
      <CustomText
        label={Name}
        fontSize={16}
        fontFamily={FontFamily.barlowSemiBold}
        alignSelf={"center"}
        marginTop={10}
      />
      <CustomText
        label={"Mentor"}
        fontSize={13}
        fontFamily={FontFamily.barlowMedium}
        alignSelf={"center"}
        color={Color.black20}
        marginTop={5}
      />
    </View>
  );
};

export default MentorCard;

const styles = StyleSheet.create({
  parent: {
    width: 145,
    height: 200,
    borderRadius: 6,
    backgroundColor: Color?.white,
    shadowColor: "#000",
    padding: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.84,

    elevation: 4,
  },
});
