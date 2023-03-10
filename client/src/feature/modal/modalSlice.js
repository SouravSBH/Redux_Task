import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    showItemForm: false,
    showSignUp: false,
    showSignIn: false,
}


const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showAction: (state) => {
            state.showItemForm = true;
        },
        hideAction: (state) => {
            state.showItemForm = false;
            state.showSignUp = false;
            state.showSignIn = false;
        },

        showSignUpAction: (state) => {
            state.showSignUp = true;
        },
        showSignInAction: (state) => {
            state.showSignIn = true;
        },
        // hideSignUpAction: (state) => {
        //     state.showSignUp = false;
        // }

    }

})


export default modalSlice.reducer;

export const { showAction, hideAction, showSignUpAction, showSignInAction } = modalSlice.actions;