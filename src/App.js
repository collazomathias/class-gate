import React, { useState, useEffect } from "react";
import firebaseApp from "./firebase/credentials.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LoginContainer } from "./containers/LoginContainer.jsx";
import { DashboardContainer } from "./containers/DashboardContainer.jsx";
import { Routes, Route, useLocation  } from "react-router-dom";
import { useNavigate } from "react-router";
import { LandingPageContainer } from "./containers/LandingPageContainer.jsx";
import { Navbar } from "./components/Navbar.jsx";

const auth = getAuth(firebaseApp);

export function App() {

    const navigate = useNavigate();
    const location = useLocation();
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (firebaseUser) => {
            if(firebaseUser) {
                setUser(firebaseUser);
            } else {
                setUser(null);
            }
        });
    }, []);

    useEffect(() => {
        if(user) {
            navigate("/dashboard");
        } else {
            if(location.pathname === "/dashboard") {
                navigate("/login");
            }
        }
    }, [location.pathname, navigate, user]);

    return (
        <>
            <Navbar user={user} />
            <Routes>
                <Route path="/" element={<LandingPageContainer />} />
                <Route path="/login" element={<LoginContainer />} />
                <Route path="/dashboard" element={<DashboardContainer />} />
            </Routes>
        </>
    );
}
