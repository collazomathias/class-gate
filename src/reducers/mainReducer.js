import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer.js";
import { teacherReducer } from "./teacherReducer.js";

export const mainReducer = combineReducers({
    loginReducer: loginReducer,
    teacherReducer: teacherReducer
});