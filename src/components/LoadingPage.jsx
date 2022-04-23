import React, { useState, useEffect } from "react";
import { ClockLoader } from "react-spinners";
import "../assets/styles/components/LoadingPage.css";

export const LoadingPage = () => {

    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <div className={loading ? "loading-page" : "loading-page loading-page-hided"}>
            <ClockLoader loading={true} size={150} color={"#FF7400"} />
            <span>Cargando, por favor espera...</span>
        </div>
    );
}