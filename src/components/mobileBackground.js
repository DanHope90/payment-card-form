import React from "react";
import '../styles/mobileBackground.css'
import CardBack from "./cardBack";
import CardFront from "./cardFront";

function MobileBackground ({inputState}) {


    return (

        <>
        <div className="mobilebackground-container">
            <CardFront
                inputState={inputState}
                />
            <CardBack
                inputState={inputState}
                />
        </div>
        </>
    )
}

export default MobileBackground;