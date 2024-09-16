import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = state.products.find(product => product._id === action.payload._id);
            if(product) {
                product.quantity += 1
            } else {
                state.products.push({... action.payload, quantity: 1});
            }
        },
        increaseQuantity: (state, action) => {
            const product = state.products.find(product => product._id == action.payload.product._id);
            if (product) {
                product.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const givenProduct = state.products.find(product => product._id == action.payload.product._id);
            if(givenProduct.quantity <=1) {
                state.products = state.products.filter((product) => product !== givenProduct);
            } else {
                givenProduct.quantity -= 1;
            }
        }
    }
});
export const {addToCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export const cart = cartSlice.reducer;

export const getTotalPrice = (state) => {
    return state.cart.products.reduce((total, product) => {
        let price = product.price.split('$')[1];
        return total + (price * product.quantity)
    }, 0);
}