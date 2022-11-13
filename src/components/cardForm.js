import '../styles/cardForm.css';
import React from 'react';

function CardForm({inputState, setInputState, setIsSubmitted}) {


const handleSubmit = (event) => {
  event.preventDefault()
  console.log("submitted ", setIsSubmitted(true))
  setIsSubmitted(true)
}

//----------- Input Field handler functions -----------
const onInputChange = (e) => {
  const { name, value } = e.target;
  setInputState((prevState) => {
    return { ...prevState, [name]: value };
    
  });
};


//we want to handle the submission of data in the form 
//want to handle the change of the input text 

// what are the rules for card holder name
// card number needs to 8 integers seperated into 4 sets of 4
// expiory date needs to be date format and be valid dates 
// cvc max of three numbers 

    return (
<>
        <form className='card-form' onSubmit={handleSubmit}>
            <div className='field-container-name'>
              <label htmlFor='name'>Cardholder Name</label>
                <input
                type="text"
                name="name"
                id="name"
                value={inputState.name}
                pattern='[A-Za-z]'
                maxLength="20"
                placeholder="e.g John Doe"
                autoComplete='off'
                onChange={onInputChange}
                />
            </div>

            <div className='field-container-number'>
            <label htmlFor='number'>Card Number</label>
                <input
                type="text"
                name="number"
                id="number"
                value={inputState.number}
                pattern='[0-9]'
                inputMode='numeric'
                maxLength='16'
                placeholder="e.g. 1234 5678 1234 5678"
                autoComplete='off'
                onChange={onInputChange}
                />
            </div>

            <div className='field-container'>
            <label htmlFor='exp-mmyy'>EXP. Date (MM/YY)</label>
                <input
                type="text"
                name="month"
                id="exp-mmyy"
                value={inputState.month}
                pattern='[0-9]'
                maxLength='2'
                min='01'
                max='12'
                placeholder="MM"
                autoComplete='off'
                onChange={onInputChange}
                />

                <input
                type="text"
                name="year"
                id="exp-mmyy"
                value={inputState.year}
                pattern='[0-9]'
                maxLength='2'
                min='22'
                placeholder="YY"
                autoComplete='off'
                onChange={onInputChange}
                />
            </div>
            
            <div className='field-container'>
              CVC
                <input
                type="text"
                name="cvc"
                value={inputState.cvc}
                pattern='[0-9]'
                maxLength='3'
                placeholder="e.g. 123"
                autoComplete='off'
                onChange={onInputChange}
                
                />
            </div>
           
            <button
            className='submit-btn'
            type='submit'
            >
                Confirm
                </button>
           
        </form>
        </>
    )
}

export default CardForm;