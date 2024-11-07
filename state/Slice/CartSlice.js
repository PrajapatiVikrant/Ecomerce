
import { createSlice } from '@reduxjs/toolkit';


 const CartSlice = createSlice({
  name: 'CartSlice',
  initialState:[],
  reducers: {
    changeCartlist: (state,action) => {
     
      state = action.payload;
    
      return state;
    }
   
  },
});

export const { changeCartlist } = CartSlice.actions;
export default CartSlice.reducer