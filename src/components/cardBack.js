import "../styles/cardBack.css";
import React from "react";

function CardBack ({inputState}) {

    return (
        <>
        <div className="cardback-container">
         <p>
            {inputState.cvc.length > 0 ? inputState.cvc : "000"}
             </p>  
        </div>
        </>
    )
}

export default CardBack;