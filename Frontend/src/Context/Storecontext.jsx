import React, { createContext, useEffect, useState } from 'react'
import axios from'axios';
export const storeContext=createContext(null)
const StorecontextProvider = (props) => {
const [cartItems,setCartItems]=useState({});
const[token,createToken]=useState("");
const[food_list,setfoodList]=useState([])
const url='http://localhost:4000'
//add to cart
const addToCart=(itemid)=>{
if(!cartItems[itemid]){
setCartItems((prev)=>({...prev,[itemid]:1}))
}else{
setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
}
}
//remove from cart
const removeFromCart=(itemid)=>{
setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
}
//Amount calculation 
const getTotalAmount=()=>{
let totalAmount=0
for(const item in cartItems){
  if(cartItems[item]>0){
let itemInfo=food_list.find((product)=>product._id===item)
totalAmount +=itemInfo.price*cartItems[item];
}
}
return totalAmount;
}
//fetch foodlist from database
const fetchFood=async()=>{
const response= await axios.get(`${url}/api/food/list`)
setfoodList(response.data.message)
}

useEffect(()=>{
  async function loadData(){
    await fetchFood();
if(localStorage.getItem("token")){
createToken(localStorage.getItem("token"))
}}
loadData();
},[])
  const contextValue={
  food_list,
  cartItems,
  addToCart,
  removeFromCart,
  getTotalAmount,
  url,
  token,
  createToken
  }
  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  )
}

export default StorecontextProvider