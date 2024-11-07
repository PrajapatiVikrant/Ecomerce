// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state,actions) => {
    
      state += actions.payload;
      return state
    },
    getCartNo:(state,actions)=>{
      state = actions.payload;
      return state;
    },
    decrement: (state,actions) => {
     
      state -= actions.payload;
      return state
    }
  },
});

export const {getCartNo, increment, decrement } = counterSlice.actions;
export const selectCount = state => state.counter.value;

export default counterSlice.reducer;