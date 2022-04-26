import { signInWithEmailAndPassword } from "firebase/auth";

const actionLogin = (auth, email, password) => async(dispatch) => {
    try {
        const userLogged = await signInWithEmailAndPassword(auth, email, password);
        dispatch({
            type: "stateUser",
            payload: userLogged.user.email
        });
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

const actionCloseAlertMessage = () => async(dispatch) => {
    dispatch({
        type: "closeAlertMessage"
    });
}

export const loginAction = () => {
    return { actionLogin, actionCloseAlertMessage };
}