import React, { useState } from 'react'
// import useForm from "./useForm";
// import validate from "../Register/validateInfo";
import "./LoginForm.css";

const LoginForm = ({Login,error}) => {

    const[details,setDetails] = useState({email:"",password:""})   
    const [errors, setErrors] = useState({});
    
    const onLoginSubmitHandler=(event)=>{
      event.preventDefault();
      console.log("Login submit");
      Login(details);
    }


    const onLoginHandleChange = e => {
      const { name, value } = e.target;
      setDetails({
        ...details,
        [name]: value
      });
    };

    

    return (
        <div className="mainclass">
          <div className="left">
            <h1>Login</h1>
            <p>Get access to your Orders,Wishlist and Recommendations.</p>
          </div>
          <div className="right">
            <form onSubmit={onLoginSubmitHandler} >
              <div className="form-inputs">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={details.email}
                  onChange={onLoginHandleChange}
                  id="email"
                  placeholder="Enter your Email"
                />
                {/* {errors.email && <p>{errors.email}</p>} */}
              </div>
    
              <div className="form-inputs">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  value={details.password}
                  onChange={onLoginHandleChange}
                  id="password"
                  placeholder="Enter your Password"
                />
                {/* {errors.password && <p>{errors.password}</p>} */}
              </div>
            <button type="submit">Login</button>
            </form>
          </div>
        </div>
      );
    };

export default LoginForm
