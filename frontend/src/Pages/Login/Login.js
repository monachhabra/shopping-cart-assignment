import React,{useState} from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
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
          <Footer/>  
        </>
    )
}

export default Login;
