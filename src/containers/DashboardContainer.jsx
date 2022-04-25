import React from "react";
import { LoadingPage } from "../components/LoadingPage.jsx";
import { AlertMessage } from "../components/AlertMessage.jsx";

export const DashboardContainer = (props) => {
    return (
            
            <div>
                <LoadingPage />
                <AlertMessage />
                {
                    props.role === "administrativo" ? (
                        <h1>Administrativo</h1>
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
    );
}