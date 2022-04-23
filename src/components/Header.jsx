import React from "react";
import LoginBackground from "../assets/imgs/login-background.jpg";
import "../assets/styles/components/Header.css";

export const Header = () => {
    return (
        <div className="header-container">
            <img src={LoginBackground} alt="" />
        </div>
    );
}