import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import React from "react";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import { Color, FontFamily } from "../../../theme";

const PrivacyPolicy = ({navigation}) => {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomHeader
          marginBottom={30}
          onPress={() => navigation.goBack()}
          headerTitle={
            <CustomText
              label={"Private Policy"}
              color={Color.black10}
              fontSize={22}
              fontFamily={FontFamily.barlowSemiBold}
            />
          }
          rightIcon={<View />}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 60 }}
        >
          <CustomText
            label={"Privacy Policy for Sporticos App"}
            fontSize={16}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
            label={`This Privacy Policy describes how Sporticos ("we", "us", or "our") collects, uses, and shares your information when you use our mobile application ("App") to find mentors and book sessions with them, both one-on-one and in group settings. By using the Sporticos App, you consent to the practices described in this`}
          />
          <CustomText
            label={"Privacy Policy."}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={"1. Information We Collect:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={"1.1 Information You Provide:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={`\u2022  Account Information: When you sign up for an account on the Sporticos App, we collect your name, email address, and password.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={`\u2022  Profile Information: You may choose to provide additional information to personalize your profile, such as your age, gender, location, and sports interests.
 `}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={`\u2022 Booking Information: When you book a session with a mentor, we collect information about the session, including the date, time, and type of session.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={"1.2 Information We Automatically Collect:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={`\u2022  Usage Information: We collect information about how you interact with the Sporticos App, including the pages you visit, the features you use, and the actions you take.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={`\u2022  Device Information: We collect information about the device you use to access the Sporticos App, including the device type, operating system, and unique device identifiers`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={"2. How We Use Your Information:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={
              "We use the information we collect for the following purposes:"
            }
            fontSize={16}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={`\u2022 To provide and personalize the Sporticos App and its features.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={`\u2022 To facilitate bookings and communication between users and mentors.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={`\u2022 To analyze and improve the Sporticos App and develop new features.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={`\u2022 To communicate with you about your account, bookings, and updates to the Sporticos App.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={"3. How We Share Your Information:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={" We may share your information with the following parties:"}
            fontSize={16}
            fontFamily={FontFamily.barlowSemiBold}
          />

          <CustomText
            label={` \u2022 Mentors: We share your booking information with mentors to facilitate your sessions.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={` \u2022 Service Providers: We may share your information with third-party service providers who help us operate the Sporticos App and provide related services.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={`\u2022 Legal Compliance: We may disclose your information to comply with applicable laws, regulations, or legal processes, or to respond to lawful requests from government authorities.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={"4. Your Choices:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={
              "\u2022 Account Information: You can update or delete your account information at any time by accessing your account settings in the Sporticos App."
            }
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={
              "\u2022 Communication Preferences: You can choose to receive certain types of communications from us, such as promotional emails, by updating your communication preferences in the Sporticos App. "
            }
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={"5. Security:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={
              "We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security."
            }
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={"6. Changes to this Privacy Policy:"}
            fontSize={16}
            color={Color.black20}
            fontFamily={FontFamily.barlowSemiBold}
            marginTop={10}
          />
          <CustomText
            label={
              "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated Privacy Policy in the Sporticos App or by other means."
            }
            fontSize={16}
          />
          <CustomText
            label={"7. Contact Us:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />

          <CustomText
            label={`If you have any questions or concerns about this Privacy Policy or our practices regarding your information, please contact us at [contact email].
Effective Date: [Effective Date]
This Privacy Policy was last updated on [Last Updated Date].`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;

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
