import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Color, FontFamily } from "../../../theme";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import CustomInput from "../../../components/CustomInput";
import CustomDropdownPicker from "../../../components/CustomDropdown";
import CategoryButton from "../Home/molecules/CategoryButton";
import SessionsPoster from "../../../components/SessionsPoster";
import Pagination from "../../../components/Pagination";

const LiveSession = ({ navigation }) => {
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
          marginBottom={20}
          onPress={()=>navigation.goBack()}
          headerTitle={
            <CustomText
              label={"Live Sessions"}
              color={Color.black10}
              fontSize={22}
              fontFamily={FontFamily.barlowSemiBold}
            />
          }
          rightIcon={<View />}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 30 }}
        >
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
              marginTop: 10,
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
          <CustomText
            label={"Results"}
            fontSize={18}
            fontFamily={FontFamily.barlowSemiBold}
            marginTop={5}
            marginBottom={10}
          />
          <View
            style={{
              paddingLeft: 5,
            }}
          >
            <SessionsPoster
              width={"100%"}
              onPress={() => navigation.navigate("SessionDetails")}
            />
            <SessionsPoster
              width={"100%"}
              onPress={() => navigation.navigate("SessionDetails")}
            />
          </View>
          <Pagination totalPages={3} marginBottom={10} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LiveSession;

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
