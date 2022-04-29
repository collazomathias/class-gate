import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teacherAction } from "../actions/teacherAction";
import { actionGroup } from "../actions/actionGroup";

export const AddHoursToClass = ( idGrupo ) => {



    const { actionSearchMaestroByMateria } = teacherAction();

    const { actionAddHorarioClase } = actionGroup();
    const dispatch = useDispatch();

    //maestros por materia:
    const maestroByMateria = useSelector((state) => state.teacherReducer.searchMaestroByMateria);

    const searchMaestros = (e) => {
        console.log(e.target.value)
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
        console.log(arrDate)
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        const materia = event.target.elements.inputMateria.value;
        const profesor = event.target.elements.inputProfesor.value;
        const idProfesor = maestroByMateria.map(profname => profname.nombre === profesor ? profname.id : <></>)
        console.log(arrDate, idGrupo, idProfesor, materia)


        arrDate.length === 0 ? alert("debe agregar horarios") : dispatch(actionAddHorarioClase(arrDate, idGrupo, idProfesor, materia));

    }


    return (<>



        <form onSubmit={submitHandler}>
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

            <label htmlFor="inputProfesor">Maestro</label>
            <select id='inputProfesor' name='inputProfesor'>
                {maestroByMateria ? maestroByMateria.map(maestro => <option value={maestro.nombre}>{maestro.nombre}</option>) : <></>}
            </select>

            <label htmlFor="SeleccionDiaYHora">Dia y horario:</label>
            <div>
                <label htmlFor="dia">Dia:</label>
                <div>
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

                <label htmlFor="Hora">Hora inicial:</label>
                <div>
                    <input type="number" ref={inputHoraInicial} maxLength="2" required id='inputHoraInicial' />
                </div>

                <label htmlFor="Minutos">Minutos:</label>
                <div>
                    <input type="number" ref={inputMinutosInicial} maxLength="2" required id='inputMinutosInicial' />
                </div>

                <label htmlFor="Hora">Hora final:</label>
                <div>
                    <input type="number" ref={inputHoraFinal} maxLength="2" required id='inputHoraFinal' />
                </div>

                <label htmlFor="Minutos">Minutos:</label>
                <div>
                    <input type="number" ref={inputMinutosFinal} maxLength="2" required id='inputMinutosFinal' />
                </div>

                <button onClick={addDate} >Agregar horario</button>

            </div>





            <button type="submit" >Guardar cambios</button>

        </form>

    </>

    )



}