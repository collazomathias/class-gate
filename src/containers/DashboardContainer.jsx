import React, { useState } from "react";
import { LoadingPage } from "../components/LoadingPage.jsx";
import { AlertMessage } from "../components/AlertMessage.jsx";
import { GroupForm } from "../components/GroupForm.jsx";
import "../assets/styles/containers/DashboardContainer.css";
import { DashboardMenu } from "../components/DashboardMenu.jsx";
import { GroupList } from "../components/GroupList.jsx";
import { NewStudentForm } from "../components/NewStudentForm.jsx";
import { StudentList } from "../components/StudentList.jsx";
import TeacherList from "../components/TeacherList";
import { MateriaList } from "../components/MateriaList.jsx";
import AcudienteList from "../components/AcudienteList.jsx";
import { ManagementStudent } from "../components/ManagementStudent.jsx";

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

    const [docIdAcudiente, setDocIdAcudiente] = useState(null);

    const [isManagementMaterias, setIsManagementMaterias] = useState(false);
    
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
                                { newStudent ? <>
                                    < AcudienteList 
                                        setIsManagementStudents={setIsManagementStudents}
                                        setDocIdAcudiente={setDocIdAcudiente}    
                                    />
                                    <ManagementStudent
                                        setIsManagementStudents={setIsManagementStudents}
                                        isManagementStudents={isManagementStudents}
                                        docIdAcudiente={docIdAcudiente}
                                        setDocIdAcudiente={setDocIdAcudiente}  
                                    />
                                </> : null }
                                {newTeacher ? <>
                                    <TeacherList isManagementMaterias={isManagementMaterias} setIsManagementMaterias={setIsManagementMaterias} />
                                    <MateriaList isManagementMaterias={isManagementMaterias} setIsManagementMaterias={setIsManagementMaterias} />                   
                                </> : null}
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