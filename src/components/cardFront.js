import "../styles/cardFront.css";
import React from "react";

function CardFront ({inputState}) {

    return (
        <>
        <div className="cardfront-container">
        <div className="card-number">
            
            {inputState.number.length > 0 ? inputState.number : '0000 0000 0000 0000'}
        
        </div>
            <div className="card-info" >
            <p>
                {inputState.name.length > 0 ? inputState.name : 'Joe Blogs'}
                </p>
            <p>
                {inputState.month.length > 0 ? inputState.month : "MM"} / 
                {inputState.year.length > 0 ? inputState.year : "YY"}
                </p>
            </div>
        </div>
        </>
    )
}

export default CardFront;