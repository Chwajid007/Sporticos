import {combineReducers} from 'redux';
import userReducer from './reducer/userReducer';
import appSliceReducer from './reducer/appSliceReducer';

const rootReducer = combineReducers({
  user: userReducer,
  app: appSliceReducer,
});

export default rootReducer;
