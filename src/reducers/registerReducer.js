const initialState = {
    teachers: []

}

export const teacherReducer = (state = initialState, action) => {

    switch (action.type) {
        case "addTeacher":
            return {...state, teachers:[...state.teachers, action.payload]}
        default:
            return state;

    }
}


