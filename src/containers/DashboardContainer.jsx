import React, { useState, useRef } from "react";
import { LoadingPage } from "../components/LoadingPage.jsx";
import { AlertMessage } from "../components/AlertMessage.jsx";
import { GroupForm } from "../components/GroupForm.jsx";
import "../assets/styles/containers/DashboardContainer.css";
import { DashboardMenu } from "../components/DashboardMenu.jsx";
import { GroupList } from "../components/GroupList.jsx";
import { StudentList } from "../components/StudentList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { teacherAction } from "../actions/teacherAction";
import { TeacherForm } from "../components/TeacherForm";
import TeacherList from "../components/TeacherList";
import { Teacher } from "../components/Teacher";


export const DashboardContainer = (props) => {

    //Hooks para mostrar contenidos del menú
    const [newGroup, setNewGroup] = useState(false);
    const [newStudent, setNewStudent] = useState(false);
    const [newTeacher, setNewTeacher] = useState(false);
    //FIN Hooks para mostrar contenidos del menú


    const [isEditingGroup, setIsEditingGroup] = useState(false);
    const [editGroupData, setEditGroupData] = useState(null);

    const [isManagementStudents, setIsManagementStudents] = useState(false);
    const [managementStudentsGroupData, setManagementStudentsGroupData] = useState(null);






    //teacher:

    const [showMsg, setShowMsg] = useState(false)

    const [reingresoDoc, setreingresoDoc] = useState("")


    const dispatch = useDispatch();

    const { actionTeacherGetDoc } = teacherAction();

    let teacher = useSelector(state => state.teacherReducer.teachDocum)
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

    return (
        <>
            <LoadingPage />
            <AlertMessage />
            <div className="dashboard-container">
                <DashboardMenu
                    role={props.role}
                    newGroup={newGroup}
                    setNewGroup={setNewGroup}
                    newStudent={newStudent}
                    setNewStudent={setNewStudent}
                    newTeacher={newTeacher}
                    setNewTeacher={setNewTeacher}
                />
                <div className="dashboard-actions-container">
                    {
                        props.role === "administrativo" ? (
                            <>
                                {newGroup ? <>
                                    <GroupForm
                                        editGroupData={editGroupData}
                                        isEditingGroup={isEditingGroup}
                                        setEditGroupData={setEditGroupData}
                                        setIsEditingGroup={setIsEditingGroup}
                                    />
                                    <GroupList
                                        setEditGroupData={setEditGroupData}
                                        setIsEditingGroup={setIsEditingGroup}
                                        setIsManagementStudents={setIsManagementStudents}
                                        setManagementStudentsGroupData={setManagementStudentsGroupData}
                                    />
                                    <StudentList
                                        isManagementStudents={isManagementStudents}
                                        managementStudentsGroupData={managementStudentsGroupData}
                                        setIsManagementStudents={setIsManagementStudents}
                                        setManagementStudentsGroupData={setManagementStudentsGroupData}
                                    />
                                </> : null}
                                {newStudent ? "Nuevo estudiante" : null}
                                {newTeacher ?
                                    <div>
                                        <TeacherList />
                                        <button onClick={retInput}>Registrar Maestro</button>

                                        {showMsg ? <>
                                            <input type="number" ref={docInput} required placeholder="Ingrese Documento" minLength="10" maxLength="12" />
                                            <button onClick={btnRegister}>Comprobar</button></> : <></>}

                                        {teacher === reingresoDoc ? <TeacherForm docInput={reingresoDoc} /> : (teacher.nombre ? <Teacher teacher={teacher} /> : <></>)}

                                    </div>
                                    : null}
                            </>
                        ) : null

                    }
                    {
                        props.role === "maestro" ? (
                            <h1>Maestro</h1>
                        ) : null
                    }
                    {
                        props.role === "acudiente" ? (
                            <h1>Acudiente</h1>
                        ) : null
                    }
                </div>
            </div>
        </>
    );
}