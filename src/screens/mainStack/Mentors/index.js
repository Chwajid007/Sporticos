import { StyleSheet, SafeAreaView, View, FlatList } from "react-native";
import React, { useState } from "react";
import { Color, FontFamily } from "../../../theme";
import CustomHeader from "../../../components/CustomHeader";
import CustomInput from "../../../components/CustomInput";
import CustomText from "../../../components/CustomText";
import CategoryButton from "../Home/molecules/CategoryButton";
import Row from "../Home/molecules/Row";
import MentorProfile from "./molecules/MentorProfile";
import MentorLikeCard from "./molecules/MentorLikeCard";
import Pagination from "../../../components/Pagination";

const Mentors = ({navigation}) => {
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
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomHeader
          onPress={()=> navigation.goBack()}
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
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
                    selectedCat === index ? Color?.yellowPrim : Color?.black20
                  }
                />
              );
            }}
          />
        </View>
        <Row heading={"Popular Mentors"} heading2={"See all"} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <FlatList
            data={[1, 2, 3, 4]}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={() => {
              return (
                <MentorProfile
                  onPress={() => navigation.navigate("MentorDetails")}
                />
              );
            }}
          />
        </View>
        <Row heading={" Mentors"} heading2={"See all"} />
        <View style={{ height: 230 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={[1, 2, 3, 4, 5]}
            renderItem={() => {
              return <MentorLikeCard />;
            }}
          />
        </View>
        <Pagination totalPages={4} />
      </View>
    </SafeAreaView>
  );
};

export default Mentors;

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
