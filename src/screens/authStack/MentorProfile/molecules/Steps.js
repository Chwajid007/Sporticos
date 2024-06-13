import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color } from "../../../../theme";
import CustomText from "../../../../components/CustomText";

const Steps = ({ setActiveStep, activeStep }) => {
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          activeStep >= 1 ? styles.activeCircle : styles.inactiveCircle,
        ]}
      >
        <Text
          style={[
            styles.number,
            activeStep >= 1 ? styles.activeNumber : styles.inactiveNumber,
          ]}
        >
          1
        </Text>
      </View>

      <View
        style={[
          styles.line,
          activeStep > 1 ? styles.activeLine : styles.inactiveLine,
        ]}
      />
      <View style={styles.step}>
        <View
          style={[
            styles.circle,
            activeStep >= 2 ? styles.activeCircle : styles.inactiveCircle,
          ]}
        >
          <Text
            style={[
              styles.number,
              activeStep >= 2 ? styles.activeNumber : styles.inactiveNumber,
            ]}
          >
            2
          </Text>
        </View>
        {/* <Text
          style={[
            styles.label,
            activeStep >= 2 ? styles.activeLabel : styles.inactiveLabel,
          ]}
        >
          Qualifications
        </Text> */}
      </View>
      <View
        style={[
          styles.line,
          activeStep > 2 ? styles.activeLine : styles.inactiveLine,
        ]}
      />
      <View style={styles.step}>
        <View
          style={[
            styles.circle,
            activeStep >= 3 ? styles.activeCircle : styles.inactiveCircle,
          ]}
        >
          <Text
            style={[
              styles.number,
              activeStep >= 3 ? styles.activeNumber : styles.inactiveNumber,
            ]}
          >
            3
          </Text>
        </View>
        {/* <Text
          style={[
            styles.label,
            activeStep >= 3 ? styles.activeLabel : styles.inactiveLabel,
          ]}
        >
          Bank A/c Details
        </Text> */}
      </View>
      <View
        style={[
          styles.line,
          activeStep > 3 ? styles.activeLine : styles.inactiveLine,
        ]}
      />
      <View style={styles.step}>
        <View
          style={[
            styles.circle,
            activeStep >= 4 ? styles.activeCircle : styles.inactiveCircle,
          ]}
        >
          <Text
            style={[
              styles.number,
              activeStep >= 4 ? styles.activeNumber : styles.inactiveNumber,
            ]}
          >
            4
          </Text>
        </View>
        {/* <Text
          style={[
            styles.label,
            activeStep >= 4 ? styles.activeLabel : styles.inactiveLabel,
          ]}
        >
          Profile Pic
        </Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  step: {
    alignItems: "center",
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  activeCircle: {
    backgroundColor: Color.primary,
  },
  inactiveCircle: {
    borderWidth: 1,
    borderColor: Color.Grey10,
  },
  number: {
    fontSize: 20,
    color: "#333",
    fontWeight: "bold",
  },
  activeNumber: {
    color: Color.yellowPrim,
  },
  inactiveNumber: {
    color: "#333",
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    color: "#333",
  },
  activeLabel: {
    color: "#007bff",
  },
  inactiveLabel: {
    color: "#333",
  },
  line: {
    width: 75,
    height: 5,
    backgroundColor: "#ccc",
  },
  activeLine: {
    backgroundColor: Color.primary,
  },
  inactiveLine: {
    backgroundColor: "#ccc",
  },
});

export default Steps;
