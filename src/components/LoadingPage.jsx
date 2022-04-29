import React, { useState, useEffect } from "react";
import { ClockLoader } from "react-spinners";
import "../assets/styles/components/LoadingPage.css";

export const LoadingPage = () => {

    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1900);
    }, []);

    return (
        loading ? <div className={loading ? "loading-page" : "loading-page loading-page-hided"}>
            <ClockLoader loading={true} size={150} color={"#FF7E06"} />
            <span>Cargando, por favor espera...</span>
        </div> : null
    );
}