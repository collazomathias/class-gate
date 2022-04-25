import React, { useState } from "react";
import { LoadingPage } from "../components/LoadingPage.jsx";
import { AlertMessage } from "../components/AlertMessage.jsx";
import { GroupForm } from "../components/GroupForm.jsx";
import "../assets/styles/containers/DashboardContainer.css";
import { DashboardMenu } from "../components/DashboardMenu.jsx";

export const DashboardContainer = (props) => {

    const [ newGroup, setNewGroup ] = useState(false);
    const [ newStudent, setNewStudent ] = useState(false);

    return (
            <>
                <LoadingPage />
                <AlertMessage />
                <div className="dashboard-container">
                    <DashboardMenu role={props.role} newGroup={newGroup} setNewGroup={setNewGroup} newStudent={newStudent} setNewStudent={setNewStudent} />
                    <div className="dashboard-actions-container">
                        {
                            props.role === "administrativo" ? (
                                <>
                                    { newGroup ? <GroupForm /> : null }
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