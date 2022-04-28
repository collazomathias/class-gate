import React from "react";
import "../assets/styles/containers/LoginContainer.css";
import { LoginForm } from "../components/LoginForm.jsx";
import { LoadingPage } from "../components/LoadingPage.jsx";
import { AlertMessage } from "../components/AlertMessage.jsx";

export const LoginContainer = () => {
    return (
        <div className="login-container">
            <LoadingPage />
            <AlertMessage />
            <LoginForm />
        </div>
    );
}