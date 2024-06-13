import { StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";
import { Color, FontFamily, images } from "../../../theme";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import MentorLikeCard from "../Mentors/molecules/MentorLikeCard";
import Row from "../Home/molecules/Row";
import SessionsPoster from "../../../components/SessionsPoster";
import Roundbutton from "./molecules/Roundbutton";

const MentorDetails = () => {
  const dataArray = [
    {
      id: 0,
      label: "10+",
      title: "experience",
      source: images.medal,
    },
    {
      id: 0,
      label: "5",
      title: "rating",
      source: images.star,
    },
    {
      id: 0,
      label: "1,872",
      title: "reviews",
      source: images.messages,
    },
  ];
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomHeader
          marginBottom={20}
          headerTitle={
            <CustomText
              label={"Mentors"}
              color={Color.black10}
              fontSize={22}
              fontFamily={FontFamily.barlowSemiBold}
            />
          }
          rightIcon={<View />}
        />

        <MentorLikeCard />
        <View style={styles.contentContainer}>
          {dataArray.map((item, index) => (
            <Roundbutton
              source={item.source}
              heading={item.label}
              Subheading={item.title}
            />
          ))}
        </View>
        <Row heading={"Previous Sessions"} heading2={"See all"} />
        <SessionsPoster width={"100%"} height={120} />
        <SessionsPoster width={"100%"} height={120} />

      </View>
    </SafeAreaView>
  );
};

export default MentorDetails;

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
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingTop: 10,
    paddingBottom: 20,
  },
});
