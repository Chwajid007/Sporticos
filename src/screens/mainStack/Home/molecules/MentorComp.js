import { View, Text } from "react-native";
import React from "react";
import KYCPending from "./KYCPending";
import Sessions from "./Session";

const MentorComp = () => {
  return (
    <View>
      <KYCPending />
      <Sessions />
      {/* <Reviews /> */}
    </View>
  );
};

export default MentorComp;
