import { createSlice } from '@reduxjs/toolkit';

export const SelectedProductDisplaySlice = createSlice({
  name: 'SelectedProductDisplaySlice',
  initialState:{},
  reducers: {
    ChangeProductObject: (state,actions) => {
    
      state = actions.payload;
     
      return state;
    }   
  },
});

export const { ChangeProductObject } = SelectedProductDisplaySlice.actions;


export default SelectedProductDisplaySlice.reducer;