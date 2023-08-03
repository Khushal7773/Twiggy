import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items: [],
    },
    reducers : {
        additem : (state, action) => {
            state.items.push(action.payload);
        },
        removeitem : (state, action) => {
            state.items.pop();
        },
        clearCart : (state, action) => {
            // console.log(current(state));
            state.items.length = 0;
        },
    },
});

export const {additem, removeitem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;