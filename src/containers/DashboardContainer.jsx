import React, { useState } from "react";
import { LoadingPage } from "../components/LoadingPage.jsx";
import { AlertMessage } from "../components/AlertMessage.jsx";
import { GroupForm } from "../components/GroupForm.jsx";
import "../assets/styles/containers/DashboardContainer.css";
import { DashboardMenu } from "../components/DashboardMenu.jsx";
import { GroupList } from "../components/GroupList.jsx";

export const DashboardContainer = (props) => {

    //Hooks para mostrar contenidos del menú
    const [ newGroup, setNewGroup ] = useState(false);
    const [ newStudent, setNewStudent ] = useState(false);

    const [ isEditingGroup, setIsEditingGroup ] = useState(false);
    const [ groupEditingId, setGroupEditingId ] = useState(null);
    const [ groupEditingName, setGroupEditingName ] = useState("");
    const [ groupEditingGrade, setGroupEditingGrade ] = useState("");
    const [ groupEditingCourse, setGroupEditingCourse ] = useState("");

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
                                                isEditingGroup={isEditingGroup}
                                                groupEditingId={groupEditingId}
                                                groupEditingName={groupEditingName}
                                                groupEditingGrade={groupEditingGrade}
                                                groupEditingCourse={groupEditingCourse}
                                                setIsEditingGroup={setIsEditingGroup} 
                                                setGroupEditingId={setGroupEditingId} 
                                                setGroupEditingName={setGroupEditingName}
                                                setGroupEditingGrade={setGroupEditingGrade} 
                                                setGroupEditingCourse={setGroupEditingCourse} 
                                            />
                                            <GroupList 
                                                setIsEditingGroup={setIsEditingGroup} 
                                                setGroupEditingId={setGroupEditingId} 
                                                setGroupEditingName={setGroupEditingName}
                                                setGroupEditingGrade={setGroupEditingGrade} 
                                                setGroupEditingCourse={setGroupEditingCourse} 
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