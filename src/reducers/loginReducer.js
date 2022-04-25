const initialState = {
    userLogged: null,
    alertMessage: ""
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case "stateUser":
            return { ...state, userLogged: action.payload, alertMessage: "" }
        case "alertMessage":
            return { ...state, alertMessage: action.payload }
        case "closeAlertMessage":
            return { ...state, alertMessage: "" }
        default: 
            return state;
    }
}