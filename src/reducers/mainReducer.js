import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer.js";
import { groupReducer } from "./groupReducer.js";

export const mainReducer = combineReducers({
    loginReducer: loginReducer,
    groupReducer: groupReducer
});