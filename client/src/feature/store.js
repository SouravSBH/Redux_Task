import { configureStore } from "@reduxjs/toolkit"
import itemReducer from "./items/itemsSlice"
import modalReducer from "./modal/modalSlice"
import userReducer from "./user/userSlice"

const store = configureStore({
    reducer: {
        items: itemReducer,
        modal: modalReducer,
        user: userReducer

    }
})

export default store