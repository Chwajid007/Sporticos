import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import { Color, FontFamily } from "../../../theme";
import Header from "./molecules/Header";
import CustomText from "../../../components/CustomText";
import CategoryButton from "./molecules/CategoryButton";
import Row from "./molecules/Row";
import SessionsPoster from "../../../components/SessionsPoster";
import MentorCard from "./molecules/MentorCard";
import CustomInput from "../../../components/CustomInput";
import CustomDropdownPicker from "../../../components/CustomDropdown";
import { useSelector } from "react-redux";
import MentorComp from "./molecules/MentorComp";

const Home = ({ navigation }) => {
  const { userType } = useSelector((state) => state.user);
  const isMentor = userType === "mentor";
  const [searchVisible, setSearchVisible] = useState(true);
  const [selectedCat, setSelectedCat] = useState(0);
  const catgeroyData = [
    {
      id: 8,
      label: "All",
    },
    {
      id: 0,
      label: "Movement",
    },
    {
      id: 1,
      label: "Recovery",
    },
    {
      id: 2,
      label: "Mindset",
    },
    {
      id: 3,
      label: "Nutrition",
    },
    {
      id: 4,
      label: "Movement",
    },
  ];
  const MentorData = [
    {
      id: 0,
      label: "Carl James",
    },
    {
      id: 1,
      label: "Emily Blunt",
    },
    {
      id: 2,
      label: "Theo Von",
    },
    {
      id: 3,
      label: "Tanya Sheikh",
    },
  ];

  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <Header
          search={searchVisible ? true : false}
          SearchIconPress={() => {
            if (isMentor) {
              return;
            }
            setSearchVisible(false);
          }}
          notificationPress={() => navigation.navigate("Notification")}
        />
        {isMentor ? (
          <MentorComp />
        ) : (
          <>
            {!searchVisible ? (
              <>
                <CustomInput
                  backgroundColor={Color.white}
                  borderWidth={-1}
                  borderRadius={5}
                  placeholder={"Search"}
                  continerStyle={{
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 2.84,

                    elevation: 2,
                  }}
                />
                <CustomDropdownPicker
                  insideContentStyle={{
                    backgroundColor: Color?.white,
                    borderWidth: -1,
                    borderRadius: 5,
                    marginTop: -10,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 2.84,

                    elevation: 2,
                  }}
                  label={"Select Session Type"}
                />
              </>
            ) : null}
            {searchVisible && (
              <Row heading={"Categories"} heading2={"See all"} />
            )}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
                marginTop: searchVisible ? 0 : 10,
              }}
            >
              <FlatList
                data={catgeroyData}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item, index }) => {
                  return (
                    <CategoryButton
                      onPress={() => setSelectedCat(index)}
                      label={item.label}
                      backgroundColor={
                        selectedCat === index ? Color?.primary : Color?.white
                      }
                      color={
                        selectedCat === index
                          ? Color?.yellowPrim
                          : Color?.black20
                      }
                    />
                  );
                }}
              />
            </View>
            <Row
              heading={!searchVisible ? "Results" : "Upcoming Sessions"}
              heading2={"See all"}
            />
            <View
              style={{
                paddingLeft: searchVisible ? 0 : 6,
              }}
            >
              <FlatList
                data={[0, 1, 2]}
                showsHorizontalScrollIndicator={false}
                horizontal={searchVisible ? true : false}
                renderItem={({ item }) => {
                  return <SessionsPoster width={!searchVisible && 340} />;
                }}
              />
            </View>
            {searchVisible && (
              <>
                <Row
                  heading={"Featured Mentors"}
                  heading2={"See all"}
                  marginTop={10}
                />
                <FlatList
                  data={MentorData}
                  numColumns={2}
                  keyExtractor={(item) => item.id}
                  key={2}
                  renderItem={({ item }) => {
                    return (
                      <View style={styles.itemContainer}>
                        <MentorCard Name={item.label} HeartIcon={"hearto"} />
                      </View>
                    );
                  }}
                />
              </>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;

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
  itemContainer: {
    flex: 1,
    margin: 15,
  },
});
