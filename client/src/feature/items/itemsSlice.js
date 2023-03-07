import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: []

}


const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(i => i.id !== action.payload.id)
        }
    }
})

export default itemsSlice.reducer;
export const { addItem, removeItem } = itemsSlice.actions;