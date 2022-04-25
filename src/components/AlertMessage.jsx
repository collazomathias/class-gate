import React, { Fragment, useState, useEffect } from "react";
import "../assets/styles/components/AlertMessage.css";
import { FaExclamationCircle, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../actions/loginAction.js";

export const AlertMessage = () => {
    
    const { alertMessage } = useSelector(state => state.loginReducer);
    
    const dispatch = useDispatch();
    const { actionCloseAlertMessage } = loginAction();

    const [ error, setError ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ timerId, setTimerId ] = useState(null);

    useEffect(() => {
        if(timerId !== null) clearTimeout(timerId);
        if(alertMessage) {
            setError(alertMessage);
            if(alertMessage === "Firebase: Error (auth/user-not-found).") {
                setMessage("El email no está registrado");
            } else if(alertMessage === "Firebase: Error (auth/wrong-password).") {
                setMessage("La contraseña no es válida");
            } else if(alertMessage === "Firebase: Error (auth/invalid-email).") {
                setMessage("El email no es válido");
            } else if(alertMessage === "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).") {
                setMessage("El usuario ha sido bloqueado, intenta nuevamente en unos minutos.");
            } else {
                setMessage(alertMessage);
            }
        }
        let timer = setTimeout(() => {
            setError("");
            dispatch(actionCloseAlertMessage());
        }, 5000);
        setTimerId(timer);
    }, [actionCloseAlertMessage, alertMessage, dispatch, timerId])

    return (
        <Fragment>
            <div className={ error ? "alert-message-container show" : "alert-message-container hide" }>
                <span className="alert-icon-container">
                    <FaExclamationCircle className="fa-exclamation-circle" />
                </span>
                <span className="message">{ message }</span>
                <span onClick={() => { setError(""); dispatch(actionCloseAlertMessage()); }} className="close-button">
                    <FaTimes className="fa-times" />
                </span>
            </div>
        </Fragment>
    );
}