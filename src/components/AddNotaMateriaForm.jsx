import React from "react";
import { useDispatch } from "react-redux";
import { teacherAction } from "../actions/teacherAction";
import "../assets/styles/components/GroupForm.css";




export const AddNotaMateriaForm = (/* idEstudiante, correo */) => {

    const idEstudiante = "bea5b41f-b";
    const correo = "maestro2@gmail.com";




    const dispatch = useDispatch();

    const { addCalification } = teacherAction();

    const addCalificacion = (event) => {
        event.preventDefault()
        const fecha = event.target.elements.dia.value + "/" + event.target.elements.mes.value + "/" + event.target.elements.anio.value;
        const descNota = event.target.elements.nombreNota.value;
        const nota = event.target.elements.selectNota.value;
        const objToSend = {
            nombreMateria: descNota,
            fecha: fecha,
            puntaje: nota.toString()
        }
        console.log(fecha, descNota, nota)
        dispatch(addCalification(correo, idEstudiante, objToSend))

    }


    return (


        <form onSubmit={addCalificacion} className="group-form-container">

            <div className="group-title-container">
                <h1>Calificar</h1>
            </div>

            <label htmlFor="nombreNota">Nombre nota:</label>
            <div className="input-container">
                <input type="text" maxLength="50" required id='nombreNota' />
            </div>

            <label htmlFor="dia">Dia:</label>
            <div className="input-container">
                <input type="number" maxLength="2" required id='dia' />
            </div>

            <label htmlFor="mes">Mes:</label>
            <div className="input-container">
                <input type="number" maxLength="2" required id='mes' />
            </div>

            <label htmlFor="anio">Año:</label>
            <div className="input-container">
                <input type="number" maxLength="4" required id='anio' />
            </div>

            <label htmlFor="selectNota">Seleccione Nota 1 a 5:</label>
            <div className="input-container">
                <input type="number" id='selectNota' maxLength="3" max="5" step={0.1} required />

            </div>

            <button type="submit" >Guardar cambios</button>

        </form>

    )
}
