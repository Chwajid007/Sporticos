import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {GeneralStyle} from '../../../constants/GenralStyle';
import CustomText from '../../../components/CustomText';
import {Color, FontFamily, FontSize, images} from '../../../Theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DeleteUserAccount} from '../../../Api/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {
  setLoader,
} from '../../../redux/reducer/appSliceReducer';
import {useNavigation} from '@react-navigation/native';
import {showToast} from '../../BrainBox/molecules/CustomSnackBar';

const DeleteModal = ({
  modalVisibility,
  onDismiss,
  handleTouchablePress,
  onPress,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const deleteUser = async () => {
    dispatch(setLoader(true));
    DeleteUserAccount({
      payload: {},
      resolve: res => {
        dispatch(setLoader(false));

        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}], // Ensure the correct screen name
        });
        AsyncStorage.removeItem('isAuth');
        showToast('success', res.message);
        console.log('res=======>>>>', res);
      },
      reject: error => {
        dispatch(setLoader(false));
        console.log('res=======>>>>', error);
      },
    });
  };
  return (
    <Modal
      visible={modalVisibility}
      transparent
      onRequestClose={onDismiss}
      animationType="slide">
      <TouchableWithoutFeedback onPress={handleTouchablePress}>
        <View style={GeneralStyle.centeredModelView}>
          <TouchableWithoutFeedback>
            <View style={styles.modelDesign}>
              <View style={[GeneralStyle.rowStyle]}>
                <CustomText
                  label="Are you sure delete this account?"
                  fontSize={FontSize.size_xl}
                  fontFamily={FontFamily.poppinsSemiBold}
                  color={Color.lightBlack}
                  marginLeft={10}
                />
              </View>
              <View style={{height: 12}} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  width: '80%',
                }}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.noBtn}
                  onPress={onDismiss}>
                  <Text
                    style={[
                      GeneralStyle.btnText,
                      {
                        color: Color?.pink,
                      },
                    ]}>
                    No
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[
                    GeneralStyle.mainBtan,
                    {width: '35%', alignSelf: 'center', height: 44},
                  ]}
                  onPress={deleteUser}>
                  <Text style={GeneralStyle.btnText}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  modelDesign: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  Image: {
    marginRight: 6,
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginLeft: 15,
    alignSelf: 'center',
  },
  noBtn: {
    width: '35%',
    height: 44,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Color?.pink,
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
