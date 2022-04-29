import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer.js";
import { newStudentReducer } from "./newStudentReducer.js";
import { groupReducer } from "./groupReducer.js";
import { teacherReducer } from "./teacherReducer.js";
import { acudienteReducer } from "./acudienteReducer.js";
import { registerReducer } from "./registerReducer.js";
import { groupDirectorReducer } from "./groupDirectorReducer.js";
import { teacherManagerReducer } from "./teacherManagerReducer.js"



export const mainReducer = combineReducers({
    loginReducer: loginReducer,
    groupReducer: groupReducer,
    newStudentReducer: newStudentReducer,
    teacherReducer: teacherReducer,
    acudienteReducer: acudienteReducer,
    registerReducer: registerReducer,
    groupDirectorReducer: groupDirectorReducer,
    teacherManagerReducer: teacherManagerReducer,
});