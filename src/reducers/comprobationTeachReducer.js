//import { actionTeacherGetDoc } from "../actions/teacherAction"

const initialState = {
    teachDocum: []
}

export const comprobationTeachReducer = (state = initialState, action) => {

    switch (action.type) {
        case "teacherGetDoc":
            //const teachDocum = ([...state.teachDocum, action.payload])
            return { ...state, teachDocum: action.payload }

        default:
            return state;

    }
}