import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teacherAction } from "../actions/teacherAction";
import { actionGroup } from "../actions/actionGroup";
import { IoMdClose } from "react-icons/io";
import "../assets/styles/components/AddHoursToClass.css";

export const AddHoursToClass = ({ idGroup, manageGroupClass, setManageGroupClass }) => {

console.log(idGroup)

    const { actionSearchMaestroByMateria } = teacherAction();

    const { actionAddHorarioClase } = actionGroup();
    const dispatch = useDispatch();

    //maestros por materia:
    const maestroByMateria = useSelector((state) => state.teacherReducer.searchMaestroByMateria);
    console.log(maestroByMateria)
    const searchMaestros = (e) => {
        dispatch(actionSearchMaestroByMateria(e.target.value));
    }
    //agrego elementos al array para despues mandarlo como objeto
    let arrDate = [];
    const inputHoraInicial = useRef(null);
    const inputHoraFinal = useRef(null);
    const inputMinutosInicial = useRef(null);
    const inputMinutosFinal = useRef(null);
    const dia = useRef(null);

    const addDate = (event) => {
        event.preventDefault();

        if ((inputHoraInicial.current.value < 0 || inputHoraInicial.current.value > 23) || (inputHoraFinal.current.value < 0 || inputHoraFinal.current.value > 23)) {
            alert("Ingrese hora hasta 23")
            return
        }
        if ((inputMinutosInicial.current.value < 0 || inputMinutosInicial.current.value > 59) || (inputMinutosFinal.current.value < 0 || inputMinutosFinal.current.value > 59)) {
            alert("Ingrese minutos hasta 60")
            return
        }

        arrDate.push(
            {
                horarioInicial: inputHoraInicial.current.value + ":" + inputMinutosInicial.current.value,
                horarioFinal: inputHoraFinal.current.value + ":" + inputMinutosFinal.current.value,
                dia: dia.current.value
            }
        )
        alert("horario ingresado correctamente")
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        const materia = event.target.elements.inputMateria.value;
        const profesor = event.target.elements.inputProfesor.value;
        let idProfesor=""
        maestroByMateria.map(profname => profname.nombre===profesor? idProfesor = profname.id: <></> )
        arrDate.length === 0 ? alert("debe agregar horarios") : dispatch(actionAddHorarioClase(arrDate, idGroup, idProfesor, materia));
        alert("Datos guardados!!")
        inputHoraInicial.current.value = "";
        inputHoraFinal.current.value = "";
        inputMinutosInicial.current.value = "";
        inputMinutosFinal.current.value = "";
    }


    return (
        <div className={ manageGroupClass ? "modal-clases-container" : "modal-clases-container-hidden" }>
            <form onSubmit={submitHandler}>
                <span onClick={() => setManageGroupClass(false)} className="modal-close-button"><IoMdClose /></span>
                <h1>Agregar clase</h1>
                <div className="label-select-container">
                    <label htmlFor="inputMateria">Materia</label>
                    <select onChange={searchMaestros} id='inputMateria' name='inputMateria' >
                        <option value="Trigonometria">Trigonometria</option>
                        <option value="Filosofía">Filosofía</option>
                        <option value="Español y Literatura">Español y Literatura</option>
                        <option value="Inglés">Inglés</option>
                        <option value="Política y Economía">Política y Economía</option>
                        <option value="Religión">Religión</option>
                        <option value="Física">Física</option>
                        <option value="Química">Química</option>
                    </select>
                </div>
                <div className="label-select-container">
                    <label htmlFor="inputProfesor">Maestro</label>
                    <select id='inputProfesor' name='inputProfesor'>
                        {maestroByMateria ? maestroByMateria.map(maestro => <option key={maestro.id} value={maestro.nombre}>{maestro.nombre}</option>) : <></>}
                    </select>
                </div>
                <div className="label-select-container">
                    <label htmlFor="dia">Dia:</label>
                    <select name="dia" ref={dia}>
                        <option value="Lunes" >Lunes</option>
                        <option value="Martes">Martes</option>
                        <option value="Miercoles">Miercoles</option>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                        <option value="Sabado">Sabado</option>
                        <option value="Domingo">Domingo</option>
                    </select>
                </div>
                <div className="label-input-container">
                    <label htmlFor="Hora">Hora inicial:</label>
                    <input type="number" ref={inputHoraInicial} maxLength="2" required id='inputHoraInicial' />
                </div>
                <div className="label-input-container">
                    <label htmlFor="Minutos">Minutos:</label>
                    <input type="number" ref={inputMinutosInicial} maxLength="2" required id='inputMinutosInicial' />
                </div>
                <div className="label-input-container">
                    <label htmlFor="Hora">Hora final:</label>
                    <input type="number" ref={inputHoraFinal} maxLength="2" required id='inputHoraFinal' />
                </div>
                <div className="label-input-container">
                    <label htmlFor="Minutos">Minutos:</label>
                    <input type="number" ref={inputMinutosFinal} maxLength="2" required id='inputMinutosFinal' />
                </div>
                <div className="modal-clases-buttons-container">
                    <button className="btn-add-hr" onClick={addDate} >Agregar horario</button>
                    <button className="btn-add-class" type="submit" >Guardar cambios</button>
                </div>
            </form>
        </div>
    )



}