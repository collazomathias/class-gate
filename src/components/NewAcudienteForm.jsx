import React from "react";
import { useDispatch } from "react-redux";
import { action } from "../actions/newAcudienteAction";
import "../assets/styles/components/LoginForm.css";
import "../assets/styles/components/RegisterTeacherForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import ClassGateLogo from "../assets/imgs/class-gate.png";
import { MdDriveFileRenameOutline, MdPhoneEnabled, MdPersonAddAlt1 } from "react-icons/md";

export const NewAcudienteForm = () => {

    const dispatch = useDispatch();

    const { actionNewAcudiente } = action();
    
    const acudienteHandler = async (event) => {
        event.preventDefault();
        const docId = event.target.elements.acudienteDocumento.value;
        const nombre = event.target.elements.acudienteNombre.value;
        const celular = event.target.elements.acudienteCelular.value;
        const correo = event.target.elements.acudienteCorreo.value;
        const direccion = event.target.elements.acudienteDireccion.value;
        const newAcudiente = {
            documentoIdentidad: docId,
            nombre: nombre,
            celular: celular,
            correo: correo,
            direccion: direccion,
            estudiantes: [],
        };

        dispatch(actionNewAcudiente(newAcudiente));
    };

    return (
        <>

            <img className="logo" src={ClassGateLogo} alt="" />
            <form className="login-form-container register-form-container" onSubmit={acudienteHandler}>
                <div className="title-container">
                    <h1>Registro de acudiente</h1>
                </div>
                <div className="register-form-container-data">
                    <div>
                        <label htmlFor="acudienteDocumento">Documento de identidad</label>
                        <div className="input-container">
                            <FaUser className="input-icon" />
                            <input required type="text" pattern="[0-9]+" minLength="6" maxLength="12" className="form-control" id="acudienteDocumento" placeholder="Documento de identidad" />
                        </div>
                        <label htmlFor="acudienteNombre">Nombre completo</label>
                        <div className="input-container">
                            <FaLock className="input-icon" />
                            <input required type="text" pattern="[a-zA-Z ]+" minLength="2" maxLength="255" className="form-control" id="acudienteNombre" placeholder="Nombre completo" />
                        </div>
                        <label htmlFor="acudienteCelular">Celular</label>
                        <div className="input-container">
                            <MdPhoneEnabled className="input-icon icon-size" />
                            <input required type="tel" pattern="[0-9]+" minLength="10" maxLength="10" className="form-control" id="acudienteCelular" placeholder="Celular" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="acudienteDireccion">Dirección</label>
                        <div className="input-container">
                            <MdDriveFileRenameOutline className="input-icon icon-size" />
                            <input required type="text" minLength="2" maxLength="255" className="form-control" id="acudienteDireccion" placeholder="Dirección" />
                        </div>
                        <label htmlFor="acudienteCorreo">Correo</label>
                        <div className="input-container">
                            <MdDriveFileRenameOutline className="input-icon icon-size" />
                            <input required type="email" pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" minLength="2" maxLength="255" className="form-control" id="acudienteCorreo" placeholder="Correo" />
                        </div>
                    </div>
                </div>
                <button type="submit"><MdPersonAddAlt1 className="button-icon button-icon-login" /> Registrarme como acudiente</button>
            </form>
        </>
    );
}