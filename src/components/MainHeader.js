import {Text, View} from 'react-native';
import React from 'react';
import {GeneralStyle} from '../constants/GenralStyle';
import strings from '../language';

const MainHeader = ({title, LeftIcon, RightIcon, TitelStyle}) => {
  return (
    <View style={[GeneralStyle.justifyContentViewStyle]}>
      {LeftIcon}
      <Text style={TitelStyle}>
        {strings[title?.trim?.().replace?.(/[\s.!]+/g, '')] || title}
      </Text>
      {RightIcon}
    </View>
  );
};

export default MainHeader;
