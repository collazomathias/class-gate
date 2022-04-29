import React, { useState } from "react";
import { LoadingPage } from "../components/LoadingPage.jsx";
import { AlertMessage } from "../components/AlertMessage.jsx";
import { GroupForm } from "../components/GroupForm.jsx";
import "../assets/styles/containers/DashboardContainer.css";
import { DashboardMenu } from "../components/DashboardMenu.jsx";
import { GroupList } from "../components/GroupList.jsx";
import { StudentList } from "../components/StudentList.jsx";
import TeacherList from "../components/TeacherList";
import { MateriaList } from "../components/MateriaList.jsx";
import AcudienteList from "../components/AcudienteList.jsx";
import { ManagementStudent } from "../components/ManagementStudent.jsx";
import { ManagementDirectorGroup } from "../components/ManagementDirectorGroup.jsx";
import { AddHoursToClass } from "../components/AddHoursToClass.jsx";
import { HorariosList } from "../components/HorariosList.jsx";
import { Contact } from "../components/Contact.jsx";

export const DashboardContainer = (props) => {

    //Hooks para mostrar contenidos del menú
    const [newGroup, setNewGroup] = useState(false);
    const [newStudent, setNewStudent] = useState(true);
    const [newTeacher, setNewTeacher] = useState(false);
    const [contact, setContact] = useState(true);
    //FIN Hooks para mostrar contenidos del menú

    const [isEditingGroup, setIsEditingGroup] = useState(false);
    const [editGroupData, setEditGroupData] = useState(null);

    const [isManagementStudents, setIsManagementStudents] = useState(false);
    const [managementStudentsGroupData, setManagementStudentsGroupData] = useState(null);

    const [docIdAcudiente, setDocIdAcudiente] = useState(null);

    const [isManagementMaterias, setIsManagementMaterias] = useState(false);
    const [idMaestro, setIdMaestro] = useState(null);

    const [ idGroup, setIdGroup ] = useState(null);
    const [ manageGroupClass, setManageGroupClass] = useState(false);
    const [ seeGroupClass, setSeeGroupClass ] = useState(false);

    const [isEditingGroupDirector, setIsEditingGroupDirector] = useState(false);

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
                    contact={contact}
                    setContact={setContact}
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
                                        setIsEditingGroupDirector={setIsEditingGroupDirector}
                                        setIdGroup={setIdGroup}
                                        setManageGroupClass={setManageGroupClass}
                                        setSeeGroupClass={setSeeGroupClass}
                                    />
                                    <StudentList
                                        isManagementStudents={isManagementStudents}
                                        managementStudentsGroupData={managementStudentsGroupData}
                                        setIsManagementStudents={setIsManagementStudents}
                                        setManagementStudentsGroupData={setManagementStudentsGroupData}
                                    />
                                    <ManagementDirectorGroup
                                        setIsEditingGroupDirector={setIsEditingGroupDirector}
                                        isEditingGroupDirector={isEditingGroupDirector}
                                    />
                                    <AddHoursToClass 
                                        idGroup={idGroup} 
                                        manageGroupClass={manageGroupClass} 
                                        setManageGroupClass={setManageGroupClass}
                                    />
                                    <HorariosList 
                                        idGroup={idGroup} 
                                        seeGroupClass={seeGroupClass} 
                                        setSeeGroupClass={setSeeGroupClass}
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
                                    <TeacherList isManagementMaterias={isManagementMaterias} setIsManagementMaterias={setIsManagementMaterias} setIdMaestro={setIdMaestro} />
                                    <MateriaList isManagementMaterias={isManagementMaterias} setIsManagementMaterias={setIsManagementMaterias} idMaestro={idMaestro} setIdMaestro={setIdMaestro}/>                   
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
                            <>
                            { contact ?
                                <Contact />
                                :null
                            }
                            </>
                        ) : null
                    }
                </div>
            </div>
        </>
    );
}