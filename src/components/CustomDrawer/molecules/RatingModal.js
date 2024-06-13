import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {GeneralStyle} from '../../../constants/GenralStyle';
import CustomText from '../../../components/CustomText';
import {Color, FontFamily, FontSize} from '../../../Theme';
import StarRating from 'react-native-star-rating-widget';

const RatingModal = ({
  modalVisibility,
  onDismiss,
  handleTouchablePress,
  onPress,
}) => {
  const [rating, setRating] = useState(0);

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
              <CustomText
                label="App Rating"
                fontSize={FontSize.size_xl}
                fontFamily={FontFamily.poppinsSemiBold}
                color={Color.lightBlack}
                marginLeft={10}
                marginTop={20}
                alignSelf={'center'}
              />
              <CustomText
                label={'Please write your feedback'}
                alignSelf={'center'}
                color={Color.grayTextColor}
              />
              <StarRating
                rating={rating}
                style={{alignSelf: 'center', marginTop: 10}}
                onChange={setRating}
                color={Color.pink}
              />
              <TextInput
                placeholder="write review"
                style={{
                  borderWidth: 0.5,
                  height: 150,
                  marginHorizontal: 15,
                  borderRadius: 5,
                  borderColor: Color.grayTextColor,
                  paddingHorizontal: 10,
                  marginTop: 15,
                }}
                multiline
                textAlignVertical="top"
              />
              <View style={{height: 12}} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  //   width: '100%',
                  justifyContent: 'flex-end',
                }}>
                <CustomText
                  label={'Cancel'}
                  marginRight={20}
                  fontFamily={FontFamily.poppinsMedium}
                  onPress={onDismiss}
                />
                <CustomText
                  label={'Send Review'}
                  marginRight={20}
                  fontFamily={FontFamily.poppinsMedium}
                  fontSize={15}
                  onPress={onDismiss}
                  color={Color.pink}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default RatingModal;

const styles = StyleSheet.create({
  modelDesign: {
    height: 350,
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
