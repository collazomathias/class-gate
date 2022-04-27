import React, { useState } from "react";
import { LoadingPage } from "../components/LoadingPage.jsx";
import { AlertMessage } from "../components/AlertMessage.jsx";
import { GroupForm } from "../components/GroupForm.jsx";
import "../assets/styles/containers/DashboardContainer.css";
import { DashboardMenu } from "../components/DashboardMenu.jsx";
import { GroupList } from "../components/GroupList.jsx";
import { StudentList } from "../components/StudentList.jsx";

export const DashboardContainer = (props) => {

    //Hooks para mostrar contenidos del menú
    const [ newGroup, setNewGroup ] = useState(false);
    const [ newStudent, setNewStudent ] = useState(false);
    //FIN Hooks para mostrar contenidos del menú

    
    const [ isEditingGroup, setIsEditingGroup ] = useState(false);
    const [ editGroupData, setEditGroupData ] = useState(null);

    const [ isManagementStudents, setIsManagementStudents ] = useState(false);
    const [ managementStudentsGroupData, setManagementStudentsGroupData ] = useState(null);

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
                    />
                    <div className="dashboard-actions-container">
                        {
                            props.role === "administrativo" ? (
                                <>
                                    { newGroup ? <>
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
                                        </> : null }
                                    { newStudent ? "Nuevo estudiante" : null }
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