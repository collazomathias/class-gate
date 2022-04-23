import React from "react";
import "../assets/styles/components/LoginForm.css";
import firebaseApp from "../firebase/credentials";
import { getAuth,  } from "firebase/auth";
import { useDispatch } from "react-redux";
import { action } from "../actions/action.js";

const auth = getAuth(firebaseApp);

export const LoginForm = () => {

    const { actionLogin } = action();

    const dispatch = useDispatch();

    const submitHandler = async(event) => {
        event.preventDefault();
        const email = event.target.elements.inputUsername.value;
        const password = event.target.elements.inputPassword.value;
        dispatch(actionLogin(auth, email, password));
    }

    return (
        <form className="login-form-container" onSubmit={ submitHandler }>
            <div className="title-container">
                <h1>Login</h1>
            </div>
            <label htmlFor="inputUsername">Usuario</label>
            <input id="inputUsername" type="text" placeholder="Ingresa tu usuario..." required />
            <label htmlFor="inputPassword">Contraseña</label>
            <input id="inputPassword" type="password" placeholder="Ingresa tu contraseña..." required />
            <button type="submit" className="login-button">Ingresar a la plataforma</button>
        </form>
    );
}