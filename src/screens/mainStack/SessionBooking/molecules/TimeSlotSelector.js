import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import CustomText from "../../../../components/CustomText";
import { Color, FontFamily } from "../../../../theme";

const timeSlots = [
  { id: "1", time: "10:00 AM" },
  { id: "2", time: "12:00 AM" },
  { id: "3", time: "02:00 PM" },
  { id: "4", time: "03:00 PM" },
  { id: "5", time: "04:00 PM" },
  { id: "6", time: "10:00 AM" },
  { id: "7", time: "12:00 AM" },
  { id: "8", time: "02:00 PM" },
  { id: "9", time: "03:00 PM" },
  { id: "10", time: "04:00 PM" },
];

const TimeSlotSelector = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.timeSlot,
        {
          backgroundColor:
            selectedSlot === item.id ? Color.yellowPrim : "#D9E76C55",
        },
      ]}
      onPress={() => setSelectedSlot(item.id)}
    >
      <CustomText
        label={item.time}
        fontSize={12}
        textAlign={"center"}
        fontFamily={
          selectedSlot === item.id
            ? FontFamily.barlowBold
            : FontFamily.barlowRegular
        }
      />
      {/* <Text
        style={[
          styles.timeText,
          { fontWeight: selectedSlot === item.id ? "bold" : "normal" },
        ]}
      >
        {item.time}
      </Text> */}
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={timeSlots}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={5}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  timeSlot: {
    margin: 10,
    width: 50,
    height: 50,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  timeText: {
    fontSize: 14,
    color: "#333",
  },
});

export default TimeSlotSelector;
