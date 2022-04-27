//import { actionTeacherPost } from "../actions/teacherAction"

const initialState = {
    teachers: [],
    teacherGetAll: [],
    teachDocum: []
}

export const teacherReducer = (state = initialState, action) => {

    switch (action.type) {
        case "teacherPost":
            const teachers = ([...state.teachers, action.payload])
            return { ...state, teachers: teachers }

            case "teacherGetAll":
            return { ...state, teacherGetAll: action.payload }

            case "teacherGetDoc":
            return { ...state, teachDocum: action.payload }

        default:
            return state;

    }
}



