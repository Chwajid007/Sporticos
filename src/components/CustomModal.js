import React from "react";
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Color } from "../theme";

const CustomModal = ({
  visible,
  onClose,
  title,
  children,
  btnText,
  onBtnPress,
  marginTop,
}) => {
  const screenwidth = Dimensions.get("window").width;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.crossContainer} onPress={onClose}>
            <Text>X</Text>
          </TouchableOpacity>
          {title && <Text style={styles.title}>{title}</Text>}
          {children}
          {btnText && (
            <TouchableOpacity
              style={[styles.btnContainer, { marginTop: marginTop || 58 }]}
              onPress={onBtnPress}
            >
              <Text style={styles.btnText}>{btnText}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",

    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 37,
    padding: 20,
    alignItems: "center",
  },
  crossContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  btnContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Color.pink,
    borderRadius: 12,
    height: 57,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CustomModal;
