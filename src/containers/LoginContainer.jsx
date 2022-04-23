import React from "react";
import "../assets/styles/containers/LoginContainer.css";
import { AlertMessage } from "../components/AlertMessage.jsx";
import { LoginForm } from "../components/LoginForm.jsx";
import { LoadingPage } from "../components/LoadingPage.jsx";

export const LoginContainer = () => {


    return (
        <div className="login-container">
            <LoadingPage />
            <AlertMessage />
            <LoginForm />
        </div>
    );
}