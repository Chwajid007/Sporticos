import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CustomText from "./CustomText";
import { getFontSize, useForceUpdate } from "../assets/utils/ResponsiveFn";
import { Color, FontFamily } from "../theme";

const CustomInput = forwardRef(
  (
    {
      placeholder,
      onFocus = () => {},
      onBlur = () => {},
      onSubmitEditing = () => {},
      onChangeText = () => {},
      onPressIn = () => {},
      value,
      secureTextEntry,
      placeholderTextColor,
      width,
      keyboardType,
      returnKeyType,
      iconColor,
      errorMessage,
      iconName,
      paddingVertical,
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
      isError = false,
      editable = true,
      ...props
    },
    ref
  ) => {
    const [hidePass, setHidePass] = useState(secureTextEntry);
    const textInputRef = useRef();
    const [tempValue, setTempValue] = useState(value);
    const forceUpdate = useForceUpdate();

    const errorFunction = () => {
      textInputRef.current?.setNativeProps({
        style: {
          borderColor: "red",
        },
      });
    };

    useImperativeHandle(ref, () => ({
      focusRef: () => {
        textInputRef.current.focus();
      },
      updateValueRef: (v) => {
        textInputRef.current.setNativeProps({ text: v });
        setTempValue(v);
        forceUpdate();
      },
      isError: () => {
        errorFunction();
      },
    }));

    useEffect(() => {
      if (isError) {
        errorFunction();
      } else {
        textInputRef.current?.setNativeProps({
          style: {
            borderColor: Color.textInputBorderColor,
          },
        });
      }
    }, [isError]);

    if (!editable) {
      return (
        <View style={{ marginBottom: marginBottom || 17 }}>
          <CustomText
            label={HeaderLabel}
            marginBottom={HeaderLabelBottom || 5}
            fontSize={HeaderLabelSize || 16}
            fontFamily={FontFamily.barlowMedium}
            color={HeaderLabelColor}
          />
          <TouchableOpacity
            // onLongPress={() => onLongPress()}
            activeOpacity={0.7}
            onPress={() => onPressIn()}
            style={[
              styles.inputContainer,
              {
                width: width || "100%",
                borderWidth: borderWidth || 1,
                backgroundColor: backgroundColor || Color.white10,
                borderColor: errorMessage ? Color.red : Color.greyLight10,
                height: height || 58,
                borderRadius: borderRadius || 12,
              },
              continerStyle,
            ]}
          >
            <Text
              style={[
                {
                //  flex: 1,
                 // height: "100%",
                  borderRadius: 12,
                  paddingVertical: paddingVertical || 5,
                  paddingHorizontal: 20,
                  fontSize: 14,
                  color: Color.darkGrey,
                  fontFamily: FontFamily.poppinsRegular,
                  textAlign: "center",
                },
              ]}
            >
              {placeholder}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

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
              borderColor: errorMessage ? Color.red : Color.greyLight10,
              height: height || 58,
              borderRadius: borderRadius || 12,
            },
            continerStyle,
          ]}
        >
          <TextInput
            {...props}
            ref={textInputRef}
            style={[
              {
                flex: 1,
                height: "100%",
                borderRadius: 12,
                paddingVertical: paddingVertical || 5,
                paddingHorizontal: 20,
                fontSize: 14,
                color: Color.darkGrey,
                fontFamily: FontFamily.poppinsRegular,
              },
            ]}
            editable={editable}
            multiline={multiline}
            placeholder={placeholder}
            textContentType={textContentType}
            placeholderTextColor={placeholderTextColor || Color.greyLight}
            value={tempValue}
            selectionColor={Color.pink}
            autoCapitalize="none"
            returnKeyType={returnKeyType}
            blurOnSubmit={false}
            keyboardType={keyboardType}
            secureTextEntry={hidePass}
            autoCorrect={false}
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            onSubmitEditing={() => onSubmitEditing()}
            onChangeText={(email) => {
              setTempValue(email);
              onChangeText(email);
            }}
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
        </View>
        {errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
      </View>
    );
  }
);

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
  textInput: {
    flex: 1,
    height: "100%",
    borderRadius: 12,
    //paddingVertical: paddingVertical || 5,
    paddingHorizontal: 20,
    fontSize: 14,
    color: Color.darkGrey,
    fontFamily: FontFamily.poppinsRegular,
  },
});

export default CustomInput;
