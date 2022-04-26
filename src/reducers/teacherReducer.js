//import { actionTeacherPost } from "../actions/teacherAction"

const initialState = {
    teachers: []
}

export const teacherReducer = (state = initialState, action) => {

    switch (action.type) {
        case "teacherPost":
            const teachers = ([...state.teachers, action.payload])
            return { ...state, teachers: teachers }

        default:
            return state;

    }
}