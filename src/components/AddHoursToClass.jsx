import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teacherAction } from "../actions/teacherAction";
import { actionGroup } from "../actions/actionGroup";
import { IoMdClose } from "react-icons/io";
import { actionMessage } from "../actions/actionMessage";
import "../assets/styles/components/AddHoursToClass.css";

export const AddHoursToClass = ({ idGroup, manageGroupClass, setManageGroupClass, listaHorarios, setListaHorarios }) => {

    const { actionSearchMaestroByMateria } = teacherAction();
    const { actionErrorMessage, actionSuccessMessage } = actionMessage();

    const { actionAddHorarioClase } = actionGroup();
    const dispatch = useDispatch();

    //maestros por materia:
    const maestroByMateria = useSelector((state) => state.teacherReducer.searchMaestroByMateria);
    const searchMaestros = (e) => {
        dispatch(actionSearchMaestroByMateria(e.target.value));
    }
    //agrego elementos al array para despues mandarlo como objeto
    const inputHoraInicial = useRef(null);
    const inputHoraFinal = useRef(null);
    const inputMinutosInicial = useRef(null);
    const inputMinutosFinal = useRef(null);
    const dia = useRef(null);

    const addDate = (event) => {
        event.preventDefault();
        if (inputHoraInicial.current.value === "" || inputHoraFinal.current.value ===  "" || inputMinutosInicial.current.value === "" || inputMinutosFinal.current.value === "") {
            dispatch(actionErrorMessage("Debe ingresar todos los campos correctamente"));
            return
        }
        if ((inputHoraInicial.current.value < 0 || inputHoraInicial.current.value > 23) || (inputHoraFinal.current.value < 0 || inputHoraFinal.current.value > 23)) {
            dispatch(actionErrorMessage("Debe ingresar una hora entre 00 y 23"));
            return
        }
        if ((inputMinutosInicial.current.value < 0 || inputMinutosInicial.current.value > 59) || (inputMinutosFinal.current.value < 0 || inputMinutosFinal.current.value > 59)) {
            dispatch(actionErrorMessage("Debe ingresar un minuto entre 00 y 59"));
            return
        }
        listaHorarios.push(
            {
                horarioInicial: inputHoraInicial.current.value + ":" + inputMinutosInicial.current.value,
                horarioFinal: inputHoraFinal.current.value + ":" + inputMinutosFinal.current.value,
                dia: dia.current.value
            }
        )
        inputHoraInicial.current.value = "";
        inputHoraFinal.current.value = "";
        inputMinutosInicial.current.value = "";
        inputMinutosFinal.current.value = "";
        inputHoraInicial.current.focus();
        dispatch(actionSuccessMessage("Horario agregado con ??xito"));
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        if(event.target.elements.inputMateria.value === "default") {
            dispatch(actionErrorMessage("Debe elegir una materia"));
            return;
        }
        if(event.target.elements.inputProfesor.value === "") {
            dispatch(actionErrorMessage("Debe elegir una materia dictada por un profesor"));
            return;
        }
        const materia = event.target.elements.inputMateria.value;
        const profesor = event.target.elements.inputProfesor.value;
        let idProfesor="";
        maestroByMateria.map(profname => profname.nombre === profesor ? idProfesor = profname.id : <></> );
        if(listaHorarios.length === 0) {
            dispatch(actionErrorMessage("Debe agregar horarios a la clase"));
            return;
        } else {
            dispatch(actionAddHorarioClase(listaHorarios, idGroup, idProfesor, materia));
            setListaHorarios([]);
            setManageGroupClass(false)
            dispatch(actionSuccessMessage("Clase a??adida con ??xito"));
        } 
        event.target.reset();
    }


    return (
        <div className={ manageGroupClass ? "modal-clases-container" : "modal-clases-container-hidden" }>
            <form onSubmit={submitHandler}>
                <span onClick={() => setManageGroupClass(false)} className="modal-close-button"><IoMdClose /></span>
                <h1>Agregar clase</h1>
                <div className="label-select-container">
                    <label htmlFor="inputMateria">Materia</label>
                    <select onChange={searchMaestros} id='inputMateria' name='inputMateria' >
                        <option value="default"> Seleccione una materia...</option>
                        <option value="Trigonometria">Trigonometria</option>
                        <option value="Filosof??a">Filosof??a</option>
                        <option value="Espa??ol y Literatura">Espa??ol y Literatura</option>
                        <option value="Ingl??s">Ingl??s</option>
                        <option value="Pol??tica y Econom??a">Pol??tica y Econom??a</option>
                        <option value="Religi??n">Religi??n</option>
                        <option value="F??sica">F??sica</option>
                        <option value="Qu??mica">Qu??mica</option>
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
                <div className="label-input-container-hour">
                    <label htmlFor="Hora">Hora inicial:</label>
                    <input type="number" ref={inputHoraInicial} maxLength="2" id='inputHoraInicial' />
                </div>
                <div className="label-input-container-hour">
                    <label htmlFor="Minutos">Minutos:</label>
                    <input type="number" ref={inputMinutosInicial} maxLength="2" id='inputMinutosInicial' />
                </div>
                <div className="label-input-container-hour">
                    <label htmlFor="Hora">Hora final:</label>
                    <input type="number" ref={inputHoraFinal} maxLength="2" id='inputHoraFinal' />
                </div>
                <div className="label-input-container-hour">
                    <label htmlFor="Minutos">Minutos:</label>
                    <input type="number" ref={inputMinutosFinal} maxLength="2" id='inputMinutosFinal' />
                </div>
                <div className="modal-clases-buttons-container">
                    <button className="btn-add-hr" onClick={addDate} >Agregar horario</button>
                    <button className="btn-add-class" type="submit" >Guardar cambios</button>
                </div>
            </form>
        </div>
    )



}