import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Validation from '../../../SignUp/Validation';
import "../../../Login/Login.css";
import { 
  Select
} from 'antd';
import Navber from '../../../Navber';

const ForgetPassword = () => {
    const [values, setValues] = useState({
        email: "",
          
      })
  
      const { Option } = Select;
  
  
      const [errors, setErrors] = useState({});
  
      const [dataIsCorrect, setDataIsCorrect] = useState(false)
  
      const handleChange = (event) => {
          setValues({
              ...values,
              [event.target.name]: event.target.value, 
          })
      }
  
   
      const handleFromSubmit = (event) => {
          event.preventDefault();
          setErrors(Validation(values))
          setDataIsCorrect(true)
          console.log(values);
          axios.post(`https://soapp-nodejs.herokuapp.com/users/forgot-password`,
       values)
          .then(res => console.log(res.data))
          .catch(e => console.log(e))
  
          // navigate("/login")
  
  
      }
  
      useEffect(() => {
          if(Object.keys(errors).length === 0 && dataIsCorrect){
              // submitForm(true)
          }
      }, [errors])
  
      // useEffect(() => {
      //     axios.get(url, headers).then(res => {setValues(res.data)})
      //     .catch(e => console.log(e))
      // }, [])
  
    return (

        <div>
        <Navber/>
              
        <div className="login__container">
         
          {/* <div className="row align-items-center h-100"> */}
          <div className="login__form-container">
        <div className="login__form">
              <form className='from-wrapper'>
  
                 <div className='email'>
                      <div className='name'>
                      <label className='label'>Email</label>
                      <input className='input' type="email" name='email' value={values.email} onChange={handleChange}/>
                      {errors.email && <p className='error'>{errors.email}</p>}
                       </div>
                  </div>
                 
                  <div>
                      <button className='submit' onClick={handleFromSubmit}>Email</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
    </div>
         
    )
}

export default ForgetPassword