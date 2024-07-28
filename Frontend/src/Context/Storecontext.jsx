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
useEffect(()=>{
console.log(cartItems);
},[cartItems])


  const contextValue={
  food_list,
  cartItems,
  addToCart,
  removeFromCart,
  }
  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  )
}

export default StorecontextProvider