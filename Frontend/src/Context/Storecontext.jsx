import React, { createContext, useEffect, useState } from 'react'
import axios from'axios';
export const storeContext=createContext(null)
const StorecontextProvider = (props) => {
const [cartItems,setCartItems]=useState({});
const[token,createToken]=useState("");
const[food_list,setfoodList]=useState([])
const url='http://localhost:4000'
//add to cart
const addToCart=async (itemId)=>{
if(!cartItems[itemId]){
setCartItems((prev)=>({...prev,[itemId]:1}))

}else{
setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
}
await axios.post(`${url}/api/cart/add`,{itemId},{headers:{token}})
}
//remove from cart
const removeFromCart=async(itemId)=>{
setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
await axios.post(`${url}/api/cart/remove`,{itemId},{headers:{token}})
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
//fetch cart items from database
const fetchCart=async(token)=>{
  const response=await axios.post(`${url}/api/cart/get`,{},{headers:{token}})
setCartItems(response.data.message)
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
await fetchCart(localStorage.getItem("token"));
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