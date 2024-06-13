import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import React from "react";
import CustomHeader from "../../../components/CustomHeader";
import { Color, FontFamily } from "../../../theme";
import CustomText from "../../../components/CustomText";

const TermCondtion = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomHeader
          marginBottom={30}
          onPress={() => navigation.goBack()}
          headerTitle={
            <CustomText
              label={"Terms of Use"}
              color={Color.black10}
              fontSize={22}
              fontFamily={FontFamily.barlowSemiBold}
            />
          }
          rightIcon={<View />}
        />
        <ScrollView style={{marginBottom:50}} showsVerticalScrollIndicator={false}>
          <CustomText
            label={"Terms of Use for Sporticos App"}
            fontSize={16}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            fontSize={14}
            lineHeight={19}
            color={Color.black20}
            label={`These Terms of Use ("Terms") govern your access to and use of the Sporticos mobile application ("App"). By accessing or using the Sporticos App, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Sporticos App.`}
          />
          <CustomText
            label={"1. Use of the Sporticos App:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={"1.1 License:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={`\u2022  Subject to these Terms, Sporticos grants you a limited, non-exclusive, non-transferable, and revocable license to use the Sporticos App for your personal, non-commercial use.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={"1.2 Restrictions:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={`\u2022  Use the Sporticos App for any illegal or unauthorized purpose.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={`\u2022  Modify, adapt, or hack the Sporticos App or modify another website so as to falsely imply that it is associated with Sporticos.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={`\u2022 Attempt to gain unauthorized access to Sporticos' systems or networks.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={`\u2022 Use the Sporticos App in any manner that could interfere with, disrupt, negatively affect, or inhibit other users from fully enjoying the Sporticos App.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={"2. User Accounts:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />

          <CustomText
            label={`2.1 Registration: In order to access certain features of the Sporticos App, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={`2.2 Account Security: You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify Sporticos immediately of any unauthorized access to or use of your account.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={"3. Mentor Sessions:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={
              "3.1 Booking: The Sporticos App allows users to book sessions with mentors for one-on-one or group sessions. By booking a session, you agree to abide by the mentor's terms and conditions, including any cancellation policies."
            }
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={
              "  3.2 Payment: Payment for mentor sessions may be processed through the Sporticos App. You agree to pay all fees associated with your bookings in a timely manner."
            }
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={"4. Intellectual Property:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={
              "4.1 Ownership: The Sporticos App, including all content, features, and functionality, is owned by Sporticos or its licensors and is protected by copyright, trademark, and other intellectual property laws."
            }
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={
              "4.2 License to User Content: By submitting content to the Sporticos App, including but not limited to profile information and session reviews, you grant Sporticos a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media."
            }
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={"5. Disclaimer of Warranties:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={`THE SPORTICOS APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, SPORTICOS DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.`}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
            textStyle={{textTransform:"lowercase"}}
          />
          <CustomText
            label={"6. Limitation of Liability:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={`SPORTICOS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO OR USE OF THE SPORTICOS APP.`}
            fontSize={16}
            lineHeight={19}
            textStyle={{textTransform:"lowercase"}}
            color={Color.black20}
          />
          <CustomText
            label={"7. Governing Law:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={
              "These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions."
            }
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={" 8. Changes to these Terms:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={
              "Sporticos reserves the right to modify or replace these Terms at any time. If a revision is material, Sporticos will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Sporticos' sole discretion."
            }
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={"9. Contact Us:"}
            fontSize={16}
            marginTop={10}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <CustomText
            label={
              "\u2022 If you have any questions about these Terms, please contact us at [contact email]."
            }
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={"\u2022 Effective Date: [Effective Date]"}
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
          />
          <CustomText
            label={
              "\u2022 These Terms of Use were last updated on [Last Updated Date]."
            }
            fontSize={16}
            lineHeight={19}
            color={Color.black20}
            marginBottom={50}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TermCondtion;

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
