import React from "react";
// import "../assets/styles/containers/RegisterContainer.css";
import { LoadingPage } from "../components/LoadingPage.jsx";
import { AlertMessage } from "../components/AlertMessage.jsx";
import { NewAcudienteForm } from "../components/NewAcudienteForm";

export const RegisterAcudienteContainer = () => {
    return (
        <div className="login-container">
            <LoadingPage />
            <AlertMessage />
            <NewAcudienteForm />
        </div>
    );
}