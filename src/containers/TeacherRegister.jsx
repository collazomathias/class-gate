
import { useDispatch, useSelector } from "react-redux";
import { teacherAction } from "../actions/teacherAction";
import { TeacherForm } from "../components/TeacherForm";
import TeacherList from "../components/TeacherList";
import { useRef, useState } from "react";

export const TeacherRegister = () => {
    //state para mostrar input
    const [showMsg, setShowMsg] = useState(false)

    const dispatch = useDispatch();

    const { actionTeacherGetDoc } = teacherAction();

    const teacher = useSelector(state => state.comprobationTeachReducer.teachDocum)

    const docInput = useRef(null);
    
    //boton registrar chequea por documento si existe maestro
    const btnRegister = () => {
        dispatch(actionTeacherGetDoc(docInput.current.value))
        console.log(docInput.current.value)
    }

    const retInput = () => {
        showMsg === false ? setShowMsg(true) : setShowMsg(false);
    }

    return (<>

        <div>
            <TeacherList />
            <p>Bienvenido</p>
            <button onClick={retInput}>Registrar Maestro</button>
            {showMsg ? <>
                    <input type="number" ref={docInput} />
                    <button onClick={btnRegister}>Comprobar</button>
                
            </> : <></>}
            <TeacherForm />

        </div>
    </>
    );
}