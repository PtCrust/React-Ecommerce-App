import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk('productsSlice/fetchProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
});

export const productsSlice = createSlice({
    initialState: [],
    name: 'productsSlice',
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
        },
        builder.addCase(fetchProducts.pending, (state, action) => {
            return state = [{
                id:0,
                title:"Loading...",
                image:"",
                description:"The page is still loading..",
            }]
        })

        )
    }
})


// export const { } = productsSlice.actions;
export default productsSlice.reducer;