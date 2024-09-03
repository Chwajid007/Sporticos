import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Color, FontFamily, images } from "../../../../theme";
import CustomText from "../../../../components/CustomText";
import Icons from "../../../../components/Icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { getTimeBasedGreeting } from "../../../../assets/utils/ResponsiveFn";

const Header = ({ search, SearchIconPress, notificationPress }) => {
  const user = useSelector((state) => state.user.user);
  const navigation = useNavigation();
  const greeting = getTimeBasedGreeting();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={images.girl}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
        <View style={{ marginLeft: 15, marginTop: 5 }}>
          <CustomText
            label={`Hello, ${greeting}`}
            fontSize={12}
            color={Color?.black30}
            onPress={() => navigation.openDrawer()}
          />
          <CustomText
            label={`${user?.first_name}!!`}
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
