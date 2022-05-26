import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Validation from '../../../SignUp/Validation';
import "../../../Login/Login.css";
import { 
  Select
} from 'antd';
import Navber from '../../../Navber';



const CreatePost = () => {
    const [values, setValues] = useState({
      content: "",
        
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
        axios.post(`https://soapp-nodejs.herokuapp.com/post/create-post`,
     values,
     {
      headers: {

        Authorization: `Bearer ${localStorage.getItem("user-info")}`,
      },
    })
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
    
            
      <div className="login-page-10">
        <Navber/>
        {/* <div className="row align-items-center h-100"> */}
         
              <span>Use Content or Image</span>

            <form className='from-wrapper'>

               <div className='email'>
                    <div className='name'>
                    <label className='label'>Post</label>
                    <input className='input' type="text" name='content' value={values.content} onChange={handleChange}/>
                    {errors.content && <p className='error'>{errors.content}</p>}
                     </div>
                </div>

               
              
                <div>
                    <button className='submit' onClick={handleFromSubmit}>Post</button>
                </div>
            </form>
            </div>
          // </div>
  )
}

export default CreatePost