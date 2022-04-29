const initialState = {
    group: null,
}

export const teacherManagerReducer = (state = initialState, action) => {

    switch (action.type) {
        case "getGroup":
            return {...state, group: action.payload}
        default:
            return state;

    }
}