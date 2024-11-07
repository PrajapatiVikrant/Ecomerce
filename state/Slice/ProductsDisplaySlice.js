
import { createSlice } from '@reduxjs/toolkit';


 const ProductDisplaySlice = createSlice({
  name: 'ProductDisplaySlice',
  initialState:[],
  reducers: {
    ChangeProductlist: (state,action) => {
      console.log(action.payload);
      state = action.payload;
   
      return state;
    }
   
  },
});

export const { ChangeProductlist } = ProductDisplaySlice.actions;
export default ProductDisplaySlice.reducer;