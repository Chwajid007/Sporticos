import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import { Color, FontFamily } from "../../../theme";
import PaymentCard from "./molecules/PaymentCard";
import RowText from "./molecules/RowText";
import CustomButton from "../../../components/CustomButton";
import PaymentModel from "./molecules/PaymentModel";

const SubscriptionPlan = ({ navigation }) => {
  const [paymentModel, setPaymentModel] = useState(false);
  const textRow = [
    {
      id: 0,
      label: "2 sessions for tactical analysis expert ",
    },
    {
      id: 1,
      label: "1 hour career coaching expert ",
    },
    {
      id: 2,
      label: "Personal social media management (handled external to the app)",
    },
  ];
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomHeader onPress={() => navigation.goBack()} />
        <CustomText
          label={"Subscription Plan"}
          alignSelf={"center"}
          fontSize={28}
          fontFamily={FontFamily.barlowBold}
          marginTop={30}
          marginBottom={10}
        />
        <CustomText
          label={"Select a plan suitable for you"}
          alignSelf={"center"}
          textAlign={"center"}
          fontSize={15}
          color={Color.black20}
          marginBottom={20}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 40,
          }}
        >
          {[1, 2, 3].map((item) => {
            return <PaymentCard headerLabel={"Tactical Tier"} Price={"$400"} />;
          })}
        </View>
        <View style={{ paddingLeft: 40 }}>
          {textRow.map((item) => {
            return <RowText label={item?.label} key={item?.id} />;
          })}
        </View>

        <CustomButton
          marginTop={130}
          title={"Get this plan"}
          color={Color?.white}
          onPress={() => setPaymentModel(true)}
        />
        <CustomText
          label={"Skip this step"}
          textAlign={"center"}
          alignSelf={"center"}
          marginTop={25}
          fontSize={15}
          onPress={()=> navigation.navigate("Drawer")}
          color={Color?.black20}
          fontFamily={FontFamily.barlowBold}
          textDecorationLine={"underline"}
        />
      </View>
      <PaymentModel
        visible={paymentModel}
        onPress={() => setPaymentModel(false)}
      />
    </SafeAreaView>
  );
};

export default SubscriptionPlan;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
