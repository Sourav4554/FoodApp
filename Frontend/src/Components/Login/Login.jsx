import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import './Login.css'
const Login = ({setLoginPopup}) => {
const[currState,setCrrState]=useState('Login');
  return (
    <div className='login-popup'>
  <form action="" className="login-popup-container" autoComplete='off'>
    <div className="login-popup-title">
      <h2>{currState}</h2>
      <img src={assets.cross_icon} alt="" onClick={()=>{setLoginPopup(false)}}/>
    </div>
    <div className="login-popup-inputs">
      {currState==='Login'?<></>: <input type="text" placeholder='yourName' required/> }
      <input type="email" placeholder='your email' autoComplete='off' required/> 
      <input type="password" placeholder='password' autoComplete='off' required/> 
    </div>
    <button>{currState==='Signup'?'Create account':'Login'}</button>
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