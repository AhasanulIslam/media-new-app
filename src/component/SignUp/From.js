import React, { useState } from 'react';
import "../../App.css";
import SignupFrom from './SignupFrom';
import SignupFromSuccess from './SignupFromSuccess';


const From = () => {
    const [fromIsSubmited, setFromIsSubmitted] = useState(false);
  
    const submitFrom = () => {
        setFromIsSubmitted(true);
    }
    return (
    <div>
        { !fromIsSubmited ? <SignupFrom submitFrom={submitFrom}/> : <SignupFromSuccess/>}
        <SignupFrom />
    </div>
  )
}

export default From