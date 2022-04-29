import React, { Fragment, useState, useEffect } from "react";
import "../assets/styles/components/SuccessMessage.css";
import { FaTimes } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../actions/loginAction.js";

export const SuccessMessage = () => {
    
    const { successMessage } = useSelector(state => state.loginReducer);
    
    const dispatch = useDispatch();
    const { actionCloseSuccessMessage } = loginAction();

    const [ success, setSuccess ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ timerId, setTimerId ] = useState(null);

    useEffect(() => {
        if(timerId !== null) clearTimeout(timerId);
        if(successMessage) {
            setSuccess(successMessage);
            setMessage(successMessage);
        }
        let timer = setTimeout(() => {
            setSuccess("");
            dispatch(actionCloseSuccessMessage());
        }, 5000);
        setTimerId(timer);
    }, [actionCloseSuccessMessage, successMessage, dispatch, timerId])

    return (
        <Fragment>
            <div className={ success ? "success-message-container show" : "success-message-container hide" }>
                <span className="success-icon-container">
                    <AiOutlineCheck className="fa-ok" />
                </span>
                <span className="message">{ message }</span>
                <span onClick={() => { setSuccess(""); dispatch(actionCloseSuccessMessage()); }} className="close-button-ok">
                    <FaTimes className="fa-times" />
                </span>
            </div>
        </Fragment>
    );
}