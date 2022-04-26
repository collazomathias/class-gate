import React from "react";
import "../assets/styles/components/DashboardMenu.css";

export const DashboardMenu = ({ role, newGroup, setNewGroup, newStudent, setNewStudent }) => {
    return (
        <div className="dashboard-menu-container">
            {
                role === "administrativo" ? (
                    <>
                        <button onClick={() => {
                            setNewStudent(true);
                            setNewGroup(false);
                        }} className={newStudent ? "dashboard-menu-button-active" : "dashboard-menu-button"}>Agregar estudiante</button>  
                        <button onClick={() => {
                            setNewGroup(true);
                            setNewStudent(false);
                        }} className={newGroup ? "dashboard-menu-button-active" : "dashboard-menu-button"}>Agregar grupo</button>  
                    </>
                ) : null
            
            }
            {
                role === "maestro" ? (
                    <>
                        <button className="dashboard-menu-button">Action maestro 1</button>
                        <button className="dashboard-menu-button">Action maestro 2</button>
                        <button className="dashboard-menu-button">Action maestro 3</button>
                        <button className="dashboard-menu-button">Action maestro 4</button>
                    </>
                ) : null
            }
            {
                role === "acudiente" ? (
                    <>
                        <button className="dashboard-menu-button">Action acudiente 1</button>
                        <button className="dashboard-menu-button">Action acudiente 2</button>
                        <button className="dashboard-menu-button">Action acudiente 3</button>
                        <button className="dashboard-menu-button">Action acudiente 4</button>
                    </>
                ) : null
            }
        </div>
    );
}