import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import Main from "./src/navigation/Main";
import { PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import store, { persistor } from "./src/redux/store";
import BrainBoxx from "./src/components/BrainBox";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/components/BrainBox/molecules/CustomSnackBar";
import { PersistGate } from "redux-persist/integration/react";
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Main />
          </PersistGate>
        </Provider>
      </GestureHandlerRootView>
    </PaperProvider>
  );
};
export default App;
