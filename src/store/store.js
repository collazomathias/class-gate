import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "../reducers/mainReducer.js";

export const store = configureStore({
    reducer:  mainReducer
})