import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    showModal: false
}


const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showAction: (state) => {
            state.showModal = true;
        },
        hideAction: (state) => {
            state.showModal = false;
        }

    }

})


export default modalSlice.reducer;

export const { showAction, hideAction } = modalSlice.actions;