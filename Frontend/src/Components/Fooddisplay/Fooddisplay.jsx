import React, { useContext } from 'react'
import { storeContext } from '../../Context/Storecontext';


const Fooddisplay = () => {
  const foodlist=useContext(storeContext);
    console.log(foodlist);
  return (
    <div>

    </div>
  )
}

export default Fooddisplay