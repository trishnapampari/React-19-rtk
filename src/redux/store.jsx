import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice';
import productSlice from './productSlice';

const store= configureStore({
    reducer:{
        cart : cartReducer,
        products: productSlice
    }
})

export default store;