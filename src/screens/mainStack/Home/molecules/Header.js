import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color, FontFamily, images } from "../../../../theme";
import CustomText from "../../../../components/CustomText";
import Icons from "../../../../components/Icons";

const Header = ({ search, SearchIconPress, notificationPress }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={images.girl}
          style={{
            height: 30,
            width: 30,
            borderRadius: 15,
            resizeMode: "contain",
          }}
        />
        <View style={{ marginLeft: 15 }}>
          <CustomText
            label={"Hello, Good Morning"}
            fontSize={12}
            color={Color?.black30}
          />
          <CustomText
            label={"John !"}
            fontSize={15}
            color={Color?.black30}
            fontFamily={FontFamily.barlowMedium}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {search && (
          <Icons
            family={"FontAwesome5"}
            name={"search"}
            size={17}
            onPress={SearchIconPress}
          />
        )}
        <Icons
          family={"MaterialCommunityIcons"}
          name={"bell-outline"}
          size={20}
          style={{ marginLeft: 20 }}
          onPress={notificationPress}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
