import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color } from "../../../../theme";
import CustomText from "../../../../components/CustomText";

const Sessions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Sessions</Text>
        <CustomText label={"See all"} />
      </View>
      <View style={styles.content}>
        <Text style={styles.noContent}>No Sessions to show</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    // padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 14,
    color: Color.black20,
  },
  content: {
    // padding: 16,
    height: 174,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  noContent: {
    color: "#888",
  },
});

export default Sessions;
