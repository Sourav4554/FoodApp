import React from 'react'
import './Navbar.css'
import {icons} from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>FoodDrop</h1>
        <img src={icons.profileimage} alt="" />
    </div>
  )
}

export default Navbar