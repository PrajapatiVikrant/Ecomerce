import { configureStore } from "@reduxjs/toolkit";
import ProductsDisplaySlice from "./Slice/ProductsDisplaySlice"
import CounterSlice from "./Slice/CartCountSlice"
import name from "./Slice/NameSlice"
import selectProduct from "./Slice/SelectedProductDisplaySlice";
import Cartlist from "./Slice/CartSlice";


export const store = configureStore({
    reducer: {
      counter:CounterSlice,
      ProductList:ProductsDisplaySlice,
      name:name,
      selectProduct:selectProduct,
      cartlist:Cartlist
      
    },
  });