import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
  ScrollView,
  UIManager,
} from "react-native";

import CustomText from "./CustomText";
import Icon from "react-native-vector-icons/AntDesign";
import { Color, FontFamily } from "../theme";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
const CustomDropdownPicker = ({
  data,
  value,
  setValue,
  label,
  errorMessage,
  disabled,
  emptyLabel,
  showIcon,
  emptyLabelPress,
  open,
  setOpen,
  dropdownMainStyle,
  insideContentStyle,
  HeaderLabel,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const [select, setSelect] = useState();
  console.log("select", select);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setSelect(value);
  //   }, 200);
  // }, [value]);

  const toggleDropdown = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
    setOpen?.(!open);
  };

  const selectOption = (option) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setValue(option?.value);
    setSelect(option?.label);
    setIsOpen(false);
    setOpen?.(false);
  };

  return (
    <>
      <View style={[styles.dropdownMainContainer, dropdownMainStyle]}>
        {HeaderLabel && (
          <CustomText
            label={HeaderLabel}
            marginBottom={HeaderLabel ? 5 : 0}
            fontSize={16}
            fontFamily={FontFamily.barlowMedium}
          />
        )}

        <TouchableOpacity
          disabled={disabled}
          activeOpacity={0.6}
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              height: 58,
              backgroundColor: Color.white10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: Color?.greyLight10,
            },
            insideContentStyle,
          ]}
          onPress={toggleDropdown}
        >
          <CustomText
            label={
              select?.length == 0 || select?.length == undefined
                ? label
                : select
            }
            fontSize={16}
            fontFamily={FontFamily.barlowRegular}
            color={
              select?.length == 0 || select?.length == undefined
                ? Color.black10
                : Color.black
            }
          />

          <Icon
            name={isOpen ? "caretup" : "caretdown"}
            size={14}
            color={Color.black10}
          />
        </TouchableOpacity>
        {isOpen && data?.length > 0 && (
          <ScrollView
            style={{
              borderColor: Color.greyLight10,
              borderRadius: 5,
              borderWidth: 0.5,
              paddingHorizontal: 20,
              backgroundColor: Color?.white10,
            }}
            showsVerticalScrollIndicator={false}
          >
            {data?.map((option, i) => {
              return (
                <TouchableOpacity key={i} onPress={() => selectOption(option)}>
                  <CustomText
                    label={option.label}
                    fontSize={14}
                    marginTop={5}
                    marginBottom={data?.length - 1 == i ? 10 : 0}
                    color={Color.black}
                    fontFamily={FontFamily.barlowMedium}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        )}
        {isOpen && data?.length == 0 && (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setIsOpen(false);
              setOpen?.(false);
              emptyLabelPress?.();
            }}
            style={styles.emptyContainer}
          >
            <CustomText
              label={emptyLabel || "No Data"}
              color={Color.black}
              fontSize={14}
              fontFamily={FontFamily.barlowBold}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default CustomDropdownPicker;
const styles = StyleSheet.create({
  dropdownMainContainer: {
    borderRadius: 5,
    // paddingHorizontal: widthDP(10),
    // backgroundColor: colors.lightGray,
    borderWidth: 0,
    // width: '100%',
    // maxHeight: heightDP(150),
    marginBottom: 17,
  },
  emptyContainer: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: Color.greyLight10,
    borderTopWidth: 1,
  },
});
