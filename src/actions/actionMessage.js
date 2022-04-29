const actionErrorMessage = (message) => async(dispatch) => {
    dispatch({
        type: "alertMessage",
        payload: message
    });
}

const actionSuccessMessage = (message) => async(dispatch) => {
    dispatch({
        type: "successMessage",
        payload: message
    })
}

export const actionMessage = () => {
    return { actionErrorMessage, actionSuccessMessage };
}