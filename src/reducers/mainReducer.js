import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer.js";

export const mainReducer = combineReducers({
    loginReducer: loginReducer,
});