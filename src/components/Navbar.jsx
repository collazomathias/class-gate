import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { action } from "../actions/action.js";
import firebaseApp from "../firebase/credentials";
import { getAuth, signOut } from "firebase/auth";
import "../assets/styles/components/Navbar.css";
import ClassGateLogo from "../assets/imgs/class-gate.png";

const auth = getAuth(firebaseApp);

export const Navbar = (props) => {

    const location = useLocation();

    const { actionLogin } = action();

    const dispatch = useDispatch();

    const submitHandler = async(event) => {
        event.preventDefault();
        const email = event.target.elements.navbarInputUsername.value;
        const password = event.target.elements.navbarInputPassword.value;
        dispatch(actionLogin(auth, email, password));
    }

    return (
        <div className="navbar-container">
            <div className="navbar-title-container">
                <img src={ClassGateLogo} alt="" />
            </div>
            { 
                location.pathname === "/dashboard" ? null :
                <div className="navigation-links-container">
                    { location.pathname === "/" ? null : <a href="/">Landing Page</a> }
                    { location.pathname === "/login" ? null : <a href="/login">Ingresar a la plataforma</a> }
                </div>
            }   
            { 
                location.pathname !== "/" ? null : 
                <form onSubmit={submitHandler} className="navbar-login-container">
                    <input id="navbarInputUsername" type="text" placeholder="Ingrese su usuario..." required />
                    <input id="navbarInputPassword" type="password" placeholder="Ingrese su contraseña..." required />
                    <button type="submit">Ingresar</button>
                </form>
            }
            {
                location.pathname !== "/dashboard" ? null :
                <div className="logout-container">
                    <p>Bienvenido</p>
                    <span>{props.user ? props.user.email : null}</span>
                    <button onClick={() => signOut(auth)}>Cerrar sesión</button>
                </div> 
            }

        </div>
    );
}