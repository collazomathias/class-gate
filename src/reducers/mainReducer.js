import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer.js";
import { groupReducer } from "./groupReducer.js";
import { teacherReducer } from "./teacherReducer.js";



export const mainReducer = combineReducers({
    loginReducer: loginReducer,
    groupReducer: groupReducer,
    teacherReducer: teacherReducer
});