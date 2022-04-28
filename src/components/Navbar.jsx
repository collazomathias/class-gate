import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import firebaseApp from "../firebase/credentials";
import { getAuth, signOut } from "firebase/auth";
import "../assets/styles/components/Navbar.css";
import ClassGateLogo from "../assets/imgs/class-gate.png";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaUser, FaLock } from "react-icons/fa";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { loginAction } from "../actions/loginAction.js";

const auth = getAuth(firebaseApp);

export const Navbar = (props) => {

    const location = useLocation();

    const { actionLogin } = loginAction();

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
                    { location.pathname === "/" ? null : <a href="/"><HiOutlinePresentationChartBar className="button-icon" /> Landing Page</a> }
                    { location.pathname === "/login" ? null : <a href="/login"><AiFillHome className="button-icon" /> Ingresar a la plataforma</a> }
                    { location.pathname === "/register-teacher" || location.pathname === "/" ? null : <a href="/register-teacher"><MdPersonAddAlt1 className="button-icon" /> Registrarme como maestro </a>  }
                    { location.pathname === "/register-attendant" || location.pathname === "/" ? null : <a href="/register-attendant"><MdPersonAddAlt1 className="button-icon" /> Registrarme como acudiente </a>  }
                </div>
            }   
            { 
                location.pathname !== "/" ? null : 
                <form onSubmit={submitHandler} className="navbar-login-container">
                    <FaUser className="navbar-input-icon" />
                    <input id="navbarInputUsername" type="text" placeholder="Ingrese su usuario..." required />
                    <FaLock className="navbar-input-icon" />
                    <input id="navbarInputPassword" type="password" placeholder="Ingrese su contraseña..." required />
                    <button type="submit"><BiLogIn className="button-icon" /> Ingresar</button>
                </form>
            }
            {
                location.pathname !== "/dashboard" ? null :
                <div className="logout-container">
                    <p>Bienvenido</p>
                    <span>{props.user ? props.user.email : null}</span>
                    <button onClick={() => signOut(auth)}><BiLogOut className="button-icon" /> Cerrar sesión</button>
                </div> 
            }

        </div>
    );
}