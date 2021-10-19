import React,{useState} from 'react'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import LoginForm from './LoginForm'

const Login = () => {

    const[user,setUser] = useState({email:"",password:""})
    const[error,setError] = useState("");
    
    const Login = details =>{
        console.log(details);
    }

    const Logout =()=>{
        console.log("Logout");
    }
    return (
        <>
          {/* <Header/> */}
          <LoginForm/>
          {/* <Footer/>   */}
        </>
    )
}

export default Login;
