const initialState = {
    userLogged: null,
    alertMessage: "",
    successMessage: ""
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case "stateUser":
            return { ...state, userLogged: action.payload, alertMessage: "" }
        case "alertMessage":
            return { ...state, alertMessage: action.payload }
        case "closeAlertMessage":
            return { ...state, alertMessage: "" }
        case "successMessage":
            return { ...state, successMessage: action.payload }
        case "closeSuccessMessage":
            return { ...state, successMessage: "" }
        default: 
            return state;
    }
}