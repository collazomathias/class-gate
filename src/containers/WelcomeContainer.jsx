import React from "react";
import { Header } from "../components/Header.jsx";
import { LoadingPage } from "../components/LoadingPage.jsx";
import { AlertMessage } from "../components/AlertMessage.jsx";

export const WelcomeContainer = () => {
    return (
        <div className="welcome-container">
            <LoadingPage />
            <AlertMessage />
            <Header />
        </div>
    );
}