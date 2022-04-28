const initialState = {
    acudientes: [],
    students: [],
}

export const acudienteReducer = (state = initialState, action) => {

    switch (action.type) {
        case "acudienteGetAll":
            return { ...state, acudientes: action.payload }
        case "studentSaved":
            return { ...state, students: [...state.students, action.payload] }
        case "studentFromAcudiente":
            return { ...state, students: action.payload }
        default:
            return state;
    }
}