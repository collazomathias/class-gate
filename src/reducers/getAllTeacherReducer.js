


const initialState = {
    teachDocum: []
}

export const teacherGetAll = (state = initialState, action) => {

    switch (action.type) {
        case "teacherGetAll":
            const teacherGetAll = ([...state.teachDocum, action.payload])
            return { ...state, teacherGetAll: teacherGetAll }

        default:
            return state;

    }
}