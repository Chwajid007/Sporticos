import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Color, FontFamily } from "../../../../theme";

const MessageHeader = ({ onBackPress, profileImage, name }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBackPress}>
        <MaterialIcons name="keyboard-backspace" size={20} />
      </TouchableOpacity>
      <Image source={profileImage} style={styles.profileImage} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: Color.white,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 15,
  },
  name: {
    fontSize: 18,
    fontFamily:FontFamily.barlowSemiBold
    
  },
});

export default MessageHeader;
