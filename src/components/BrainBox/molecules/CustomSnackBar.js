// import React from 'react';
// import {Snackbar} from 'react-native-paper';
// import {Platform} from 'react-native';
// import CustomText from '../../CustomText';
// import {Color, FontFamily} from '../../../Theme';

// const CustomSnackbar = ({
//   visible,
//   onDismiss,
//   message,
//   actionText,
//   onAction,
//   style,
//   type,
//   duration,
// }) => {
//   return (
//     <Snackbar
//       wrapperStyle={{top: Platform.OS === 'ios' ? 50 : 0}}
//       visible={visible}
//       onDismiss={onDismiss}
//       action={{
//         label: actionText,
//         textColor: Color.white,
//         onPress: onAction,
//       }}
//       style={{
//         backgroundColor:
//           type === 'error'
//             ? Color.error
//             : type === 'info'
//             ? Color.success
//             : Color.success,
//       }}
//       duration={duration || 2000}>
//       <CustomText
//         label={message}
//         color={Color.white}
//         fontFamily={FontFamily.poppinsMedium}
//         fontSize={13}
//         translationEnabled={false}
//       />
//     </Snackbar>
//   );
// };

// export default CustomSnackbar;
import React from 'react';
import {Platform} from 'react-native';
import Toast, {
  BaseToast,
  ErrorToast,
  InfoToast,
} from 'react-native-toast-message';

import {Color} from '../../../theme';

export const toastConfig = {
  success: ({text1Style, text2Style, ...props}) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: Color.success,
        borderLeftColor: Color.success,
        marginTop: Platform.OS == 'ios' ? 10 : -30,
        width: '90%',
      }}
      
      text1Style={{
        fontSize: 15,
        color: Color.white,
      }}
      text2Style={{
        fontSize: 12,
        color: Color.white,
      }}
    />
  ),
  /*
        Overwrite 'error' type,
        by modifying the existing `ErrorToast` component
      */
  error: ({text1Style, text2Style, ...props}) => (
    <ErrorToast
      {...props}
      style={{
        backgroundColor: Color.error,
        borderLeftColor: Color.error,
        marginTop: Platform.OS == 'ios' ? 10 : -30,
        width: '90%',
      }}
      text1Style={{
        fontSize: 15,
        color: Color.white,
      }}
      text2Style={{
        fontSize: 12,
        color: Color.white,
      }}
    />
  ),
  /*
        Overwrite 'info' type,
        by modifying the existing `InfoToast` component
      */
  info: ({text1Style, text2Style, ...props}) => (
    <InfoToast
      {...props}
      style={{
        backgroundColor: Color.lightgray,
        borderLeftColor: Color.lightgray,
        marginTop: Platform.OS == 'ios' ? 10 : -30,
        width: '90%',
      }}
      text1Style={{
        fontSize: 15,
        color: Color.white,
      }}
      text2Style={{
        fontSize: 12,
        color: Color.white,
      }}
    />
  ),
};

export const showToast = (type, heading, description) => {
  let message = description;

  Toast.show({
    type: type,
    text1: heading,
    text2: message,
    visibilityTime: 2000,
  });
};
