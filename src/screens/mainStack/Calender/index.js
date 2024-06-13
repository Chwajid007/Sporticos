import { StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import { Color, FontFamily } from "../../../theme";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import SessionsPoster from "../../../components/SessionsPoster";

const Calender = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomHeader
          onPress={() => navigation.goBack()}
          headerTitle={
            <CustomText
              label={"Calendar"}
              color={Color.black10}
              fontSize={22}
              fontFamily={FontFamily.barlowSemiBold}
            />
          }
          rightIcon={<View />}
        />

        <View style={styles.calenderContainer}>
          <CalendarPicker
            width={350}
            startFromMonday={false} // Start from Sunday to match the image
            todayTextStyle="#c8c8c8"
            minDate={new Date(moment().add(1, "days").format("YYYY-MM-DD"))}
            todayBackgroundColor={Color.primary}
            selectedDayColor={Color.primary}
            selectedDayTextColor={Color.yellowPrim}
            textStyle={{ fontFamily: FontFamily.barlowMedium, fontSize: 15 }}
            dayLabelsWrapper={{ borderTopWidth: 0, borderBottomWidth: 0 }}

            // previousComponent={
            //   <Image
            //     style={styles.nextPrevArrow}
            //     source={require('./path-to-your-prev-icon.png')}
            //   />
            // }
            // nextComponent={
            //   <Image
            //     style={styles.nextPrevArrow}
            //     source={require('./path-to-your-next-icon.png')}
            //   />
            // }
          />
        </View>
        <CustomText
          label={"Bookings"}
          fontSize={18}
          fontFamily={FontFamily.barlowSemiBold}
          color={Color.black}
          marginBottom={20}
          marginTop={20}
        />
        <SessionsPoster width={350} height={120} />
        <SessionsPoster width={350} height={120} />
      </View>
    </SafeAreaView>
  );
};

export default Calender;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Color.white,
    marginTop: 40,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  calenderContainer: {
    width: "100%",
    backgroundColor: Color.white,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 5,

    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  nextPrevArrow: {
    width: 20,
    height: 20,
  },
});
