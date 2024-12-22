import React, { useContext, useEffect } from 'react'
import './verify.css'
import {  useNavigate, useSearchParams } from 'react-router-dom'
import { storeContext } from '../../Context/Storecontext';
import axios from 'axios';
const Verify = () => {
  const navigate=useNavigate()
  const[searchParams,setsearchParams]=useSearchParams();
  const success=searchParams.get('success');
  const orderId=searchParams.get('orderId');
 const {url}=useContext(storeContext);
 const verifyPayment=async()=>{
const response=await axios.post(`${url}/api/order/verify`,{success,orderId})
if(response.data.success){
navigate('/myorder');
}
else{
navigate('/')
}
}
useEffect(()=>{
verifyPayment();
},[])
  return (
    <div className='verify'>
        <div className="spinner">

        </div>
    </div>
  )
}

export default Verify