import React, { useContext } from 'react'
import { storeContext } from '../../Context/Storecontext'
import './Placeholder.css'
const Placeholder = () => {
  const{getTotalAmount}=useContext(storeContext)
  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multy-fields">
          <input type="text" name="" id="" placeholder='First name'/>
          <input type="text" name="" id="" placeholder='Last nmae'/>
        </div>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Street'/>
        <div className="multy-fields">
          <input type="text" name="" id="" placeholder='City'/>
          <input type="text" name="" id="" placeholder='State'/>
        </div>
        <div className="multy-fields">
          <input type="text" name="" id="" placeholder='Zip Code'/>
          <input type="text" name="" id="" placeholder='Country'/>
        </div>
        <input type="text" placeholder='phone'/>
      </div>
      <div className="place-ordeer-right">
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
      <button>PROCEED TO PAYMENT</button>
    </div>
      </div>
    </form>
  )
}

export default Placeholder