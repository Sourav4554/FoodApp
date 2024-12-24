import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets';
import './Login.css'
import axios from 'axios'
import { storeContext } from '../../Context/Storecontext';
import { toast } from 'react-toastify';

const Login = ({setLoginPopup}) => {
const {url,createToken}=useContext(storeContext);
const[currState,setCrrState]=useState('Login');

const[data,setData]=useState({
name:"",
email:"",
password:""
})


//Collect the data from the form
const onChangeHandler=(event)=>{
const name=event.target.name;
const value=event.target.value;
setData(data=>({...data,[name]:value}))
}

//Login Signup Logic
const onsubmitHandler = async (event) => {
    event.preventDefault();
    let newUrl = url;

    if (currState === 'Login') {
        newUrl += '/api/user/login';
    } else {
        newUrl += '/api/user/signup';
    }

    try {
        const response = await axios.post(newUrl, data);

        if (response.data.success) {
            createToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setLoginPopup(false);
            location.reload();
            toast.success(response.data.message);
        } else {
            toast.error(response.data.message);
        }
    } catch (error) {
        if (error.response) {
            // Handle backend errors (4xx or 5xx)
            toast.error(error.response.data.message || "Something went wrong");
        } else if (error.request) {
            // Handle no response from the server
            toast.error("No response from server. Please try again later.");
        } else {
            // Handle client-side or network errors
            toast.error("An unexpected error occurred");
        }
    }
};

  return (
    <div className='login-popup'>
  <form action="" className="login-popup-container" autoComplete="new-password" onSubmit={onsubmitHandler}>
    <div className="login-popup-title">
      <h2>{currState}</h2>
      <img src={assets.cross_icon} alt="" onClick={()=>{setLoginPopup(false)}}/>
    </div>
    <div className="login-popup-inputs">
      {currState==='Login'?<></>: <input type="text" name='name' placeholder='yourName' required onChange={onChangeHandler} value={data.name}/> }
      <input type="email" name='email' placeholder='your email' autoComplete="off" required onChange={onChangeHandler} value={data.email}/> 
      <input type="password" name='password' placeholder='password' autoComplete="new-password" required onChange={onChangeHandler} value={data.password}/> 
    
    </div>
    <button type='submit'>{currState==='Signup'?'Create account':'Login'}</button>
    <div className="login-popup-conditions">
      <input type="checkbox" required/>
      <p>By Continuing, i agree to the terms of use & Privacy Policy</p>
    </div>

    {
    currState==='Login'?
    <p>Create a new Account?<span onClick={()=>{setCrrState('Signup')}}>Clickhere</span></p>
    :<p>Already have an Account?<span onClick={()=>{setCrrState("Login")}}>Login here</span></p>
    }
  </form>
    </div>
  )
}
export default Login
