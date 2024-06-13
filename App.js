import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Main from './src/navigation/Main';
import {PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import BrainBoxx from './src/components/BrainBox';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/components/BrainBox/molecules/CustomSnackBar';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <Provider store={store}>
          <BrainBoxx>
            <Main />
            <Toast config={toastConfig} />
          </BrainBoxx>
        </Provider>
      </GestureHandlerRootView>
    </PaperProvider>
  );
};
export default App;
