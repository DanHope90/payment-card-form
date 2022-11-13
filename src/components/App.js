import '../styles/App.css';
import MobileBackground from "./mobileBackground";
import CardForm from './cardForm';
import React, {useState} from 'react';

function App() {
  const initialState = {
      name: '',
      number: '',
      month: '',
      year: '',
      cvc: '',
    
  }

  const [inputState, setInputState] = useState(initialState)
  const [isSubmitted, setIsSubmitted] = useState(false)


  return (
    <>
    <div className="app-container">
      <MobileBackground
      inputState={inputState}
      />
      <CardForm 
      inputState={inputState}
      setInputState={setInputState}
      setIsSubmitted={setIsSubmitted}
      />
    </div>
    </>
  );
}

export default App;
