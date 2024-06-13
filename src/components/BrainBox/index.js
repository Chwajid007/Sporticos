import {View} from 'react-native';
import React, { useEffect } from 'react';
import CustomSnackbar from './molecules/CustomSnackBar';
import {useDispatch, useSelector} from 'react-redux';
import {dismissSnackBar} from '../../redux/reducer/appSliceReducer';
import Loader from './molecules/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import strings from '../../language';

const BrainBoxx = ({children}) => {
  const {snackbar, loader} = useSelector(state => state.app);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      {children}
      {loader && <Loader isLoading={loader} />}
    </View>
  );
};

export default BrainBoxx;
