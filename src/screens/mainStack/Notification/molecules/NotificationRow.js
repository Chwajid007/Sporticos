import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color, FontFamily, images } from "../../../../theme";
import CustomText from "../../../../components/CustomText";

const NotificationRow = () => {
  return (
    <View style={styles.parent}>
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Color.yellowPrim30,
        }}
      >
        <Image
          source={images.calender}
          style={{ height: 24, width: 24, resizeMode: "contain" }}
        />
      </View>
      <View
        style={{
          marginLeft: 20,
          borderBottomWidth: 1,
          width: "80%",
          paddingBottom: 15,
          marginBottom: 15,
          borderBottomColor: "#00000011",
        }}
      >
        <CustomText
          label={"Booked a seat at Training Session #1"}
          color={Color.black10}
          fontSize={14}
          fontFamily={FontFamily.barlowMedium}
        />
        <CustomText
          label={"Mentor: Helena Mill"}
          color={Color.darkGrey}
          fontSize={13}
          marginTop={5}
          marginBottom={5}
        />
        <CustomText
          label={"15 mins ago"}
          color={Color.darkGrey}
          fontSize={13}
        />
      </View>
    </View>
  );
};

export default NotificationRow;

const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
  },
});
