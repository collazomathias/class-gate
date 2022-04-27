const initialState = {
    acudiente: null,
    estudiantes: [],
    alertMessage: ""
}

export const newStudentReducer = (state = initialState, action) => {
    switch(action.type){
        case "stateAcudiente":
            return { ...state, acudiente: action.payload, estudiantes: action.payload.estudiantes, alertMessage: "" }
        case "AcudienteNotFound":
            return { ...state, acudiente: null }
        case "stateNewAcudiente":
            return { ...state, acudiente: action.payload, alertMessage: "" }
        case "acudienteSaved":
            return { ...state, acudiente: null, estudiantes: [] }
        case "stateNewStudent":
            return { ...state, estudiantes: [...state.estudiantes, action.payload], alertMessage: "" }
        case "alertMessage":
            return { ...state, alertMessage: action.payload }
        case "closeAlertMessage":
            return { ...state, alertMessage: "" }
        default: 
            return state;
    }
}