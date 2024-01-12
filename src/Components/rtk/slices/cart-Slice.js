import { createSlice } from "@reduxjs/toolkit"


export const cartSlice = createSlice({
    initialState: [],
    name: 'cartSlice',
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.find((product) => product.id === action.payload.id);

            if (existingProduct) {
                existingProduct.count += 1;
            } else {
                state.push({ ...action.payload, count: 1 });
            }
        },
        deleteFromCart: (state, action) => {
            const index = state.findIndex((product) => product.id === action.payload.id);

            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        clearCart: () => {
            return [];

        }
    }

})


export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;