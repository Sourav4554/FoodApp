import React, { createContext, useEffect, useState } from 'react'
import { food_list } from '../assets/assets'
export const storeContext=createContext(null)
const StorecontextProvider = (props) => {
const [cartItems,setCartItems]=useState({});
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

const getTotalAmount=()=>{
let totalAmount=0

for(const item in cartItems){
  if(cartItems[item]>0){
let itemInfo=food_list.find((product)=>product._id===item)
totalAmount +=itemInfo.price*cartItems[item];
console.log(totalAmount);
}
}
return totalAmount;
}


  const contextValue={
  food_list,
  cartItems,
  addToCart,
  removeFromCart,
  getTotalAmount,
  }
  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  )
}

export default StorecontextProvider