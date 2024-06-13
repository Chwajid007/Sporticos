import { StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";
import { Color, FontFamily } from "../../../theme";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import NotificationRow from "./molecules/NotificationRow";

const Notification = ({navigation}) => {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomHeader
          onPress={() => navigation.goBack()}
          headerTitle={
            <CustomText
              label={"Notifications"}
              color={Color.black10}
              fontSize={22}
              fontFamily={FontFamily.barlowSemiBold}
            />
          }
          rightIcon={<View />}
        />
        <View style={{ paddingTop: 40 }}>
          <NotificationRow />
          <NotificationRow />
          <NotificationRow />
          <NotificationRow />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

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
});
