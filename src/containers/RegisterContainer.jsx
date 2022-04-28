import React from "react";
import "../assets/styles/containers/RegisterContainer.css";
import { LoadingPage } from "../components/LoadingPage.jsx";
import { AlertMessage } from "../components/AlertMessage.jsx";
import { RegisterTeacherForm } from "../components/RegisterTeacherForm.jsx";

export const RegisterContainer = () => {


    return (
        <div className="login-container">
            <LoadingPage />
            <AlertMessage />
            <RegisterTeacherForm />
        </div>
    );
}