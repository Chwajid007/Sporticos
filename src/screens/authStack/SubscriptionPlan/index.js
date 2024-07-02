import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import { Color, FontFamily } from "../../../theme";
import PaymentCard from "./molecules/PaymentCard";
import RowText from "./molecules/RowText";
import CustomButton from "../../../components/CustomButton";
import PaymentModel from "./molecules/PaymentModel";

const SubscriptionPlan = ({ navigation }) => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [paymentModel, setPaymentModel] = useState(false);
  const textRow = [
    {
      id: 0,
      label: "2 sessions for tactical analysis expert ",
    },
    {
      id: 1,
      label: "Personal social media management (handled external to the app)",
    },
    {
      id: 2,
      label: "1 hour career coaching expert ",
    },
    {
      id: 3,
      label: "1 hour nutrition expert",
    },
    {
      id: 4,
      label: "1 hour mental performance",
    },
  ];

  const filteredRowData = textRow.filter((item) => {
    if (selectedPlan === 0) {
      return item?.id >= 0 && item?.id <= 1;
    } else if (selectedPlan === 1) {
      return item?.id >= 0 && item?.id <= 2;
    } else {
      return true;
    }
  });
  return (
    <SafeAreaView style={styles.parent}>
    <ScrollView showsVerticalScrollIndicator={false}>
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
          {["Tactical Tier", "Career Tier", "Mastery Tier"].map(
            (item, index) => {
              return (
                <PaymentCard
                  headerLabel={item}
                  Price={index === 1 ? "$750" : index === 2 ? "$1000" : "$400"}
                  selected={selectedPlan === index}
                  onPress={() => setSelectedPlan(index)}
                />
              );
            }
          )}
        </View>
        <View style={{ paddingLeft: 40 }}>
          {filteredRowData.map((item) => {
            return <RowText label={item?.label} key={item?.id} />;
          })}
        </View>
      </View>
      </ScrollView>
      <CustomButton
          marginTop={20}
          title={"Get this plan"}
          color={Color?.white}
          onPress={() => setPaymentModel(true)}
          width={"90%"}
          alignSelf={"center"}
        />
        <CustomText
          label={"Skip this step"}
          textAlign={"center"}
          alignSelf={"center"}
          marginTop={25}
          fontSize={15}
          onPress={() => navigation.navigate("Drawer")}
          color={Color?.black20}
          fontFamily={FontFamily.barlowBold}
          textDecorationLine={"underline"}
        />
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
