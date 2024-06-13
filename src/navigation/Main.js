import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import AuthStack from "./authStack";
import { useSelector } from "react-redux";

const Main = () => {
  const { userType } = useSelector((state) => state.user);
  console.log({ userType });
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};
export default Main;
