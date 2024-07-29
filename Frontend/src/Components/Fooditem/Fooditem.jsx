import React, { useContext} from 'react'
import { assets } from '../../assets/assets'
import './Fooditem.css'
import { storeContext } from '../../Context/Storecontext'
const Fooditem = ({id,name,description,image,price}) => {
const {cartItems ,addToCart, removeFromCart}=useContext(storeContext);
  return (
    <div className='food-item'>
    <div className="food-item-img-container">
        <img  alt="" className='food-item-image' src={image}/>
        {!cartItems[id] 
        ? <img src={assets.add_icon_white} alt="" className='add' onClick={()=>{addToCart(id)}}/>
        : <div className="food-item-counter">
             <img src={assets.remove_icon_red} alt="" onClick={()=>{removeFromCart(id)}}/>
             <p>{cartItems[id]}</p>
             <img src={assets.add_icon_green} alt="" onClick={()=>{addToCart(id)}}/>
        </div>
        }
    </div>
    <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">
            {description}
        </p>
        <p className='food-item-price'>${price}</p>
    </div>
    </div>
  )
}

export default Fooditem