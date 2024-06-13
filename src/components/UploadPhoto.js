import React, {useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
} from 'react-native';
import {
  openCamera,
  openPicker,
  ImageOrVideo,
  Options,
} from 'react-native-image-crop-picker';
import Entypo from 'react-native-vector-icons/Entypo';

const UploadPhoto = ({visible, onChange, setImageModal}) => {
  const [image, setImage] = useState('');
  const options = {
    mediaType: 'photo',
    compressImageQuality: 0.8,
    compressImageMaxHeight: 1280,
    compressImageMaxWidth: 1280,
    forceJpg: true,
    cropping: true,
  };
  const onCamera = async () => {
    try {
      const result = await openCamera(options);
      onChange(result);
    } catch (error) {
      console.log('takePhotoFromCamera error', error);
    }
  };

  const onGallery = async () => {
    try {
      const result = await openPicker(options);
      onChange(result);
    } catch (error) {
      console.log('onGallery error', error);
    }
  };

  const ModalIcons = ({source, title, onPress}) => {
    return (
      <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={onPress}>
        <View style={styles.modalIcon}>
          <Entypo name={source} size={45} color={'black'} />
        </View>
        <Text style={styles.iconText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <TouchableOpacity
        onPress={() => setImageModal(false)}
        style={styles.headModalContainer}
        activeOpacity={0.6}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeadText}>Choose Picture From</Text>
          <View style={styles.modalIconContainer}>
            <ModalIcons
              source={'image'}
              title="Phone Storage"
              onPress={onGallery}
            />
            <ModalIcons
              source={'camera'}
              title="Open Camera"
              onPress={onCamera}
            />
          </View>
          <View/>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  iconStyle: {
    position: 'absolute',
    bottom: 15,
    right: 5,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 0,
    padding: 5,
  },
  container: {
    alignSelf: 'center',
  },
  headModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalContainer: {
    height: '26%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: '5%',
    justifyContent: 'space-between',
  },
  modalHeadText: {
    fontSize: 20,
    marginVertical: '2%',
    marginHorizontal: '2%',
    textAlign: 'center',
  },
  modalIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
