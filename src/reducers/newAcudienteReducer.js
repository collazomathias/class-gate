const initialState = {
    alertMessage: ""
}

export const newAcudienteReducer = (state = initialState, action) => {
    switch(action.type){
        case "alertMessage":
            return { ...state, alertMessage: action.payload }
        case "closeAlertMessage":
            return { ...state, alertMessage: "" }
        default: 
            return state;
    }
}