import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../Constants/Colors";
import { Color } from "../theme";

const Pagination = ({ totalPages, marginBottom }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState(0);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <View style={[styles.container, { marginVertical: marginBottom }]}>
      <TouchableOpacity
        onPress={() => [handlePageChange(currentPage - 1), setSelected(0)]}
      >
        <View
          style={[
            styles.button,
            {
              backgroundColor: selected === 0 ? Color.grey30 : Color.white,
            },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color: selected === 0 ? Color.white : Color.black20,
              },
            ]}
          >
            {"<"}
          </Text>
        </View>
      </TouchableOpacity>

      {Array.from({ length: totalPages }, (_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePageChange(index + 1)}
        >
          <View
            style={[
              styles.button,
              currentPage === index + 1 && styles.activeButton,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                currentPage === index + 1 && styles.activeButtonText,
              ]}
            >
              {index + 1}
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      {totalPages > 3 && (
        <View style={styles.button}>
          <Text style={styles.buttonText}>...</Text>
        </View>
      )}

      <TouchableOpacity
        onPress={() => {
          handlePageChange(currentPage + 1);
          setSelected(1);
        }}
      >
        <View
          style={[
            styles.button,

            {
              backgroundColor: selected === 1 ? Color.grey30 : Color.white,
            },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color: selected === 1 ? Color.white : Color.black20,
              },
            ]}
          >
            {">"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  activeButton: {
    backgroundColor: Color.primary,
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
  },
  activeButtonText: {
    fontWeight: "bold",
    color: Color.white,
  },
});

export default Pagination;
