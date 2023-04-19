import {combineReducers} from 'redux';

import homeReducer from '@screens/home/homeSlice';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
