import React, { useState, useEffect } from "react";
import firebaseApp from "./firebase/credentials.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LoginContainer } from "./containers/LoginContainer.jsx";
import { DashboardContainer } from "./containers/DashboardContainer.jsx";
import { Routes, Route, useLocation  } from "react-router-dom";
import { useNavigate } from "react-router";
import { LandingPageContainer } from "./containers/LandingPageContainer.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { RegisterAcudienteContainer } from "./containers/RegisterAcudienteContainer.jsx";
import { RegisterTeacherContainer } from "./containers/RegisterTeacherContainer.jsx";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export function App() {

    const navigate = useNavigate();
    const location = useLocation();
    const [ user, setUser ] = useState(null);

    async function getRole(uid) {
        const docRef = doc(firestore, `users/${uid}`);
        const docEncrypted = await getDoc(docRef);
        const docInfo = docEncrypted.data().role;
        return docInfo;
    }

    useEffect(() => {
        onAuthStateChanged(auth, (firebaseUser) => {
            if(firebaseUser) {
                getRole(firebaseUser.uid).then((role) => {
                    const userData = {
                        uid: firebaseUser.uid,
                        email: firebaseUser.email,
                        role: role
                    };
                    setUser(userData);
                });
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
                <Route path="/dashboard" element={<DashboardContainer role={user ? user.role : null } user={user} />} />
                <Route path="/register-attendant" element={<RegisterAcudienteContainer />} />
                <Route path="/register-teacher" element={<RegisterTeacherContainer />} />
            </Routes>
        </>
    );
}
