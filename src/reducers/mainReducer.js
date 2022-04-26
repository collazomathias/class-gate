import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer.js";
import { teacherReducer } from "./teacherReducer.js";
import { comprobationTeachReducer } from "./comprobationTeachReducer"

export const mainReducer = combineReducers({
    loginReducer: loginReducer,
    teacherReducer: teacherReducer,
    comprobationTeachReducer: comprobationTeachReducer
});