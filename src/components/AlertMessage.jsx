import React, { Fragment, useState, useEffect } from "react";
import "../assets/styles/components/AlertMessage.css";
import { FaExclamationCircle, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

export const AlertMessage = () => {
    
    const { alertMessage } = useSelector(state => state.loginReducer);

    const [ error, setError ] = useState("");
    const [ message, setMessage ] = useState("");

    useEffect(() => {
        if(alertMessage) {
            setError(alertMessage);
            if(alertMessage === "Firebase: Error (auth/user-not-found).") {
                setMessage("El username no es válido");
            } else if(alertMessage === "Firebase: Error (auth/wrong-password).") {
                setMessage("La contraseña no es válida");
            } else {
                setMessage(alertMessage);
            }
        }
        setTimeout(() => {
            setError("");
        }, 5000);
    }, [alertMessage])

    return (
        <Fragment>
            <div className={ error ? "alert-message-container show" : "alert-message-container hide" }>
                <span className="alert-icon-container">
                    <FaExclamationCircle className="fa-exclamation-circle" />
                </span>
                <span className="message">{ message }</span>
                <span onClick={() => setError("")} className="close-button">
                    <FaTimes className="fa-times" />
                </span>
            </div>
        </Fragment>
    );
}