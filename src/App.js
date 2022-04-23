import React, { useState, useEffect } from "react";
import firebaseApp from "./firebase/credentials.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LoginContainer } from "./containers/LoginContainer.jsx";
import { DashboardContainer } from "./containers/DashboardContainer.jsx";
import { Routes, Route  } from "react-router-dom";
import { useNavigate } from "react-router";

const auth = getAuth(firebaseApp);

export function App() {

    const navigate = useNavigate();
    const [ user, setUser ] = useState(null);

    onAuthStateChanged(auth, (firebaseUser) => {
        if(firebaseUser) {
            setUser(firebaseUser);
        } else {
            setUser(null);
        }
    });

    useEffect(() => {
        user ? navigate("/dashboard") : navigate("/");
    }, [navigate, user]);

    return (
        <>
            <Routes>
                <Route path="/" element={<LoginContainer />} />
                <Route path="/dashboard" element={<DashboardContainer />} />
            </Routes>
        </>
    );
}
