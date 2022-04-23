import React from "react";
import { LoadingPage } from "../components/LoadingPage.jsx";
import { AlertMessage } from "../components/AlertMessage.jsx";

export const DashboardContainer = () => {
    return (
        <div>
            <LoadingPage />
            <AlertMessage />
        </div>
    );
}