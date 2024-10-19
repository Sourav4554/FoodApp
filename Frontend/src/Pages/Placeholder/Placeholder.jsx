import React, { useContext, useState } from 'react';
import { storeContext } from '../../Context/Storecontext';
import './Placeholder.css';
import axios from 'axios';

const Placeholder = () => {
  const [loading, setLoading] = useState(false);
  const { getTotalAmount, url, food_list, cartItems, token } = useContext(storeContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  
  };

  const placeOrder = async (event) => {
    setLoading(true)
    event.preventDefault();
    let orderItem = [];
    
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItem.push(itemInfo);
      }
    });
    
    let orderData = {
      address: data,
      items: orderItem,
      amount: getTotalAmount() + 2,
    };

    try {
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });
       if (response.data.success) {
        console.log('sucess');
         const { session_url } = response.data;
         window.location.replace(session_url);
       } else {
        console.log('Error from server:', response.data);  // Log server response
        alert("Error placing order: " + response.data.message); 
       }
    } catch (error) {
      console.log('error');
    
    }
    
  };

  return (
    <form className="place-order" onSubmit={placeOrder}>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multy-fields">
          <input type="text" name="firstName" placeholder='First name' value={data.firstName} onChange={onchangeHandler} required />
          <input type="text" name="lastName" placeholder='Last name' value={data.lastName} onChange={onchangeHandler} required />
        </div>
        <input type="text" placeholder='Email address' name='email' value={data.email} onChange={onchangeHandler} required />
        <input type="text" placeholder='Street' name='street' value={data.street} onChange={onchangeHandler} required />
        <div className="multy-fields">
          <input type="text" name="city" placeholder='City' value={data.city} onChange={onchangeHandler} required />
          <input type="text" name="state" placeholder='State' value={data.state} onChange={onchangeHandler} required />
        </div>
        <div className="multy-fields">
          <input type="text" name="zipcode" placeholder='Zip Code' value={data.zipcode} onChange={onchangeHandler} required />
          <input type="text" name="country" placeholder='Country' value={data.country} onChange={onchangeHandler} required />
        </div>
        <input type="text" placeholder='Phone' name='phone' value={data.phone} onChange={onchangeHandler} required />
      </div>
      <div className="place-order-right">
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
              <p>${getTotalAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</p>
            </div>
          </div>
          {loading ? (
            <div className="loader">Processing Payment...</div>
          ) : (
            <button type='submit'>PROCEED TO PAYMENT</button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Placeholder;
