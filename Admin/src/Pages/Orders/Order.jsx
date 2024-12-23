import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { icons } from '../../assets/assets';
import './Order.css'
const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);

  //method for get orders from the database
  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        const sortOrders=response.data.data.reverse()
        setOrders(sortOrders);
       
      } else {
        toast.error('Error fetching orders');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  //method for changing the status
 const statusHandler=async(event,orderId)=>{
 const response=await axios.post(`${url}/api/order/status`,{
  orderId,
  status:event.target.value
})
 if(response.data.success){
 await fetchOrders();
 }
 }
  useEffect(() => {
    fetchOrders();
  }, [url]);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <h3>Total:{orders.length} Order</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
           
            <img src={icons.parcel} alt="Parcel Icon" /> 
            <div>
              <p className="order-item-food">
                {order.items.map((item, itemIndex) =>
                  itemIndex === order.items.length - 1
                    ? `${item.name} x ${item.quantity}`
                    : `${item.name} x ${item.quantity}, `
                )}
              </p>
              </div>
              
              <p className="order-item-address">
              <p className='order-item-name'>{`${order.address.firstName} ${order.address.lastName}`}</p>
              <p>{`${order.address.city} , ${order.address.state} , ${order.address.country} , ${order.address.zipcode}` }</p>
              
              <p>{order.address.phone}</p>
              <p>date: {new Date(order.date).toLocaleDateString('en-IN')}</p>
              </p>
              <div>
              <p className='item-price'>Items:{order.items.length}</p>
              <p className='item-price'>Rs:{order.amount}</p>

              </div>
              <div>
               <select onChange={(event)=>{statusHandler(event,order._id)} } value={order.value}>
                <option value="food Processing">Food Processing</option>
                <option value="out of delivery">Out Of Delivery</option>
                <option value="Delivered">Delivered</option>
                
              </select>
              <p> <p><span>&#x25cf;</span><b>{order.status}</b></p></p> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
