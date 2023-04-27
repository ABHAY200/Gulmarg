import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PURGE} from 'redux-persist';

export interface Login {
  user: object;
}

const initialState: Login = {
  user: {},
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
  reducers: {
    setUserData: (state, action: PayloadAction<Array<object>>) => {
      state.user = action.payload;
    },
    resetLoginSlice: () => initialState,
  },
});

export const {setUserData, resetLoginSlice} = loginSlice.actions;
export default loginSlice.reducer;
