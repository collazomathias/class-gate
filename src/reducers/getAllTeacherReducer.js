


const initialState = {
    teacherGetAll: []
}

export const  getAllTeacherReducer = (state = initialState, action) => {

    switch (action.type) {
        case "teacherGetAll":
           // const teacherGetAll = ([...state.teacherGetAll, action.payload])
            return { ...state, teacherGetAll: action.payload }

        default:
            return state;

    }
}