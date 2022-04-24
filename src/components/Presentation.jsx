import React from "react";
import LoginBackground from "../assets/imgs/login-background.jpg";
import "../assets/styles/components/Presentation.css";

export const Presentation = () => {
    return (
        <div className="presentation-container">
            <img src={LoginBackground} alt="" />
            <div className="information-container">
                <div className="flex-triple-information-container">
                    <div className="flex-left-information">

                    </div>
                    <div className="flex-medium-information">

                    </div>
                    <div className="flex-right-information">

                    </div>
                </div>
                <div className="normal-information-container">
                    <div className="normal-information">

                    </div>
                </div>
                <div className="flex-double-information-container">
                    <div className="flex-left-information">

                    </div>
                    <div className="flex-right-information">

                    </div>
                </div>
            </div>
        </div>
    );
}