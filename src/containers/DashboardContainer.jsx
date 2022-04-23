import React from "react";
import firebaseApp from "../firebase/credentials";
import { signOut, getAuth } from "firebase/auth";
import { LoadingPage } from "../components/LoadingPage.jsx";

const auth = getAuth(firebaseApp);

export const DashboardContainer = () => {
    return (
        <div>
            <LoadingPage />
            <h1>Dashboard</h1>
            <button onClick={() => signOut(auth)}>Cerrar sesión</button>
        </div>
    );
}