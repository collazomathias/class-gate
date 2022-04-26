
import { useDispatch, useSelector } from "react-redux";
import { teacherAction } from "../actions/teacherAction";
import { TeacherForm } from "../components/TeacherForm";
import TeacherList from "../components/TeacherList";
import { Teacher } from "../components/Teacher";
import { useRef, useState } from "react";

export const TeacherContainer = () => {
    //state para mostrar input
    const [showMsg, setShowMsg] = useState(false)

    const [reingresoDoc, setreingresoDoc] = useState("")


    const dispatch = useDispatch();

    const { actionTeacherGetDoc } = teacherAction();

    let teacher = useSelector(state => state.comprobationTeachReducer.teachDocum)
    const docInput = useRef(null);

    //auxiliar para reingresar documento
    

    //boton registrar chequea por documento si existe maestro
    const btnRegister = () => {
        
        if (docInput.current.value === "" || docInput.current.value.length !== 12) {
            alert("Ingrese un documento numerico de 12 digitos!");
            return;
        }
        setreingresoDoc(docInput.current.value)
        dispatch(actionTeacherGetDoc(docInput.current.value))
    }
    //retorno un input para consulta por documento
    const retInput = () => {
        showMsg === false ? setShowMsg(true) : <></>;

    }

    return (<>

        <div>
            <TeacherList />
            <p>Bienvenido</p>
            <button onClick={retInput}>Registrar Maestro</button>

            {showMsg ? <>
                <input type="number" ref={docInput} required placeholder="Ingrese Documento" minLength="10" maxLength="12"/>
                <button onClick={btnRegister}>Comprobar</button></> : <></>}

            {teacher === reingresoDoc ? <TeacherForm docInput={docInput.current.value} /> : (teacher.nombre ? <Teacher teacher={teacher} /> : <></>)}

        </div>
    </>
    );
}