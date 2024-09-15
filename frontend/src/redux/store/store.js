import { configureStore } from '@reduxjs/toolkit';
import {cart} from '../cart/cartSlice'

const store = configureStore({
    reducer: {
        cart: cart
    }
});

export default store;










