import React from 'react'
import './Cart.css'
import { useContext } from 'react';
import { storeContext } from '../../Context/Storecontext';
const Cart = () => {
  const {cartItems ,food_list, removeFromCart,getTotalAmount}=useContext(storeContext);
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
    {food_list.map((item,index)=>{
   
    if(cartItems[item._id]>0){
      return (
        <div className="cart-items-title cart-items-item" >
          <img src={item.image} alt="" />
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
          <p>${2}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Total</p>
          <p>${getTotalAmount()+2}</p>
        </div>
      </div>
      <button>PROCEED TO CHECKOUT</button>
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