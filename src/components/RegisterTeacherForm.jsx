import React from "react";
import "../assets/styles/components/LoginForm.css";
import "../assets/styles/components/RegisterTeacherForm.css";
import firebaseApp from "../firebase/credentials";
import { getAuth, } from "firebase/auth";
import { useDispatch } from "react-redux";
import { actionRegister } from "../actions/actionRegister.js";
import { FaUser, FaLock } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import ClassGateLogo from "../assets/imgs/class-gate.png";
import { MdDriveFileRenameOutline, MdPhoneEnabled } from "react-icons/md";

const auth = getAuth(firebaseApp);

export const RegisterTeacherForm = () => {

    const { actionRegisterTeacher } = actionRegister();

    const dispatch = useDispatch();

    const submitHandler = async (event) => {
        event.preventDefault();

        const email = event.target.elements.inputUsername.value;
        const password = event.target.elements.inputPassword.value;

        const name = event.target.elements.inputName.value;
        const documento = event.target.elements.inputDocumento.value;
        const direccion = event.target.elements.inputDireccion.value;
        const celular = event.target.elements.inputCelular.value;
        const especialidad = event.target.elements.inputEspecialidad.value;

        const teacher = {
            correo: email,
            password: password,
            nombre: name,
            documentoIdentidad: documento,
            direccion: direccion,
            celular: celular,
            especialidad: especialidad

        }

        dispatch(actionRegisterTeacher(auth, teacher));
    }

    return (
        <>
            <img src={ClassGateLogo} alt="" />
            <form className="login-form-container" onSubmit={submitHandler}>
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

                <label htmlFor="name">Nombre</label>
                <div className="input-container">
                    <MdDriveFileRenameOutline className="input-icon icon-size" />
                    <input type="text" id='inputName' placeholder='Ingrese Nombre' required
                        minLength="4" maxLength="30" />
                </div>

                <label htmlFor="dir">Documento</label>
                <div className="input-container">
                    <MdDriveFileRenameOutline className="input-icon icon-size" />
                    <input type="number" id='inputDocumento' placeholder='Ingrese Documento' maxLength="255" required />
                </div>

                <label htmlFor="dir">Dirección</label>
                <div className="input-container">
                    <MdDriveFileRenameOutline className="input-icon icon-size" />
                    <input type="text" id='inputDireccion' placeholder='Ingrese Direccion' maxLength="255" required />
                </div>
                <label htmlFor="cel">Celular</label>
                <div className="input-container">
                    <MdPhoneEnabled className="input-icon icon-size" />
                    <input type="number" id='inputCelular' placeholder='Ingrese Celular' required />
                </div>
                <label htmlFor="spec">Especialidad</label>
                <div className="input-container">
                    <MdDriveFileRenameOutline className="input-icon icon-size" />
                    <input type="text" id='inputEspecialidad' placeholder='Ingrese Especialidad' required />
                </div>

                <button type="submit"><BiLogIn className="button-icon button-icon-login" /> Registrarme como maestro</button>
            </form>
        </>

    );
}