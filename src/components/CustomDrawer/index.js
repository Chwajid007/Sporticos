import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useIsFocused } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Color, FontFamily, icons, images } from "../../theme";
import CustomText from "../CustomText";
import { useSelector } from "react-redux";

const CustomDrawer = (props) => {
  const isFocused = useIsFocused();
  const { userType } = useSelector((state) => state.user);
  const isMentor = userType === "mentor";

  const drawerData = [
    ...(!isMentor
      ? [{ name: "Subscription", icon: icons.dollar, screen: "SubscriptionScreen" }]
      : []),
    { name: "My Account", icon: icons.myAccount, screen: "EditProfile" },
    { name: "Support", icon: icons.support, screen: "Support" },
    { name: "Terms of Use", icon: icons.terms, screen: "TermCondtion" },
    { name: "Privacy Policy", icon: icons.privacy, screen: "PrivacyPolicy" },
    { name: "App Settings", icon: icons.setting, screen: "SettingsScreen" },
  ];

  const closeDrawer = () => {
    props.navigation.closeDrawer();
  };

  return (
    <>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity style={styles.crossContainer} onPress={closeDrawer}>
          <Image
            source={icons.cross}
            style={styles.iconsStyle}
            tintColor={isMentor ? Color.primary : Color.yellowPrim}
          />
        </TouchableOpacity>
        <View style={styles.header}>
          <Image source={images.slide1} style={styles.profileImage} />
          <View style={styles.profileDetails}>
            <CustomText
              label={"John Welles"}
              fontSize={20}
              marginTop={10}
              color={isMentor ? Color.primary : Color.white}
              fontFamily={FontFamily.barlowMedium}
            />
            <CustomText
              label={"Tactical Tie"}
              fontSize={14}
              marginTop={10}
              color={isMentor ? Color.primary : Color.yellowPrim}
              textAlign={"center"}
              fontFamily={FontFamily.barlowMedium}
            />
          </View>
        </View>
        {drawerData.map((item, index) => {
          const focused =
            props.state.index === props.state.routeNames.indexOf(item.screen);
          return (
            <DrawerItem
              key={index}
              focused={focused}
              style={{
                backgroundColor:
                  focused && !isMentor
                    ? Color.yellowPrim
                    : focused && isMentor
                    ? Color.primary
                    : "transparent",
              }}
              label={() => (
                <CustomText
                  label={item.name}
                  fontSize={15}
                  color={
                    focused && !isMentor
                      ? Color.black
                      : focused && isMentor
                      ? Color.yellowPrim
                      : Color.iconColor
                  }
                  fontFamily={FontFamily.barlowMedium}
                />
              )}
              icon={() => (
                <Image
                  source={item.icon}
                  style={[
                    styles.iconsStyle,
                    {
                      tintColor:
                        focused && !isMentor
                          ? Color.black
                          : focused && isMentor
                          ? Color.yellowPrim
                          : Color.iconColor,
                    },
                  ]}
                />
              )}
              onPress={() => {
                props.navigation.navigate(item.screen);
              }}
            />
          );
        })}
      </DrawerContentScrollView>
      <TouchableOpacity
        style={styles.signOutButton}
        onPress={() =>
          props.navigation.reset({
            index: 0,
            routes: [{ name: "AuthSelction" }],
          })
        }
      >
        <MaterialIcons
          name="logout"
          size={24}
          color={isMentor ? Color.primary : Color.yellowPrim}
        />
        <CustomText
          color={isMentor ? Color.primary : Color.yellowPrim}
          fontSize={15}
          fontFamily={FontFamily.barlowMedium}
          label={"Sign Out"}
          marginLeft={10}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    padding: 16,
  },
  profileImage: {
    width: 104,
    height: 104,
    borderRadius: 100,
    marginRight: 16,
  },
  profileDetails: {
    flexDirection: "column",
  },
  name: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
  },
  tier: {
    fontSize: 14,
    color: "#b0b0b0",
  },
  subscriptionButton: {
    backgroundColor: "#bada55",
    padding: 10,
    margin: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  subscriptionText: {
    color: "#1c1c1c",
    fontWeight: "bold",
  },
  signOutButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 20,
  },
  signOutText: {
    color: "white",
    marginLeft: 8,
  },
  iconsStyle: {
    height: 15,
    width: 15,
    resizeMode: "contain",
  },
  crossContainer: {
    height: 20,
    width: 20,
    paddingLeft: 20,
  },
});

export default CustomDrawer;
