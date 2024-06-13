import {StyleSheet} from 'react-native';
import {getHeight, getWidth} from '../../assets/utils/ResponsiveFn';
import {Color, Spacing} from '../../Theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: Spacing.spacing_xl,
  },
  lineBase: {
    height: getHeight(8),
    backgroundColor: '#F7117B',
    width: '100%',
  },
  logoContainer: {
    height: getHeight(12),
    width: getWidth(64),
    resizeMode: 'contain',
    marginTop: -70,
  },
  filterContainer: {
    backgroundColor: Color.white,
    height: 42,
    width: 42,
    position: 'absolute',
    right: 10,
    top: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 21,
    width: 21,
    tintColor: Color.pink,
  },
  mapContainer: {
    paddingHorizontal: 40,
    marginTop: 50,
  },
  logoutContainer2: {
    height: '15%',
    justifyContent: 'center',
  },
  btnContainer: {
    backgroundColor: Color.lightPrimary,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 14,
  },
});
