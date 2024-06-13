import {View, Text, Modal, StyleSheet} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {Color} from '../../../theme';

const Loader = ({isLoading}) => {
  return (
    <Modal transparent animationType="slide" visible={isLoading}>
      <View style={styles.modalContainer}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={Color.pink} />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
});
