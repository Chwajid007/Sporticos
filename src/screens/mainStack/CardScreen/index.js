import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import { Color, FontFamily, images } from "../../../theme";
import SessionsPoster from "../../../components/SessionsPoster";
import CardRow from "./molecules/CardRow";
import CustomInput from "../../../components/CustomInput";
import Icons from "../../../components/Icons";
import CustomButton from "../../../components/CustomButton";

const CardScreen = ({ navigation }) => {
  const [cardSelected, setCardSelected] = useState(0);
  const [selected, setSelected] = useState(false);

  const cardData = [
    {
      id: 0,
      image: images.masterCard,
    },
    {
      id: 1,
      image: images.Visa,
    },
    {
      id: 2,
      image: images.Mir,
    },
  ];
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
          <CustomText
            label={"Session Booking (Total)"}
            marginTop={10}
            fontSize={16}
            marginBottom={5}
          />
          <Text style={{ fontFamily: FontFamily.barlowBold, fontSize: 32 }}>
            23.00{" "}
            <Text
              style={{
                fontFamily: FontFamily.barlowBold,
                fontSize: 32,
                color: Color.yellowPrim,
              }}
            >
              $
            </Text>
          </Text>
          <CustomText
            label={"Select Card"}
            marginTop={20}
            fontSize={16}
            marginBottom={20}
            color={Color.black50}
            fontFamily={FontFamily.barlowSemiBold}
          />
          <FlatList
            data={cardData}
            contentContainerStyle={{
              justifyContent: "space-between",
              width: "70%",
              marginBottom: 20,
            }}
            renderItem={({ item, index }) => {
              return (
                <CardRow
                  key={item.id}
                  backgroundColor={
                    cardSelected === index ? Color.yellowPrim40 : "transparent"
                  }
                  borderColor={
                    cardSelected === index ? Color.yellowPrim40 : Color.black10
                  }
                  source={item.image}
                  onPress={() => setCardSelected(index)}
                />
              );
            }}
            horizontal
          />
          <CustomInput
            HeaderLabelBottom={15}
            HeaderLabel={"Card Number"}
            height={50}
            backgroundColor={"transparent"}
            placeholder={"1234  5678  9101  1121"}
            placeholderTextColor={Color.greyLight20}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CustomInput
              HeaderLabelBottom={15}
              HeaderLabel={"Exp Date"}
              height={50}
              width={150}
              backgroundColor={"transparent"}
              placeholder={"MM/YY"}
              placeholderTextColor={Color.greyLight20}
            />
            <CustomInput
              HeaderLabelBottom={15}
              HeaderLabel={"CVV"}
              height={50}
              width={150}
              backgroundColor={"transparent"}
              placeholder={"123"}
              placeholderTextColor={Color.greyLight20}
              secureTextEntry={true}
              iconColor={Color.grey40}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                height: 20,
                width: 20,
                borderWidth: 1,
                borderRadius: 2,
                borderColor: Color.greyLight20,
                alignItems: "center",
                justifyContent: "center",
              }}
              activeOpacity={0.8}
              onPress={() => setSelected(!selected)}
            >
              {selected ? (
                <Icons
                  family={"Ionicons"}
                  name="checkmark"
                  size={18}
                  color={Color.greyLight20}
                />
              ) : null}
            </TouchableOpacity>
            <CustomText
              label={"Save card details"}
              marginLeft={10}
              fontSize={18}
              color={Color.greyLight20}
            />
          </View>
          <CustomButton marginTop={30} title={"Pay $23"} color={Color.white} />
          <View style={styles.rowContainer}>
            <View
              style={{
                height: 1,
                width: 90,
                backgroundColor: Color.greyLight40,
              }}
            />
            <CustomText
              label={"Other payment options"}
              fontSize={12}
              marginLeft={9}
            />
            <View
              style={{
                height: 1,
                width: 90,
                backgroundColor: Color.greyLight40,
              }}
            />
          </View>
          <View
            style={{
              height: 50,
              width: "97%",
              borderRadius: 8,
              backgroundColor: Color.white,
              marginTop: 30,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
            <Image
              source={images.googleIcon}
              style={{ height: 20, width: 20, resizeMode: "contain" }}
            />
            <CustomText
              label={"Pay"}
              fontSize={18}
              fontFamily={FontFamily.barlowSemiBold}
              marginLeft={9}
            />
          </View>
          <View
            style={{
              height: 50,
              width: "97%",
              backgroundColor: Color.primary,
              marginTop: 30,
              borderRadius: 8,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
            <CustomText
              label={"Pay"}
              fontSize={18}
              fontFamily={FontFamily.barlowSemiBold}
              marginLeft={9}
              color={Color.white}
            />
          </View>
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CardScreen;

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
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 10,
  },
});
