import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products-Slices";
import cartSlice from "./slices/cart-Slice";


export const store = configureStore({
    reducer :{
        products: productsSlice,
        cart: cartSlice,
    }
})