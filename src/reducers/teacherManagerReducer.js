const initialState = {
    group: null,
    materias: null,
}

export const teacherManagerReducer = (state = initialState, action) => {

    switch (action.type) {
        case "getGroup":
            return {...state, group: action.payload}
        case "getMateria":
            return {...state, materias: action.payload}
        default:
            return state;

    }
}