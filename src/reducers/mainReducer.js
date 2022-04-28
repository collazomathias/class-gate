import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer.js";
import { newStudentReducer } from "./newStudentReducer.js";
import { groupReducer } from "./groupReducer.js";
import { teacherReducer } from "./teacherReducer.js";
import { acudienteReducer } from "./acudienteReducer.js";



export const mainReducer = combineReducers({
    loginReducer: loginReducer,
    groupReducer: groupReducer,
    newStudentReducer: newStudentReducer,
    teacherReducer: teacherReducer,
    acudienteReducer: acudienteReducer,
});