import React from "react";
import "../assets/styles/components/LoginForm.css";
import "../assets/styles/components/RegisterTeacherForm.css";
import firebaseApp from "../firebase/credentials";
import { getAuth, } from "firebase/auth";
import { useDispatch } from "react-redux";
import { actionRegister } from "../actions/actionRegister.js";
import { FaUser, FaLock } from "react-icons/fa";
import ClassGateLogo from "../assets/imgs/class-gate.png";
import { MdDriveFileRenameOutline, MdPhoneEnabled, MdPersonAddAlt1 } from "react-icons/md";

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
            <img className="logo" src={ClassGateLogo} alt="" />
            <form className="register-teacher-container" onSubmit={submitHandler}>
                <div className="register-teacher-title">
                    <h1>Registro de maestro</h1>
                </div>
                <div className="register-form-container">
                    <div>
                        <label htmlFor="inputUsername">Email</label>
                        <div className="input-container">
                            <FaUser className="input-icon icon-wo-ml" />
                            <input id="inputUsername" type="text" placeholder="Ingrese su email..." required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="inputPassword">Contraseña</label>
                        <div className="input-container">
                            <FaLock className="input-icon icon-wo-ml" />
                            <input id="inputPassword" type="password" placeholder="Ingrese su contraseña..." required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <div className="input-container">
                            <MdDriveFileRenameOutline className="input-icon icon-wo-ml icon-size" />
                            <input type="text" id="inputName" placeholder="Ingrese su nombre..." required
                                minLength="4" maxLength="30" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="dir">Documento</label>
                        <div className="input-container">
                            <MdDriveFileRenameOutline className="input-icon icon-size" />
                            <input type="number" id="inputDocumento" placeholder="Ingrese su documento..." minLength="10" maxLength="12" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="dir">Dirección</label>
                        <div className="input-container">
                            <MdDriveFileRenameOutline className="input-icon icon-wo-ml icon-size" />
                            <input type="text" id="inputDireccion" placeholder="Ingrese su dirección..." maxLength="255" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="cel">Celular</label>
                        <div className="input-container">
                            <MdPhoneEnabled className="input-icon icon-wo-ml icon-size" />
                            <input type="number" id="inputCelular" placeholder="Ingrese su celular..." required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="spec">Especialidad</label>
                        <div className="input-container">
                            <MdDriveFileRenameOutline className="input-icon icon-wo-ml icon-size" />
                            <input type="text" id="inputEspecialidad" placeholder="Ingrese su especialidad..." required />
                        </div>
                    </div>
                </div>
                <button type="submit"><MdPersonAddAlt1 /> Registrarme como maestro</button>
            </form>
        </>

    );
}