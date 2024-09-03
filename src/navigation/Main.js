import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import AuthStack from "./authStack";
import { useSelector } from "react-redux";
import { navigationRef } from "../../navigation";
import Loader from "../components/BrainBox/molecules/Loader";
import BottomTab from "./bottomTab";
import HomeStack from "./homeStack";

const Main = () => {
  const { userType } = useSelector((state) => state.user);
  const { loader } = useSelector((state) => state.app);
  const token = useSelector((state)=> state.user.token)

  return (
    <>
      <NavigationContainer ref={navigationRef}>
      {token == '' ? <AuthStack /> : <HomeStack/>}
      </NavigationContainer>
      {loader && <Loader isLoading={loader} />}
    </>
  );
};
export default Main;
