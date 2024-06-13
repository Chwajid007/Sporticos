import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color, FontFamily } from "../../../theme";
import CustomHeader from "../../../components/CustomHeader";
import CustomInput from "../../../components/CustomInput";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";

const Support = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomHeader
          marginBottom={30}
          onPress={() => navigation.goBack()}
          headerTitle={
            <CustomText
              label={"Support"}
              color={Color.black10}
              fontSize={22}
              fontFamily={FontFamily.barlowSemiBold}
            />
          }
          rightIcon={<View />}
        />

        <CustomInput
          placeholder="Name "
          height={54}
          marginBottom={-8}
          borderRadius={4}
          continerStyle={{
            backgroundColor: Color.white,
            borderColor: Color.greyLight20,
          }}
        />
        <CustomInput
          placeholder="Email"
          borderRadius={4}
          height={54}
          marginBottom={-8}
          continerStyle={{
            backgroundColor: Color.white,
            borderColor: Color.greyLight20,
          }}
        />
        <CustomInput
          height={190}
          placeholder="Write your message"
          borderRadius={4}
          verticalAlign={"top"}
          marginBottom={-8}
          continerStyle={{
            backgroundColor: Color.white,
            borderColor: Color.greyLight20,
            paddingTop: 10,
          }}
          multiline={true}
        />
        <View
          style={{
            height: 330,

            justifyContent: "flex-end",
          }}
        >
          <CustomButton title={"Send Email"} color={Color.white} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Support;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
