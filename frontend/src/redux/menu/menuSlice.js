import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
    menu: false
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu : (state) => {
            state.menu = !state.menu;
        }
    }
})

export const {toggleMenu} = menuSlice.actions;
export default menuSlice.reducer;