import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Color, images } from "../../../../theme";

const CardRow = ({ borderColor, backgroundColor, source, onPress }) => {
  return (
    <View style={styles.Parent}>
      <TouchableOpacity
        style={[styles.circle, { borderColor: borderColor }]}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <View
          style={{
            backgroundColor: backgroundColor,
            height: 14,
            width: 14,
            borderRadius: 10,
          }}
        />
      </TouchableOpacity>
      <Image
        source={source}
        style={{ width: 28, height: 20, marginLeft: 10, resizeMode: "contain" }}
      />
    </View>
  );
};

export default CardRow;

const styles = StyleSheet.create({
  Parent: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",
  },
});
