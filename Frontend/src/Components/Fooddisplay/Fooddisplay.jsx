import React, { useContext } from 'react'
import { storeContext } from '../../Context/Storecontext';
import Fooditem from '../Fooditem/Fooditem';
import './Fooddisplay.css'
const Fooddisplay = ({category}) => {
  const foodlist=useContext(storeContext);
  const foodArray=foodlist.food_list;
  return (
    <div>
      <div className="food-display" id="food-display">
        <h2>Top Dishes Near you</h2>
        <div className="food-display-list">
             {
      
          foodArray.map((item,index)=>{
            if(category==='All' || category===item.category){
            return (
                <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                )
            }
            })
            }   
        </div>
      </div>
    </div>
  )
}

export default Fooddisplay