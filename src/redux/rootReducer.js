import {combineReducers} from 'redux';
import authSliceReducer from './reducer/authSlice';
import appSliceReducer from './reducer/appSliceReducer';

const rootReducer = combineReducers({
  user: authSliceReducer,
  app: appSliceReducer,
});

export default rootReducer;
