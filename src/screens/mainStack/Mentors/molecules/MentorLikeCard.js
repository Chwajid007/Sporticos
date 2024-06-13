import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Color, FontFamily, images } from "../../../../theme";
import CustomText from "../../../../components/CustomText";
import Icons from "../../../../components/Icons";

const MentorLikeCard = () => {
  return (
    <View style={styles.card}>
      <Image source={images.men2} style={styles.image} />
      <View style={styles.info}>
        <CustomText
          label={"Cabelas Iroh"}
          fontFamily={FontFamily.barlowSemiBold}
          fontSize={18}
        />
        <CustomText label={"Mentor"} fontSize={14} marginTop={5} />

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <Image
                key={item}
                source={images.star}
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: "contain",
                  marginRight: 4,
                }}
              />
            );
          })}
        </View>
      </View>
      <Icons
        family={"AntDesign"}
        name={"hearto"}
        color={Color.grey40}
        size={18}
      />
    </View>
  );
};

export default MentorLikeCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",

    padding: 10,

    borderRadius: 10,
    backgroundColor: Color.white,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginBottom: 15,
  },
  image: {
    width: 82,
    height: 82,
    borderRadius: 8,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
});
