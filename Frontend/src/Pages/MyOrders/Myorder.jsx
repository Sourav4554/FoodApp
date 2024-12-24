import React, { useContext, useEffect, useState } from 'react'
import './Myorder.css'
import { storeContext } from '../../Context/Storecontext'
import axios from 'axios';
import { assets } from '../../assets/assets';
const Myorder = () => {
const {url,token}=useContext(storeContext);
const[order,setMyorder]=useState([]);
//fetch orders from database
const fetchOrders=async()=>{
const response=await axios.post(`${url}/api/order/userOrder`,{},{headers:{Authorization:`Bearer ${token}`}});
if(response.data.data){
const sortedOrder=response.data.data.reverse();
setMyorder(sortedOrder);

}
}
useEffect(()=>{
if(token){
fetchOrders();
}
},[token])
  return (
    <div className='my-orders'>
   <h2>My Orders</h2>
   <div className="container">
    {order.map((order,index)=>{
    return(
        <div key={index} className="my-orders-order">
            <img src={assets.parcel_icon} alt="" />
           <p>{order.items.map((item,index)=>{
            if(index===order.items.length-1){
            return item.name+" x "+item.quantity
            }
            else{
                return item.name+" x "+item.quantity+", "
            }
            
           })}</p>
           <p>{order.amount}.00</p>
           <p>items {order.items.length}</p>
           <p><span>&#x25cf;</span><b>{order.status}</b></p>
           <button onClick={fetchOrders}>TrackOrder</button>
        </div>
        )

    })}
   </div>
    </div>
  )
}

export default Myorder