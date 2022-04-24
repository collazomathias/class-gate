import React from "react";
import { Presentation } from "../components/Presentation.jsx";
import { LoadingPage } from "../components/LoadingPage.jsx";
import { AlertMessage } from "../components/AlertMessage.jsx";

export const LandingPageContainer = () => {
    return (
        <div className="landing-page-container">
            <LoadingPage />
            <AlertMessage />
            <Presentation />
        </div>
    );
}