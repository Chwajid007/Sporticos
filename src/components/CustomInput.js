import { View, StyleSheet, TextInput, Text, Keyboard } from "react-native";
import React, { useRef, useState } from "react";

import { GeneralStyle } from "../constants/GenralStyle";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getFontSize } from "../assets/utils/ResponsiveFn";
import { Color, FontFamily } from "../theme";
import CustomText from "./CustomText";

const CustomInput = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  placeholderTextColor,
  width,
  right,
  keyboardType,
  returnKeyType,
  rightText,
  isEmail,
  iconColor,
  rightWithCustomIcon,
  errorMessage,
  iconName,
  inputPaddingHorizontal,
  props,
  editable,
  paddingVertical,
  inputMode,
  inputRef,
  onSubmitEditing,
  autoFocus,
  onBlur,
  textContentType,
  blurOnSubmit,
  HeaderLabel,
  height,
  multiline,
  backgroundColor,
  borderWidth,
  borderRadius,
  continerStyle,
  marginBottom,
  HeaderLabelBottom,
  verticalAlign,
  HeaderLabelSize,
  HeaderLabelColor,
}) => {
  const [hidePass, setHidePass] = useState(secureTextEntry);
  return (
    <View style={{ marginBottom: marginBottom || 17 }}>
      <CustomText
        label={HeaderLabel}
        marginBottom={HeaderLabelBottom || 5}
        fontSize={HeaderLabelSize || 16}
        fontFamily={FontFamily.barlowMedium}
        color={HeaderLabelColor}
      />
      <View
        style={[
          styles.inputContainer,
          {
            width: width || "100%",
            borderWidth: borderWidth || 1,
            backgroundColor: backgroundColor || Color.white10,
            borderColor: errorMessage ? Color.error : Color?.greyLight10,
            height: height || 58,
            borderRadius: borderRadius || 12,
          },
          continerStyle,
        ]}
      >
        <TextInput
          ref={inputRef}
          style={[
            {
              flex: 1,
              height: "100%",
              borderRadius: 12,
              paddingVertical: paddingVertical || 5,
              paddingHorizontal: inputPaddingHorizontal || 20,
              fontSize: 14,
              color: Color.darkGrey,
              fontFamily: FontFamily.poppinsRegular,
            },
          ]}
          editable={editable}
          multiline={multiline}
          placeholder={placeholder}
          textContentType={textContentType}
          placeholderTextColor={placeholderTextColor || Color.darkGrey}
          value={value}
          selectionColor={Color.pink}
          onChangeText={onChangeText}
          autoCapitalize="none"
          returnKeyType={returnKeyType}
          autoFocus={autoFocus}
          blurOnSubmit={blurOnSubmit}
          keyboardType={keyboardType}
          // inputMode={inputMode}
          onBlur={onBlur}
          secureTextEntry={hidePass}
          autoCorrect={false}
          onSubmitEditing={onSubmitEditing}
          verticalAlign={verticalAlign}
        />
        {secureTextEntry ? (
          <MaterialCommunityIcons
            name={hidePass ? "eye-off-outline" : "eye-outline"}
            size={getFontSize(3)}
            color={iconColor || Color.black}
            style={styles.icon}
            onPress={() => setHidePass(!hidePass)}
          />
        ) : iconName ? (
          <MaterialCommunityIcons
            name={"check"}
            size={getFontSize(3)}
            color={iconColor || Color.black}
            style={styles.icon}
          />
        ) : null}
        {/* {right && (
          <MaterialCommunityIcons
            name={
              iconName ? iconName : hidePass ? 'eye-off-outline' : 'eye-outline'
            }
            size={getFontSize(3)}
            color={iconColor || Color.pink}
            style={styles.icon}
            onPress={() => setHidePass(!hidePass)}
          />
        )} */}
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 2,
  },
  icon: {
    padding: 10,
  },
  errorMessage: {
    marginLeft: 10,
    fontSize: 12,
    color: "red",
  },
});
