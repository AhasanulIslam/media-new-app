import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Validation from '../../SignUp/Validation';
import "../../../component/Login/Login1.css";
import {

  Select,
} from 'antd';
import Navber from '../../Navber';
const EditProfile = () => {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        gender: "",
        date_of_birth: ""
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

 
    const handleFromSubmit = (event, id) => {
        event.preventDefault();
        setErrors(Validation(values))
        setDataIsCorrect(true)
        console.log(values);
        axios.patch("https://soapp-nodejs.herokuapp.com/users/update-info",values,
        
         {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user-info")}`,
            },
          },
     )
        .then(res => console.log("dfhi",res.data))
        .catch(e => console.log(e))

        // navigate("/login")


    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect){
        }
    }, [errors])


  return (

    <div>
        <Navber/>
<div className="login__container">
      <div className="login__welcome">

        <p>Update Info</p>
      </div>


        <div className="login__form-container">
        <div className="login__form">
    
            <div className="signup__form">
            <form >
            <div className="signup__subtitle"></div>

               <div className='email'>
                    <div className='name'>
                    <label className='label'>First Name</label>
                    <input className='input' type="text" name='first_name' value={values.first_name} onChange={handleChange}/>
                    {errors.first_name && <p className='error'>{errors.first_name}</p>}
                </div></div>

                <div className='email'>
                    <div className='name'>
                    <label className='label'>Last Name</label>
                    <input className='input' type="text" name='last_name' value={values.last_name} onChange={handleChange}/>
                    {errors.last_name && <p className='error'>{errors.last_name}</p>}
                </div>
                    <label className='label' >Email</label>
                    <input className='input' type="email"  name='email' value={values.email} onChange={handleChange}/>
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>

                <div className='email'>
                    <div className='name'>
                    <label className='label'>Date of Birth</label>
                    <input className='input' type="date" name='date_of_birth' value={values.date_of_birth} onChange={handleChange}/>
                    {errors.date_of_birth && <p className='error'>{errors.date_of_birth}</p>}
                </div></div>
                <div className='email'>

                <div className='email'>
                    <div className='name'>
                    <label className='label'>Gender</label>
                    <input className='input' type="text" name='gender' value={values.gender} onChange={handleChange}/>
                    {errors.gender && <p className='error'>{errors.gender}</p>}
                </div></div>
                <div className='email'></div>
               

                <div className='password'>
                    <label className='label'>Password</label>
                    <input className='input' type="password" name='password' value={values.password} onChange={handleChange}/>
                    {errors.password && <p className='error'>{errors.password  }</p>}

                </div>
                <div>
                    <button  className='signup__btn' onClick={handleFromSubmit}>Update</button>
                </div>
                </div>
            </form>
            </div>
            </div>
          </div>
          </div>
          </div>
  )
}

export default EditProfile