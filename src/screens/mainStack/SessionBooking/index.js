import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import React from "react";
import { Color, FontFamily } from "../../../theme";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import SessionsPoster from "../../../components/SessionsPoster";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import TimeSlotSelector from "./molecules/TimeSlotSelector";
import CustomButton from "../../../components/CustomButton";

const SessionBooking = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomHeader
          onPress={() => navigation.goBack()}
          marginBottom={20}
          headerTitle={
            <CustomText
              label={"Book a Session"}
              color={Color.black10}
              fontSize={22}
              fontFamily={FontFamily.barlowSemiBold}
            />
          }
          rightIcon={<View />}
        />
        <SessionsPoster width={"100%"} height={110} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.calenderContainer}>
            <CalendarPicker
              width={350}
              startFromMonday={false}
              todayTextStyle="#c8c8c8"
              minDate={new Date(moment().add(1, "days").format("YYYY-MM-DD"))}
              todayBackgroundColor={Color.primary}
              selectedDayColor={Color.primary}
              selectedDayTextColor={Color.yellowPrim}
              textStyle={{ fontFamily: FontFamily.barlowMedium, fontSize: 15 }}
              dayLabelsWrapper={{ borderTopWidth: 0, borderBottomWidth: 0 }}
            />
          </View>

          <CustomText
            label={"Available Time Slots"}
            color={Color.black40}
            fontSize={16}
            fontFamily={FontFamily.barlowSemiBold}
            marginBottom={20}
          />
          <TimeSlotSelector />
          <CustomButton
            title={"Checkout"}
            marginTop={20}
            onPress={() => navigation.navigate("CardScreen")}
          />
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SessionBooking;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Color.white,
    marginTop: 40,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 80,
  },
  calenderContainer: {
    width: "100%",
    backgroundColor: Color.white,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
