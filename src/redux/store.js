import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['app'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // }
    })
});

export default store;

export const persistor = persistStore(store);


// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;
