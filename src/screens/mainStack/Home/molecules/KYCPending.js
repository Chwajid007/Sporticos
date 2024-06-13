import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { images } from "../../../../theme";

const KYCPending = () => {
  return (
    <View style={styles.container}>
      <Image source={images.Logo} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>KYC Verification</Text>
        <Text style={styles.subtitle}>Admin is processing your information it will take some time</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.status}>Pending</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:20,
    // padding: 16,
    backgroundColor: '#f8f8f8',
    // margin: 16,
    borderRadius: 8,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
  statusContainer: {
    padding: 8,
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
  },
  status: {
    fontSize: 14,
    color: '#555',
  },
});

export default KYCPending;
