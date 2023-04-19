import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PURGE} from 'redux-persist';

export interface Home {
  homePageData: Array<object>;
}

const initialState: Home = {
  homePageData: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
  reducers: {
    setHomeData: (state, action: PayloadAction<Array<object>>) => {
      state.homePageData = action.payload;
    },
    resetHomeSlice: () => initialState,
  },
});

export const {setHomeData, resetHomeSlice} = homeSlice.actions;
export default homeSlice.reducer;
