// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
  name: 'name',
  initialState: '',
  reducers: {
   ChangeName(state,aciotn){
    state = aciotn.payload;
    return state;
   }
  },
});

export const {ChangeName } = nameSlice.actions;


export default nameSlice.reducer;