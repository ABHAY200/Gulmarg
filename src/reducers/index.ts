import {combineReducers} from 'redux';

import homeReducer from '@screens/home/homeSlice';
import loginReducer from '@screens/login/loginSlice';

const rootReducer = combineReducers({
  home: homeReducer,
  login: loginReducer,
});

export default rootReducer;
