import React, { useState,useEffect } from 'react'
import './Cart.css'
import { useContext } from 'react';
import { storeContext } from '../../Context/Storecontext';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const[disabled,setDisabled]=useState('')
  const {cartItems ,food_list, removeFromCart,getTotalAmount,url,token}=useContext(storeContext);
  const Navigate=useNavigate();
 
  //used for enable and disable checkout button
  useEffect(() => {
    const totalAmount = getTotalAmount(); 
    if (token && totalAmount > 0) {
      setDisabled('');
    } else {
      setDisabled('disable');
    }
  }, [token, cartItems]); 
  
  return (
  <div className='cart'>
  <div className="cart-items">
    <div className="cart-items-title">
      <p>Items</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
    </div>
    <br />
    <hr />
    {/*List the Cart items when it exist*/ }
    {food_list.map((item,index)=>{
     if(cartItems[item._id]>0){
      return (
        <div key={index} className="cart-items-title cart-items-item" >
          <img src={`${url}/images/${item.image}`} alt="" />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <p>{cartItems[item._id]}</p>
          <p>${item.price*cartItems[item._id]}</p>
          <p onClick={()=>{removeFromCart(item._id)}} className='cross'>X</p>
        </div>
        )
    }
    })}
  </div>
  <div className="cart-bottom">
    <div className="cart-total">
      <h2>Cart Total</h2>
      <div>
        <div className="cart-total-details">
          <p>Subtotals</p>
          <p>${getTotalAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
        <p>Delivery Fee</p>
          <p>${getTotalAmount()===0?0:2}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Total</p>
          <p>${getTotalAmount()===0?0:getTotalAmount()+2}</p>
        </div>
      </div>
 
      <button onClick={()=>{Navigate('/placeorder')}}  className={disabled}>PROCEED TO CHECKOUT</button>
    
    </div>
    <div className="cart-promocode">
      <div>
        <p>If you have any promocode,Enter it here</p>
        <div className='cart-promocode-input'>
          <input type="text" placeholder='promocode'/>
          <button>Submit</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Cart