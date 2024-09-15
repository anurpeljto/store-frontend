import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = state.products.find(product => product._id == action.payload._id);
            if(product) {
                product.quantity += 1
            } else {
                state.products.push({... action.payload, quantity: 1});
            }
        },
        increaseQuantity: (state, action) => {
            const product = state.products.find(product => product._id == action.payload._id);
            product.quantity += 1;
        },
        decreaseQuantity: (state, action) => {
            const product = state.products.find(product => product._id == action.payload._id);
            product.quantity -= 1;
        }
    }
});
export const {addToCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export const cart = cartSlice.reducer;