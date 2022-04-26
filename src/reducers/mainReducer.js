import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer.js";
import { newStudentReducer } from "./newStudentReducer.js";

export const mainReducer = combineReducers({
    loginReducer: loginReducer,
    newStudentReducer: newStudentReducer,
});