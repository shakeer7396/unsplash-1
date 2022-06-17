import React,{useState} from 'react'
import {Alert} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import "/node_modules/bootstrap/dist/css/bootstrap.css";
// import Homepage from '../Pages/Homepage';

const Login = () => {

const [emaillog,setEmaillog]=useState("");
const [passwordlog,setPasswordlog]=useState("");
const [flag,setFlag]=useState(false);
const [home,setHome]=useState(true);
const navigate=useNavigate();
function handleLogin(e){
    e.preventDefault();
    let mail=localStorage.getItem("Email").replace(/"/g,"");
    let pass=localStorage.getItem("Password").replace(/"/g,"");

    if(!emaillog || !passwordlog){
        setFlag(true);
        console.log("Empty");
    }
    else if(passwordlog !==pass ||emaillog!==mail){
        setFlag(true)
    }
    else{
        setHome(!home);
        setFlag(false)
    }
}
return (
    <div>
        { home ? (
        <form onSubmit={handleLogin}>
            <h3>Login Form</h3>
<div className='form-group'>
                <label>Email</label>
                <input type='text' className='form-control'
                 placeholder='Enter mail'
                 onChange={(event)=> setEmaillog(event.target.value)} />
                
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type='password' className='form-control'
                 placeholder='Enter Password'
                 onChange={(event)=> setPasswordlog(event.target.value)} />
                
            </div>
            <button type="submit" className='s'>Login</button>
            {flag && (
               <Alert color ="primary" variant='danger'>
                  Please Fill Correct Info 
               </Alert> 
            )}
            </form>
            ):(
              navigate("/")
            )}
    </div>
  )
}

export default Login