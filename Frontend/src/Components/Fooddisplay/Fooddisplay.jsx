import React, { useContext } from 'react'
import { storeContext } from '../../Context/Storecontext';
import Fooditem from '../Fooditem/Fooditem';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import './Fooddisplay.css'
const Fooddisplay = ({category}) => {
  const {food_list}=useContext(storeContext);
 
  return (
    <div>
      <div className="food-display" id="food-display">
        <h2>Top Dishes Near you</h2>
          <ScrollAnimation  animateIn="animate__fadeIn" animateOnce={true} delay={200}>
        <div className="food-display-list">
             {
      
          food_list.map((item,index)=>{
            if(category==='All' || category===item.category){
            return (
                <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                )
            }
            })
            }   
          
        </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Fooddisplay