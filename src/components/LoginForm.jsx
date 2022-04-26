import React from "react";
import "../assets/styles/components/LoginForm.css";
import firebaseApp from "../firebase/credentials";
import { getAuth,  } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginAction } from "../actions/loginAction.js";
import { FaUser, FaLock } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import ClassGateLogo from "../assets/imgs/class-gate.png";

const auth = getAuth(firebaseApp);

export const LoginForm = () => {

    const { actionLogin } = loginAction();

    const dispatch = useDispatch();

    const submitHandler = async(event) => {
        event.preventDefault();
        const email = event.target.elements.inputUsername.value;
        const password = event.target.elements.inputPassword.value;
        dispatch(actionLogin(auth, email, password));
    }

    return (
        <>
            <img src={ClassGateLogo} alt="" />
            <form className="login-form-container" onSubmit={ submitHandler }>
                <div className="title-container">
                    <h1>Login</h1>
                </div>
                <label htmlFor="inputUsername">Usuario</label>
                <div className="input-container">
                    <FaUser className="input-icon" /> 
                    <input id="inputUsername" type="text" placeholder="Ingresa tu usuario..." required />
                </div>
                <label htmlFor="inputPassword">Contraseña</label>
                <div className="input-container">
                    <FaLock className="input-icon" />
                    <input id="inputPassword" type="password" placeholder="Ingresa tu contraseña..." required />
                </div>
                <button type="submit"><BiLogIn className="button-icon button-icon-login" /> Ingresar a la plataforma</button>
            </form>
        </>
        
    );
}