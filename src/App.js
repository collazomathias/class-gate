import React, { useState } from "react";
import firebaseApp from "./firebase/credentials.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LoginContainer } from "./containers/LoginContainer.jsx";
import { DashboardContainer } from "./containers/DashboardContainer.jsx";

const auth = getAuth(firebaseApp);

export function App() {

    const [ user, setUser ] = useState(null);

    onAuthStateChanged(auth, (firebaseUser) => {
        if(firebaseUser) {
            setUser(firebaseUser);
        } else {
            setUser(null);
        }
    });

    return (
        <>
            { user ? <DashboardContainer /> : <LoginContainer /> }
        </>
    );
}
