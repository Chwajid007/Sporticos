import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Color, images } from "../../../theme";
import CustomButton from "../../../components/CustomButton";
import CustomText from "../../../components/CustomText";
import { useDispatch } from "react-redux";
import { setUserType } from "../../../redux/reducer/authSlice";
import { useFocusEffect } from "@react-navigation/native";

const AuthSelction = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const onUserSelect = (type) => {
    dispatch(setUserType(type));
  };
  const [press, setPress] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setPress(false);
    }, [])
  );

  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <Image source={images.Logo} style={styles.HeaderImage} />
        <CustomButton
          backgroundColor={"transparent"}
          borderColor={Color.greyLight}
          title={press ? "Login as Mentor" : "Register as Mentor"}
          color={Color?.greyLight}
          onPress={() => {
            press
              ? navigation.navigate("Login")
              : navigation.navigate("SignUp");
            onUserSelect("mentor");
          }}
        />
        <CustomButton
          marginTop={30}
          title={press ? "Login as Athlete" : "Register as Athlete"}
          onPress={() => {
            press
              ? navigation.navigate("Login")
              : navigation.navigate("SignUp");
            onUserSelect("athlete");
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-end",
          flexDirection: "row",
        }}
      >
        <CustomText
          label={"Have an account? "}
          alignSelf={"center"}
          fontSize={16}
          color={Color?.greyLight}
          onPress={() => {
            navigation.navigate("AuthSelction");
            setPress(true);
          }}
        />
        <CustomText
          label={"Log in"}
          alignSelf={"center"}
          fontSize={16}
          color={Color?.black}
          onPress={() => {
            navigation.navigate("AuthSelction");
            setPress(true);
          }}
          fontWeight={"bold"}
        />
      </View>
    </SafeAreaView>
  );
};

export default AuthSelction;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 120,
  },
  HeaderImage: {
    height: 47,
    width: 265,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 130,
  },
});
