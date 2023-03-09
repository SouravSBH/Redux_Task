import { configureStore } from "@reduxjs/toolkit"
import itemReducer from "./items/itemsSlice"
import modalReducer from "./modal/modalSlice"

const store = configureStore({
    reducer: {
        items: itemReducer,
        modal: modalReducer

    }
})

export default store