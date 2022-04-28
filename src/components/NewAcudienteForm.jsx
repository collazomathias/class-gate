import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../actions/newAcudienteAction";

export const NewAcudienteForm = () => {

    const dispatch = useDispatch();

    const { actionNewAcudiente, actionCloseAlertMessage } = action();
    
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

    return (<>
        <h2>Registro de acudiente</h2>
        <form onSubmit={acudienteHandler}>
            <label htmlFor="acudienteDocumento">Documento de identidad</label>
            <input required type="text" pattern="[0-9]+" minLength="6" maxLength="12" className="form-control" id="acudienteDocumento" placeholder="Documento de identidad" />
            <label htmlFor="acudienteNombre">Nombre completo</label>
            <input required type="text" pattern="[a-zA-Z ]+" minLength="2" maxLength="255" className="form-control" id="acudienteNombre" placeholder="Nombre completo" />
            <label htmlFor="acudienteCelular">Celular</label>
            <input required type="tel" pattern="[0-9]+" minLength="10" maxLength="10" className="form-control" id="acudienteCelular" placeholder="Celular" />
            <label htmlFor="acudienteCorreo">Correo</label>
            <input required type="email" pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" minLength="2" maxLength="255" className="form-control" id="acudienteCorreo" placeholder="Correo" />
            <label htmlFor="acudienteDireccion">Dirección</label>
            <input required type="text" minLength="2" maxLength="255" className="form-control" id="acudienteDireccion" placeholder="Dirección" />

            <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
    </>);
}