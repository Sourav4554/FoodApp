import React from 'react'
import {menu_list} from '../../assets/assets'
import './Exploremenu.css'
const Exploremenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
     <h1>Explore Our Menu</h1>
     <p className='explore-menu-text'>Choose from a diverse menu featuring a delebrate aray of dishes Our mission is to satisfy your Cravings and elevate your dining experience,one delicious meal at a time</p>
     <div className="explore-menu-list">
     {
     menu_list.map((item,index)=>{
    return (
        <div key={index} className="explore-menu-list-item" onClick={()=>{setCategory(prev=>prev===item.menu_name?'All':item.menu_name)}}>
          <img src={item.menu_image} alt="" className={category===item.menu_name?'active':""}/>
          <p>{item.menu_name}</p>
        </div>
        )
    
    })
     }
     </div>
     <hr />
    </div>
  )
}

export default Exploremenu